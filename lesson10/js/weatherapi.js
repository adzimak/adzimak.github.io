const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=2306104&appid=a55613932a68b64904c80b978dc0e96f=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

