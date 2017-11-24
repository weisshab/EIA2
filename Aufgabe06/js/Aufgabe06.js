/*
Aufgabe: A6
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 12.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A6;
(function (A6) {
    window.addEventListener("load", init);
    let imgData;
    let canvasImg;
    let objects = [];
    let ski = [];
    let snow = []; //Startwert Schneeflocken
    let cloud = []; //Startwert Wolken
    let tree = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A6.crc2 = canvas.getContext("2d");
        console.log(A6.crc2);
        //Werte f�r Schneeflocken
        for (let i = 0; i < 400; i++) {
            let t = new A6.Snow();
            objects.push(t);
        }
        //hier werden 6 Wolken  erstellt
        for (let i = 0; i < 4; i++) {
            let c = new A6.Cloud();
            objects.push(c);
        }
        //Skifahrer Werte
        for (let i = 0; i < 6; i++) {
            let s = new A6.Skier();
            objects.push(s);
            console.log("Skifahrer");
        }
        canvasImg = new A6.CanvasImg();
        //random B�ume zeichnen
        for (let i = 0; i < 6; i++) {
            let s = new A6.Tree();
            tree[i] = s;
        }
        //ImageData des Camvas in imgData abspeichern
        imgData = A6.crc2.getImageData(0, 0, 800, 600);
        //Animierte Elemente
        animate();
    }
    //Animation
    function animate() {
        console.log("Timeout");
        A6.crc2.putImageData(imgData, 0, 0);
        //Animation MovigObjects
        for (let i = 0; i < objects.length; i++) {
            let s = objects[i];
            s.update();
        }
        //Alle Xms 
        window.setTimeout(animate, 30);
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=Aufgabe06.js.map