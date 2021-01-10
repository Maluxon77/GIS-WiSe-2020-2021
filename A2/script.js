"use strict";
var Daten;
(function (Daten) {
    //Variablendeklaration
    document.querySelector("h1").innerHTML = "Build Your Plant";
    Daten.blättersp = [];
    Daten.topfsp = [];
    Daten.stammsp = [];
    Daten.wahl = { blaetter: undefined, stamm: undefined, topf: undefined };
    //Funktion zum Laden und Ánzeigen der getroffenen Bildauswahl auf der Haupt- und Endseite
    window.addEventListener("load", loadingPicture);
    function loadingPicture() {
        let item1 = JSON.parse(localStorage.getItem("1"));
        let item2 = JSON.parse(localStorage.getItem("2"));
        let item3 = JSON.parse(localStorage.getItem("3"));
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Main.html") {
            let d1 = document.createElement("img");
            let divPic = document.getElementById("blattaus");
            d1.src = item1.blaetter.link;
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
            d1.src = item1.blaetter.link;
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
    //Deklaration der Buttons und die dazugehörigen Funktionen zur Weiterleitung auf die Unterseiten
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
    //Funktion zum speichern des Interface Objektes in den Local Storage
    function getImage(_bild) {
        if (_bild.typ == 1) {
            Daten.wahl.blaetter = _bild;
        }
        if (_bild.typ == 2) {
            Daten.wahl.stamm = _bild;
        }
        if (_bild.typ == 3) {
            Daten.wahl.topf = _bild;
        }
        localStorage.setItem("" + _bild.typ, JSON.stringify(Daten.wahl));
    }
    //Funktion zum Laden der Bilder auf den Unterseiten
    ladeBilderAusJSON("data.json");
    async function ladeBilderAusJSON(_url) {
        let response = await fetch(_url);
        let json = JSON.stringify(await response.json());
        let jsonToObj = JSON.parse(json);
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Blaetter.html") {
            let divSelect = document.getElementById("bilderBlatt");
            for (let _i = 0; _i < jsonToObj.blaetter.length; _i++) {
                let divPicture = document.createElement("img");
                divPicture.addEventListener("click", function () { getImage(jsonToObj.blaetter[_i]); });
                divPicture.src = jsonToObj.blaetter[_i].link;
                divSelect.appendChild(divPicture);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Stamm.html") {
            let divSelect = document.getElementById("bilderStamm");
            for (let _i = 0; _i < jsonToObj.stamm.length; _i++) {
                let divPicture = document.createElement("img");
                divPicture.addEventListener("click", function () { getImage(jsonToObj.stamm[_i]); });
                divPicture.src = jsonToObj.stamm[_i].link;
                divSelect.appendChild(divPicture);
            }
        }
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Topf.html") {
            let divSelect = document.getElementById("bilderTopf");
            for (let _i = 0; _i < jsonToObj.topf.length; _i++) {
                let divPicture = document.createElement("img");
                divPicture.addEventListener("click", function () { getImage(jsonToObj.topf[_i]); });
                divPicture.src = jsonToObj.topf[_i].link;
                divSelect.appendChild(divPicture);
            }
        }
    }
    //Regulierung der Serverrückgabe + Ausgabe auf der "Final"Seite
    serverFunction();
    async function serverFunction() {
        let query = new URLSearchParams(localStorage);
        let url = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let fetchvar = await fetch(url);
        let serverResponse = await fetchvar.json();
        if (serverResponse.error != undefined) {
            console.log(serverResponse.error);
            let serverAnt = document.getElementById("Serverantwort-");
            serverAnt.appendChild(document.createTextNode("" + serverResponse.error));
        }
        else if (serverResponse.message != undefined) {
            console.log(serverResponse.message);
            let serverAnt = document.getElementById("Serverantwort");
            serverAnt.appendChild(document.createTextNode("" + serverResponse.message));
        }
    }
})(Daten || (Daten = {}));
//# sourceMappingURL=script.js.map