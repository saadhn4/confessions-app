import mongoose from "mongoose";

const confessionSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const confessionModel = mongoose.model(
  "confessions",
  confessionSchema,
  "confessions"
);

export default confessionModel;
