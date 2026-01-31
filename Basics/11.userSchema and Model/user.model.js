import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    age: {
      type: Number,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    username: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;

//Example document in MongoDB

// {
//   "name": "Pranav",
//   "age": 21,
//   "email": "pranav@gmail.com",
//   "username": "pranav1504",
//   "createdAt": "2026-01-31",
//   "updatedAt": "2026-01-31"
// }
