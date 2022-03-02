const common = (city, setText) => {
  document.getElementById(city).innerText = setText;
};

// api key
const key = `4566576ae163872fa3ced7dc9b6d53bc`;

document.getElementById("button").addEventListener("click", () => {
  const input = document.getElementById("input-field");
  const inputValue = input.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${key}&units=metric`
  )
    .then((res) => res.json())
    .then((weatherInfo) => {
      console.log(weatherInfo);
      // img change
      document.getElementById(
        "img"
      ).src = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`;
      // name
      common("city-name", weatherInfo.name);
      //   document.getElementById("city-name").innerText = weatherInfo.name;
      // temparature
      common("temparature", weatherInfo.main.temp);
      //   document.getElementById("temparature").innerText = weatherInfo.main.temp;
      // temparature
      common("moment", weatherInfo.weather[0].main);
      //   document.getElementById("moment").innerText = weatherInfo.weather[0].main;
    });

  // empty input field
  input.value = "";
});
