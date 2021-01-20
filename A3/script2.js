"use strict";
var A3;
(function (A3) {
    //Registrierung und Login
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "test.html" || window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Login.html") {
        let submit = document.getElementById("submit");
        let form = document.getElementById("form");
        let antwort = document.getElementById("antwort");
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "test.html") {
            submit.addEventListener("click", function () { checkForm(4); });
        }
        else {
            submit.addEventListener("click", function () { checkForm(2); });
        }
        function checkForm(_formSize) {
            let formdata = new FormData(form);
            let formstring = new URLSearchParams(formdata);
            let x = 0;
            antwort.innerText = "";
            for (let entry of formstring.values()) {
                if (entry != "") {
                    x++;
                }
            }
            if (x < _formSize) {
                antwort.innerText = "Ausfüllen bitte ^^";
            }
            else {
                send();
            }
        }
        async function send() {
            let formdata = new FormData(form);
            let formstring = new URLSearchParams(formdata);
            //Senden und fetchen der Antwort
            let response = await fetch("https://gisaufgabe2020.herokuapp.com/", {
                method: "POST",
                body: formstring
            });
            let data = await response.text();
            antwort.innerText = data;
        }
    }
    //Alle User abfragen
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "alle_user.html") {
        let submit = document.getElementById("submit");
        let antwort = document.getElementById("antwort");
        submit.addEventListener("click", send);
        async function send() {
            antwort.innerText = "";
            //Senden und fetchen der Antwort
            let response = await fetch("https://gisaufgabe2020.herokuapp.com/", {
                method: "POST"
            });
            let data = await response.text();
            antwort.innerText = data.slice(0, -2) + ".";
        }
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=script2.js.map