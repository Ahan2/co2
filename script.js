var nCurrent = 7378625150;
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
while(true){
nFuture = Math.round(nCurrent * Math.pow(Math.E, (r*t)));

var difference = nFuture - nCurrent;
nCurrent = nCurrent + difference;
var co2 = nCurrent * c2;
window.alert(co2 + "L");
setTimeout(10000);
}
//7378847523, 7378625153 7378625150
