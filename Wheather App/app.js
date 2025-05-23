var btn = document.querySelector(".Bg-change");
var body = document.querySelector("body");
var form = document.querySelector(".form");
var icon = document.querySelector(".Bg-change i");
var mode = true;

btn.addEventListener("click", () => {
    if (mode) {
        body.style.backgroundColor = "#38444d";
        body.style.color = "white";
        form.style.backgroundColor = "#193d3d";
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        btn.style.color = "white"
        search.style.backgroundColor = "#04AA6D"
        mode = false;
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "#38444d";
        form.style.backgroundColor = "#04AA6D";
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
        btn.style.color = "#193d3d"
        search.style.backgroundColor = "#193d3d"
        mode = true;
    }
});

const weatherData = [
    {
        city: "Karachi",
        temperature: 32,
        condition: "Sunny",
        humidity: 60,
        windSpeed: 10,
    },
    {
        city: "Lahore",
        temperature: 28,
        condition: "Cloudy",
        humidity: 70,
        windSpeed: 8,
    },
    {
        city: "Islamabad",
        temperature: 25,
        condition: "Rainy",
        humidity: 80,
        windSpeed: 5,
    }
];

var search = document.querySelector("#search");
var field = document.querySelector("#field");
var temp = document.querySelector("#temp");
var cond = document.querySelector("#cond");
var humi = document.querySelector("#humi");
var wind = document.querySelector("#wind");

search.addEventListener("click", () => {
    if (field.value.trim() === "") {
        alert("Please enter a city name.");
        clearWeatherData();
    } else {
        var city = field.value.trim().toLowerCase();
        var weather = weatherData.find((data) => data.city.toLowerCase() === city);

        if (weather) {
            temp.innerHTML = "Temperature: " + weather.temperature + "°C";
            cond.innerHTML = "Condition: " + weather.condition;
            humi.innerHTML = "Humidity: " + weather.humidity + "%";
            wind.innerHTML = "Wind Speed: " + weather.windSpeed + " km/h";
        } else {
            alert("City not found.");
            clearWeatherData();
        }
    }

    field.value = "";
});


function clearWeatherData() {
    temp.innerHTML = " ";
    cond.innerHTML = " ";
    humi.innerHTML = " ";
    wind.innerHTML = " ";
}
