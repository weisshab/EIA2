namespace Abschluss {
    export class Background {
        constructor() {
            this.draw();
        }

        draw(): void {
            //´Hintergrund
            crc2.fillStyle = "#F5BCA9";
            crc2.fillRect(0, 0, 800, 600);

            //Wände
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(150, 150);
            crc2.lineTo(650, 150);
            crc2.lineTo(800, 0);
            crc2.fillStyle = "#F3E2A9";
            crc2.fill();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(0, 600);
            crc2.lineTo(150, 450);
            crc2.lineTo(650, 450);
            crc2.lineTo(800, 600);
            crc2.fillStyle = "#F3E2A9";
            crc2.fill();
            crc2.strokeStyle = "#000000";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(150, 150);
            crc2.lineTo(150, 450);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(650, 150);
            crc2.lineTo(650, 450);
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.closePath();
        }
    }
}