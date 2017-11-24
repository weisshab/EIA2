var A6;
(function (A6) {
    class Snow extends A6.MovingObjects {
        constructor() {
            super();
            this.setColor();
            this.setStart();
        }
        draw() {
            //Schneeflocke
            A6.crc2.beginPath();
            A6.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            A6.crc2.closePath();
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
        }
        move() {
            this.x += 0;
            this.y += Math.random() * 4;
            if (this.y > 600) {
                this.setStartNew();
            }
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
            this.color1 = "#ffffff";
        }
    }
    A6.Snow = Snow;
})(A6 || (A6 = {}));
//# sourceMappingURL=Snow.js.map