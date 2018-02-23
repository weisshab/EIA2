namespace Abschluss {
    export class Men {

        x: number = Math.random() * 450 + 150;

        constructor() {
            this.draw();
        }

        draw(): void {
            //_x=300

            crc2.beginPath();
            crc2.arc(this.x, 353, 22, 0, 2 * Math.PI);
            crc2.fillStyle = "brown";
            crc2.fill();
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();

            crc2.beginPath();
            crc2.moveTo(this.x, 375);
            crc2.lineTo(this.x, 425);
            crc2.lineTo(this.x + 30, 475);
            crc2.lineWidth = 6;
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, 425);
            crc2.lineTo(this.x - 30, 475);
            crc2.lineWidth = 6;
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, 390);
            crc2.lineTo(this.x - 40, 330);
            crc2.lineWidth = 6;
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x, 390);
            crc2.lineTo(this.x + 40, 330);
            crc2.lineWidth = 6;
            crc2.stroke();
        }
    }
}