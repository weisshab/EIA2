var Ue1;
(function (Ue1) {
    window.addEventListener("load", init);
    document.addEventListener("click", Score);
    let canvas;
    console.log(canvas);
    let crc2;
    console.log(crc2);
    let ballPos = [350, 450, 120, 120];
    let imgData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //�Hintergrund
        crc2.fillStyle = "#F5BCA9";
        crc2.fillRect(0, 0, 800, 600);
        //W�nde
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
        drawBall(ballPos[0], ballPos[1], ballPos[2], ballPos[3]);
        //ImageData des Camvas in imgData abspeichern
        imgData = crc2.getImageData(0, 0, 800, 600);
    }
    Ue1.init = init;
    function drawBasket() {
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
    function drawBall(_x, _y, _cx, _cy) {
        var image = new Image();
        image.src = "img/Ball.gif";
        crc2.drawImage(image, _x, _y, _cx, _cy);
    }
    function animateScore() {
        crc2.putImageData(imgData, 0, 0);
        ballPos[0] -= 2 * 5;
        ballPos[1] += 0;
        ballPos[2] -= 2 * 5;
        ballPos[3] -= 2 * 5;
        drawBall(ballPos[0], ballPos[1], ballPos[2], ballPos[3]);
        //Alle 50ms 
        window.setTimeout(animateScore, 50);
    }
    function Score(_event) {
        var x = _event.clientX;
        var y = _event.clientY;
        if (x <= 425 && x <= 392 && y <= 256 && y <= 228) {
            animateScore();
        }
        console.log(x, y);
    }
})(Ue1 || (Ue1 = {}));
//# sourceMappingURL=main.js.map