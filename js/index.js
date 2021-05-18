var dateObj = new Date();
 // months from 1-12
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];
var day = dateObj.getUTCDate();
var month = dateObj.getUTCMonth();
var year = dateObj.getUTCFullYear();

document.getElementById("currentdate").innerHTML = days[dateObj.getDay()] + ',' + day + ' ' + monthNames[dateObj.getMonth()] + ' ' + year;