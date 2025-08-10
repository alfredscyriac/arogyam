import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js'

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Add a root route handler
app.get('/', (req, res) => {
    res.json({ message: "Arogyam API is running!" });
});

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port: ", PORT)
})
