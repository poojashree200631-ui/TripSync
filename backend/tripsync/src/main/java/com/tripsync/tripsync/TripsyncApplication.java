package com.tripsync.tripsync;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.tripsync")
public class TripsyncApplication {

	public static void main(String[] args) {
		SpringApplication.run(TripsyncApplication.class, args);
	}

}
