import mongoose from "mongoose";
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;
const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    role: {
      type: String,
      default: "Admin",
    },
    image: { type: ObjectId, ref: "Media" },
    website: {
      type: String,
    },
    resetCode: "",
    posts: [{ type: ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
