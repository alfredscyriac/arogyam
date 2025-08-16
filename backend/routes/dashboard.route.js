import express from 'express';
import { getAvoidanceList, addIngredient, removeIngredient } from '../controllers/dashboard.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/avoidances', verifyToken, getAvoidanceList); 
router.post('/avoidances/add', verifyToken, addIngredient); 
router.delete('/avoidances/remove', verifyToken, removeIngredient); 

export default router; 