import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profileImage: {
    url: String,
    public_id: String,
  },
});

export default mongoose.model("User", userSchema);
