import express from 'express'; 
import { analyzeSafety } from '../controllers/ai.controller';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router(); 

router.post('/analyze-safety', verifyToken, analyzeSafety); 

export default router; 