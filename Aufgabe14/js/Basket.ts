namespace Abschluss {
    export class Basket {

        constructor() {
            this.drawBasket();
            this.drawNet();
        }

        drawBasket(): void {
            //Korb-Wand
            crc2.rect(350, 200, 100, 70);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "#000000";
            crc2.stroke();

            crc2.rect(383, 220, 35, 30);
            crc2.fillStyle = "#ffffff";
            crc2.fill();
            crc2.lineWidth = 2;
            crc2.strokeStyle = "red";
            crc2.stroke();

            //Korbrand
            crc2.beginPath();
            crc2.moveTo(380, 253);
            crc2.lineTo(421, 253);
            crc2.lineWidth = 3;
            crc2.strokeStyle = "black";
            crc2.stroke();

        }

        drawNet(): void {
            //Netz
            crc2.beginPath();
            crc2.moveTo(380, 253);
            crc2.lineTo(421, 253);
            crc2.lineWidth = 3;
            crc2.strokeStyle = "black";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(381, 253);
            crc2.lineTo(410, 282);
            crc2.lineWidth = 1.5;
            crc2.strokeStyle = "black";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(421, 253);
            crc2.lineTo(392, 282);
            crc2.lineWidth = 1.5;
            crc2.strokeStyle = "black";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(380, 253);
            crc2.lineTo(392, 282);
            crc2.lineWidth = 1.5;
            crc2.strokeStyle = "black";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(421, 253);
            crc2.lineTo(410, 282);
            crc2.lineWidth = 1.5;
            crc2.strokeStyle = "black";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(400, 253);
            crc2.lineTo(392, 282);
            crc2.lineWidth = 1.5;
            crc2.strokeStyle = "black";
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(400, 253);
            crc2.lineTo(410, 282);
            crc2.lineWidth = 1.5;
            crc2.strokeStyle = "black";
            crc2.stroke();
        }
    }
}