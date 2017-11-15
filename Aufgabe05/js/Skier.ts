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
}