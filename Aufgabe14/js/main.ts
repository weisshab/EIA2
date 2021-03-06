namespace Abschluss {
    window.addEventListener("load", init);

    let canvas: HTMLCanvasElement;


    export let crc2: CanvasRenderingContext2D;
    console.log(crc2);

    let score: HTMLDivElement = document.createElement("div");

    let ballPos: number[] = [400, 450, 60];

    let imgData: ImageData;

    let background: Background;

    let men: Men;

    let basket: Basket;

    var audio = new Audio("NBASound.mp3");


    export function init(): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", animateThrow);



        background = new Background();



        basket = new Basket();

        men = new Men();

        score.innerHTML = "SCOOOORE!";
        score.id = "score";
        document.body.appendChild(score);


        //ImageData des Camvas in imgData abspeichern
        imgData = crc2.getImageData(0, 0, 800, 600);
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
            men.draw();
        } else if (ballPos[2] > 20) {

            ballPos[0] -= 70;
            ballPos[1] += 20;
            ballPos[2] -= 2 * 5;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();


        } else if (ballPos[1] < 445) {

            ballPos[0] -= 50;
            ballPos[1] += 30;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();
        }

        else {
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();
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
            men.draw();
        } else if (ballPos[2] > 20) {

            ballPos[0] += 70;
            ballPos[1] += 20;
            ballPos[2] -= 2 * 5;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();


        } else if (ballPos[1] < 445) {

            ballPos[0] += 50;
            ballPos[1] += 30;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();
        }

        else {
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();

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
            men.draw();


        } else if (ballPos[1] < 445) {
            ballPos[1] += 20;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            basket.drawNet();
            men.draw();
        }

        else {
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();
        }

        //Alle 50ms 
        window.setTimeout(animateScore, 50);
    }

    function animateThrow(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;

        if (x < 425 && x > 392 && y < 256 && y > 228) {
            animateScore();
            score.style.display = "inline";

            var aud: HTMLMediaElement = <HTMLMediaElement>document.getElementById("NBA");
            aud.play();

        }

        else if (x > 425 && x < 800 && y < 600 && y > 0) {
            animateFailR();
            console.log("failR");
        }

        else if (x < 392 && x > 0 && y < 600 && y > 0) {
            animateFailLe();
            console.log("failLe");
        }


        console.log(x, y);
    }

}