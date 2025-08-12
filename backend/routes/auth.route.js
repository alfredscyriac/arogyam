import express from 'express';
import { signup, signin, logout, verifyEmail, forgotPassword, resetPassword, checkAuth } from '../controllers/auth.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/checkauth', verifyToken, checkAuth); 

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);

router.post('/verifyemail', verifyEmail); 
router.post('/forgotpassword', forgotPassword); 
router.post('/resetpassword/:token', resetPassword); 

export default router;
