function getday(){
var day = new Date();
 if( day.toString().substr(0, 6) === 'Sat'){
 document.getElementById('day').innerHTML = "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion";
}
}
getday();
    