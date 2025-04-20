import express from "express";
import confessionModel from "../../models/Confessions/Confessions.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    let userData = req.body;
    await confessionModel.create(userData);
    res.status(200).json({ message: "confession created 📖" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get("/get/:id", async (req, res) => {
  try {
    let userParams = req.params.id;
    let confession = await confessionModel.findOne({ _id: userParams });
    res.status(200).json(confession);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get("/getall", async (req, res) => {
  try {
    let confessions = await confessionModel.find({});
    res.status(200).json(confessions);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.put("/update/:id", async (req, res) => {
  try {
    let userParams = req.params.id;
    let userData = req.body;
    await confessionModel.updateOne({ _id: userParams }, { $set: userData });
    res.status(200).json({ message: "confession updated." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    let userParams = req.params.id;
    await confessionModel.deleteOne({ _id: userParams });
    res.status(200).json({ message: "confession deleted." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.delete("/deleteall", async (req, res) => {
  try {
    await confessionModel.deleteMany({});
    res.status(200).json({ message: "All confessions deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
