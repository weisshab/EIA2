namespace A6 {

    export class Snow {                 //Schnee Klasse
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
            //Schneeflocke
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#ffffff";
            crc2.fill();
        }

        move(): void {
            this.x += 0;
            this.y += 2;
        }

        setStart(): void {
            this.x = Math.random() * 800;
            this.y = Math.random() * 600;
        }

        setStartNew(): void {
            this.x = Math.random() * 800;
            this.y = 0;
        }

        setColor(): void {
            this.color = "#ffffff";
        }

    }

}
