/* 
Aufgabe: Funktionen A4
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 12.11.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/

namespace A5 {

    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;

    let ski: Skier[] = [];

    let snow: Snow[] = [];         //Startwert Schneeflocken

    let cloudPos: number[] = [];        //Startwert Wolken


    function init(): void {

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        //Werte für Schneeflocken
        for (let i: number = 0; i < 500; i++) {
            let s: Snow = new Snow();
            s.setColor();
            snow[i] = s;
        }

        //hier werden random 6 Wolken erzeugt
        for (let i: number = 0; i < 6; i++) {
            cloudPos.push(Math.random() * 800, Math.random() * 100);
        }

        drawSky();      //Himmel zeichnen

        drawMount();    //Berge zeichnen

        drawPiste();    //Piste zeichnen

        drawSun();      //Sonne zeichnen

        drawSnowman();  //Schneemann zeichnen

        drawLift();     //Skilift zeichnen


        drawTree(100, 200, "#0B610B");  //fest positionierter Baum

        //random Bäume zeichnen
        for (let i: number = 0; i < 6; i++) {
            let x: number = Math.random() * 400;
            let y: number = 400 + Math.random() * 100;
            drawTree(x, y, "#0B610B");
        }

        for (let i: number = 0; i < 4; i++) {
            let s: Skier = new Skier();
            s.setColor();
            ski[i] = s;
        }

        //ImageData des Camvas in imgData abspeichern
        imgData = crc2.getImageData(0, 0, 800, 600);

        //Animierte Elemente
        animate();


    }

    //Animation
    function animate(): void {

        console.log("Timeout");
        crc2.putImageData(imgData, 0, 0);

        //Animation Schnee
        for (let i: number = 0; i < snow.length; i += 2) {
            let s: Snow = snow[i];
            s.update();

            if (s.y > 600) {
                s.setStartNew();
            }
        }

        //Animation Skifahrer

        for (let i: number = 0; i < ski.length; i++) {
            let s: Skier = ski[i];
            s.update();

            if (s.y > 600) {
                s.setStart();
            }
        }



        //Animation Wolken
        for (let i: number = 0; i < cloudPos.length; i += 2) {
            cloudPos[i] += 2;
            if (cloudPos[i] > 800) {
                cloudPos[i] = 0;
            }
            drawCloud(cloudPos[i], cloudPos[i - 1], "#ffffff");

        }

        //Alle Xms 
        window.setTimeout(animate, 30);

    }


    //Bäume
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
    
    //Himmel
    function drawSky(): void {
        crc2.fillStyle = "#81F7F3";
        crc2.fillRect(0, 0, 800, 600);
    }

    //Berge
    function drawMount(): void {

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

    }



    //Schnee Piste

    function drawPiste(): void {
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
    }



    //Sonne

    function drawSun(): void {
        crc2.beginPath();
        crc2.arc(700, 60, 35, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffff00";
        crc2.fill();
    }


    //Schneemann

    function drawSnowman(): void {
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
    }

    //Ski-Lift

    function drawLift(): void {
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
