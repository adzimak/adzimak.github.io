var temp = document.getElementById("temp").innerHTML;
var windspeed = document.getElementById("speed").innerHTML;


var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16));


var windChill= Math.round(windChill);


if (temp <= 50 && windspeed >= 3) {
document.getElementById("windChill").innerHTML = windChill;
} else {
document.getElementById("windChill").innerHTML = "N/A";
}