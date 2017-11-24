var A6;
(function (A6) {
    class Cloud extends A6.MovingObjects {
        constructor() {
            super();
            this.setColor();
            this.setStart();
        }
        draw() {
            //Wolke
            A6.crc2.beginPath();
            A6.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            A6.crc2.closePath();
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 20, this.y + 10, 20, 0, 2 * Math.PI);
            A6.crc2.closePath();
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x, this.y + 10, 20, 0, 2 * Math.PI);
            A6.crc2.closePath();
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x - 20, this.y, 20, 0, 2 * Math.PI);
            A6.crc2.closePath();
            A6.crc2.fillStyle = "#ffffff";
            A6.crc2.fill();
        }
        move() {
            this.x += 2;
            this.y += 0;
            if (this.x > 810) {
                this.setStartNew();
            }
        }
        setStart() {
            this.x = Math.random() * 800;
            this.y = Math.random() * 100;
        }
        setStartNew() {
            this.x = -20;
            this.y = Math.random() * 100;
        }
        setColor() {
            this.color1 = "#ffffff";
        }
    }
    A6.Cloud = Cloud;
})(A6 || (A6 = {}));
//# sourceMappingURL=Cloud.js.map