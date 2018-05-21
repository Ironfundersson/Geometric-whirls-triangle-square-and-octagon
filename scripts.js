// A használt változók: "x0" és "y0" az adott sokszög középpontja, "a" a sokszög oldalhossza, "r" a sokszög köré írható kör középpontja, "diff" az rotáció mértéke (fokban), "num" pedig a rotációk száma

/*eslint-env browser*/

var can = document.getElementById('canvas');
var ctx = can.getContext('2d');

function rotRect(x0, y0, r, diff) {
  "use strict";
  var aX = x0 - r * Math.cos((45 + diff) * Math.PI / 180),
      aY = y0 - r * Math.sin((45 + diff) * Math.PI / 180),
      bX = x0 + r * Math.cos((45 - diff) * Math.PI / 180),
      bY = y0 - r * Math.sin((45 - diff) * Math.PI / 180),
      cX = x0 + r * Math.cos((45 + diff) * Math.PI / 180),
      cY = y0 + r * Math.sin((45 + diff) * Math.PI / 180),
      dX = x0 - r * Math.cos((45 - diff) * Math.PI / 180),
      dY = y0 + r * Math.sin((45 - diff) * Math.PI / 180);
  ctx.beginPath();
  ctx.moveTo(aX, aY);
  ctx.lineTo(bX, bY);
  ctx.lineTo(cX, cY);
  ctx.lineTo(dX, dY);
  ctx.lineTo(aX, aY);
  ctx.strokeStyle = 'gray';
  ctx.stroke();
}

function rotTri(x0, y0, r, diff) {
  "use strict";
  var aX = x0 + r * Math.sin(diff * Math.PI / 180),
      aY = y0 - r * Math.cos(diff * Math.PI / 180),
      bX = x0 + r * Math.cos((30 + diff) * Math.PI / 180),
      bY = y0 + r * Math.sin((30 + diff) * Math.PI / 180),
      cX = x0 - r * Math.cos((30 - diff) * Math.PI / 180),
      cY = y0 + r * Math.sin((30 - diff) * Math.PI / 180);
  ctx.beginPath();
  ctx.moveTo(aX, aY);
  ctx.lineTo(bX, bY);
  ctx.lineTo(cX, cY);
  ctx.lineTo(aX, aY);
  ctx.strokeStyle = 'gray';
  ctx.stroke();
}

function rotOct(x0, y0, r, diff) {
  "use strict";
  var aX = x0 + r * Math.sin((22.5 + diff) * Math.PI / 180),
      aY = y0 - r * Math.cos((22.5 + diff) * Math.PI / 180),
      bX = x0 + r * Math.sin((67.5 + diff) * Math.PI / 180),
      bY = y0 - r * Math.cos((67.5 + diff) * Math.PI / 180),
      cX = x0 + r * Math.cos((22.5 + diff) * Math.PI / 180),
      cY = y0 + r * Math.sin((22.5 + diff) * Math.PI / 180),
      dX = x0 + r * Math.cos((67.5 + diff) * Math.PI / 180),
      dY = y0 + r * Math.sin((67.5 + diff) * Math.PI / 180),
      eX = x0 - r * Math.sin((22.5 + diff) * Math.PI / 180),
      eY = y0 + r * Math.cos((22.5 + diff) * Math.PI / 180),
      fX = x0 - r * Math.sin((67.5 + diff) * Math.PI / 180),
      fY = y0 + r * Math.cos((67.5 + diff) * Math.PI / 180),
      gX = x0 - r * Math.cos((22.5 + diff) * Math.PI / 180),
      gY = y0 - r * Math.sin((22.5 + diff) * Math.PI / 180),
      hX = x0 - r * Math.cos((67.5 + diff) * Math.PI / 180),
      hY = y0 - r * Math.sin((67.5 + diff) * Math.PI / 180);
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
  ctx.strokeStyle = 'gray';
  ctx.stroke();
}

function compRect(x0, y0, a, diff, num) {
  "use strict";
  var r = a / (2 * Math.sin(45 * Math.PI / 180));
  for (var i = 0; i <= num; i++) {
    rotRect(x0, y0, r, i * diff);
    r = r / (Math.sin(diff * Math.PI / 180) + Math.cos(diff * Math.PI / 180));
  }
}

function compTri(x0, y0, a, diff, num) {
  "use strict";
  var r = a / (2 * Math.cos(30 * Math.PI / 180));
  for (var i = 0; i <= num; i++) {
    rotTri(x0, y0, r, i*diff);
    r = r / (Math.sqrt(3) * Math.sin(diff * Math.PI / 180) + Math.cos(diff * Math.PI / 180));
  }
}

function compOct(x0, y0, a, diff, num) {
  "use strict";
  var r = a / (2 * Math.sin(22.5 * Math.PI / 180));
  for (var i = 0; i <= num; i++) {
    rotOct(x0, y0, r, i*diff);
    r = r / (Math.sin(diff * Math.PI / 180) * (Math.cos(67.5 * Math.PI / 180)/Math.sin(67.5 * Math.PI / 180)) + Math.cos(diff * Math.PI / 180));
  }
}

compOct(250, 250, 200, 2, 10);
compRect(250, 250, 300, 2, 10);
compTri(250, 250, 170, 2, 10);