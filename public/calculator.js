


alert("make it");

function meangrade(){
  alert("asdasd");
  var a1f,a1d,a2f,a2d,a3f,a3d,a4f,a4d;
  var result;

  a1f = Number(document.getElementsByName("inputdividentA1"));
  a1d = Number(document.getElementsByName("inputdivisorA1"));
  a2f = Number(document.getElementsByName("inputdividentA2"));
  a2d = Number(document.getElementsByName("inputdivisorA2"));
  a3f = Number(document.getElementsByName("inputdividentA3"));
  a3d = Number(document.getElementsByName("inputdivisorA3"));
  a4f = Number(document.getElementsByName("inputdividentA4"));
  a4d = Number(document.getElementsByName("inputdivisorA4"));

  a1f = a1f/a1d;
  a2f = a2f/a2d;
  a3f = a3f/a3d;
  a4f = a4f/a4d;

  result = (a1f + a2f + a3f + a4f)/4;

  document.getElementByName("answer").innerHTML = result;
  document.getElementsById("intest").value = result;

}

function weight(){
  var a1f,a1d,a2f,a2d,a3f,a3d,a4f,a4d, w1, w2, w3, w4;
  var result;

  a1f = Number(document.getElementsByName("inputdividentA1"));
  a1d = Number(document.getElementsByName("inputdivisorA1"));
  a2f = Number(document.getElementsByName("inputdividentA2"));
  a2d = Number(document.getElementsByName("inputdivisorA2"));
  a3f = Number(document.getElementsByName("inputdividentA3"));
  a3d = Number(document.getElementsByName("inputdivisorA3"));
  a4f = Number(document.getElementsByName("inputdividentA4"));
  a4d = Number(document.getElementsByName("inputdivisorA4"));

  a1f = w1*(a1f/a1d);
  a2f = w2*(a2f/a2d);
  a3f = w3*(a3f/a3d);
  a4f = w4*(a4f/a4d);

  result = (a1f + a2f + a3f + a4f)/(w1+w2+w3+w4);

  document.getElementByName("answer").innerHTML = result;
  document.getElementsById("intest").value = result;
}

function cc(){
  alert("cc");
}

document.getElementById("btnmean").onclick() = function() {cc()};
document.getElementById("btnweight").onclick() = function() {cc()};
