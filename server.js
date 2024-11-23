// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import bookingRoutes from './routes/bookingRoutes.js'; // Correct import syntax

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Thư mục chứa views
app.set('view engine', 'ejs');
app.set('views', './views');

// Sử dụng các routes
app.use('/bookings', bookingRoutes);

// Kết nối tới MongoDB
mongoose.connect('mongodb+srv://nguyet100147:EaDQnkazCSzD1Ci6@qldc.zifaq.mongodb.net/booking', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Khởi động server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
