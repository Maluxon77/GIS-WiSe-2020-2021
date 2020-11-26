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




