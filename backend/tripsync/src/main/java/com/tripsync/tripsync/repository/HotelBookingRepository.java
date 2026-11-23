package com.tripsync.tripsync.repository;

import com.tripsync.tripsync.entity.HotelBooking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface HotelBookingRepository extends JpaRepository<HotelBooking, Long> {

    List<HotelBooking> findByRoomIdAndStatusAndCheckInDateLessThanAndCheckOutDateGreaterThan(
            Long roomId,
            String status,
            LocalDate checkOutDate,
            LocalDate checkInDate
    );

    List<HotelBooking> findByGuestNameIgnoreCase(String guestName);
}