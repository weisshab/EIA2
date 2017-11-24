namespace A6 {

    export class Skier extends MovingObjects {                 //Skifahrer Subklasse

        constructor() {
            super();
            this.setColor();
            this.setStart();
        }

        draw(): void {

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 40, this.y + 15);
            crc2.lineTo(this.x + 35, this.y + 18);
            crc2.lineTo(this.x - 5, this.y + 3);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color3;
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x + 8, this.y - 15);
            crc2.lineTo(this.x + 12, this.y - 15);
            crc2.lineTo(this.x + 12, this.y + 5);
            crc2.lineTo(this.x + 8, this.y + 5);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color2;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 10, this.y - 25, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color1;
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 15, this.y - 27, 1, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#000000";
            crc2.fill();
        }

        move(): void {
            this.x += 10;
            this.y += Math.random() * 8 + 6;

            if (this.y > 600) {
                this.setStart();
            }

        }

        setStart(): void {
            this.x = Math.random() * -100;
            this.y = Math.random() * 400;
        }

        setColor(): void {
            this.color1 = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.color2 = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.color3 = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }



    }

}