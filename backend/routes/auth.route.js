import express from 'express';
import { signup, signin, logout, verifyEmail, forgotPassword } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);

router.post('/verifyemail', verifyEmail); 
router.post('/forgotpassword', forgotPassword); 

export default router;
