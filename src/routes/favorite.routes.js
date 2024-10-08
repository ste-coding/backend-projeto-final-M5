import express from "express";
import {
  addFavorite,
  getFavorites,
  getFavoriteById,
  updateFavorite,
  deleteFavorite,
} from "../controllers/favorite.controller.js";
import authenticateJWT from "../middlewares/authenticate.JWT.js";

const router = express.Router();

router.post("/", authenticateJWT, addFavorite);
router.get("/", authenticateJWT, getFavorites);
router.get("/:id", authenticateJWT, getFavoriteById);
router.put("/:id", authenticateJWT, updateFavorite);
router.delete("/:id", authenticateJWT, deleteFavorite);

export default router;
