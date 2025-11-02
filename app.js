const apiKey = "bd30426096c349768d5184015250211";
let city = "Madrid";

async function obtainWeather() {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    const data = await res.json();
    showForecast(data);

}

function showForecast(data) {
    const weatherForecast = document.createElement("section");
    const searchBtn = document.getElementById("searchBtn");
    const textInput = document.getElementById("city");    
    
    
    searchBtn.addEventListener("click", () => {
        city = textInput.value;
        weatherForecast.innerHTML = `<h2>${city}</h2>
        <img src="${data.current.condition.icon}">
        <p>${data.current.temp_c}°C</p>
        `;
    });

    const main = document.querySelector("main");
    main.appendChild(weatherForecast);

}

obtainWeather();