import express from 'express';
import {
    createPoint,
    getPoints,
    getPointById,
    updatePoint,
    deletePoint
} from '../controllers/point.controller.js';
import authenticateJWT from '../middlewares/authenticateJWT.js';

const router = express.Router();

router.post('/', authenticateJWT, createPoint);
router.get('/', getPoints);
router.get('/:id', getPointById);
router.put('/:id', authenticateJWT, updatePoint);
router.delete('/:id', authenticateJWT, deletePoint);

export default router;
