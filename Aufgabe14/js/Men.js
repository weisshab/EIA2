var Abschluss;
(function (Abschluss) {
    class Men {
        constructor() {
            this.x = Math.random() * 450 + 150;
            this.draw();
        }
        draw() {
            //_x=300
            Abschluss.crc2.beginPath();
            Abschluss.crc2.arc(this.x, 353, 22, 0, 2 * Math.PI);
            Abschluss.crc2.fillStyle = "brown";
            Abschluss.crc2.fill();
            Abschluss.crc2.lineWidth = 2;
            Abschluss.crc2.stroke();
            Abschluss.crc2.closePath();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(this.x, 375);
            Abschluss.crc2.lineTo(this.x, 425);
            Abschluss.crc2.lineTo(this.x + 30, 475);
            Abschluss.crc2.lineWidth = 6;
            Abschluss.crc2.stroke();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(this.x, 425);
            Abschluss.crc2.lineTo(this.x - 30, 475);
            Abschluss.crc2.lineWidth = 6;
            Abschluss.crc2.stroke();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(this.x, 390);
            Abschluss.crc2.lineTo(this.x - 40, 330);
            Abschluss.crc2.lineWidth = 6;
            Abschluss.crc2.stroke();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(this.x, 390);
            Abschluss.crc2.lineTo(this.x + 40, 330);
            Abschluss.crc2.lineWidth = 6;
            Abschluss.crc2.stroke();
        }
    }
    Abschluss.Men = Men;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Men.js.map