setInterval(() =>{
let clr1 = document.querySelector("#clr1");
let clr2 = document.querySelector("#clr2");
let clr3 = document.querySelector("#clr3");

let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let ampm = document.querySelector("#ampm");

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = h >= 12 ? "PM" : "AM";
h = h % 12;

let day = new Date();
let hours = day.getHours();
let minutes = day.getMinutes();
let seconds = day.getSeconds();

const secondDeg = seconds * 6;
const minuteDeg = minutes * 6 + seconds * 0.1;
const hourDeg = (hours % 12) * 30 + minutes * 0.5;

clr3.style.transform = `rotate(${hourDeg}deg)`;
clr2.style.transform = `rotate(${minuteDeg}deg)`;
clr1.style.transform = `rotate(${secondDeg}deg)`;

hr.innerHTML = h < 10 ? "0" + h : h;
min.innerHTML = m < 10 ? "0" + m : m;
sec.innerHTML = s < 10 ? "0" + s : s;
ampm.innerHTML = am;
});
