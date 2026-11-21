package com.tripsync.tripsync.controller;

import com.tripsync.tripsync.entity.Route;
import com.tripsync.tripsync.service.RouteService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class RouteController {

    private final RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @GetMapping("/api/routes")
    public List<Route> getRoutes() {
        return routeService.getAllRoutes();
    }
}