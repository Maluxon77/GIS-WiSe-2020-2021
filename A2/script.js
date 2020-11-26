"use strict";
document.querySelector("h1").innerHTML = "Build Your Plant";
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 1;
function verlinkung() {
    window.open("https://maluxon77.github.io/GIS-WiSe-2020-2021/A2/Bl%C3%A4tter", "_blank");
}
document.querySelector("#Blatt").addEventListener("click", verlinkung);
//# sourceMappingURL=script.js.map