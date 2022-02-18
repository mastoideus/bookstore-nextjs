import React, { useState, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
import classes from "./LoginForm.module.css";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loginMode, setLoginMode] = useState(false);
  const [resMessage, setResMessage] = useState("");
  const [loginError, setLoginError] = useState(null);

  const router = useRouter();

  /*form Notification handle */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setResMessage(null);
      setLoginError(null);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [resMessage, loginError]);

  /*submiting for signup or login */
  const submitLoginHandler = async (e) => {
    e.preventDefault();

    const loginData = {
      email: email,
      password: password,
      username: username,
    };

    if (!loginMode) {
      try {
        const response = await fetch("/api/users/signup", {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setResMessage(data);
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      const result = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
      });
      setLoginError(result);
      if (result.error === null) {
        router.push("/");
      }

      console.log(result);
    }
  };

  const loginModeHandler = () => {
    setLoginMode((prevState) => !prevState);
  };

  return (
    <div style={{ paddingTop: "150px" }}>
      {(resMessage || loginError?.error) && (
        <h1
          style={{
            backgroundColor: resMessage ? resMessage.color : "red",
          }}
          className={classes.resMessage}
        >
          {resMessage ? resMessage.message : loginError?.error}
        </h1>
      )}
      <form className={classes.loginForm} onSubmit={submitLoginHandler}>
        <h2>{loginMode ? "Login" : "Register"}</h2>
        {!loginMode && (
          <div className={classes.control}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <CustomButton btnClass={classes.loginBtn} type="submit">
          {loginMode ? "Login" : "Register"}
        </CustomButton>
        <div className={classes.register}>
          <p>
            {loginMode ? "Dont have an account?" : "Already having an account!"}
          </p>

          <button
            className={classes.regWord}
            onClick={loginModeHandler}
            type="button"
          >
            {loginMode ? "Register" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
