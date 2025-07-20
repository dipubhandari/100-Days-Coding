import mongoose from "mongoose";

const dbConnect = async (DATABASE_URL) => {
  console.log("this workds");
  try {
    const DB_OPTIONS = {
      dbName: "100days",
    };
    mongoose.set("strictQuery", true);
    const connection = await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    if (connection) {
      console.log(`Database connected: ${mongoose.connection.name}`);
    } else {
      console.log("Not connected");
    }
  } catch (error) {
    console.log("this is inside error section");
    console.log(error);
  }
};

export default dbConnect;
