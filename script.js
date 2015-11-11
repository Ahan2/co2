var nCurrent = 7380201256;
var nFuture;

var r = 0.011;
var t = 1/(365*24*3600);
var c1 = 432;
var c2 = 432/(24*3600);

function ReplaceContent(id,content) {
var container = document.getElementById(id);
container.innerHTML = content;
}

time=setInterval(function(){

nFuture = Math.round(nCurrent * Math.pow(Math.E, (r*t)));
var difference = nFuture - nCurrent;
nCurrent = nCurrent + difference;
var co2 = nCurrent * c2;
//window.alert(co2 + "L");
//window.alert(co2 + "L");
ReplaceContent("pop", co2 + " L");
},1000);
//7378847523, 7378625153 7378625150
