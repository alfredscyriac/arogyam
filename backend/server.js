import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import cookieParser from 'cookie-parser';

import { connectDB } from './db/connectDB.js';

import authRoutes from './routes/auth.route.js';
import dashboardRoutes from './routes/dashboard.route.js'; 
import productRoutes from './routes/product.route.js';
import aiRoutes from './routes/ai.route.js';
import watchlistRoutes from './routes/watchlist.route.js'; 

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3001;

app.use(cors({origin: "http://localhost:5173", credentials: true}));

app.use(express.json());
app.use(cookieParser());

// Add a root route handler
app.get('/', (req, res) => {
    res.json({ message: "Arogyam API is running!" });
});

app.use("/api/auth", authRoutes)
app.use("/api/dashboard", dashboardRoutes)
app.use("/api/products", productRoutes)
app.use("/api/ai", aiRoutes)
app.use("/api/watchlist", watchlistRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port: ", PORT)
})
