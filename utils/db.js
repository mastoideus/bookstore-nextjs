import mongoose from "mongoose";

const connection = {};

const connect = async () => {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }

  if (mongoose.connections > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log("use previous connection");
      return;
    }
    await mongoose.disconnect();
  }

  const db = await mongoose.connect(
    `mongodb+srv://${process.env.mongo_username}:${process.env.mongo_password}@${process.env.mongo_cluster}.d2mgr.mongodb.net/${process.env.mongo_database}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  console.log("new connection");
  connection.isConnected = db.connections[0].readyState;
};

const disconnect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === "production") {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log("not disconnected");
    }
  }
};

const convertDocToObj = (doc) => {
  if (doc._id !== undefined) {
    doc._id = doc._id.toString();
  }
  /*doc._id = doc._id.toString();*/
  /*doc.createdAt = doc.createdAt.toString();*/
  if (doc.updatedAt !== undefined) {
    doc.updatedAt = doc.updatedAt.toString();
  }
  /*doc.updatedAt = doc.updatedAt.toString();*/

  return doc;
};

const db = { connect, disconnect, convertDocToObj };
export default db;
