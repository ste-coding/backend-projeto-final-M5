import express from 'express';
import {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent
} from '../controllers/event.controller.js';
import authenticateJWT from '../middlewares/authenticateJWT.js';


const router = express.Router();

router.post('/', authenticateJWT, createEvent);
router.get('/', getEvents);
router.get('/:id', getEventById);
router.put('/:id', authenticateJWT, updateEvent);
router.delete('/:id', authenticateJWT, deleteEvent);

export default router;
