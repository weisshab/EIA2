var Abschluss;
(function (Abschluss) {
    window.addEventListener("load", init);
    let canvas;
    console.log(Abschluss.crc2);
    let score = document.createElement("div");
    let ballPos = [400, 450, 60];
    let imgData;
    let background;
    let men;
    let basket;
    var audio = new Audio("NBASound.mp3");
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        Abschluss.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", animateThrow);
        background = new Abschluss.Background();
        basket = new Abschluss.Basket();
        men = new Abschluss.Men();
        score.innerHTML = "SCOOOORE!";
        score.id = "score";
        document.body.appendChild(score);
        //ImageData des Camvas in imgData abspeichern
        imgData = Abschluss.crc2.getImageData(0, 0, 800, 600);
    }
    Abschluss.init = init;
    function drawBall(_x, _y, _cx) {
        Abschluss.crc2.beginPath();
        Abschluss.crc2.arc(_x, _y, _cx, 0, 2 * Math.PI);
        Abschluss.crc2.fillStyle = "orange";
        Abschluss.crc2.fill();
        Abschluss.crc2.lineWidth = 1;
        Abschluss.crc2.stroke();
    }
    function animateFailLe() {
        if (ballPos[2] > 30) {
            ballPos[0] -= 70;
            ballPos[1] -= 50;
            ballPos[2] -= 7;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();
        }
        else if (ballPos[2] > 20) {
            ballPos[0] -= 70;
            ballPos[1] += 20;
            ballPos[2] -= 2 * 5;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();
        }
        else if (ballPos[1] < 445) {
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
    function animateFailR() {
        if (ballPos[2] > 30) {
            ballPos[0] += 70;
            ballPos[1] -= 50;
            ballPos[2] -= 7;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();
        }
        else if (ballPos[2] > 20) {
            ballPos[0] += 70;
            ballPos[1] += 20;
            ballPos[2] -= 2 * 5;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();
        }
        else if (ballPos[1] < 445) {
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
    function animateScore() {
        Abschluss.crc2.putImageData(imgData, 0, 0);
        if (ballPos[2] > 30) {
            ballPos[1] -= 50;
            ballPos[2] -= 7;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
        }
        else if (ballPos[2] > 20) {
            ballPos[1] += 20;
            ballPos[2] -= 2 * 5;
            drawBall(ballPos[0], ballPos[1], ballPos[2]);
            men.draw();
        }
        else if (ballPos[1] < 445) {
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
    function animateThrow(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        if (x < 425 && x > 392 && y < 256 && y > 228) {
            animateScore();
            score.style.display = "inline";
            var aud = document.getElementById("NBA");
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
})(Abschluss || (Abschluss = {}));
//# sourceMappingURL=main.js.map