"use strict";
var P3_1;
(function (P3_1) {
    let formData = new FormData(document.forms[0]);
    let btSend = document.getElementById("send");
    btSend.addEventListener("click", send);
    async function send() {
        let url = "https://gisaufgabe2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log("Answer:");
        console.log(text);
    }
})(P3_1 || (P3_1 = {}));
//# sourceMappingURL=serverTest.js.map