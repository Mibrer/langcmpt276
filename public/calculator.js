

function meangrade(){

  var a1f,a1d,a2f,a2d,a3f,a3d,a4f,a4d;
  var a1, a2, a3, a4;
  var ans, result, count;
  count = 0;
  result = 0;

  a1f = document.getElementById("inputdividentA1").value;
  a1d = document.getElementById("inputdivisorA1").value;
  if(!isNaN(a1f) && !isNaN(a1d) && a1d!=0){
    a1 = a1f/a1d;
    result = result + a1;
    count++;
  }

  a2f = document.getElementById("inputdividentA2").value;
  a2d = document.getElementById("inputdivisorA2").value;
  if(!isNaN(a2f) && !isNaN(a2d) && a2d!=0){
    a2 = a2f/a2d;
    result = result + a2;
    count++;
  }

  a3f = document.getElementById("inputdividentA3").value;
  a3d = document.getElementById("inputdivisorA3").value;
  if(!isNaN(a3f) && !isNaN(a3d) && a3d!=0){
    a3 = a3f/a3d;
    result = result + a3;
    count++;
  }

  a4f = document.getElementById("inputdividentA4").value;
  a4d = document.getElementById("inputdivisorA4").value;
  if(!isNaN(a4f) && !isNaN(a4d) && a4d!=0){
    a4 = a4f/a4d;
    result = result + a4;
    count++;
  }

  ans = document.getElementById("answer");
  if(count != 0){
    result = result/count;
    ans.innerHTML = result;
  }else{
    ans.innerHTML = "missing or wrong input";
  }


}

function weight(){

  var a1f = 0,a1d= 0,a2f= 0,a2d=0,a3f=0,a3d=0,a4f=0,a4d=0;
  var w1=0, w2=0, w3=0, w4=0;
  var a1, a2, a3, a4;
  var ans, result, count;
  count = 0;
  result = 0;

  a1f = document.getElementById("inputdividentA1").value;
  a1d = document.getElementById("inputdivisorA1").value;
  w1 = document.getElementById("inputweightA1").value;


      a1 = a1f/a1d;
      a1 = w1 * a1;
      result = result + a1;
      count = count + w1;


  a2f = document.getElementById("inputdividentA2").value;
  a2d = document.getElementById("inputdivisorA2").value;
  w2 = document.getElementById("inputweightA2").value;

      a2 = a2f/a2d;
      a2 = w2 * a2;
      result = result + a2;
      count = count + w2;


  a3f = document.getElementById("inputdividentA3").value;
  a3d = document.getElementById("inputdivisorA3").value;
  w3 = document.getElementById("inputweightA3").value;

      a3 = a3f/a3d;
      a3 = w3 * a3;
      result = result + a3;
      count = count + w3;


  a4f = document.getElementById("inputdividentA4").value;
  a4d = document.getElementById("inputdivisorA4").value;
  w4 = document.getElementById("inputweightA4").value;

      a4 = a4f/a4d;
      a4 = w4 * a4;
      result = result + a4;
      count = count + w4;


  ans = document.getElementById("answer");
  if(count != 0){
    result = result/count;
    ans.innerHTML = result;
  }else{
    ans.innerHTML = "missing or wrong input";
  }
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
