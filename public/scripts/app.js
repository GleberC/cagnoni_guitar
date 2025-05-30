document.getElementById("get-weather").addEventListener("click", function () {
  const city = document.getElementById("city-input").value;
  if (city) {
    getWeather(city);
  } else {
    alert("Por favor, insira o nome de uma cidade.");
  }
});

function getWeather(city) {
  const url = `/weather?city=${encodeURIComponent(city)}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        document.getElementById("city-name").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperatura: ${data.main.temp}°C`;
        document.getElementById("description").textContent = `Descrição: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Umidade: ${data.main.humidity}%`;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      } else {
        alert("Cidade não encontrada.");
      }
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro ao obter os dados do clima.");
    });
}
