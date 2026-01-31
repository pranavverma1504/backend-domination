import mongoose from "mongoose";

const DB_URL = "mongodb://127.0.0.1:27017/testdb"; // URL in variable

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("MongoDB Connection Failed ❌");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
