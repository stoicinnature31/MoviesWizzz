import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
//Connect to DB
connectDB();

app.get('/', (req, res) => {
    res.send('server is running...');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
