var A5;
(function (A5) {
    class Snow {
        constructor() {
            this.setColor();
            this.setStart();
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            drawSnow(this.x, this.y);
        }
        move() {
            this.x += 0;
            this.y += 2;
        }
        setStart() {
            this.x = Math.random() * 800;
            this.y = Math.random() * 600;
        }
        setStartNew() {
            this.x = Math.random() * 800;
            this.y = 0;
        }
        setColor() {
            this.color = "#ffffff";
        }
    }
    A5.Snow = Snow;
    //Schneeflocke
    function drawSnow(_x, _y) {
        A5.crc2.beginPath();
        A5.crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.fillStyle = "#ffffff";
        A5.crc2.fill();
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=Snow.js.map