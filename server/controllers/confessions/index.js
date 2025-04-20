import express from "express";

const router = express.Router();

router.get("/getall", (req, res) => {
  try {
    res.status(200).json({ message: "Get all confessions" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get("/get/:id", (req, res) => {
  try {
    res.status(200).json({ message: "Get specific confession" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.post("/create", (req, res) => {
  try {
    res.status(200).json({ message: "confession created!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.put("/update/:id", (req, res) => {
  try {
    res.status(200).json({ message: "Update specific confession" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.delete("/delete/:id", (req, res) => {
  try {
    res.status(200).json({ message: "Delete specific confession" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.delete("/deleteall", (req, res) => {
  try {
    res.status(200).json({ message: "Delete all confessions" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
