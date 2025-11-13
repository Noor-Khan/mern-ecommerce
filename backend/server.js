import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json()); // allow us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

app.listen(3000, () => {
  connectDB();
  console.log("server listening at port http://localhost:3000 ");
});

// mongodb+srv://nksoftdev:<db_password>@cluster0.gvsfcxi.mongodb.net/?appName=Cluster0
