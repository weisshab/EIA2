var A5;
(function (A5) {
    class Cloud {
        constructor() {
            this.setColor();
            this.setStart();
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            //Wolke
            A5.crc2.beginPath();
            A5.crc2.arc(this.x, this.y, 20, 0, 2 * Math.PI);
            A5.crc2.closePath();
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 20, this.y + 10, 20, 0, 2 * Math.PI);
            A5.crc2.closePath();
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x, this.y + 10, 20, 0, 2 * Math.PI);
            A5.crc2.closePath();
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x - 20, this.y, 20, 0, 2 * Math.PI);
            A5.crc2.closePath();
            A5.crc2.fillStyle = "#ffffff";
            A5.crc2.fill();
        }
        move() {
            this.x += 2;
            this.y += 0;
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
            this.color = "#ffffff";
        }
    }
    A5.Cloud = Cloud;
})(A5 || (A5 = {}));
//# sourceMappingURL=Cloud.js.map