import express from 'express';
import {
    addFavorite,
    getFavorites,
    getFavoriteById,
    updateFavorite,
    deleteFavorite
} from '../controllers/favorite.controller.js';

const router = express.Router();

router.post('/', addFavorite);
router.get('/', getFavorites);
router.get('/:id', getFavoriteById);
router.put('/:id', updateFavorite);
router.delete('/:id', deleteFavorite);

export default router;
