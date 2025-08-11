import express from 'express';
import { signup, signin, logout, verifyEmail } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);

router.post('/verifyemail', verifyEmail); 

export default router;
