
import * as Http from "http";
import { ParsedUrlQuery } from "querystring";
import * as url from "url";
import * as Mongo from "mongodb";



export namespace A3 {
    interface Students {
        [type: string]: string | string[];
    }
    interface Antwort {
        fname: string;
        lname: string;
        email: string;
        password: string;
    }


    let students: Mongo.Collection;
    let databaseUrl: string = "mongodb+srv://FinnG:Venomancer123!@gis3.z89dh.mongodb.net/GIS3?retryWrites=true&w=majority";

    

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;


    startServer(port);
    connectToDatabase(databaseUrl);



    function startServer(_port: number | string): void {

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
        console.log("Database connection", students != undefined);
    }


    function handleListen(): void {
        console.log("Listening");
    }


    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        _response.setHeader("Access-Control-Allow-Origin", "*");


        let q: url.UrlWithParsedQuery = url.parse(_request.url, true);
        let daten: ParsedUrlQuery = q.query;
        let rückgabe: string = <string>daten.fname;
        rückgabe += " " + daten.lname;

        if (q.pathname == "//html") {
            _response.write(await storeRückgabe(q.query, daten.email));
        }

        if (q.pathname == "//einloggen") {
            _response.write(await login(daten.email, daten.password));
        }

        if (q.pathname == "//nutzer") {
            _response.write(await retrieveStudents());
        }

        _response.end();
    }


    async function retrieveStudents(): Promise<String> {
        let data: Antwort[] = await students.find().toArray();
        if (data.length > 0) {
            let dataString: string = "";
            for (let i: number = 0; i < data.length; i++) {
                if (data[i].fname != undefined) {
                dataString = dataString + " " + data[i].fname + " " + data[i].lname + ",  ";
                }
            }

            return (dataString);
        }
       else return ("nicht vorhanden");
    }

    async function login(email: string | string[] , passwort: string | string[]): Promise<String> {

        let data: Antwort[] = await students.find().toArray();
        if (data.length > 0 ) {

            let dataString: string;
            for (let counter: number = 0; counter < data.length; counter++) {
                if (data[counter].email == email && data[counter].password == passwort) {
                dataString = "angemeldet";
                }
                else {
                    dataString = "falsche Email oder falsches Passwort";
                }
            }

            return (dataString);
        }
       else return "Anmeldedaten nicht gefunden";

    }

    async function storeRückgabe(_rückgabe: Students, email: string | string[]): Promise<String> {
        let data: Antwort[] = await students.find().toArray();
        if (data.length > 0) {
        for (let i: number = 0; i < data.length; i ++ ) {
            if (data[i].email == email){
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
}

