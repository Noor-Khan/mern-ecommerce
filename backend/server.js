import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {
  res.send("There is no product right now!");
});

app.listen(3000, () => {
  connectDB();
  console.log("server listening at port http://localhost:3000 ");
});

// mongodb+srv://nksoftdev:<db_password>@cluster0.gvsfcxi.mongodb.net/?appName=Cluster0
