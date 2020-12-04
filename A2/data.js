"use strict";
/*namespace Daten {

    let dach1: Element1 = { typ: 1 , link: "/A2/GIS assets/Blätter/Dach1.png" };
    blättersp.push(dach1);
    let dach2: Element1 = { typ: 1 , link: "/A2/GIS assets/Blätter/Dach2.png" };
    blättersp.push(dach2);
    let dach3: Element1 = { typ: 1 , link: "/A2/GIS assets/Blätter/Dach3.png" };
    blättersp.push(dach3);
    let topf2: Element1 = { typ: 2, link: "/A2/GIS assets/Töpfe/70341205800.png"};
    topfsp.push(topf2);
    let topf3: Element1 = { typ: 2, link: "/A2/GIS assets/Töpfe/potted-plant-2326223_1280.png"};
    topfsp.push(topf3);
    let stamm1: Element1 = { typ: 3, link: "/A2/GIS assets/Stämme/Stamm1.png"};
    stammsp.push(stamm1);
    let stamm2: Element1 = { typ: 3, link: "/A2/GIS assets/Stämme/Stamm2.png"};
    stammsp.push(stamm2);

    

    pJSON(createJSON());

    function createJSON(): string {
        let allBilder: Bildspeicher = { blätter: blättersp, stamm: stammsp, topf: topfsp };
        let jsonAlle: string = JSON.stringify(allBilder);
        return jsonAlle;
    }

    function pJSON(jsonStr: string): void {
        blättersp = [];
        stammsp = [];
        topfsp = [];
        let json: Bildspeicher = JSON.parse(jsonStr);
        Object.keys(json).forEach(key => {
            if (key == "blätter") { blättersp = json[key]; }
            else if (key == "stamm") { stammsp = json[key]; }
            else if (key == "topf") { topfsp = json[key]; }
        });
    }

}*/
//# sourceMappingURL=data.js.map