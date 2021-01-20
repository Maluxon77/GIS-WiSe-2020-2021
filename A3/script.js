"use strict";
var A_3;
(function (A_3) {
    let formData = new FormData(document.forms[0]);
    let submitbuttonHTML = document.getElementById("sendHTML");
    submitbuttonHTML.addEventListener("click", function () { submit("HTML"); });
    let submitJSON = document.getElementById("sendJSON");
    submitJSON.addEventListener("click", function () { submit("JSON"); });
    async function send() {
        let url = "localhost:8100";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let text = await response.text();
        console.log("Answer:");
        console.log(text);
    }
})(A_3 || (A_3 = {}));
//# sourceMappingURL=script.js.map