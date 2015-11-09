var nCurrent = 7379319032;
var nFuture;

var r = 0.011;
var t = 1/(365*24*3600);
var c1 = 432;
var c2 = 432/(24*3600);
/*
t = (Math.log(nFuture/nCurrent))/r
nCurrent = 7378625150 * Math.pow(Math.E, (-r*t));
window.alert(nCurrent);
var create = document.getElementById("pop"),innerHTML;
var res = create.replace("number", nCurrent);
document.getElementById("pop").innerHTML = res;*/
time=setInterval(function(){

nFuture = Math.round(nCurrent * Math.pow(Math.E, (r*t)));

var co2 = nFuture * c2;
//window.alert(co2 + "L");
window.alert(co2 + "L");
},1000);
//7378847523, 7378625153 7378625150
