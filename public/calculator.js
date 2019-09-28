

function meangrade(){

  var a1f,a1d,a2f,a2d,a3f,a3d,a4f,a4d;
  var a1, a2, a3, a4;
  var ans, result;

  a1f = document.getElementById("inputdividentA1");
  a1d = document.getElementById("inputdivisorA1");
  a2f = document.getElementById("inputdividentA2");
  a2d = document.getElementById("inputdivisorA2");
  a3f = document.getElementById("inputdividentA3");
  a3d = document.getElementById("inputdivisorA3");
  a4f = document.getElementById("inputdividentA4");
  a4d = document.getElementById("inputdivisorA4");
  alert(a1f);
  alert(a1d);
  alert(a2f);
  alert(a2d);
  a1 = a1f/a1d;
  a2 = a2f/a2d;
  a3 = a3f/a3d;
  a4 = a4f/a4d;
  alert(a1);
  alert(a2);
  alert(a3);
  alert(a4);
  result = (a1 + a2 + a3 + a4)/4;
  ans = document.getElementById("answer");
  ans.innerHTML = result;
  alert("e");
}

function weight(){

  var a1f,a1d,a2f,a2d,a3f,a3d,a4f,a4d;
  var w1, w2, w3, w4;
  var ans, result;

  a1f = document.getElementById("inputdividentA1");
  a1d = document.getElementById("inputdivisorA1");
  a2f = document.getElementById("inputdividentA2");
  a2d = document.getElementById("inputdivisorA2");
  a3f = document.getElementById("inputdividentA3");
  a3d = document.getElementById("inputdivisorA3");
  a4f = document.getElementById("inputdividentA4");
  a4d = document.getElementById("inputdivisorA4");

  w1 = document.getElementById("inputweightA1");
  w2 = document.getElementById("inputweightA2");
  w3 = document.getElementById("inputweightA3");
  w4 = document.getElementById("inputweightA4");

  a1f = w1*(a1f/a1d);
  a2f = w2*(a2f/a2d);
  a3f = w3*(a3f/a3d);
  a4f = w4*(a4f/a4d);

  result = (a1f + a2f + a3f + a4f)/(w1+w2+w3+w4);
  ans = document.getElementById("answer");
  ans.innerHTML = result;
}
/*
function cc(){
  console.log("string");
}
*/
var buttonMean = document.getElementById("btnmean");
var buttonWeight = document.getElementById("btnweight");
buttonMean.onclick = meangrade;
buttonWeight.onclick = weight;
