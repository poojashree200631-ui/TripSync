TripSync – Travel Booking and Expense Management System

1. Introduction

TripSync is a web-based travel management application developed to make trip planning and management easier. It brings transport booking, hotel reservations, and trip expense management together in one application.

Users can search for journeys, select seats, enter passenger details, manage bookings, reserve hotel stays, and split trip expenses.

2. Objectives

- To provide a simple interface for searching travel options.
- To allow users to select seats and book tickets.
- To store booking information in a database.
- To prevent duplicate active seat bookings.
- To provide hotel reservation functionality.
- To record and split trip expenses.
- To help users view and manage their trips.

3. Technologies Used

- Frontend: HTML, CSS, JavaScript and Vite
- Backend: Java and Spring Boot
- Database: MySQL
- Development Tools: Visual Studio Code, Git and GitHub
- Browser: Web browser for running and testing the application

4. System Modules

4.1 Transport Booking

- Search for journeys using source, destination and travel date.
- Select transport type: Bus, Train or Flight.
- View available travel options.
- Select seats and enter passenger details.
- Save booking information.
- View and manage bookings.
- Change seats when available.

4.2 Hotel Stay Reservation

- View hotel options.
- Enter guest details.
- Select check-in and check-out dates.
- Enter the number of guests.
- Make a hotel reservation and view its confirmation.

4.3 Trip Expense Management

- Add trip expenses.
- Enter the expense amount and payer.
- Select equal or custom expense splitting.
- View saved expenses.
- View settlement information.

5. System Architecture

TripSync uses a frontend, backend and database architecture.

1. Frontend: Displays the application pages and collects user input.
2. Backend: Uses Java Spring Boot to process requests and manage application operations.
3. Database: MySQL stores booking and other application records.

The frontend communicates with the backend through API requests. The backend communicates with the MySQL database.

6. Database

The project uses a MySQL database named "tripsync".

The database stores application information such as transport bookings and occupied-seat records. Database constraints help prevent duplicate active seat bookings.

7. Testing

The following functions were tested during development:

- Transport search and seat selection.
- Passenger details and ticket booking.
- Booking confirmation and booking display.
- Seat changing and occupied-seat updates.
- Hotel reservation and confirmation.
- Adding equal-split expenses.
- Adding custom-split expenses.
- Viewing expenses and settlement information.

The tested booking, hotel and expense operations displayed their respective confirmation or saved-record results.

8. Limitations

- Transport search results, schedules and prices use demonstration data rather than live transport-provider inventory.
- Hotel reservations use the application's available hotel and room logic, not a live hotel marketplace.
- No real online payment gateway is integrated.
- The expense settlement feature skips some older or incomplete expense records.

9. Future Enhancements

- Integrate live transport-provider availability.
- Connect with real hotel booking services.
- Add secure online payment integration.
- Improve expense settlement and validation.
- Add user authentication and profile management.

10. Conclusion

TripSync is a functional travel management prototype that combines transport booking, hotel reservations and trip expense management in one application. It demonstrates the use of frontend technologies, Java Spring Boot and MySQL to develop an integrated web-based project.