import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();
app.use(express.json()); // allow us to accept JSON data in the req.body

app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "please provide all the fields" });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (err) {
    console.error("Errro while creating product", err.message);
    res.status(500).json({ success: false, message: "server errr" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id: ", id);
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: `Product is deleted: ${id}` });
  } catch (error) {
    console.error("Error while deleting product", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

// app.get("/products", (req, res) => {
//   res.send("There is no product right now!");
// });

app.listen(3000, () => {
  connectDB();
  console.log("server listening at port http://localhost:3000 ");
});

// mongodb+srv://nksoftdev:<db_password>@cluster0.gvsfcxi.mongodb.net/?appName=Cluster0
