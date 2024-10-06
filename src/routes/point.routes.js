import express from 'express';
import {
    createPoint,
    getPoints,
    getPointById,
    updatePoint,
    deletePoint
} from '../controllers/point.controller.js';

const router = express.Router();

router.post('/', createPoint);
router.get('/', getPoints);
router.get('/:id', getPointById);
router.put('/:id', updatePoint);
router.delete('/:id', deletePoint);

export default router;
