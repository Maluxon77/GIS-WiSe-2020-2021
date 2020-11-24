document.querySelector("h1").innerHTML = "Meine Überschrift";

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myFirstCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.lineWidth = 1;

interface Rechteck {
    xK: number;
    yK: number;
    xL: number;
    yL: number;
}

var recht: Rechteck = {
    xK: 100,
    yK: 100,
    xL: 100,
    yL: 100
};

function createRect(dasRechteck: Rechteck) {
    let newRec = {xK: Math.random() * 1000, yk: Math.random() * 100, xL: Math.random() * 100, yL: Math.random() * 1000};
    return newRec;
    //return context.rect(xK * 1000, Math.random() * 1000, Math.random() * 1000, Math.random() * 1000);

}

function drawRect(dasRechteck: Rechteck) {
    context.strokeRect(1000, 1000, 1000, 1000);

}

context.strokeRect(recht.xK, recht.yK, recht.xL, recht.yL);



