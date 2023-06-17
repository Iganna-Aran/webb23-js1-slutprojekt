const apiKey = "163dffc1ad3a4a200ee4ea7f85d2e675";


const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weatherIcon");



async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if (response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    console.log(response.status);
  }else{
    let data = await response.json();
    //console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C ";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "% ";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h ";
  document.querySelector(".desc").innerHTML = data.weather[0].description;

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/cloud.png";
  }
  else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/sun.png";
  }
  else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/raining.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png";
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
})
searchBox.addEventListener("keyup", (event) => {
  if(event.key == "Enter"){
    checkWeather(searchBox.value);
  }
})

//checkWeather();







