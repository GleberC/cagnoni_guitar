require('dotenv').config();

const apiKey = process.env.API_KEY;


document.getElementById("get-weather").addEventListener("click", function () {
    const city = document.getElementById("city-input").value;
    if (city) {
      getWeather(city); // Chama a função que pega a previsão do tempo para a cidade
    } else {
      alert("Por favor, insira o nome de uma cidade.");
    }
  });
  
  function getWeather(city) {
    const apiKey = "d974b8fea9f4314e2326d9c262b037b6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperatura: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Descrição: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Umidade: ${data.main.humidity}%`;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      })
      .catch(error => {
        alert("Cidade não encontrada. Tente novamente.");
      });
  }
  