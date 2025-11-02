const apiKey = "bd30426096c349768d5184015250211";
const searchBtn = document.getElementById("searchBtn");
const textInput = document.getElementById("city");
const weatherSection = document.querySelector("section"); 

async function obtainWeather(city) {
    
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
    const data = await res.json();
    showForecast(data);

}

function showForecast(data) {
    weatherSection.innerHTML = `<h2>${data.location.name} - ${data.location.country}</h2>
    <img src="${data.current.condition.icon}">
    <p>${data.current.temp_c}°C</p>
    `;
}

searchBtn.addEventListener("click", () => {
    obtainWeather(textInput.value);
    textInput.value = "";
})

obtainWeather("Córdoba, España");