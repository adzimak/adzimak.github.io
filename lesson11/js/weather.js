let apiURL=""//Selecting city
if (document.getElementById("preston")) {
apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a55613932a68b64904c80b978dc0e96f&units=imperial';
} else if (document.getElementById("sodasprings")) {
apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&appid=a55613932a68b64904c80b978dc0e96f&units=imperial';
} else if (document.getElementById("fishhaven")) {
apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&appid=a55613932a68b64904c80b978dc0e96f&units=imperial';
}

//Usign fetch to feed the argument
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);

//Calling the JS in the <span> tag in the HTML to print the current data
document.getElementById('description').textContent = jsObject.weather[0].description;
document.getElementById('temp').textContent = jsObject.main.temp;
document.getElementById('humidity').textContent = jsObject.main.humidity;
document.getElementById('speed').textContent = jsObject.wind.speed;

getWindChill();
});