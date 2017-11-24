/* 
Aufgabe: A6
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 12.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace A6 {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;

    let canvasImg: CanvasImg;

    let objects: MovingObjects[] = [];

    let ski: Skier[] = [];

    let snow: Snow[] = [];         //Startwert Schneeflocken

    let cloud: Cloud[] = [];        //Startwert Wolken

    let tree: Tree[] = [];


    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);


        //Werte für Schneeflocken
        for (let i: number = 0; i < 400; i++) {
            let t: Snow = new Snow();
            objects.push(t);
        }

        //hier werden 6 Wolken  erstellt
        for (let i: number = 0; i < 4; i++) {
            let c: Cloud = new Cloud();
            objects.push(c);
        }
        
        //Skifahrer Werte
        for (let i: number = 0; i < 6; i++) {
            let s: Skier = new Skier();
            objects.push(s);
            
            console.log("Skifahrer");
        }
            


        canvasImg = new CanvasImg();

        //random Bäume zeichnen
        for (let i: number = 0; i < 6; i++) {
            let s: Tree = new Tree();
            tree[i] = s;
        }

        //ImageData des Camvas in imgData abspeichern
        imgData = crc2.getImageData(0, 0, 800, 600);

        //Animierte Elemente
        animate();


    }

    //Animation
    function animate(): void {

        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0);

        //Animation MovigObjects
        for (let i: number = 0; i < objects.length; i ++) {
            let s: MovingObjects = objects[i];
            s.update();
        }



        //Alle Xms 
        window.setTimeout(animate, 30);
    }
}


