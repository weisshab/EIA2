namespace A6 {

    export class Cloud {                 //Wolken Klasse
        x: number;
        y: number;
        color: string;

        constructor() {
            this.setColor();
            this.setStart();
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            //Wolke

            crc2.beginPath();
            crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 20, this.y + 10, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x, this.y + 10, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x - 20, this.y, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();

        }

        move(): void {
            this.x += 2;
            this.y += 0;
        }

        setStart(): void {
            this.x = Math.random() * 800;
            this.y = Math.random() * 100;
        }

        setStartNew(): void {
            this.x = -20;
            this.y = Math.random() * 100;
        }

        setColor(): void {
            this.color = "#ffffff";
        }

    }

}
