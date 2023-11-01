const url = `https://raw.githubusercontent.com/josephsharon07/WEATHERWI/main/Database/Database.json`;

document.addEventListener('DOMContentLoaded', function () {
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((jsonData) => {
    const chartsContainer = document.getElementById('charts');

    document.getElementById('plotButton').addEventListener('click', function () {
        const inputDate = document.getElementById('inputDate').value;
        const selectedDate = formatDate(inputDate);
        plotData(jsonData, selectedDate);
    });

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return mm + '/' + dd + '/' + yyyy;
    }

    function filterDataByDate(data, selectedDate) {
        const filteredData = {};
        for (const key in data) {
            if (key.startsWith(selectedDate)) {
                filteredData[key] = data[key];
            }
        }
        return filteredData;
    }

    function plotData(data, selectedDate) {
        const filteredData = filterDataByDate(data, selectedDate);
        chartsContainer.innerHTML = '';
        for (const dataType in filteredData[Object.keys(filteredData)[0]].data) {
            const dataTypeData = {};
            for (const key in filteredData) {
                const time = filteredData[key].time;
                const value = parseFloat(filteredData[key].data[dataType]);
                dataTypeData[time] = value;
            }
            createChart(chartsContainer, dataType, dataTypeData);
        }
    }

    function createChart(container, dataType, data) {
        const chartCanvas = document.createElement('canvas');
        chartCanvas.style.border = '1px dashed white';
        chartCanvas.style.marginBottom = '20%';
        chartCanvas.style.marginLeft = '5%';
        chartCanvas.style.marginRight = '5%';
        container.appendChild(chartCanvas);
        const ctx = chartCanvas.getContext('2d');
    
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(data),
                datasets: [
                    {
                        label: dataType,
                        data: Object.values(data),
                        borderColor: 'rgb(60,242,129)',
                        borderWidth: 1,
                        fill: false,
                    }
                ],
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Time',
                            color: 'white'
                        },
                        ticks: {
                            color: 'white'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: dataType,
                            color: 'white'
                        },
                        ticks: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }
    
});
  })
  .catch((error) => {
    console.error('Error:', error);
  });

    
