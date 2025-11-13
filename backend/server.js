import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json()); // allow us to accept JSON data in the req.body

const PORT = process.env.PORT || 3000;

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`server listening at port http://localhost:${PORT}`);
});

// mongodb+srv://nksoftdev:<db_password>@cluster0.gvsfcxi.mongodb.net/?appName=Cluster0
