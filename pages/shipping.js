import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/client";

const ShippingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.push("/login");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  return (
    <div style={{ textAlign: "center", paddingTop: "130px" }}>
      <div
        style={{
          backgroundColor: "darkred",
          width: "40%",
          margin: "0 auto",
          height: "200px",
          paddingTop: "70px",
          color: "aliceblue",
        }}
      >
        <h1>Orders Page</h1>
        <h3 style={{ color: "red" }}>Not finished</h3>
      </div>
    </div>
  );
};

export default ShippingPage;
