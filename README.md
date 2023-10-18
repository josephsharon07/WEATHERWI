# IoT Weather and Environment Monitoring System

This project aims to develop a comprehensive IoT-based system to monitor weather conditions, light intensity, and air quality in a given area. The collected data will be accessible through both a web application and an Android application, providing users with real-time information about their surroundings.

## Key Components:

Microcontroller: ESP32
Temperature and Humidity Sensor: DHT11
Light Intensity Sensor: LM393
Air Quality Sensor: MQ-135
Data Storage: Cloud storage (undecided)
Web Application: Django
Android Application: Android Studio
System Overview

## The system will work as follows:

The microcontroller will read data from the various sensors.
The collected data will be transmitted to the cloud storage via the ESP32's Wi-Fi connectivity.
The web application and Android application will retrieve the data from the cloud storage and display it to the users in a user-friendly format.

## Usage

To use the system, users will need to create an account on the web application or Android application. Once logged in, users will be able to view the real-time data from the sensors in their area. The data will be displayed in various formats, such as charts, graphs, and tables. Users can also set alerts for specific weather conditions or air quality levels.

## Circuit:

<img src='https://github.com/josephsharon07/CAD_Phase1/blob/main/Circuit.png?raw=true'><img>
