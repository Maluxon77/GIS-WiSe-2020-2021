document.querySelector("h1").innerHTML = "Build Your Plant";

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myFirstCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.lineWidth = 1;

interface Bild {
    Topf: Topf;
    Stamm: Stamm;
    Blätter: Blätter;

}

interface Topf {
    farbe: string;
}

interface Stamm {
    holz: string;
}

interface Blätter {
    form: string;
    farbe: string;
}

function verlinkung(): void {
    window.open("https://maluxon77.github.io/GIS-WiSe-2020-2021/A2/Bl%C3%A4tter", "_blank");
}

document.querySelector("#Blatt").addEventListener("click", verlinkung);


