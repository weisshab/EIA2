namespace A5 {

    export class Skier {                 //Skifahrer Klasse
        x: number;
        y: number;
        colorHead: string;
        colorBody: string;
        colorSki: string;

        constructor() {
            this.setColor();
            this.setStart();
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            drawSki(this.x, this.y, this.colorHead, this.colorBody, this.colorSki);
        }

        move(): void {
            this.x += 8;
            this.y += Math.random() * 6 + 6;
        }

        setStart(): void {
            this.x = Math.random() * -100;
            this.y = Math.random() * 400;
        }

        setColor(): void {
            this.colorHead = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorSki = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }

    }

    //Skifahrer

    function drawSki(x: number, y: number, _colorHead: string, _colorBody: string, _colorSki: string): void {
        crc2.beginPath();
        crc2.moveTo(x, y);
        crc2.lineTo(x + 40, y + 15);
        crc2.lineTo(x + 35, y + 18);
        crc2.lineTo(x - 5, y + 3);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _colorSki;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(x + 8, y - 15);
        crc2.lineTo(x + 12, y - 15);
        crc2.lineTo(x + 12, y + 5);
        crc2.lineTo(x + 8, y + 5);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _colorBody;
        crc2.fill();

        crc2.beginPath();
        crc2.arc(x + 10, y - 25, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _colorHead;
        crc2.fill();

        crc2.beginPath();
        crc2.arc(x + 15, y - 27, 1, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();
    }

}