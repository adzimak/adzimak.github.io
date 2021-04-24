var dateObj = new Date();
var month = dateObj.getUTCMonth(); // months from 1-12
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
var day = dateObj.getUTCDate();
var year = dateOdj.getUTCFullYear();

document.getElementById("currentdate").innerHTML = days[dateObj.getDay()] + ',' + day + ' ' + month[dateObj.getMonth()] + ' ' + year;