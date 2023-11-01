const url = `https://raw.githubusercontent.com/josephsharon07/WEATHERWI/main/Database/Database.json`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((jsonData) => {
    // Now you can work with your JSON data
    const date = jsonData.date;
    const time = jsonData.time;
    const humidity = jsonData.data.humi;
    const temperature = jsonData.data.temp;
    const lightIntensity = jsonData.data.lig_inten;
    const airQuality = jsonData.data.air_qual;

    // Update your HTML elements with the data
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
    document.getElementById('temperature').textContent = temperature + ' °C';
    document.getElementById('humi').textContent = humidity;
    document.getElementById('liinten').textContent = lightIntensity;
    document.getElementById('airqual').textContent = airQuality;

    const weather_element = document.getElementById('weather');
    const image_element = document.getElementById('image');

    if (lightIntensity >= 50000 && lightIntensity <= 100000) {
      weather_element.textContent = 'Sunny';
      image_element.src = './assets/img/sun.png';
    } else if (lightIntensity >= 50 && lightIntensity < 50000) {
      weather_element.textContent = 'Cloudy';
      image_element.src = './assets/img/partly-cloudy.png';
      if (humidity >= 80) {
        weather_element.textContent = 'Raining';
        image_element.src = './assets/img/rainy-day.png';
      }
    } else if (lightIntensity >= 0 && lightIntensity < 50) {
      weather_element.textContent = 'Night';
      image_element.src = './assets/img/crescent-moon.png';
      if (humidity >= 80) {
        weather_element.textContent = 'Raining';
        image_element.src = './assets/img/rainy-day.png';
      }
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });