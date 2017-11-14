namespace A5 {

    class SkiInfo {                 //Skifahrer Klasse
        x: number;
        y: number;
        dx: number;
        dy: number;
        colorHead: string;
        colorBody: string;
        colorSki: string;

        draw(): void {
            drawSki(this.x, this.y, this.colorHead, this.colorBody, this.colorSki);
        }

        move(): void {
            this.x += this.dx;
            this.y += this.dy;
        }
    }
}