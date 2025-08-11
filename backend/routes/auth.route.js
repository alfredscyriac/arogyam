import express from 'express';
import { signup, signin, logout, verifyEmail, forgotPassword, resetPassword } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);

router.post('/verifyemail', verifyEmail); 
router.post('/forgotpassword', forgotPassword); 
router.post('/resetpassword/:token', resetPassword); 

export default router;
