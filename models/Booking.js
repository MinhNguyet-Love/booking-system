import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Confirmed', 'Cancelled'], 
        default: 'Pending' 
    }
});

// Make sure to export it as the default export
const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;  // Default export
