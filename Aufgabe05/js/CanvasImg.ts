namespace A5 {

    export class CanvasImg {                 //CanvasImg Klasse

        constructor() {
            this.draw();
        }

        draw(): void {

            //Himmel
            crc2.fillStyle = "#81F7F3";
            crc2.fillRect(0, 0, 800, 600);

            //Berg1
            crc2.beginPath();
            crc2.moveTo(600, 200);
            crc2.lineTo(800, 600);
            crc2.lineTo(300, 600);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#555555";
            crc2.fill();

            //Berg2
            crc2.beginPath();
            crc2.moveTo(400, 150);
            crc2.lineTo(700, 600);
            crc2.lineTo(100, 600);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#555555";
            crc2.fill();


            //Schnee Piste

            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(800, 600);
            crc2.lineTo(0, 600);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#ffffff";
            crc2.fill();

            //Sonne

            crc2.beginPath();
            crc2.arc(700, 60, 35, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#ffff00";
            crc2.fill();

            //Schneemann

            crc2.beginPath();
            crc2.arc(450, 495, 12, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#A9F5F2";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(450, 520, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#A9F5F2";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(450, 555, 30, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "#A9F5F2";
            crc2.fill();


            //Ski-Lift

            crc2.fillStyle = "#000000";     //Masten
            crc2.fillRect(100, 76, 5, 70);

            crc2.fillStyle = "#000000";     //Querbalken
            crc2.fillRect(90, 76, 10, 5);

            crc2.fillStyle = "#000000";     //Masten
            crc2.fillRect(200, 152, 5, 70);

            crc2.fillStyle = "#000000";     //Querbalken
            crc2.fillRect(190, 152, 10, 5);

            crc2.fillStyle = "#000000";     //Masten
            crc2.fillRect(300, 228, 5, 70);

            crc2.fillStyle = "#000000";     //Querbalken
            crc2.fillRect(290, 228, 10, 5);

            crc2.fillStyle = "#000000";     //Masten
            crc2.fillRect(400, 304, 5, 70);

            crc2.fillStyle = "#000000";     //Querbalken
            crc2.fillRect(390, 304, 10, 5);

            crc2.fillStyle = "#000000";     //Masten
            crc2.fillRect(500, 380, 5, 70);

            crc2.fillStyle = "#000000";     //Querbalken
            crc2.fillRect(490, 380, 10, 5);

            crc2.fillStyle = "#000000";     //Masten
            crc2.fillRect(600, 456, 5, 70);

            crc2.fillStyle = "#000000";     //Querbalken
            crc2.fillRect(590, 456, 10, 5);


            crc2.beginPath();       //Seil
            crc2.moveTo(0, 10);
            crc2.lineTo(782, 600);
            crc2.closePath();
            crc2.stroke();

        }
    }
}