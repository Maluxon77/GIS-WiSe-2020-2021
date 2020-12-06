namespace Daten {
    //Interfaces
    export interface Bild {
        topf: Element1;
        stamm: Element1;
        blaetter: Element1;
    }

    export interface Bildspeicher {
        topf: Element1[];
        stamm: Element1[];
        blaetter: Element1[];
    }

    export interface Element1 {
        typ: number;
        link: string;
    }

    interface Server {
        error: String;
        message: String;
    }
    //Variablendeklaration
    document.querySelector("h1").innerHTML = "Build Your Plant";
    export let blättersp: Element1[] = [];
    export let topfsp: Element1[] = [];
    export let stammsp: Element1[] = [];
    export let wahl: Bild = { blaetter: undefined, stamm: undefined, topf: undefined};

    //Funktion zum Laden und Ánzeigen der getroffenen Bildauswahl auf der Haupt- und Endseite
    window.addEventListener("load", loadingPicture);
    function loadingPicture(): void {
        let item1: Bild = JSON.parse(localStorage.getItem("1"));
        let item2: Bild = JSON.parse(localStorage.getItem("2"));
        let item3: Bild = JSON.parse(localStorage.getItem("3"));
      
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Main.html") {
            let d1: HTMLImageElement = document.createElement("img");
            let divPic: HTMLElement = document.getElementById("blattaus");
            d1.src = item1.blaetter.link;
            divPic.appendChild(d1);
        
            let d2: HTMLImageElement = document.createElement("img");
            let divPic2: HTMLElement = document.getElementById("topfaus");
            d2.src = item2.stamm.link;
            divPic2.appendChild(d2);
        
            let d3: HTMLImageElement = document.createElement("img");
            let divPic3: HTMLElement = document.getElementById("stammaus");
            d3.src = item3.topf.link;
            divPic3.appendChild(d3);
        }
        
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Final.html") {
            let d1: HTMLImageElement = document.createElement("img");
            let divPic: HTMLElement = document.getElementById("finalblatt");
            d1.src = item1.blaetter.link;
            divPic.appendChild(d1);

            let d2: HTMLImageElement = document.createElement("img");
            let divPic2: HTMLElement = document.getElementById("finaltopf");
            d2.src = item2.stamm.link;
            divPic2.appendChild(d2);

            let d3: HTMLImageElement = document.createElement("img");
            let divPic3: HTMLElement = document.getElementById("finalstamm");
            d3.src = item3.topf.link;
            divPic3.appendChild(d3);   
            
        }
    }

    //Deklaration der Buttons und die dazugehörigen Funktionen zur Weiterleitung auf die Unterseiten
    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Main.html") {
        let bBlattAus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bBlätter");
        bBlattAus.addEventListener("click", openBlätter);
        let bStammAus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bStamm");
        bStammAus.addEventListener("click", openStamm);
        let bTopfAus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bTopf");
        bTopfAus.addEventListener("click", openTopf);
        let bEndergebniss: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bEnd");
        bEndergebniss.addEventListener("click", openFinal);
    }

    function openMain(): void {
        window.open("Main.html", "_self");
    }
    function openBlätter(): void {
        window.open("Blaetter.html", "_self");
    }
    function openStamm(): void {
        window.open("Stamm.html", "_self");
    }
    function openTopf(): void {
        window.open("Topf.html", "_self");
    }
    function openFinal(): void {
        window.open("Final.html", "_self");
    }

    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Topf.html" || 
    (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Stamm.html" || 
    (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Blaetter.html" || 
    window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Final.html"))) {
        let bzurück: HTMLButtonElement = <HTMLButtonElement>document.getElementById("zurück");
        bzurück.addEventListener("click", openMain);
    }

    //Funktion zum speichern des Interface Objektes in den Local Storage
    function getImage(_bild: Element1): void {
        if (_bild.typ == 1) {wahl.blaetter = _bild; }
        if (_bild.typ == 2) {wahl.stamm = _bild; }
        if (_bild.typ == 3) {wahl.topf = _bild; }
        localStorage.setItem("" + _bild.typ, JSON.stringify(wahl));
    }

    //Funktion zum Laden der Bilder auf den Unterseiten
    ladeBilderAusJSON("data.json");
    async function ladeBilderAusJSON( _url: RequestInfo): Promise<void> {
        let response: Response = await fetch (_url);
        let json: string = JSON.stringify(await response.json());
        let jsonToObj: Bildspeicher = JSON.parse(json);
        
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Blaetter.html") {
            let divSelect: HTMLElement = document.getElementById("bilderBlatt");
            for (let _i: number = 0; _i < jsonToObj.blaetter.length; _i++) {
                let divPicture: HTMLImageElement = document.createElement("img");
                divPicture.addEventListener("click", function (): void {getImage(jsonToObj.blaetter[_i]); });
                divPicture.src = jsonToObj.blaetter[_i].link;
                divSelect.appendChild(divPicture);
            }
        }

        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Stamm.html") {
            let divSelect: HTMLElement = document.getElementById("bilderStamm");
            for (let _i: number = 0; _i < jsonToObj.stamm.length; _i++) {
                let divPicture: HTMLImageElement = document.createElement("img");
                divPicture.addEventListener("click", function (): void {getImage(jsonToObj.stamm[_i]); });
                divPicture.src = jsonToObj.stamm[_i].link;
                divSelect.appendChild(divPicture);
            }
        }

        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Topf.html") {
            let divSelect: HTMLElement = document.getElementById("bilderTopf");
            for (let _i: number = 0; _i < jsonToObj.topf.length; _i++) {
                let divPicture: HTMLImageElement = document.createElement("img");
                divPicture.addEventListener("click", function (): void {getImage(jsonToObj.topf[_i]); });
                divPicture.src = jsonToObj.topf[_i].link;
                divSelect.appendChild(divPicture);
            }
        }
    }

    //Regulierung der Serverrückgabe + Ausgabe auf der "Final"Seite
    serverFunction();
    async function serverFunction(): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(<any>localStorage);
        let url: string = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let fetchvar: Response = await fetch(url);
        let answer: Server = await fetchvar.json();

        
        if (answer.error != undefined) {
            console.log(answer.error); 
            let serverAnt: HTMLElement = document.getElementById("Serverantwort-");
            serverAnt.appendChild(document.createTextNode("" + answer.error));
        }

        else if (answer.message != undefined) {
            console.log(answer.message); 
            let serverAnt: HTMLElement = document.getElementById("Serverantwort");
            serverAnt.appendChild(document.createTextNode("" + answer.message));
        }
    }
}