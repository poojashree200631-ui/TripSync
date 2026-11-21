package com.tripsync.tripsync.repository;

import com.tripsync.tripsync.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

    boolean existsByFromLocationAndToLocationAndTransportAndTravelDateAndSeatNumberAndStatus(
            String fromLocation,
            String toLocation,
            String transport,
            String travelDate,
            String seatNumber,
            String status
    );

    java.util.List<Booking> findByFromLocationAndToLocationAndTransportAndTravelDateAndStatus(
        String fromLocation,
        String toLocation,
        String transport,
        String travelDate,
        String status
);
}