namespace Daten {
    export interface Bild {
        topf: Element1;
        stamm: Element1;
        blätter: Element1;
    }

    export interface Bildspeicher {
        topf: Element1[];
        stamm: Element1[];
        blätter: Element1[];
    }

    export interface Element1 {
        typ: number;
        link: string;
    }

    interface Server {
        error: String;
        message: String;
    }

    export let blättersp: Element1[] = [];
    export let topfsp: Element1[] = [];
    export let stammsp: Element1[] = [];
    export let wahl: Bild = { blätter: undefined, stamm: undefined, topf: undefined};

    window.addEventListener("load", finishedloading);

    function finishedloading(): void {
        let item1: Bild = JSON.parse(localStorage.getItem("1"));
        let item2: Bild = JSON.parse(localStorage.getItem("2"));
        let item3: Bild = JSON.parse(localStorage.getItem("3"));
      
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Main.html") {
            let d1: HTMLImageElement = document.createElement("img");
            let divPic: HTMLElement = document.getElementById("blattaus");
            d1.src = item1.blätter.link;
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
        
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Final.html"){
            let d1: HTMLImageElement = document.createElement("img");
            let divPic: HTMLElement = document.getElementById("finalblatt");
            d1.src = item1.blätter.link;
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

    document.querySelector("h1").innerHTML = "Build Your Plant";

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

    function getImage(bild: Element1): void {
        if (bild.typ == 1) {wahl.blätter = bild; }
        if (bild.typ == 2) {wahl.stamm = bild; }
        if (bild.typ == 3) {wahl.topf = bild; }
        localStorage.setItem("" + bild.typ, JSON.stringify(wahl));
    }

    ladeBilderAusJSON("data.json");


    async function ladeBilderAusJSON( _url: RequestInfo): Promise<void> {
        let response: Response = await fetch (_url);
        let json: string = JSON.stringify(await response.json());
        let jsonToObj: Bildspeicher = JSON.parse(json);
        
        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Blaetter.html") {
            let divPic: HTMLElement = document.getElementById("bilderBlatt");
            for (let i: number = 0; i < jsonToObj.blätter.length; i++) {
                let d1: HTMLImageElement = document.createElement("img");
                d1.addEventListener("click", function (): void {getImage(jsonToObj.blätter[i]); });
                d1.src = jsonToObj.blätter[i].link;
                divPic.appendChild(d1);
            }
        }

        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Stamm.html") {
            let divPic: HTMLElement = document.getElementById("bilderStamm");
            for (let i: number = 0; i < jsonToObj.stamm.length; i++) {
                let d1: HTMLImageElement = document.createElement("img");
                d1.addEventListener("click", function (): void {getImage(jsonToObj.stamm[i]); });
                d1.src = jsonToObj.stamm[i].link;
                divPic.appendChild(d1);
            }
        }

        if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Topf.html") {
            let divPic: HTMLElement = document.getElementById("bilderTopf");
            for (let i: number = 0; i < jsonToObj.topf.length; i++) {
                let d1: HTMLImageElement = document.createElement("img");
                d1.addEventListener("click", function (): void {getImage(jsonToObj.topf[i]); });
                d1.src = jsonToObj.topf[i].link;
                divPic.appendChild(d1);
            }
        }
    }

    serverFunction();
    async function serverFunction(): Promise<void> {
        let query: URLSearchParams = new URLSearchParams(<any>localStorage);
        let url: string = "https://gis-communication.herokuapp.com";
        url = url + "?" + query.toString();
        let fetchvar: Response = await fetch(url);
        let answer: Server = await fetchvar.json();
        if (answer.error != undefined) {console.log(answer.error); }
        else if (answer.message != undefined) {console.log(answer.message); }
    }
}