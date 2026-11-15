import { Router } from "express";
import {
  auth,
  login,
  logout,
  register,
} from "./controllers/user-controller.js";
import { authMiddleware } from "./middlewares/auth.js";
import {
  deleteProduct,
  getProducts,
} from "./controllers/product-controller.js";
import { getCartItems } from "./controllers/cartItem-controller.js";

export const router = Router();

// Rotas de Usuário
router.post("/login", login);
router.post("/register", register);
router.get("/me", authMiddleware, auth);
router.post("/logout", authMiddleware, logout);

// Rotas de Produtos

router.get("/get-products", getProducts);
router.delete("/delete-product/:id", authMiddleware, deleteProduct);

// Cart
router.get("/get-cart-items", authMiddleware, getCartItems);
