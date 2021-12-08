let apiURL="" 
let city = document.getElementById("city").textContent
if (city == "Preston, Idaho") {
apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a55613932a68b64904c80b978dc0e96f&units=imperial';
}
else if (city == "Fish Haven, Idaho") {
apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=a55613932a68b64904c80b978dc0e96f&units=imperial';
} 
else if (city == "Soda Springs, Idaho"){
apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&appid=a55613932a68b64904c80b978dc0e96f&units=imperial';
}
console.log(apiURL)
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);

document.getElementById('description').textContent = jsObject.weather[0].description;
document.getElementById('temp').textContent = jsObject.main.temp;
document.getElementById('humidity').textContent = jsObject.main.humidity;
document.getElementById('speed').textContent = jsObject.wind.speed;

getWindChill();
});
