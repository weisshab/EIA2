namespace A5 {

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
            drawCloud(this.x, this.y);
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
            this.y =  Math.random() * 100;
        }

        setColor(): void {
            this.color = "#ffffff";
        }

    }

    //Wolke
    function drawCloud(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x + 20, _y + 10, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x, _y + 10, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        crc2.beginPath();
        crc2.arc(_x - 20, _y, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }
}
