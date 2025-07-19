import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
});

const userModel = mongoose.model("employer", userSchema);

export default userModel;
