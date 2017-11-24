namespace A6 {

    export class Snow extends MovingObjects {                 //Schnee Subklasse

        constructor() {
            super();
            this.setColor();
            this.setStart();
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
            this.y += Math.random() * 4;
            
            if (this.y > 600) {
                this.setStartNew();
            }
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
            this.color1 = "#ffffff";
        }

    }

}
