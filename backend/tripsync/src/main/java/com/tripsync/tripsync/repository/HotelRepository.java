package com.tripsync.tripsync.repository;

import com.tripsync.tripsync.entity.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {

    List<Hotel> findByCityIgnoreCaseAndActiveTrue(String city);

    List<Hotel> findByActiveTrue();
}