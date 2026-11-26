TripSync – Setup Guide

1. Requirements

Install the following software before running the project:

- Java Development Kit (JDK)
- MySQL Server
- Node.js and npm
- Visual Studio Code

2. Database Setup

1. Open MySQL Workbench or MySQL command line.
2. Create the database:

CREATE DATABASE tripsync;

3. Make sure MySQL Server is running.
4. Configure the database connection in the backend "application.properties" file.

3. Run the Backend

1. Open the TripSync project in VS Code.
2. Open the terminal.
3. Run:

cd C:\Users\user\TripSync\backend\tripsync
.\mvnw.cmd spring-boot:run

4. Wait until Spring Boot starts on port 8080.

4. Run the Frontend

1. Open a second terminal in VS Code.
2. Run:

cd C:\Users\user\TripSync\frontend
npm.cmd install
npm.cmd run dev

3. Open the local URL displayed by Vite in your browser. It is usually "http://localhost:5173/". If that port is busy, Vite may display another port.

5. Access the Application

Open the frontend URL shown in the terminal.

Make sure both the backend and frontend terminals remain running while using the application.

6. Important Notes

- MySQL must be running before starting the backend.
- Configure the correct database credentials for your computer.
- Do not share database passwords publicly.
- If port 5173 is busy, use the alternative URL displayed by Vite.