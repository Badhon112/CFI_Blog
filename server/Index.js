import express, { json } from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import User from "./model/user.js";
import Token from "./model/token.js";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const access_key = process.env.Access_Secreet_key;
const refreshToken = process.env.Refresh_Secreet_Key;
const app = express();
const PORT = 8000;
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(cors());

Connection(username, password);

app.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    };
    const newUser = new User(user);
    await newUser.save();
    return res.status(200).json({ msg: "Sign up Succesfull" });
  } catch (error) {
    return res.status(500).json({ msg: "Error while sign up the user" });
  }
});

app.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({ msg: "Username dosen,t exist" });
  }
  try {
    let match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(user.toJSON(), access_key, {
        expiresIn: "15m",
      });
      const refreshToken = jwt.sign(user.toJSON(), refreshToken, {
        expiresIn: "15m",
      });
      const newToken = new Token({ token: refreshToken });
      await newToken.save();
      return res
        .status(200)
        .json({ accessToken: accessToken, refreshToken: refreshToken ,name:user.name,email:user.email});
    } else {
      return res.status(400).json({ msg: "Password dosn,t match" });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Error while login " });
  }
});

app.listen(PORT, () => {
  console.log("Server is Running on Port " + PORT);
});
