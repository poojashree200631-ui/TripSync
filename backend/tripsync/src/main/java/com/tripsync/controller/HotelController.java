package com.tripsync.controller;

import com.tripsync.tripsync.entity.Hotel;
import com.tripsync.tripsync.repository.HotelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
@CrossOrigin(origins = "*")
public class HotelController {

    @Autowired
    private HotelRepository hotelRepository;

    @GetMapping
    public List<Hotel> getAllHotels() {
        return hotelRepository.findByActiveTrue();
    }

    @GetMapping("/city/{city}")
    public List<Hotel> getHotelsByCity(@PathVariable String city) {
        return hotelRepository.findByCityIgnoreCaseAndActiveTrue(city);
    }

    @PostMapping
    public Hotel addHotel(@RequestBody Hotel hotel) {
        hotel.setActive(true);
        return hotelRepository.save(hotel);
    }

    @GetMapping("/{id}")
    public Hotel getHotelById(@PathVariable Long id) {
        return hotelRepository.findById(id).orElse(null);
    }
}