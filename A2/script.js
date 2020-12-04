"use strict";
var Daten;
(function (Daten) {
    Daten.blättersp = [];
    Daten.topfsp = [];
    Daten.stammsp = [];
    Daten.wahl = { blätter: undefined, stamm: undefined, topf: undefined };
    window.addEventListener("load", finishedloading);
    function finishedloading() {
        let item1 = JSON.parse(localStorage.getItem("1"));
        let item2 = JSON.parse(localStorage.getItem("2"));
        let item3 = JSON.parse(localStorage.getItem("3"));
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Main.html") {
            let d1 = document.createElement("img");
            let divPic = document.getElementById("blattaus");
            d1.src = item1.blätter.link;
            divPic.appendChild(d1);
            let d2 = document.createElement("img");
            let divPic2 = document.getElementById("topfaus");
            d2.src = item2.stamm.link;
            divPic2.appendChild(d2);
            let d3 = document.createElement("img");
            let divPic3 = document.getElementById("stammaus");
            d3.src = item3.topf.link;
            divPic3.appendChild(d3);
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Final.html") {
            let d1 = document.createElement("img");
            let divPic = document.getElementById("finalblatt");
            d1.src = item1.blätter.link;
            divPic.appendChild(d1);
            let d2 = document.createElement("img");
            let divPic2 = document.getElementById("finaltopf");
            d2.src = item2.stamm.link;
            divPic2.appendChild(d2);
            let d3 = document.createElement("img");
            let divPic3 = document.getElementById("finalstamm");
            d3.src = item3.topf.link;
            divPic3.appendChild(d3);
        }
    }
    document.querySelector("h1").innerHTML = "Build Your Plant";
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Main.html") {
        let bBlattAus = document.getElementById("bBlätter");
        bBlattAus.addEventListener("click", openBlätter);
        let bStammAus = document.getElementById("bStamm");
        bStammAus.addEventListener("click", openStamm);
        let bTopfAus = document.getElementById("bTopf");
        bTopfAus.addEventListener("click", openTopf);
        let bEndergebniss = document.getElementById("bEnd");
        bEndergebniss.addEventListener("click", openFinal);
    }
    function openMain() {
        window.open("Main.html", "_self");
    }
    function openBlätter() {
        window.open("Blaetter.html", "_self");
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
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Topf.html" ||
        (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Stamm.html" ||
            (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Blaetter.html" ||
                window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Final.html"))) {
        let bzurück = document.getElementById("zurück");
        bzurück.addEventListener("click", openMain);
    }
    function getImage(bild) {
        if (bild.typ == 1) {
            Daten.wahl.blätter = bild;
        }
        if (bild.typ == 2) {
            Daten.wahl.stamm = bild;
        }
        if (bild.typ == 3) {
            Daten.wahl.topf = bild;
        }
        localStorage.setItem("" + bild.typ, JSON.stringify(Daten.wahl));
    }
    ladeBilderAusJSON("data.json");
    async function ladeBilderAusJSON(_url) {
        let response = await fetch(_url);
        let json = JSON.stringify(await response.json());
        let jsonToObj = JSON.parse(json);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Blaetter.html") {
            let divPic = document.getElementById("bilderBlatt");
            for (let i = 0; i < jsonToObj.blätter.length; i++) {
                let d1 = document.createElement("img");
                d1.addEventListener("click", function () { getImage(jsonToObj.blätter[i]); });
                d1.src = jsonToObj.blätter[i].link;
                divPic.appendChild(d1);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Stamm.html") {
            let divPic = document.getElementById("bilderStamm");
            for (let i = 0; i < jsonToObj.stamm.length; i++) {
                let d1 = document.createElement("img");
                d1.addEventListener("click", function () { getImage(jsonToObj.stamm[i]); });
                d1.src = jsonToObj.stamm[i].link;
                divPic.appendChild(d1);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Topf.html") {
            let divPic = document.getElementById("bilderTopf");
            for (let i = 0; i < jsonToObj.topf.length; i++) {
                let d1 = document.createElement("img");
                d1.addEventListener("click", function () { getImage(jsonToObj.topf[i]); });
                d1.src = jsonToObj.topf[i].link;
                divPic.appendChild(d1);
            }
        }
    }
    serverFunction();
    async function serverFunction() {
        let query = new URLSearchParams(localStorage);
        let url = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let fetchvar = await fetch(url);
        let answer = await fetchvar.json();
        if (answer.error != undefined) {
            console.log(answer.error);
            let serverAnt = document.getElementById("Serverantwort-");
            serverAnt.appendChild(document.createTextNode("" + answer.error));
        }
        else if (answer.message != undefined) {
            console.log(answer.message);
            let serverAnt = document.getElementById("Serverantwort");
            serverAnt.appendChild(document.createTextNode("" + answer.message));
        }
    }
})(Daten || (Daten = {}));
//# sourceMappingURL=script.js.map