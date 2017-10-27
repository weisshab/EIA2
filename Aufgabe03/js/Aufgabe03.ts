/* 
Aufgabe: Funktionen A2
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 22.10.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace A3 {

    window.addEventListener("load", init);

    let crc2: CanvasRenderingContext2D;

    let imgData;


    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

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

        /*
        //Skifahrer
        crc2.beginPath();
        crc2.moveTo(240, 305);
        crc2.lineTo(280, 320);
        crc2.lineTo(275, 323);
        crc2.lineTo(235, 308);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#0000FF";
        crc2.fill();
        
        crc2.beginPath();
        crc2.moveTo(248, 290);
        crc2.lineTo(252, 290);
        crc2.lineTo(252, 310);
        crc2.lineTo(248, 310);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#DF7401";
        crc2.fill();
        
        crc2.beginPath();
        crc2.arc(250, 280, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#DF7401";
        crc2.fill();
        
        crc2.beginPath();
        crc2.arc(255, 278, 1, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#000000";
        crc2.fill();
        */

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

        drawTree(100, 200, "#0B610B");

        //random Bäume zeichnen
        for (let i: number = 1; i < 6; i++) {
            let x: number = 30 + Math.random() * 450;
            let y: number = 250 + Math.random() * 300;
            drawTree(x, y, "#0B610B");
        }

        //random Wolken zeichnen
        for (let i: number = 0; i <= 6; i++) {
            let x: number = 100 + Math.random() * 500;
            let y: number = 20 + Math.random() * 50;
            drawCloud(x, y, "#ffffff");
        }


        //        //random Schneeflocken zeichnen
        //        for (let i: number = 0; i <= 200; i++) {
        //            let x: number = Math.random() * 800;
        //            let y: number = Math.random() * 600;
        //            animateSnow();
        //        }

        imgData = crc2.getImageData(0, 0, 800, 600);


    }

    function drawTree(_x: number, _y: number, _color: string): void {

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y + 30);
        crc2.lineTo(_x - 20, _y + 30);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x, _y + 30);
        crc2.lineTo(_x + 20, _y + 60);
        crc2.lineTo(_x - 20, _y + 60);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x - 5, _y + 90);
        crc2.lineTo(_x + 5, _y + 90);
        crc2.lineTo(_x + 5, _y + 110);
        crc2.lineTo(_x - 5, _y + 110);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#61210B";
        crc2.fill();

        crc2.beginPath();
        crc2.moveTo(_x, _y + 60);
        crc2.lineTo(_x + 20, _y + 90);
        crc2.lineTo(_x - 20, _y + 90);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = _color;
        crc2.fill();
    }


    function drawCloud(_x: number, _y: number, _color: string): void {
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

    function drawSnow(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }


    //Schnee fallen lassen

    let x: number = Math.random() * 800;
    let y: number = 20;
    
    function animateSnow(): void {

        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0);

        //random Schneeflocken zeichnen
        for (let i: number = 0; i < 200; i++) {
            drawSnow(x, y);
        }

        y += 5;

        window.setTimeout(animateSnow, 50);

        //Skifahrer

        function animateSki(): void {
            crc2.beginPath();
            crc2.moveTo(240, 305);
            crc2.lineTo(280, 320);
            crc2.lineTo(275, 323);
            crc2.lineTo(235, 308);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#0000FF";
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(248, 290);
            crc2.lineTo(252, 290);
            crc2.lineTo(252, 310);
            crc2.lineTo(248, 310);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#DF7401";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(250, 280, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#DF7401";
            crc2.fill();

            crc2.beginPath();
            crc2.arc(255, 278, 1, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#000000";
            crc2.fill();
        }
    }

}
