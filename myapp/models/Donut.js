import mongoose from "mongoose";

const { Schema } = mongoose;

const donutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Donut || mongoose.model("Donut", donutSchema);