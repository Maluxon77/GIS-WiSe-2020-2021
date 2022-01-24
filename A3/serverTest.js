"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.A3 = void 0;
var Http = require("http");
var url = require("url");
var Mongo = require("mongodb");
var A3;
(function (A3) {
    var students;
    var databaseUrl = "mongodb+srv://FinnG:Venomancer123!@gispruefung.z89dh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    console.log("Starting server");
    var port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        var server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    function connectToDatabase(_url) {
        return __awaiter(this, void 0, void 0, function () {
            var options, mongoClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = { useNewUrlParser: true, useUnifiedTopology: true };
                        mongoClient = new Mongo.MongoClient(_url, options);
                        return [4 /*yield*/, mongoClient.connect()];
                    case 1:
                        _a.sent();
                        students = mongoClient.db("Test").collection("Students");
                        console.log("Database connection", students != undefined);
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        return __awaiter(this, void 0, void 0, function () {
            var q, daten, rückgabe, _a, _b, _c, _d, _e, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _response.setHeader("Access-Control-Allow-Origin", "*");
                        q = url.parse(_request.url, true);
                        daten = q.query;
                        rückgabe = daten.fname;
                        rückgabe += " " + daten.lname;
                        if (!(q.pathname == "//html")) return [3 /*break*/, 2];
                        _b = (_a = _response).write;
                        return [4 /*yield*/, wiedergabeSpeicher(q.query, daten.email)];
                    case 1:
                        _b.apply(_a, [_g.sent()]);
                        _g.label = 2;
                    case 2:
                        if (!(q.pathname == "//einloggen")) return [3 /*break*/, 4];
                        _d = (_c = _response).write;
                        return [4 /*yield*/, login(daten.email, daten.password)];
                    case 3:
                        _d.apply(_c, [_g.sent()]);
                        _g.label = 4;
                    case 4:
                        if (!(q.pathname == "//nutzer")) return [3 /*break*/, 6];
                        _f = (_e = _response).write;
                        return [4 /*yield*/, retrieve()];
                    case 5:
                        _f.apply(_e, [_g.sent()]);
                        _g.label = 6;
                    case 6:
                        _response.end();
                        return [2 /*return*/];
                }
            });
        });
    }
    function retrieve() {
        return __awaiter(this, void 0, void 0, function () {
            var data, dataString, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, students.find().toArray()];
                    case 1:
                        data = _a.sent();
                        if (data.length > 0) {
                            dataString = "";
                            for (i = 0; i < data.length; i++) {
                                if (data[i].fname != undefined) {
                                    dataString = dataString + " " + data[i].fname + " " + data[i].lname + ",  ";
                                }
                            }
                            return [2 /*return*/, (dataString)];
                        }
                        else
                            return [2 /*return*/, ("nicht vorhanden")];
                        return [2 /*return*/];
                }
            });
        });
    }
    function login(email, passwort) {
        return __awaiter(this, void 0, void 0, function () {
            var data, dataString, counter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, students.find().toArray()];
                    case 1:
                        data = _a.sent();
                        if (data.length > 0) {
                            dataString = void 0;
                            for (counter = 0; counter < data.length; counter++) {
                                if (data[counter].email == email && data[counter].password == passwort) {
                                    dataString = "angemeldet";
                                }
                                else {
                                    dataString = "falsche Email oder falsches Passwort";
                                }
                            }
                            return [2 /*return*/, (dataString)];
                        }
                        else
                            return [2 /*return*/, "Anmeldedaten nicht gefunden"];
                        return [2 /*return*/];
                }
            });
        });
    }
    function wiedergabeSpeicher(_rückgabe, email) {
        return __awaiter(this, void 0, void 0, function () {
            var data, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, students.find().toArray()];
                    case 1:
                        data = _a.sent();
                        if (data.length > 0) {
                            for (i = 0; i < data.length; i++) {
                                if (data[i].email == email) {
                                    return [2 /*return*/, "Email ist bereits im Gebrauch"];
                                }
                                else {
                                    students.insertOne(_rückgabe);
                                    return [2 /*return*/, "Registrierung erfolgreich"];
                                }
                            }
                        }
                        students.insertOne(_rückgabe);
                        return [2 /*return*/, "Registrierung erfolgreich"];
                }
            });
        });
    }
})(A3 = exports.A3 || (exports.A3 = {}));
