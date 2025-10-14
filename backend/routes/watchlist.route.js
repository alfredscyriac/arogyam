import express from 'express'; 
import { addToWatchlist, removeFromWatchlist, getWatchlist } from '../controllers/watchlist.controller.js'; 
import { verifyToken } from '../middleware/verifyToken.js'; 

const router = express.Router(); 

router.get('/', verifyToken, getWatchlist); 
router.post('/add', verifyToken, addToWatchlist); 
router.delete('/remove/:barcode', verifyToken, removeFromWatchlist); 

export default router; 