import express from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProdct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.put("/:id", createProduct);

router.post("/", updateProdct);

router.delete("/:id", deleteProduct);

export default router;
