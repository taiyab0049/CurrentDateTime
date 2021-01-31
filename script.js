//console.log("Hey ! There ::::");
let a;
let date;
let time;

a = new Date();
date = a.getHours() + ":"+ a.getMinutes() +":"+ a.getSeconds();
time = a.toLocaleDateString();
console.log(time +" on "+ date);
