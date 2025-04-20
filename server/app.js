import express from "express";
import config from "config";
import "./utils/dbConnect.js";
import confessionsRouter from "./controllers/confessions/index.js";
import publicRouter from "./controllers/public/index.js";

const app = express();
const PORT = config.get("PORT");

app.use(express.json());

app.get("/saad", (req, res) => {
  res.status(200).json({ message: "Hello Saad!" });
});

app.use("/api/public", publicRouter);
app.use("/api/confessions", confessionsRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
