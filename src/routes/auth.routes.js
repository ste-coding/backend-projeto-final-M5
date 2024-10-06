import express from 'express';
import { register, login, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/auth.controller.js';
import authenticateJWT from '../middlewares/authenticateJWT.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// ROTAS PROTEGIDAS (JWT token)
router.get('/users', authenticateJWT, getAllUsers);  // ADMIN ONLY
router.get('/users/:id', authenticateJWT, getUserById);  // Admin/User can access their own profile
router.put('/users/:id', authenticateJWT, updateUser);   // Admin/User can update their profile
router.delete('/users/:id', authenticateJWT, deleteUser); // Admin/User can delete their profile

export default router;
