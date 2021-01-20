"use strict";
var A_3;
(function (A_3) {
    let formData = new FormData(document.forms[0]);
    let btSend = document.getElementById("send");
    btSend.addEventListener("click", send);
    async function send() {
        let url = "https://gis2020jw.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log("Answer:");
        console.log(text);
    }
})(A_3 || (A_3 = {}));
//# sourceMappingURL=serverTest.js.map