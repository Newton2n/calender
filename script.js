let date=document.getElementById("date");
let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");

let allDate= new Date();
let allDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let allMonths=["January","February","March","April","May","June","July","August","September","October","November","December"]
date.innerText=(allDate.getDate()<10?"0":"")+allDate.getDate();
day.innerText=allDays[allDate.getDay()];
month.innerText=allMonths[allDate.getMonth()];
year.innerText=allDate.getFullYear();
