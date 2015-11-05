var nCurrent;
var nFuture;
var r = 0.011;
var t = 1/(365*24*3600);
/*
t = (Math.log(nFuture/nCurrent))/r
nCurrent = 7378625150 * Math.pow(Math.E, (-r*t));
window.alert(nCurrent);
var create = document.getElementById("pop"),innerHTML;
var res = create.replace("number", nCurrent);
document.getElementById("pop").innerHTML = res;*/
nFuture = 7378625150 * Math.pow(Math.E, (r*t));
window.alert(nFuture);
//7378847523, 7378625153 7378625150
