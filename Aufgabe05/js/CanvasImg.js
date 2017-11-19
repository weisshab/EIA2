var A5;
(function (A5) {
    class CanvasImg {
        constructor() {
            this.draw();
        }
        draw() {
            //Himmel
            A5.crc2.fillStyle = "#81F7F3";
            A5.crc2.fillRect(0, 0, 800, 600);
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
            //Schnee Piste
            A5.crc2.beginPath();
            A5.crc2.moveTo(0, 0);
            A5.crc2.lineTo(800, 600);
            A5.crc2.lineTo(0, 600);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
            //Sonne
            A5.crc2.beginPath();
            A5.crc2.arc(700, 60, 35, 0, 2 * Math.PI);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = "#ffff00";
            A5.crc2.fill();
            //Schneemann
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
            //Ski-Lift
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
    }
    A5.CanvasImg = CanvasImg;
})(A5 || (A5 = {}));
//# sourceMappingURL=CanvasImg.js.map