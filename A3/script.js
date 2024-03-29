"use strict";
var A3;
(function (A3) {
    let submitbuttonHTML = document.getElementById("submitHTML");
    submitbuttonHTML.addEventListener("click", function () { submit("HTML"); });
    let serverantwort = document.getElementById("serverantwort");
    async function submit(_parameter) {
        let formData = new FormData(document.forms[0]);
        let url = "https://gisaufgabe2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        if (_parameter == "HTML") {
            url = url + "/html";
        }
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Login.html") {
            serverantwort.innerHTML = text;
        }
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=script.js.map