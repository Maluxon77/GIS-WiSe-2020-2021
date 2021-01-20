"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A3 = void 0;
const Http = require("http");
const url = require("url");
var A3;
(function (A3) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsolenausgabe
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log(_request.url);
        let actUrl = url.parse(_request.url, true);
        let query = actUrl.query;
        if (actUrl.pathname == "/html") {
            _response.setHeader("content-type", "text/html; charset=utf-8");
            for (let key in query) {
                console.log(key + ":" + query[key]);
                _response.write(key + ":" + query[key] + "<br/>");
            }
        }
        else if (actUrl.pathname == "/json") {
            _response.setHeader("content-type", "application/json");
            _response.write(JSON.stringify(query));
        }
        else {
            _response.write("waiting");
        }
        _response.end();
    }
})(A3 = exports.A3 || (exports.A3 = {}));
//# sourceMappingURL=serverTest.js.map