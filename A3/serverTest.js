"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A3 = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var A3;
(function (A3) {
    let students;
    let databaseUrl = "mongodb+srv://FinnG:Venomancer123@gis3.z89dh.mongodb.net/Test?retryWrites=true&w=majority";
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
        console.log("Database connection", students != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("Access-Control-Allow-Origin", "*");
        let q = url.parse(_request.url, true);
        let daten = q.query;
        let wiedergabe = daten.fname;
        wiedergabe += " " + daten.lname;
        if (q.pathname == "//html") {
            _response.write(await wiedergabeSpeichern(q.query, daten.email));
        }
        if (q.pathname == "//einloggen") {
            _response.write(await login(daten.email, daten.password));
        }
        if (q.pathname == "//nutzer") {
            _response.write(await retrieve());
        }
        _response.end();
    }
    async function retrieve() {
        let data = await students.find().toArray();
        if (data.length > 0) {
            let stringData = "";
            for (let i = 0; i < data.length; i++) {
                if (data[i].fname != undefined) {
                    stringData = stringData + " " + data[i].fname + " " + data[i].lname + ",  ";
                }
            }
            return (stringData);
        }
        else
            return ("nicht vorhanden");
    }
    async function login(email, passwort) {
        let data = await students.find().toArray();
        if (data.length > 0) {
            let stringData;
            for (let i = 0; i < data.length; i++) {
                if (data[i].email == email && data[i].password == passwort) {
                    stringData = "angemeldet";
                }
                else {
                    stringData = "falsche Email oder falsches Passwort";
                }
            }
            return (stringData);
        }
        else
            return "Anmeldedaten nicht gefunden";
    }
    async function wiedergabeSpeichern(_rückgabe, email) {
        let data = await students.find().toArray();
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].email == email) {
                    return "Email ist bereits im Gebrauch";
                }
                else {
                    students.insertOne(_rückgabe);
                    return "Registrierung erfolgreich";
                }
            }
        }
        students.insertOne(_rückgabe);
        return "Registrierung erfolgreich";
    }
})(A3 = exports.A3 || (exports.A3 = {}));
//# sourceMappingURL=serverTest.js.map