function startTime() {
  var month = new Array();
    month[0] = "janeiro";
    month[1] = "fevereiro";
    month[2] = "março";
    month[3] = "abril";
    month[4] = "maio";
    month[5] = "junho";
    month[6] = "julho";
    month[7] = "agosto";
    month[8] = "setembro";
    month[9] = "outubro";
    month[10] = "novembro";
    month[11] = "dezembro";    
  var today = new Date();
  var d = today.getDate();
  var M = today.getMonth();
  var y = today.getFullYear();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  "Florianópolis, " + d + " de " + month[M] + " de " + y + " as " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
};
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}