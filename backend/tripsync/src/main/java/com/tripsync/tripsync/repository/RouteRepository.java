package com.tripsync.tripsync.repository;

import com.tripsync.tripsync.entity.Route;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RouteRepository extends JpaRepository<Route, Long> {
}