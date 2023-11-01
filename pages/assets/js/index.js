// const githubToken = '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';
// const repoUrl = 'https://raw.githubusercontent.com/josephsharon07/CAD_Phase1/main/Database/liveData.json';

// fetch(repoUrl, {
//   headers: {
//     'Authorization': `token ${githubToken}`,
//   }
// })
// .then(response => {
//   if (response.ok) {
//     return response.json(); // Assuming the content is JSON
//   } else {
//     throw new Error('Failed to fetch data');
//   }
// })
// .then(data => {
//   // Process the JSON data here
//   console.log(data);
// })
// .catch(error => {
//   console.error(error);
// });


const jsonData = '{"date": "10/31/2023", "time": "22:31", "data": {"humi": "60", "temp": "62", "lig_inten": "25", "air_qual": "0"}}';

// Parse the JSON data
const parsedData = JSON.parse(jsonData);

// Accessing properties
const date = parsedData.date;
const time = parsedData.time;
const humidity = parsedData.data.humi;
const temperature = parsedData.data.temp;
const lightIntensity = parsedData.data.lig_inten;
const airQuality = parsedData.data.air_qual;

date_element = document.getElementById('date');
time_element = document.getElementById('time');
image_element = document.getElementById('image');
weather_element = document.getElementById('weather');
temp_element = document.getElementById('temp');
temperature_element = document.getElementById('temperature');
humi_element = document.getElementById('humi');
liinten_element = document.getElementById('liinten');
airqual_element = document.getElementById('airqual');

date_element.textContent = date;
time_element.textContent = time;
temp_element.textContent = temperature + ' °C';
temperature_element.textContent = temperature;
humi_element.textContent = humidity;
liinten_element.textContent = lightIntensity;
airqual_element.textContent = airQuality;

if (lightIntensity >= 50000 && lightIntensity <= 100000) {
  weather_element.textContent = 'Sunny';
  image_element.src = '/sun.png'
} else if (lightIntensity >= 50 && lightIntensity < 50000) {
  weather_element.textContent = 'Cloudy';
  image_element.src = '/partly-cloudy.png'
  if (humidity >= 80) {
    weather_element.textContent = 'Raining';
  image_element.src = '/rainy-day.png'
  }
} else if (lightIntensity >= 0 && lightIntensity < 50) {
  weather_element.textContent = 'Night';
  image_element.src = '/crescent-moon.png'
  if (humidity >= 80) {
    weather_element.textContent = 'Raining';
    image_element.src = '/rainy-day.png'
  }
} 