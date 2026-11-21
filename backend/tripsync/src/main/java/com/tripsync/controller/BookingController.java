package com.tripsync.controller;

import com.tripsync.tripsync.entity.Booking;
import com.tripsync.tripsync.entity.Trip;
import com.tripsync.tripsync.repository.BookingRepository;
import com.tripsync.tripsync.repository.TripRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "*")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private TripRepository tripRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<?> createBooking(@RequestBody Booking booking) {

        boolean alreadyBooked =
                bookingRepository
                .existsByFromLocationAndToLocationAndTransportAndTravelDateAndSeatNumberAndStatus(
                        booking.getFromLocation(),
                        booking.getToLocation(),
                        booking.getTransport(),
                        booking.getTravelDate(),
                        booking.getSeatNumber(),
                        "Confirmed"
                );

        if (alreadyBooked) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT)
                    .body("This seat is already booked for this journey.");
        }

        booking.setStatus("Confirmed");

        Booking savedBooking = bookingRepository.save(booking);

        Trip trip = tripRepository
                .findByFromLocationAndToLocationAndTravelDateAndTransport(
                        savedBooking.getFromLocation(),
                        savedBooking.getToLocation(),
                        savedBooking.getTravelDate(),
                        savedBooking.getTransport()
                )
                .orElse(null);

        if (trip == null) {
            trip = new Trip();
            trip.setFromLocation(savedBooking.getFromLocation());
            trip.setToLocation(savedBooking.getToLocation());
            trip.setTravelDate(savedBooking.getTravelDate());
            trip.setTransport(savedBooking.getTransport());

            trip = tripRepository.save(trip);
        }

        trip.getBookings().add(savedBooking);
        tripRepository.save(trip);

        return ResponseEntity.ok(savedBooking);
    }

    @GetMapping
    public java.util.List<Booking> getBookings() {
        return bookingRepository.findAll();
    }

    @PutMapping("/{id}/cancel")
    public String cancelBooking(@PathVariable Long id) {

        java.util.Optional<Booking> optionalBooking =
                bookingRepository.findById(id);

        if (optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();

            booking.setStatus("Cancelled");
            bookingRepository.save(booking);

            return "Booking cancelled successfully!";
        }

        return "Booking not found!";
    }
}