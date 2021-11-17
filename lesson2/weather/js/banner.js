const message = document.querySelector(".message");


if (new Date().getDay() == 5) {
message.style.display = "block";
};


const options = {weekday: 'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('currentday').textContent = new Date().toLocaleDateString('en-US', options);



document.getElementById("currentyear").textContent = new Date().getFullYear();



const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};