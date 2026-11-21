package com.tripsync.tripsync.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Route {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String source;
    private String destination;
    private String transportType;

    public Route() {
    }

    public Route(String source, String destination, String transportType) {
        this.source = source;
        this.destination = destination;
        this.transportType = transportType;
    }

    public Long getId() {
        return id;
    }

    public String getSource() {
        return source;
    }

    public String getDestination() {
        return destination;
    }

    public String getTransportType() {
        return transportType;
    }
}