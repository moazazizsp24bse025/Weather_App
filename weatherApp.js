const apiKey = "94776028d1dbfcd5af4654f941d9d1d2";
const weatherGet=document.querySelector(".weatherType");

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const imageElement=document.createElement("img");
const imageConatiner=document.querySelector(".image");


 let weatherKind=document.getElementById("weatherType");

searchBtn.addEventListener("click", () => {
  fetchWeather(cityInput.value);
});

async function fetchWeather(city) {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await res.json();

  document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
  document.getElementById("temp").innerText = `${Math.round(data.main.temp)}°`;
  weatherGet.opacity="1";
  imageConatiner.append(imageElement)
  const imageSelector=document.querySelector("img");
 weatherKind.innerText = data.weather[0].main;
  if(weatherKind.innerText==="Clouds"){
imageSelector.src="166015.png";
  }else if(weatherKind.innerText==="Rain"){
imageSelector.src="x.png";
  }else if(weatherKind.innerText==="Clear"){
    imageSelector.src="sun.png";
  }
  else{
    imageSelector.src="";
  }
  
  document.getElementById("feels").innerText = `Real feel: ${Math.round(data.main.feels_like)}°`;
  document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
  document.getElementById("wind").innerText = `Wind: ${data.wind.speed} km/h`;

  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  document.getElementById("sunrise").innerText = `Rise: ${sunrise}`;
  document.getElementById("sunset").innerText = `Set: ${sunset}`;
}
