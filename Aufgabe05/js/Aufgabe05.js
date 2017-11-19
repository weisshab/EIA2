/*
Aufgabe: Funktionen A4
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 12.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A5;
(function (A5) {
    window.addEventListener("load", init);
    let imgData;
    let canvasImg;
    let ski = [];
    let snow = []; //Startwert Schneeflocken
    let cloud = []; //Startwert Wolken
    let tree = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A5.crc2 = canvas.getContext("2d");
        console.log(A5.crc2);
        //Werte f�r Schneeflocken
        for (let i = 0; i < 500; i++) {
            let s = new A5.Snow();
            s.setColor();
            snow[i] = s;
        }
        //hier werden 6 Wolken erzeugt
        for (let i = 0; i < 6; i++) {
            let s = new A5.Cloud();
            s.setColor();
            cloud[i] = s;
        }
        canvasImg = new A5.CanvasImg();
        //random B�ume zeichnen
        for (let i = 0; i < 6; i++) {
            let s = new A5.Tree();
            s.setColor();
            tree[i] = s;
        }
        for (let i = 0; i < 4; i++) {
            let s = new A5.Skier();
            s.setColor();
            ski[i] = s;
        }
        //ImageData des Camvas in imgData abspeichern
        imgData = A5.crc2.getImageData(0, 0, 800, 600);
        //Animierte Elemente
        animate();
    }
    //Animation
    function animate() {
        console.log("Timeout");
        A5.crc2.putImageData(imgData, 0, 0);
        //Animation Schnee
        for (let i = 0; i < snow.length; i += 2) {
            let s = snow[i];
            s.update();
            if (s.y > 650) {
                s.setStartNew();
            }
        }
        //Animation Skifahrer
        for (let i = 0; i < ski.length; i++) {
            let s = ski[i];
            s.update();
            if (s.y > 600) {
                s.setStart();
                s.setColor();
            }
        }
        //Animation Wolken
        for (let i = 0; i < cloud.length; i++) {
            let s = cloud[i];
            s.update();
            if (s.x > 800) {
                s.setStartNew();
            }
        }
        //Alle Xms 
        window.setTimeout(animate, 30);
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=Aufgabe05.js.map