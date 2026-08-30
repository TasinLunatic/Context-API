import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/products.js";
import {mockProducts} from '../mockdata.js'

const productRouter = Router();

productRouter.post("/", createProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:productId", getProductById);
productRouter.put("/:productId", updateProduct);
productRouter.delete("/:productId", deleteProduct);

export default productRouter;