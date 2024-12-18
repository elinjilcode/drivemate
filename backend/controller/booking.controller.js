const Booking = require('../model/booking.model'); // Import the Booking model

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const bookingData = req.body; // Extract booking data from the request body

    // Create the booking
    const newBooking = await Booking.create(bookingData);

    // Send response with the newly created booking
    res.status(200).json(newBooking);
  } catch (error) {
    // Handle any errors that occur during the booking creation process
    res.status(500).json({ message: error.message });
  }
};

// Delete a booking by ID
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params; // Extract the booking ID from the route parameters

    // Find and delete the booking by its ID
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Send a success response
    res.status(200).json({ message: "Booking deleted successfully", deletedBooking });
  } catch (error) {
    // Handle any errors during the delete process
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBooking,
  deleteBooking,
};
