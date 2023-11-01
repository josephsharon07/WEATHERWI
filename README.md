![WEATHERWI IoT Weather and Environment Monitoring System](/docs/assets/img/logo-side-dark.png)

# IoT Weather and Environment Monitoring System - Website README

This README file provides detailed information on how to navigate the WEATHERWI IoT Weather and Environment Monitoring System website, update its content, and manage dependencies.

## Table of Contents

1. [Website Navigation](#1-website-navigation)
2. [Updating Content](#2-updating-content)
3. [Dependencies](#3-dependencies)

## 1. Website Navigation

The WEATHERWI IoT Weather and Environment Monitoring System website offers a user-friendly interface for accessing real-time and historical environmental data. Here's how to navigate the website:

### Home Page

- Upon visiting the website, you will land on the Home page.
- The Home page provides an overview of the system and displays real-time environmental data, including temperature, humidity, light intensity, air quality, and climate conditions.
- The navigation menu at the top of the page allows you to access other sections of the website.

### Real-time Data

- Click on the "Real-time Data" link in the navigation menu to view the current environmental conditions in detail.
- This section offers real-time data visualization using Chart.js, allowing you to monitor changes in temperature, humidity, light intensity, and air quality.

### Historical Data

- Access the "Historical Data" section from the navigation menu to explore historical data.
- This section provides a time-series graph of historical environmental data, enabling trend analysis over time.

### User Manual

- To access the user manual for guidance on using the system, click on the "User Manual" link in the navigation menu.

## 2. Updating Content

The content on the WEATHERWI website is divided into two main sections: real-time data and historical data. To update the content, follow the guidelines below:

### Real-time Data Updates

To update the real-time data displayed on the website:

1. The real-time data is automatically collected from the sensors connected to the ESP32 microcontroller.
2. To modify the data presentation or style, you can edit the JavaScript code in the web application. The web application code is typically found in the "js" or "scripts" folder within the project's directory.

### Historical Data Updates

Updating historical data requires a more involved process, as it involves managing data stored in GitHub. Follow these steps:

1. Access the GitHub repository where the data is stored.
2. Add or update data entries in the repository. Make sure each entry includes a timestamp to maintain data organization.
3. The website retrieves historical data from the GitHub repository using API requests. Ensure that the data is consistently organized in the repository.

## 3. Dependencies

The WEATHERWI website relies on several dependencies and technologies:

1. **GitHub:** Data storage solution for historical data. Data is retrieved using the GitHub API.

2. **Chart.js:** JavaScript library used for data visualization on the website.

3. **Web Server:** The website is hosted on a web server to make it accessible to users. The web server setup and maintenance are critical dependencies.

4. **ESP32 Microcontroller:** The microcontroller is responsible for collecting real-time data from the connected sensors. Ensure that the microcontroller is functioning correctly.

## Conclusion

The WEATHERWI IoT Weather and Environment Monitoring System website offers a user-friendly platform for accessing real-time and historical environmental data. With the provided guidance, you can navigate the website, update content, and manage dependencies to maintain the system's functionality.

For any technical support or inquiries, please contact our support team.

Thank you for using the WEATHERWI IoT Weather and Environment Monitoring System website.
