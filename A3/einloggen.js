"use strict";
var A3;
(function (A3) {
    let loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function () { submit("einloggen"); });
    let serverantwort = document.getElementById("loginAntwort");
    async function submit(_parameter) {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisaufgabe2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        if (_parameter == "einloggen") {
            url = url + "/einloggen";
        }
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Einloggen.html") {
            serverantwort.innerHTML = text;
        }
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=einloggen.js.map