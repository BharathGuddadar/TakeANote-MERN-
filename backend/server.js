import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import noteRoutes from './routes/noteRoutes.js'
const app = express();
app.use(cors());
app.use(express.json());


// API Route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Take a Note!' });
  });

mongoose.connect("mongodb+srv://bharathps821:UDGsqsvsmoYFvU9J@cluster0.awedgya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.use('/', noteRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
