let forecast="" 
city = document.getElementById("city").textContent
if (city == "Cozumel, Mexico") {
forecast = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=a55613932a68b64904c80b978dc0e96f&units=imperial';
}

console.log(forecast)
fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);

const days = jsObject.list;
for (let i = 0; i < days.length; i++) {
if (days[i].dt_txt.includes('18:00:00')){

let box = document.createElement('div');
let day = document.createElement('span');
let icon = document.createElement('img');
let temp = document.createElement('span');

day.textContent = new Date(days[i].dt_txt).toLocaleDateString('en-US', {weekday: 'long'});
icon.setAttribute('src', 'https://openweathermap.org/img/wn/' + days[i].weather[0].icon + '@2x.png');
icon.setAttribute('alt', 'Icon: ' + days[i].weather[0].description);
temp.textContent = days[i].main.temp + '°F';

box.appendChild(day);
box.appendChild(icon);
box.appendChild(temp);

document.querySelector('div.forecastbox').appendChild(box);
}
}

});