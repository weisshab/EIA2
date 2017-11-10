/*
Aufgabe: Funktionen A2
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 22.10.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
var A3;
(function (A3) {
    window.addEventListener("load", init);
    let crc2;
    let imgData;
    let snowPos = []; //Startwert Schneeflocken
    let skier = [];
    let cloudPos = []; //Startwert Wolken
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        //hier werden random 300 Schneeflocken erzeugt
        for (let i = 0; i < 300; i++) {
            snowPos.push(Math.random() * 600, Math.random() * 800);
        }
        //hier werden random 6 Wolken erzeugt
        for (let i = 0; i < 6; i++) {
            cloudPos.push(Math.random() * 800, Math.random() * 100);
        }
        for (let i = 0; i < 100; i++) {
            skier[i] = {
                x: Math.random() * -32,
                y: Math.random() * 400,
                dx: 8,
                dy: 6,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            };
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
        //ImageData des Camvas in imgData abspeichern
        imgData = crc2.getImageData(0, 0, 800, 600);
        //Animierte Elemente
        animate();
    }
    //Animation
    function animate() {
        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < snowPos.length; i += 2) {
            snowPos[i]++;
            if (snowPos[i] > 600) {
                snowPos[i] = 0;
            }
            drawSnow(snowPos[i - 1], snowPos[i]);
        }
        for (let i = 0; i < 2; i++) {
            moveAndDrawSquare(skier[i]);
        }
        for (let i = 0; i < cloudPos.length; i += 2) {
            cloudPos[i] += 2;
            if (cloudPos[i] > 800) {
                cloudPos[i] = 0;
            }
            drawCloud(cloudPos[i], cloudPos[i - 1], "#ffffff");
        }
        //Alle 50ms 
        window.setTimeout(animate, 50);
    }
    //B�ume
    function drawTree(_x, _y, _color) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y + 30);
        crc2.lineTo(_x - 20, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y + 30);
        crc2.lineTo(_x + 20, _y + 60);
        crc2.lineTo(_x - 20, _y + 60);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x - 5, _y + 90);
        crc2.lineTo(_x + 5, _y + 90);
        crc2.lineTo(_x + 5, _y + 110);
        crc2.lineTo(_x - 5, _y + 110);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#61210B";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x, _y + 60);
        crc2.lineTo(_x + 20, _y + 90);
        crc2.lineTo(_x - 20, _y + 90);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    //Wolke
    function drawCloud(_x, _y, _color) {
        crc2.beginPath();
        crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 20, _y + 10, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y + 10, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 20, _y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    //Schneeflocke
    function drawSnow(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    //Skifahrer
    function drawSki(x, y, _color) {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 40, y + 15);
        crc2.lineTo(x + 35, y + 18);
        crc2.lineTo(x - 5, y + 3);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(x + 8, y - 15);
        crc2.lineTo(x + 12, y - 15);
        crc2.lineTo(x + 12, y + 5);
        crc2.lineTo(x + 8, y + 5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 10, y - 25, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
        crc2.beginPath();
        crc2.arc(x + 15, y - 27, 1, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }
    //Himmel
    function drawSky() {
        crc2.fillStyle = "#81F7F3";
        crc2.fillRect(0, 0, 800, 600);
    }
    //Berge
    function drawMount() {
        //Berg1
        crc2.beginPath();
        crc2.moveTo(600, 200);
        crc2.lineTo(800, 600);
        crc2.lineTo(300, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#555555";
        crc2.fill();
        //Berg2
        crc2.beginPath();
        crc2.moveTo(400, 150);
        crc2.lineTo(700, 600);
        crc2.lineTo(100, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#555555";
        crc2.fill();
    }
    //Schnee Piste
    function drawPiste() {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
    //Sonne
    function drawSun() {
        crc2.beginPath();
        crc2.arc(700, 60, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffff00";
        crc2.fill();
    }
    //Schneemann
    function drawSnowman() {
        crc2.beginPath();
        crc2.arc(450, 495, 12, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#A9F5F2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(450, 520, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#A9F5F2";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(450, 555, 30, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#A9F5F2";
        crc2.fill();
    }
    //Ski-Lift
    function drawLift() {
        crc2.fillStyle = "#000000"; //Masten
        crc2.fillRect(100, 76, 5, 70);
        crc2.fillStyle = "#000000"; //Querbalken
        crc2.fillRect(90, 76, 10, 5);
        crc2.fillStyle = "#000000"; //Masten
        crc2.fillRect(200, 152, 5, 70);
        crc2.fillStyle = "#000000"; //Querbalken
        crc2.fillRect(190, 152, 10, 5);
        crc2.fillStyle = "#000000"; //Masten
        crc2.fillRect(300, 228, 5, 70);
        crc2.fillStyle = "#000000"; //Querbalken
        crc2.fillRect(290, 228, 10, 5);
        crc2.fillStyle = "#000000"; //Masten
        crc2.fillRect(400, 304, 5, 70);
        crc2.fillStyle = "#000000"; //Querbalken
        crc2.fillRect(390, 304, 10, 5);
        crc2.fillStyle = "#000000"; //Masten
        crc2.fillRect(500, 380, 5, 70);
        crc2.fillStyle = "#000000"; //Querbalken
        crc2.fillRect(490, 380, 10, 5);
        crc2.fillStyle = "#000000"; //Masten
        crc2.fillRect(600, 456, 5, 70);
        crc2.fillStyle = "#000000"; //Querbalken
        crc2.fillRect(590, 456, 10, 5);
        crc2.beginPath(); //Seil
        crc2.moveTo(0, 10);
        crc2.lineTo(782, 600);
        crc2.closePath();
        crc2.stroke();
    }
    function moveAndDrawSquare(_skier) {
        _skier.x += _skier.dx;
        _skier.y += _skier.dy; // andere Bewegungsmuster zu finden
        drawSki(_skier.x, _skier.y, _skier.color);
    }
})(A3 || (A3 = {}));
//# sourceMappingURL=Aufgabe04.js.map