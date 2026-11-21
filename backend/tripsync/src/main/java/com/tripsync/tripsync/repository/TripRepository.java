package com.tripsync.tripsync.repository;

import com.tripsync.tripsync.entity.Trip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TripRepository extends JpaRepository<Trip, Long> {

    Optional<Trip> findByFromLocationAndToLocationAndTravelDateAndTransport(
            String fromLocation,
            String toLocation,
            String travelDate,
            String transport
    );
}