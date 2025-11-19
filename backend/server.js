import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(express.json()); // allow us to accept JSON data in the req.body

const PORT = process.env.PORT || 3000;

app.use("/api/products", productRoutes);

const __directoryname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__directoryname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__directoryname, "frontend", "dist", "index.html")
    );
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`server listening at port http://localhost:${PORT}`);
});

// mongodb+srv://nksoftdev:<db_password>@cluster0.gvsfcxi.mongodb.net/?appName=Cluster0
