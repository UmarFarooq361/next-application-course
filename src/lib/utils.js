// import mongoose from "mongoose";

// let isConnected;

// export const connectToDb = async () => {
//     if (isConnected) {
//         console.log("Using existing database connection");
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGO);
//         isConnected = true;
//         console.log("Connected to database");
//     } catch (error) {
//         handleError(error);
//     }
// }
import mongoose from "mongoose"

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};