import express, { json } from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";
import User from "./model/user.js";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
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
    const newUser=new User(user)
    await newUser.save();
    return res.status(200).json({ msg: "Sign up Succesfull" });
  } catch (error) {
    return res.status(500).json({ msg: "Error while sign up the user" });
  }
});

app.listen(PORT, () => {
  console.log("Server is Running on Port " + PORT);
});
