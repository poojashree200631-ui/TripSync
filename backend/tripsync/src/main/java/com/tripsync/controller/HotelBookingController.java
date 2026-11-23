package com.tripsync.controller;

import com.tripsync.tripsync.entity.HotelBooking;
import com.tripsync.tripsync.entity.Room;
import com.tripsync.tripsync.repository.HotelBookingRepository;
import com.tripsync.tripsync.repository.RoomRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/hotel-bookings")
@CrossOrigin(origins = "*")
public class HotelBookingController {

    @Autowired
    private HotelBookingRepository hotelBookingRepository;

    @Autowired
    private RoomRepository roomRepository;

    @PostMapping
    @Transactional
    public ResponseEntity<?> createBooking(@RequestBody HotelBooking booking) {

        if (booking.getGuestName() == null || booking.getGuestName().isBlank()) {
            return ResponseEntity.badRequest().body("Guest name is required.");
        }

        if (booking.getCheckInDate() == null ||
                booking.getCheckOutDate() == null ||
                !booking.getCheckOutDate().isAfter(booking.getCheckInDate()) ||
                booking.getCheckInDate().isBefore(LocalDate.now())) {
            return ResponseEntity.badRequest().body("Please enter valid future check-in and check-out dates.");
        }

        if (booking.getGuestCount() <= 0) {
            return ResponseEntity.badRequest().body("Guest count must be at least 1.");
        }

        if (booking.getRoom() == null || booking.getRoom().getId() == null) {
            return ResponseEntity.badRequest().body("Please select a room.");
        }

        Optional<Room> optionalRoom =
                roomRepository.findById(booking.getRoom().getId());

        if (optionalRoom.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Room not found.");
        }

        Room room = optionalRoom.get();

        if (booking.getGuestCount() > room.getCapacity()) {
            return ResponseEntity.badRequest().body("Guest count exceeds room capacity.");
        }

        if (room.getTotalRooms() <= 0) {
            return ResponseEntity.badRequest().body("No rooms are available.");
        }

        List<HotelBooking> overlappingBookings =
                hotelBookingRepository
                .findByRoomIdAndStatusAndCheckInDateLessThanAndCheckOutDateGreaterThan(
                        room.getId(),
                        "Confirmed",
                        booking.getCheckOutDate(),
                        booking.getCheckInDate()
                );

        if (overlappingBookings.size() >= room.getTotalRooms()) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body("No rooms are available for the selected dates.");
        }

        long nights = ChronoUnit.DAYS.between(
                booking.getCheckInDate(),
                booking.getCheckOutDate()
        );

        booking.setHotel(room.getHotel());
        booking.setRoom(room);
        booking.setTotalPrice(nights * room.getPricePerNight());
        booking.setStatus("Confirmed");

        return ResponseEntity.ok(hotelBookingRepository.save(booking));
    }

    @GetMapping
    public List<HotelBooking> getAllBookings() {
        return hotelBookingRepository.findAll();
    }

    @GetMapping("/guest/{guestName}")
    public List<HotelBooking> getBookingsByGuest(@PathVariable String guestName) {
        return hotelBookingRepository.findByGuestNameIgnoreCase(guestName);
    }

    @PutMapping("/{id}/cancel")
    public ResponseEntity<?> cancelBooking(@PathVariable Long id) {

        Optional<HotelBooking> optionalBooking =
                hotelBookingRepository.findById(id);

        if (optionalBooking.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Hotel booking not found.");
        }

        HotelBooking booking = optionalBooking.get();

        if (!"Confirmed".equalsIgnoreCase(booking.getStatus())) {
            return ResponseEntity.badRequest()
                    .body("Only confirmed bookings can be cancelled.");
        }

        booking.setStatus("Cancelled");
        hotelBookingRepository.save(booking);

        return ResponseEntity.ok("Hotel booking cancelled successfully.");
    }
}