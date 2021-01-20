"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A3 = void 0;
const Http = require("http");
var A3;
(function (A3) {
    console.log("Starting server"); // Konsolenausgabe
    let port = Number(process.env.PORT); // Holt aktuellen Port
    if (!port)
        port = 8100; // Wenn kein Port, Port = 8100
    let server = Http.createServer(); // Erstellt neuen HTTPServer
    server.addListener("request", handleRequest); // Fuegt Listener hinzu
    server.addListener("listening", handleListen);
    server.listen(port); // Horcht auf definierten Port
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Konsolenausgabe
        _response.setHeader("content-type", "text/html; charset=utf-8"); // Antwort als HTML
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // Antwort URL ausgeben
        console.log(_request.url); // URL auf Konsole ausgebe
        _response.end(); // Antwort abschliessen
    }
})(A3 = exports.A3 || (exports.A3 = {}));
//# sourceMappingURL=serverTest.js.map