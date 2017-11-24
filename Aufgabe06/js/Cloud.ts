namespace A6 {

    export class Cloud extends MovingObjects {                 //Wolken Subklasse

        constructor() {
            super();
            this.setColor();
            this.setStart();
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

            if (this.x > 810) {
                this.setStartNew();
            }
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
            this.color1 = "#ffffff";
        }

    }

}
