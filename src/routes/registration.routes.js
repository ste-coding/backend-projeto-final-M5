import express from 'express';
import {
    createRegistration,
    getRegistrations,
    getRegistrationById,
    updateRegistration,
    deleteRegistration
} from '../controllers/registration.controller.js';
import authenticateJWT from '../middlewares/authenticateJWT.js';


const router = express.Router();

router.post('/', authenticateJWT, createRegistration);
router.get('/', authenticateJWT, getRegistrations);
router.get('/:id', authenticateJWT, getRegistrationById);
router.put('/:id', authenticateJWT, updateRegistration);
router.delete('/:id', authenticateJWT, deleteRegistration);

export default router;
