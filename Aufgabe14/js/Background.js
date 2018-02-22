var Abschluss;
(function (Abschluss) {
    class Background {
        constructor() {
            this.draw();
        }
        draw() {
            //�Hintergrund
            Abschluss.crc2.fillStyle = "#F5BCA9";
            Abschluss.crc2.fillRect(0, 0, 800, 600);
            //W�nde
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(0, 0);
            Abschluss.crc2.lineTo(150, 150);
            Abschluss.crc2.lineTo(650, 150);
            Abschluss.crc2.lineTo(800, 0);
            Abschluss.crc2.fillStyle = "#F3E2A9";
            Abschluss.crc2.fill();
            Abschluss.crc2.strokeStyle = "#000000";
            Abschluss.crc2.stroke();
            Abschluss.crc2.closePath();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(0, 600);
            Abschluss.crc2.lineTo(150, 450);
            Abschluss.crc2.lineTo(650, 450);
            Abschluss.crc2.lineTo(800, 600);
            Abschluss.crc2.fillStyle = "#F3E2A9";
            Abschluss.crc2.fill();
            Abschluss.crc2.strokeStyle = "#000000";
            Abschluss.crc2.stroke();
            Abschluss.crc2.closePath();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(150, 150);
            Abschluss.crc2.lineTo(150, 450);
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
            Abschluss.crc2.closePath();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(650, 150);
            Abschluss.crc2.lineTo(650, 450);
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
            Abschluss.crc2.closePath();
        }
    }
    Abschluss.Background = Background;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Background.js.map