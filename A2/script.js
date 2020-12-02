"use strict";
var Daten;
(function (Daten) {
    document.querySelector("h1").innerHTML = "Build Your Plant";
    let bBlattAus = document.getElementById("bBlätter");
    bBlattAus.addEventListener("click", openBlätter);
    let bStammAus = document.getElementById("bStamm");
    bStammAus.addEventListener("click", openStamm);
    let bTopfAus = document.getElementById("bTopf");
    bTopfAus.addEventListener("click", openTopf);
    let bEndergebniss = document.getElementById("bEnd");
    bEndergebniss.addEventListener("click", openFinal);
    function openBlätter() {
        window.open("Blätter.html", "_self");
    }
    function openStamm() {
        window.open("Stamm.html", "_self");
    }
    function openTopf() {
        window.open("Topf.html", "_self");
    }
    function openFinal() {
        window.open("Final.html", "_self");
    }
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Blätter.html") {
        let divPic = document.getElementById("bilderBlatt");
        for (let i = 0; i < Daten.blätter.length; i++) {
            let d1 = document.createElement("img");
            d1.src = Daten.blätter[i].url;
            divPic.appendChild(d1);
        }
    }
})(Daten || (Daten = {}));
//# sourceMappingURL=script.js.map