import express from 'express';
import bookingController from '../controllers/bookingController.js';

const router = express.Router();


router.get('/', bookingController.getAllBookings);
router.get('/new', bookingController.newBookingForm);
router.post('/', bookingController.createBooking);
router.get('/:id/edit', bookingController.editBookingForm);
router.post('/:id', bookingController.updateBooking);
router.post('/:id/cancel', bookingController.cancelBooking);
router.post('/:id/confirm', bookingController.confirmBooking);

export default router;
