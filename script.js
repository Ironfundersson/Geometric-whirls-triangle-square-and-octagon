// Variables: "x0" and "y0" the center of the formation, "a" the side of the formation, "diff" degree of rotation and "num" the number of rotation.

var can = document.getElementById('canvas');
var ctx = can.getContext('2d');
var cw = can.width;
var ch = can.height;

function rotRect(x0, y0, r, diff) {
  var aX = x0 - r*Math.cos((45 + diff)*Math.PI/180);
  var aY = y0 - r*Math.sin((45 + diff)*Math.PI/180);
  var bX = x0 + r*Math.cos((45 - diff)*Math.PI/180);
  var bY = y0 - r*Math.sin((45 - diff)*Math.PI/180);
  var cX = x0 + r*Math.cos((45 + diff)*Math.PI/180);
  var cY = y0 + r*Math.sin((45 + diff)*Math.PI/180);
  var dX = x0 - r*Math.cos((45 - diff)*Math.PI/180);
  var dY = y0 + r*Math.sin((45 - diff)*Math.PI/180);
  ctx.beginPath();
  ctx.moveTo(aX, aY);
  ctx.lineTo(bX, bY);
  ctx.lineTo(cX, cY);
  ctx.lineTo(dX, dY);
  ctx.lineTo(aX, aY);
  ctx.strokeStyle = 'rgb(100, 100, 100)';
  ctx.stroke();
}

function rotTri(x0, y0, r, diff) {
  var aX = x0 + r*Math.sin(diff*Math.PI/180);
  var aY = y0 - r*Math.cos(diff*Math.PI/180);
  var bX = x0 + r*Math.cos((30 + diff)*Math.PI/180);
  var bY = y0 + r*Math.sin((30 + diff)*Math.PI/180);
  var cX = x0 - r*Math.cos((30 - diff)*Math.PI/180);
  var cY = y0 + r*Math.sin((30 - diff)*Math.PI/180);
  ctx.beginPath();
  ctx.moveTo(aX, aY);
  ctx.lineTo(bX, bY);
  ctx.lineTo(cX, cY);
  ctx.lineTo(aX, aY);
  ctx.strokeStyle = 'rgb(100, 100, 100)';
  ctx.stroke();
}

function rotOct(x0, y0, r, diff) {
  var aX = x0 + r*Math.sin((22.5 + diff)*Math.PI/180);
  var aY = y0 - r*Math.cos((22.5 + diff)*Math.PI/180);
  var bX = x0 + r*Math.sin((67.5 + diff)*Math.PI/180);
  var bY = y0 - r*Math.cos((67.5 + diff)*Math.PI/180);
  var cX = x0 + r*Math.cos((22.5 + diff)*Math.PI/180);
  var cY = y0 + r*Math.sin((22.5 + diff)*Math.PI/180);
  var dX = x0 + r*Math.cos((67.5 + diff)*Math.PI/180);
  var dY = y0 + r*Math.sin((67.5 + diff)*Math.PI/180);
  var eX = x0 - r*Math.sin((22.5 + diff)*Math.PI/180);
  var eY = y0 + r*Math.cos((22.5 + diff)*Math.PI/180);
  var fX = x0 - r*Math.sin((67.5 + diff)*Math.PI/180);
  var fY = y0 + r*Math.cos((67.5 + diff)*Math.PI/180);
  var gX = x0 - r*Math.cos((22.5 + diff)*Math.PI/180);
  var gY = y0 - r*Math.sin((22.5 + diff)*Math.PI/180);
  var hX = x0 - r*Math.cos((67.5 + diff)*Math.PI/180);
  var hY = y0 - r*Math.sin((67.5 + diff)*Math.PI/180);
  ctx.beginPath();
  ctx.moveTo(aX, aY);
  ctx.lineTo(bX, bY);
  ctx.lineTo(cX, cY);
  ctx.lineTo(dX, dY);
  ctx.lineTo(eX, eY);
  ctx.lineTo(fX, fY);
  ctx.lineTo(gX, gY);
  ctx.lineTo(hX, hY);
  ctx.lineTo(aX, aY);
  ctx.strokeStyle = 'rgb(100, 100, 100)';
  ctx.stroke();
}

function compRect(x0, y0, a, diff, num) {
  var r = a/(2*Math.sin(45*Math.PI/180));
  for (var i = 0; i <= num; i++) {
    rotRect(x0, y0, r, i*diff);
    r = r/(Math.sin(diff*Math.PI/180) + Math.cos(diff*Math.PI/180));
  }
}

function compTri(x0, y0, a, diff, num) {
  var r = a/(2*Math.cos(30*Math.PI/180));
  for (var i = 0; i <= num; i++) {
    rotTri(x0,y0, r, i*diff);
    r = r/(Math.sqrt(3)*Math.sin(diff*Math.PI/180) + Math.cos(diff*Math.PI/180));
  }
}

function compOct(x0, y0, a, diff, num) {
  var r = a/(2*Math.sin(22.5*Math.PI/180));
  for (var i = 0; i <= num; i++) {
    rotOct(x0, y0, r, i*diff);
    r = r/(Math.sin(diff*Math.PI/180)*(Math.cos(67.5*Math.PI/180)/Math.sin(67.5*Math.PI/180)) + Math.cos(diff*Math.PI/180));
  }
}

compOct(250, 250, 190, 2, 10);
compRect(250, 250, 300, 2, 10);
compTri(250, 250, 170, 2, 10);

function settings(triX, triY, triA, triDiff, triNum, rectX, rectY, rectA, rectDiff, rectNum, octX, octY, octA, octDiff, octNum) {
  ctx.clearRect(0, 0, cw, ch);
  if (document.getElementById('chTri').checked == true) {
    triX = Number( document.getElementById('triX').value);
    triY = Number( document.getElementById('triY').value);
    triA = Number( document.getElementById('triA').value);
    triDiff = Number( document.getElementById('triDiff').value);
    triNum = Number( document.getElementById('triNum').value);
    if (triY - (triA / (2 * Math.cos(Math.PI / 6))) < 0 || triY + Math.sin(Math.PI / 6) / triA > ch || triX - triA / 2 < 0 || triX + triA / 2 > cw) {
      alert('Wrong position or too big triangel!');
    }
    else {
      compTri(triX, triY, triA, triDiff, triNum);
    }
  }
  if (document.getElementById('chRect').checked == true) {
    rectX = Number( document.getElementById('rectX').value);
    rectY = Number( document.getElementById('rectY').value);
    rectA = Number( document.getElementById('rectA').value);
    rectDiff = Number( document.getElementById('rectDiff').value);
    rectNum = Number( document.getElementById('rectNum').value);
    if (rectX - rectA / 2 <0 || rectX + rectA / 2 > cw || rectY - rectA / 2 < 0 || rectY + rectA / 2 > ch) {
      alert('Wrong position or too big rectangel!');
   }
    else {
      compRect(rectX, rectY, rectA, rectDiff, rectNum);
   }
 }
  if (document.getElementById('chOct').checked == true) {
    octX = Number( document.getElementById('octX').value);
    octY = Number( document.getElementById('octY').value);
    octA = Number( document.getElementById('octA').value);
    octDiff = Number( document.getElementById('octDiff').value);
    octNum = Number( document.getElementById('octNum').value);
    if (octX - (octA / (2 * Math.sin(22.5 * Math.PI / 180))) < 0 || octX + (octA / (2 * Math.sin(22.5 * Math.PI / 180))) > cw || octY - (octA / (2 * Math.sin(22.5 * Math.PI / 180))) < 0 || octY + (octA / (2 * Math.sin(22.5 * Math.PI / 180))) > ch) {
      alert('Wrong position or too big octagon!');
    }
    else {
      compOct(octX, octY, octA, octDiff, octNum);
    }
  }
}