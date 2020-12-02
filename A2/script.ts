namespace Daten {
    export interface Bild {
        topf: Element;
        stamm: Element;
        blätter: Element;
    }

    export interface Bildspeicher {
        topf: Element[];
        stamm: Element[];
        blätter: Element[];
    }

    export interface Element {
        typ: number;
        link: string;
    }

    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Main.html") {
        document.querySelector("h1").innerHTML = "Build Your Plant";
        let bBlattAus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bBlätter");
        bBlattAus.addEventListener("click", openBlätter);
        let bStammAus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bStamm");
        bStammAus.addEventListener("click", openStamm);
        let bTopfAus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bTopf");
        bTopfAus.addEventListener("click", openTopf);
        let bEndergebniss: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bEnd");
        bEndergebniss.addEventListener("click", openFinal);
    }

    function openBlätter(): void {
        window.open("Blätter.html", "_self");
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


    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Blaetter.html") {
        let divPic: HTMLElement = document.getElementById("bilderBlatt");
        for (let i: number = 0; i < blättersp.length; i++) {
            let d1: HTMLImageElement = document.createElement("img");
            d1.src = blättersp[i].link;
            divPic.appendChild(d1);
        }
    }

    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Stamm.html") {
        let divPic: HTMLElement = document.getElementById("bilderStamm");
        for (let i: number = 0; i < stammsp.length; i++) {
            let d1: HTMLImageElement = document.createElement("img");
            d1.src = stammsp[i].link;
            divPic.appendChild(d1);
        }
    }

    if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Topf.html") {
        let divPic: HTMLElement = document.getElementById("bilderTopf");
        for (let i: number = 0; i < topfsp.length; i++) {
            let d1: HTMLImageElement = document.createElement("img");
            d1.src = topfsp[i].link;
            divPic.appendChild(d1);
        }
    }
}