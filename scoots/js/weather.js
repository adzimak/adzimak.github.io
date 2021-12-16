let apiURL="" 
let city = document.getElementById("city").textContent
if (city == "Cozumel, Mexico") {
apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=a55613932a68b64904c80b978dc0e96f&units=imperial';
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
