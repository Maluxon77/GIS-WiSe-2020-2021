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
    url: string;
}

document.querySelector("h1").innerHTML = "Build Your Plant";
let bBlattAus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bBlätter");
bBlattAus.addEventListener("click", openBlätter);
let bStammAus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bStamm");
bStammAus.addEventListener("click", openStamm);
let bTopfAus: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bTopf");
bTopfAus.addEventListener("click", openTopf);
let bEndergebniss: HTMLButtonElement = <HTMLButtonElement>document.getElementById("bEnd");
bEndergebniss.addEventListener("click", openFinal);

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

if (window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1) == "Blätter.html") {
    let divPic: HTMLElement = document.getElementById("bilderBlatt");
    for (let i: number = 0; i < blätter.length; i++) {
        let d1: HTMLImageElement = document.createElement("img");
        d1.src = blätter[i].url;
        divPic.appendChild(d1);
    } 
}
}