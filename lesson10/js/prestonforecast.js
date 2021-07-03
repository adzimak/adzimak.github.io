//Selecting city
// if (document.getElementById("preston")) {/
const forecast ='https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=a55613932a68b64904c80b978dc0e96f&units=imperial';

//Usign fetch to feed the argument
fetch(forecastAPI_URL)
.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);


console.log(days.length);
for (let i = 0; i < days.length; i++) {
if (days[i].dt_txt.includes('18:00:00')){
//days[i].dt_txt == '2021-06' + new Date().getDay() + '18:00:00';

  //Creating the HTML elements
  let box = document.createElement('div');
  let day = document.createElement('span');
  let icon = document.createElement('img');
  let temp = document.createElement('span');

  //Adding data to the HTML elements
  day.textContent = new Date(days[i].dt_txt).toLocaleDateString('en-US', {weekday: 'long'});
  icon.setAttribute('src', 'https://openweathermap.org/img/wn/' + days[i].weather[0].icon + '@2x.png');
  icon.setAttribute('alt', 'Icon: ' + days[i].weather[0].description);
  temp.textContent = days[i].main.temp + '°F';

  //The appendChild() method: It appends the new items created to the HTML elements
  //https://www.javascripttutorial.net/javascript-dom/javascript-appendchild/
  box.appendChild(day);
  box.appendChild(icon);
  box.appendChild(temp);

  //Calling the JS in the HTML
  document.querySelector('div.forecastbox').appendChild(box);
  }
}

});