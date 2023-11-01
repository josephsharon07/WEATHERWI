# WEATHERWI IoT Weather and Environment Monitoring System - Final Project Document

## Project Overview

The **WEATHERWI IoT Weather and Environment Monitoring System** is a comprehensive and fully implemented project that leverages IoT technology to collect and display real-time data related to weather conditions, light intensity, air quality, and climate. The project offers a user-friendly web application and an Android application, providing users with valuable insights into their local environment. This final project document highlights the key components, implementation details, and the overall achievement of the WEATHERWI project.

## Key Components

### Microcontroller

The heart of the system is the microcontroller, which plays a pivotal role in collecting data from various sensors. The **ESP32** microcontroller was chosen for its network capabilities, making it suitable for IoT applications.

### Sensors

1. **Temperature and Humidity Sensor (DHT22):** The DHT22 sensor measures both temperature and humidity in the atmosphere, providing accurate and real-time data.
2. **Light Intensity Sensor (LDR):** The LDR sensor calculates light intensity, allowing users to determine whether the area is cloudy or sunny.
3. **Air Quality Sensor (MQ-135):** The MQ-135 sensor monitors the air quality, detecting the presence of harmful pollutants.

### Data Storage

Data collected from the sensors is securely stored in **GitHub**, which provides a robust API for data storage and retrieval. Data is timestamped for visualization, processing, and analysis based on date and time.

### Web Application

The web application serves as the user interface, providing real-time and historical data visualization. It is designed as a static site and utilizes the **Chart.js** JavaScript library for efficient data processing.

### Android Application

An Android application has been developed for Android users, offering convenient access to real-time environmental data.

## Implementation Details

### Sensor Setup

The sensors, including the DHT22, LDR, and MQ-135, are connected to the ESP32 microcontroller as follows:

- **DHT22 Sensor:** Connected to the D0 pin of the ESP32 for measuring temperature and humidity, with connections to the ground and 3V output.
- **LDR Sensor:** Connected to the D3 pin and GND for detecting light levels.
- **MQ-135 Sensor:** Connected to the D4 pin of the ESP32 for monitoring air quality, with connections to the ground and 3V output.

### Programming of Microcontroller

MicroPython has been used to program the ESP32 microcontroller, simplifying the task of programming and making it suitable for the specific project needs.

### Simulation

During the project development, a simulation of the microcontroller was conducted using **Wokwi**. Wokwi proved to be a valuable tool for simulating the project, especially for custom chip models like the MQ-135 sensor.

## Achievements

The WEATHERWI IoT Weather and Environment Monitoring System is a successful and fully implemented project that achieves its main objectives:

- **Real-time Data:** The system provides real-time information on temperature, humidity, light intensity, air quality, and climate conditions.
- **User Accessibility:** Both web and Android applications offer user-friendly interfaces for accessing environmental data.
- **Secure Data Storage:** Data is securely stored in GitHub, with timestamping for research and analysis purposes.
- **Efficient Data Processing:** The web application utilizes Chart.js for efficient data visualization without the need for a dedicated server.

## Conclusion

The WEATHERWI project demonstrates the potential of IoT technology in environmental monitoring. It provides a valuable tool for individuals and communities seeking to make informed decisions based on local weather and environmental conditions. The use of open-source technologies and the integration of IoT components make this system a relevant and practical application.

The project has successfully transitioned from the planning and design phase to a fully implemented and functional system. As technology continues to advance, ongoing development and user engagement will help refine and enhance the system, ensuring accurate and reliable data for users.

We are proud of the accomplishments of the WEATHERWI IoT Weather and Environment Monitoring System and look forward to its continued success in providing essential environmental information to users.

![WEATHERWI IoT Weather and Environment Monitoring System](project_image.jpg)

Thank you for your attention and support throughout this project journey.
