var Abschluss;
(function (Abschluss) {
    class Basket {
        constructor() {
            this.drawBasket();
            this.drawNet();
        }
        drawBasket() {
            //Korb-Wand
            Abschluss.crc2.rect(350, 200, 100, 70);
            Abschluss.crc2.fillStyle = "#ffffff";
            Abschluss.crc2.fill();
            Abschluss.crc2.lineWidth = 2;
            Abschluss.crc2.strokeStyle = "#000000";
            Abschluss.crc2.stroke();
            Abschluss.crc2.rect(383, 220, 35, 30);
            Abschluss.crc2.fillStyle = "#ffffff";
            Abschluss.crc2.fill();
            Abschluss.crc2.lineWidth = 2;
            Abschluss.crc2.strokeStyle = "red";
            Abschluss.crc2.stroke();
            //Korbrand
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(380, 253);
            Abschluss.crc2.lineTo(421, 253);
            Abschluss.crc2.lineWidth = 3;
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
        }
        drawNet() {
            //Netz
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(380, 253);
            Abschluss.crc2.lineTo(421, 253);
            Abschluss.crc2.lineWidth = 3;
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(381, 253);
            Abschluss.crc2.lineTo(410, 282);
            Abschluss.crc2.lineWidth = 1.5;
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(421, 253);
            Abschluss.crc2.lineTo(392, 282);
            Abschluss.crc2.lineWidth = 1.5;
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(380, 253);
            Abschluss.crc2.lineTo(392, 282);
            Abschluss.crc2.lineWidth = 1.5;
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(421, 253);
            Abschluss.crc2.lineTo(410, 282);
            Abschluss.crc2.lineWidth = 1.5;
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(400, 253);
            Abschluss.crc2.lineTo(392, 282);
            Abschluss.crc2.lineWidth = 1.5;
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
            Abschluss.crc2.beginPath();
            Abschluss.crc2.moveTo(400, 253);
            Abschluss.crc2.lineTo(410, 282);
            Abschluss.crc2.lineWidth = 1.5;
            Abschluss.crc2.strokeStyle = "black";
            Abschluss.crc2.stroke();
        }
    }
    Abschluss.Basket = Basket;
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=Basket.js.map