"use strict";
var A_3;
(function (A_3) {
    //let url: string = "http://localhost:8100";
    let url = "https://gisaufgabe2020.herokuapp.com";
    let formData = new FormData(document.forms[0]);
    let answerSec = document.getElementById("answerSec");
    let btSend = document.getElementById("sendHTML");
    btSend.addEventListener("click", sendHTML);
    let btSendJSON = document.getElementById("sendJSON");
    btSendJSON.addEventListener("click", sendJSON);
    let btSendPostJSON = document.getElementById("sendPostJSON");
    btSendPostJSON.addEventListener("click", sendPostJSON);
    async function sendHTML() {
        let response = await send(url + "/html");
        let text = await response.text();
        answerSec.innerHTML = "ServerAntwort:<br/>" + text;
    }
    async function sendJSON() {
        let response = await send(url + "/json");
        let json = await response.json();
        console.log("Answer:");
        console.log(json);
        answerSec.innerHTML = "<pre>" + JSON.stringify(json, undefined, 2) + "</pre>";
    }
    async function send(_url) {
        let query = new URLSearchParams(formData);
        _url = _url + "?" + query.toString();
        let response = await fetch(_url);
        return response;
    }
    async function sendPostJSON() {
        let data = JSON.stringify(Object.fromEntries(formData));
        let response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
            },
            body: data
        });
        let json = await response.json();
        console.log("Answer:");
        console.log(json);
        answerSec.innerHTML = "<pre>" + JSON.stringify(json, undefined, 2) + "</pre>";
    }
})(A_3 || (A_3 = {}));
//# sourceMappingURL=serverTest.js.map