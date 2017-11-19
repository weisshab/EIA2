namespace A5 {

    export class Tree {                 //Baum Klasse
        x: number;
        y: number;
        color: string;

        constructor() {
            this.setColor();
            this.setStart();
            this.draw();
        }

        draw(): void {

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x + 20, this.y + 30);
            crc2.lineTo(this.x - 20, this.y + 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 30);
            crc2.lineTo(this.x + 20, this.y + 60);
            crc2.lineTo(this.x - 20, this.y + 60);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x - 5, this.y + 90);
            crc2.lineTo(this.x + 5, this.y + 90);
            crc2.lineTo(this.x + 5, this.y + 110);
            crc2.lineTo(this.x - 5, this.y + 110);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#61210B";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 60);
            crc2.lineTo(this.x + 20, this.y + 90);
            crc2.lineTo(this.x - 20, this.y + 90);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();

        }

        setStart(): void {
            this.x = Math.random() * 400;
            this.y = 400 + Math.random() * 100;
        }
        
        setColor(): void {
            this.color = "#0B610B";    
        }

    }
}