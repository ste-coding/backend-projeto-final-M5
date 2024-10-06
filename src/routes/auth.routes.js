import express from 'express';
import { register, login, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/auth.controller.js';
import authenticateJWT from '../middlewares/authenticateJWT.js';

const router = express.Router();

router.post('/register', register); // ROUTE TESTED
router.post('/login', login); // ROUTE TESTED

// PROTECTED ROUTES (JWT token)
router.get('/users', authenticateJWT, getAllUsers);  // ADMIN ONLY, ROUTE TESTED
router.get('/users/:id', authenticateJWT, getUserById);  // ROUTE TESTED
router.put('/users/:id', authenticateJWT, updateUser);   // ROUTE TESTED
router.delete('/users/:id', authenticateJWT, deleteUser); // ROUTE TESTED

export default router;
