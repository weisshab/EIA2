/* 
Aufgabe: Funktionen A4
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 12.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace A5 {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;

    let canvasImg: CanvasImg;

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
        for (let i: number = 0; i < 500; i++) {
            let s: Snow = new Snow();
            snow[i] = s;
        }

        //hier werden 6 Wolken erzeugt
        for (let i: number = 0; i < 6; i++) {
            let s: Cloud = new Cloud();
            cloud[i] = s;
        }
        
        
        canvasImg = new CanvasImg();

        //random Bäume zeichnen
        for (let i: number = 0; i < 6; i++) {
            let s: Tree = new Tree();
            tree[i] = s;
        }

        for (let i: number = 0; i < 4; i++) {
            let s: Skier = new Skier();
            
            ski[i] = s;
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

        //Animation Schnee
        for (let i: number = 0; i < snow.length; i += 2) {
            let s: Snow = snow[i];
            s.update();

            if (s.y > 600) {
                s.setStartNew();
            }
        }

        //Animation Skifahrer

        for (let i: number = 0; i < ski.length; i++) {
            let s: Skier = ski[i];
            s.update();

            if (s.y > 600) {
                s.setStart();
                s.setColor();
            }
        }



        //Animation Wolken
        for (let i: number = 0; i < cloud.length; i++) {
            let s: Cloud = cloud[i];
            s.update();

            if (s.x > 800) {
                s.setStartNew();
            }
        }

        //Alle Xms 
        window.setTimeout(animate, 30);

    }

}
