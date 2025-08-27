import express from 'express';
import { getProductInfo } from '../controllers/product.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/info/:barcode', verifyToken, getProductInfo);

export default router;