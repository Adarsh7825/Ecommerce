import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8181;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Connect to database
connectDB();

// Routes
app.use('/api/v1/auth', authRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Your Ecommerce Website</h1>');
});

// Start the server
app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgMagenta
            .white
    );
});
