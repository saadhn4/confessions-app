import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../../models/Users/Users.js";
import bcrypt from "bcryptjs";
import config from "config";
import sendEmail from "../../utils/sendEmail.js";

const router = express.Router();
const URL = config.get("URL");
const JWT_SECRET = config.get("JWT_SECRET");

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    //check for existing user

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists.." });
    }

    //hashing password

    const hashedPassword = await bcrypt.hash(password, 10);

    //generating email token

    const emailToken = Math.random().toString(36).substring(2);

    //passing user as new object

    const newUser = {
      username,
      email,
      password: hashedPassword,
      userVerifyToken: {
        email: emailToken,
      },
    };

    await userModel.create(newUser);

    //sending email

    await sendEmail({
      to: email,
      subject: "Email verification link",
      html: `<p>Verify your email using the link below:</p>
      <a href= "${URL}/api/public/verifyemail/${emailToken}">Click on me</a>`,
    });

    console.log(`${URL}/api/public/verifyemail/${emailToken}`);

    res
      .status(201)
      .json({ message: "User registered, please verify your email!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get("/verifyemail/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const user = await userModel.findOne({
      "userVerifyToken.email": token,
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    user.userVerify.email = true;
    user.userVerifyToken.email = null;

    await user.save();

    res.status(200).json({ message: "Email verified!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (!user.userVerify.email) {
      return res.status(401).json({ message: "User has not verified email" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "10d" });

    res.status(200).json({ message: "Logged in succesfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
