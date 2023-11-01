document.addEventListener('DOMContentLoaded', function () {
    const jsonData = {
        "10/31/2023 22:41": {
            "date": "10/31/2023",
            "time": "22:41",
            "data": {
                "Humidity": "68",
                "Temperature": "62",
                "Light Intensity": "75895",
                "Air Quality": "1"
            }
        },
        "10/31/2023 22:42": {
            "date": "10/31/2023",
            "time": "22:42",
            "data": {
                "Humidity": "70",
                "Temperature": "65",
                "Light Intensity": "76231",
                "Air Quality": "0"
            }
        },
        "10/31/2023 22:43": {
            "date": "10/31/2023",
            "time": "22:43",
            "data": {
                "Humidity": "71",
                "Temperature": "61",
                "Light Intensity": "75985",
                "Air Quality": "2"
            }
        },
        "10/31/2023 22:44": {
            "date": "10/31/2023",
            "time": "22:44",
            "data": {
                "Humidity": "69",
                "Temperature": "63",
                "Light Intensity": "76402",
                "Air Quality": "1"
            }
        },
        "10/31/2023 22:45": {
            "date": "10/31/2023",
            "time": "22:45",
            "data": {
                "Humidity": "68",
                "Temperature": "64",
                "Light Intensity": "76148",
                "Air Quality": "0"
            }
        },
        "10/31/2023 22:46": {
            "date": "10/31/2023",
            "time": "22:46",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75872",
                "Air Quality": "2"
            }
        },
        "10/31/2023 22:47": {
            "date": "10/31/2023",
            "time": "22:47",
            "data": {
                "Humidity": "72",
                "Temperature": "60",
                "Light Intensity": "75900",
                "Air Quality": "1"
            }
        },
        "10/31/2023 22:48": {
            "date": "10/31/2023",
            "time": "22:48",
            "data": {
                "Humidity": "67",
                "Temperature": "66",
                "Light Intensity": "76321",
                "Air Quality": "0"
            }
        },
        "10/31/2023 22:49": {
            "date": "10/31/2023",
            "time": "22:49",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75987",
                "Air Quality": "2"
            }
        },
        "10/31/2023 22:50": {
            "date": "10/31/2023",
            "time": "22:50",
            "data": {
                "Humidity": "69",
                "Temperature": "63",
                "Light Intensity": "76240",
                "Air Quality": "1"
            }
        },
        "10/31/2023 22:51": {
            "date": "10/31/2023",
            "time": "22:51",
            "data": {
                "Humidity": "68",
                "Temperature": "64",
                "Light Intensity": "76159",
                "Air Quality": "0"
            }
        },
        "10/31/2023 22:52": {
            "date": "10/31/2023",
            "time": "22:52",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75894",
                "Air Quality": "2"
            }
        },
        "10/31/2023 22:53": {
            "date": "10/31/2023",
            "time": "22:53",
            "data": {
                "Humidity": "72",
                "Temperature": "60",
                "Light Intensity": "75905",
                "Air Quality": "1"
            }
        },
        "10/31/2023 22:54": {
            "date": "10/31/2023",
            "time": "22:54",
            "data": {
                "Humidity": "67",
                "Temperature": "66",
                "Light Intensity": "76310",
                "Air Quality": "0"
            }
        },
        "10/31/2023 22:55": {
            "date": "10/31/2023",
            "time": "22:55",
            "data": {
                "Humidity": "68",
                "Temperature": "62",
                "Light Intensity": "75895",
                "Air Quality": "1"
            }
        },
        "10/31/2023 22:56": {
            "date": "10/31/2023",
            "time": "22:56",
            "data": {
                "Humidity": "70",
                "Temperature": "65",
                "Light Intensity": "76231",
                "Air Quality": "0"
            }
        },
        "10/31/2023 22:57": {
            "date": "10/31/2023",
            "time": "22:57",
            "data": {
                "Humidity": "71",
                "Temperature": "61",
                "Light Intensity": "75985",
                "Air Quality": "2"
            }
        },
        "10/31/2023 22:58": {
            "date": "10/31/2023",
            "time": "22:58",
            "data": {
                "Humidity": "69",
                "Temperature": "63",
                "Light Intensity": "76402",
                "Air Quality": "1"
            }
        },
        "10/31/2023 22:59": {
            "date": "10/31/2023",
            "time": "22:59",
            "data": {
                "Humidity": "68",
                "Temperature": "64",
                "Light Intensity": "76148",
                "Air Quality": "0"
            }
        },
        "10/31/2023 23:00": {
            "date": "10/31/2023",
            "time": "23:00",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75872",
                "Air Quality": "2"
            }
        },
        "10/31/2023 23:01": {
            "date": "10/31/2023",
            "time": "23:01",
            "data": {
                "Humidity": "72",
                "Temperature": "60",
                "Light Intensity": "75900",
                "Air Quality": "1"
            }
        },
        "10/31/2023 23:02": {
            "date": "10/31/2023",
            "time": "23:02",
            "data": {
                "Humidity": "67",
                "Temperature": "66",
                "Light Intensity": "76321",
                "Air Quality": "0"
            }
        },
        "10/31/2023 23:03": {
            "date": "10/31/2023",
            "time": "23:03",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75987",
                "Air Quality": "2"
            }
        },
        "10/31/2023 23:04": {
            "date": "10/31/2023",
            "time": "23:04",
            "data": {
                "Humidity": "69",
                "Temperature": "63",
                "Light Intensity": "76240",
                "Air Quality": "1"
            }
        },
        "10/31/2023 23:05": {
            "date": "10/31/2023",
            "time": "23:05",
            "data": {
                "Humidity": "68",
                "Temperature": "64",
                "Light Intensity": "76159",
                "Air Quality": "0"
            }
        },
        "10/31/2023 23:06": {
            "date": "10/31/2023",
            "time": "23:06",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75894",
                "Air Quality": "2"
            }
        },
        "10/31/2023 23:07": {
            "date": "10/31/2023",
            "time": "23:07",
            "data": {
                "Humidity": "72",
                "Temperature": "60",
                "Light Intensity": "75905",
                "Air Quality": "1"
            }
        },
        "10/31/2023 23:08": {
            "date": "10/31/2023",
            "time": "23:08",
            "data": {
                "Humidity": "67",
                "Temperature": "66",
                "Light Intensity": "76310",
                "Air Quality": "0"
            }
        },
        "10/31/2023 23:09": {
            "date": "10/31/2023",
            "time": "23:09",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75991",
                "Air Quality": "2"
            }
        },
        "10/31/2023 23:10": {
            "date": "10/31/2023",
            "time": "23:10",
            "data": {
                "Humidity": "69",
                "Temperature": "63",
                "Light Intensity": "76255",
                "Air Quality": "1"
            }
        },
        "10/31/2023 23:11": {
            "date": "10/31/2023",
            "time": "23:11",
            "data": {
                "Humidity": "68",
                "Temperature": "64",
                "Light Intensity": "76167",
                "Air Quality": "0"
            }
        },
        "10/31/2023 23:12": {
            "date": "10/31/2023",
            "time": "23:12",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75909",
                "Air Quality": "2"
            }
        },
        "10/31/2023 23:13": {
            "date": "10/31/2023",
            "time": "23:13",
            "data": {
                "Humidity": "72",
                "Temperature": "60",
                "Light Intensity": "75900",
                "Air Quality": "1"
            }
        },
        "10/31/2023 23:14": {
            "date": "10/31/2023",
            "time": "23:14",
            "data": {
                "Humidity": "67",
                "Temperature": "66",
                "Light Intensity": "76321",
                "Air Quality": "0"
            }
        },
        "10/31/2023 23:15": {
            "date": "10/31/2023",
            "time": "23:15",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75987",
                "Air Quality": "2"
            }
        },
        "10/31/2023 23:16": {
            "date": "10/31/2023",
            "time": "23:16",
            "data": {
                "Humidity": "69",
                "Temperature": "63",
                "Light Intensity": "76240",
                "Air Quality": "1"
            }
        },
        "10/31/2023 23:17": {
            "date": "10/31/2023",
            "time": "23:17",
            "data": {
                "Humidity": "68",
                "Temperature": "64",
                "Light Intensity": "76159",
                "Air Quality": "0"
            }
        },
        "10/31/2023 23:18": {
            "date": "10/31/2023",
            "time": "23:18",
            "data": {
                "Humidity": "70",
                "Temperature": "61",
                "Light Intensity": "75894",
                "Air Quality": "2"
            }
        },
        "10/31/2023 23:19": {
            "date": "10/31/2023",
            "time": "23:19",
            "data": {
                "Humidity": "72",
                "Temperature": "60",
                "Light Intensity": "75905",
                "Air Quality": "1"
            }
        }
    };

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