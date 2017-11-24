namespace A6 {

    export class MovingObjects {                 //Superklasse für sich bewegende Objekte
        x: number;
        y: number;
        
        color1: string;
        color2: string;
        color3: string;

        constructor() {
            this.setColor();
            this.setStart();
        }

        update(): void {
            this.move();
            this.draw();
        }

        draw(): void {
            //Unbefüllt
        }

        move(): void {
            //Unbefüllt
        }

        setStart(): void {
            //Unbefüllt
        }

        setStartNew(): void {
            //Unbefüllt
        }

        setColor(): void {
            //Unbefüllt;
        }

    }

}