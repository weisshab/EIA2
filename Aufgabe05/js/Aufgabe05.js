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
    let ski = [];
    let snowPos = []; //Startwert Schneeflocken
    let cloudPos = []; //Startwert Wolken
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        A5.crc2 = canvas.getContext("2d");
        console.log(A5.crc2);
        //hier werden random 300 Schneeflocken erzeugt
        for (let i = 0; i < 300; i++) {
            snowPos.push(Math.random() * 600, Math.random() * 800);
        }
        //hier werden random 6 Wolken erzeugt
        for (let i = 0; i < 6; i++) {
            cloudPos.push(Math.random() * 800, Math.random() * 100);
        }
        drawSky(); //Himmel zeichnen
        drawMount(); //Berge zeichnen
        drawPiste(); //Piste zeichnen
        drawSun(); //Sonne zeichnen
        drawSnowman(); //Schneemann zeichnen
        drawLift(); //Skilift zeichnen
        drawTree(100, 200, "#0B610B"); //fest positionierter Baum
        //random B�ume zeichnen
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * 400;
            let y = 400 + Math.random() * 100;
            drawTree(x, y, "#0B610B");
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
        for (let i = 0; i < snowPos.length; i += 2) {
            snowPos[i]++;
            if (snowPos[i] > 600) {
                snowPos[i] = 0;
            }
            drawSnow(snowPos[i - 1], snowPos[i]);
        }
        //Animation Skifahrer
        for (let i = 0; i < ski.length; i++) {
            let s = ski[i];
            s.update();
            if (s.y > 600) {
                s.setStart();
            }
        }
        //Animation Wolken
        for (let i = 0; i < cloudPos.length; i += 2) {
            cloudPos[i] += 2;
            if (cloudPos[i] > 800) {
                cloudPos[i] = 0;
            }
            drawCloud(cloudPos[i], cloudPos[i - 1], "#ffffff");
        }
        //Alle Xms 
        window.setTimeout(animate, 30);
    }
    //B�ume
    function drawTree(_x, _y, _color) {
        A5.crc2.beginPath();
        A5.crc2.moveTo(_x, _y);
        A5.crc2.lineTo(_x + 20, _y + 30);
        A5.crc2.lineTo(_x - 20, _y + 30);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = _color;
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.moveTo(_x, _y + 30);
        A5.crc2.lineTo(_x + 20, _y + 60);
        A5.crc2.lineTo(_x - 20, _y + 60);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = _color;
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.moveTo(_x - 5, _y + 90);
        A5.crc2.lineTo(_x + 5, _y + 90);
        A5.crc2.lineTo(_x + 5, _y + 110);
        A5.crc2.lineTo(_x - 5, _y + 110);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = "#61210B";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.moveTo(_x, _y + 60);
        A5.crc2.lineTo(_x + 20, _y + 90);
        A5.crc2.lineTo(_x - 20, _y + 90);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = _color;
        A5.crc2.fill();
    }
    //Wolke
    function drawCloud(_x, _y, _color) {
        A5.crc2.beginPath();
        A5.crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#ffffff";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.arc(_x + 20, _y + 10, 20, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#ffffff";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.arc(_x, _y + 10, 20, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#ffffff";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.arc(_x - 20, _y, 20, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#ffffff";
        A5.crc2.fill();
    }
    //Schneeflocke
    function drawSnow(_x, _y) {
        A5.crc2.beginPath();
        A5.crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#ffffff";
        A5.crc2.fill();
    }
    //Himmel
    function drawSky() {
        A5.crc2.fillStyle = "#81F7F3";
        A5.crc2.fillRect(0, 0, 800, 600);
    }
    //Berge
    function drawMount() {
        //Berg1
        A5.crc2.beginPath();
        A5.crc2.moveTo(600, 200);
        A5.crc2.lineTo(800, 600);
        A5.crc2.lineTo(300, 600);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = "#555555";
        A5.crc2.fill();
        //Berg2
        A5.crc2.beginPath();
        A5.crc2.moveTo(400, 150);
        A5.crc2.lineTo(700, 600);
        A5.crc2.lineTo(100, 600);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = "#555555";
        A5.crc2.fill();
    }
    //Schnee Piste
    function drawPiste() {
        A5.crc2.beginPath();
        A5.crc2.moveTo(0, 0);
        A5.crc2.lineTo(800, 600);
        A5.crc2.lineTo(0, 600);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = "#ffffff";
        A5.crc2.fill();
    }
    //Sonne
    function drawSun() {
        A5.crc2.beginPath();
        A5.crc2.arc(700, 60, 35, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = "#ffff00";
        A5.crc2.fill();
    }
    //Schneemann
    function drawSnowman() {
        A5.crc2.beginPath();
        A5.crc2.arc(450, 495, 12, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#A9F5F2";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.arc(450, 520, 20, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#A9F5F2";
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.arc(450, 555, 30, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#A9F5F2";
        A5.crc2.fill();
    }
    //Ski-Lift
    function drawLift() {
        A5.crc2.fillStyle = "#000000"; //Masten
        A5.crc2.fillRect(100, 76, 5, 70);
        A5.crc2.fillStyle = "#000000"; //Querbalken
        A5.crc2.fillRect(90, 76, 10, 5);
        A5.crc2.fillStyle = "#000000"; //Masten
        A5.crc2.fillRect(200, 152, 5, 70);
        A5.crc2.fillStyle = "#000000"; //Querbalken
        A5.crc2.fillRect(190, 152, 10, 5);
        A5.crc2.fillStyle = "#000000"; //Masten
        A5.crc2.fillRect(300, 228, 5, 70);
        A5.crc2.fillStyle = "#000000"; //Querbalken
        A5.crc2.fillRect(290, 228, 10, 5);
        A5.crc2.fillStyle = "#000000"; //Masten
        A5.crc2.fillRect(400, 304, 5, 70);
        A5.crc2.fillStyle = "#000000"; //Querbalken
        A5.crc2.fillRect(390, 304, 10, 5);
        A5.crc2.fillStyle = "#000000"; //Masten
        A5.crc2.fillRect(500, 380, 5, 70);
        A5.crc2.fillStyle = "#000000"; //Querbalken
        A5.crc2.fillRect(490, 380, 10, 5);
        A5.crc2.fillStyle = "#000000"; //Masten
        A5.crc2.fillRect(600, 456, 5, 70);
        A5.crc2.fillStyle = "#000000"; //Querbalken
        A5.crc2.fillRect(590, 456, 10, 5);
        A5.crc2.beginPath(); //Seil
        A5.crc2.moveTo(0, 10);
        A5.crc2.lineTo(782, 600);
        A5.crc2.closePath();
        A5.crc2.stroke();
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=Aufgabe05.js.map