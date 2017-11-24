namespace A6 {

    export class MovingObjects {                 //Superklasse f�r sich bewegende Objekte
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
            //Unbef�llt
        }

        move(): void {
            //Unbef�llt
        }

        setStart(): void {
            //Unbef�llt
        }

        setStartNew(): void {
            //Unbef�llt
        }

        setColor(): void {
            //Unbef�llt;
        }

    }

}