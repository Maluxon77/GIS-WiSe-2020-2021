"use strict";
var A3;
(function (A3) {
    let nutzerButton = document.getElementById("nutzerButton");
    nutzerButton.addEventListener("click", function () { submit("nutzer"); });
    let serverantwort = document.getElementById("serverantwort");
    async function submit(_parameter) {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisaufgabe2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        if (_parameter == "nutzer") {
            url = url + "/nutzer";
        }
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Nutzer.html") {
            serverantwort.innerHTML = text;
        }
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=nutzer.js.map