namespace Ue1 {
    window.addEventListener("load", init);
    document.addEventListener("click", animateThrow);
    document.addEventListener("touchstart", animateThrow);

    let canvas: HTMLCanvasElement;
    console.log(canvas);

    let crc2: CanvasRenderingContext2D;
    console.log(crc2);

    let ballPos: number[] = [400, 450, 60];

    let imgData: ImageData;

    export function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //´Hintergrund
        crc2.fillStyle = "#F5BCA9";
        crc2.fillRect(0, 0, 800, 600);

        //Wände
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(150, 150);
        crc2.lineTo(650, 150);
        crc2.lineTo(800, 0);
        crc2.fillStyle = "#F3E2A9";
        crc2.fill();
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(0, 600);
        crc2.lineTo(150, 450);
        crc2.lineTo(650, 450);
        crc2.lineTo(800, 600);
        crc2.fillStyle = "#F3E2A9";
        crc2.fill();
        crc2.strokeStyle = "#000000";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(150, 150);
        crc2.lineTo(150, 450);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(650, 150);
        crc2.lineTo(650, 450);
        crc2.strokeStyle = "black";
        crc2.stroke();
        crc2.closePath();



        drawBasket();

        drawNet();

        drawLogo();


        //ImageData des Camvas in imgData abspeichern
        imgData = crc2.getImageData(0, 0, 800, 600);
    }

    function drawLogo(): void {

        crc2.font = "40px Arial black";
        crc2.fillStyle = "red";
        crc2.fillText("CLICK     SCORE", 230, 373);

        crc2.beginPath();
        crc2.moveTo(377, 320);
        crc2.lineTo(420, 320);
        crc2.lineTo(420, 360);
        crc2.lineTo(380, 360);
        crc2.lineTo(380, 400);
        crc2.lineTo(423, 400);
        crc2.lineWidth = 10;
        crc2.stroke();
        
        crc2.rect(383, 550, 40, 40);
        crc2.lineWidth = 3;
        crc2.stroke();
        
        crc2.font = "50px Arial black";
        crc2.fillStyle = "black";
        crc2.fillText("⟳", 382, 585);


    }

    function drawBasket(): void {
        //Korb-Wand
        crc2.rect(350, 200, 100, 70);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "#000000";
        crc2.stroke();

        crc2.rect(383, 220, 35, 30);
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.lineWidth = 2;
        crc2.strokeStyle = "red";
        crc2.stroke();

        //Korbrand
        crc2.beginPath();
        crc2.moveTo(380, 253);
        crc2.lineTo(421, 253);
        crc2.lineWidth = 3;
        crc2.strokeStyle = "black";
        crc2.stroke();

    }

    function drawNet(): void {
        //Netz
        crc2.beginPath();
        crc2.moveTo(381, 253);
        crc2.lineTo(410, 282);
        crc2.lineWidth = 1.5;
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(421, 253);
        crc2.lineTo(392, 282);
        crc2.lineWidth = 1.5;
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(380, 253);
        crc2.lineTo(392, 282);
        crc2.lineWidth = 1.5;
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(421, 253);
        crc2.lineTo(410, 282);
        crc2.lineWidth = 1.5;
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(400, 253);
        crc2.lineTo(392, 282);
        crc2.lineWidth = 1.5;
        crc2.strokeStyle = "black";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(400, 253);
        crc2.lineTo(410, 282);
        crc2.lineWidth = 1.5;
        crc2.strokeStyle = "black";
        crc2.stroke();
    }

    function drawBall(_x: number, _y: number, _cx: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, _cx, 0, 2 * Math.PI);
        crc2.fillStyle = "orange";
        crc2.fill();
        crc2.lineWidth = 1;
        crc2.stroke();
    }

    function animateFailLe(): void {
        if (ballPos[2] > 30) {
            ballPos[0] -= 70;
            ballPos[1] -= 50;
            ballPos[2] -= 7;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
        } else if (ballPos[2] > 20) {

            ballPos[0] -= 70;
            ballPos[1] += 20;
            ballPos[2] -= 2 * 5;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);


        } else if (ballPos[1] < 445) {

            ballPos[0] -= 50;
            ballPos[1] += 30;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
        }

        else {
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
        }

        //Alle 50ms 
        window.setTimeout(animateScore, 50);
    }

    function animateFailR(): void {
        if (ballPos[2] > 30) {
            ballPos[0] += 70;
            ballPos[1] -= 50;
            ballPos[2] -= 7;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
        } else if (ballPos[2] > 20) {

            ballPos[0] += 70;
            ballPos[1] += 20;
            ballPos[2] -= 2 * 5;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);


        } else if (ballPos[1] < 445) {

            ballPos[0] += 50;
            ballPos[1] += 30;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
        }

        else {
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
        }

        //Alle 50ms 
        window.setTimeout(animateScore, 50);
    }

    function animateScore(): void {
        crc2.putImageData(imgData, 0, 0);

        if (ballPos[2] > 30) {

            ballPos[1] -= 50;
            ballPos[2] -= 7;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
        } else if (ballPos[2] > 20) {

            ballPos[1] += 20;
            ballPos[2] -= 2 * 5;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);


        } else if (ballPos[1] < 445) {
            ballPos[1] += 20;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            drawNet();
        }

        else {
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
        }

        //Alle 50ms 
        window.setTimeout(animateScore, 50);
    }

    function animateThrow(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        if (x < 425 && x > 392 && y < 256 && y > 228) {
            animateScore();
        }

        else if (x > 425 && x < 800 && y < 600 && y > 0) {
            animateFailR();
        }

        else if (x < 392 && x > 0 && y < 600 && y > 0) {
            animateFailLe();
        }
        
        else if (x < 425 && x > 392 && y > 559 && y < 596)  {
            location.reload();   
        }

        console.log(x, y);
    }
}