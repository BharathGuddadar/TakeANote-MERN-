import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import noteRoutes from './routes/noteRoutes.js'

// Load environment variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Take a Note!' });
});

// MongoDB connection with environment variable
const mongoURI = process.env.MONGODB_URI;

if (!mongoURI) {
    console.error('❌ Please define the MONGODB_URI in .env file');
    process.exit(1);
}

mongoose.connect(mongoURI, {
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use('/', noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});