"use strict";
document.querySelector("h1").innerHTML = "Meine Überschrift";
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 1;
var recht = {
    xK: 100,
    yK: 100,
    xL: 100,
    yL: 100
};
function createRect() {
    return context.rect(Math.random() * 1000, Math.random() * 1000, Math.random() * 1000, Math.random() * 1000);
}
function drawRect() {
    context.strokeRect(1000, 1000, 1000, 1000);
}
console.log(drawRect);
context.strokeRect(recht.xK, recht.yK, recht.xL, recht.yL);
//context.strokeRect(100, 100, 100, 100);  //verschiebenX_verschiebenY_verlängernX_verlängernY
//context.fillRect(100, 200, 300, 400);
//# sourceMappingURL=script.js.map