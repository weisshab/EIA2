var A6;
(function (A6) {
    class Tree {
        constructor() {
            this.setColor();
            this.setStart();
            this.draw();
        }
        draw() {
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x, this.y);
            A6.crc2.lineTo(this.x + 20, this.y + 30);
            A6.crc2.lineTo(this.x - 20, this.y + 30);
            A6.crc2.closePath();
            A6.crc2.stroke();
            A6.crc2.fillStyle = this.color;
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x, this.y + 30);
            A6.crc2.lineTo(this.x + 20, this.y + 60);
            A6.crc2.lineTo(this.x - 20, this.y + 60);
            A6.crc2.closePath();
            A6.crc2.stroke();
            A6.crc2.fillStyle = this.color;
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x - 5, this.y + 90);
            A6.crc2.lineTo(this.x + 5, this.y + 90);
            A6.crc2.lineTo(this.x + 5, this.y + 110);
            A6.crc2.lineTo(this.x - 5, this.y + 110);
            A6.crc2.closePath();
            A6.crc2.stroke();
            A6.crc2.fillStyle = "#61210B";
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x, this.y + 60);
            A6.crc2.lineTo(this.x + 20, this.y + 90);
            A6.crc2.lineTo(this.x - 20, this.y + 90);
            A6.crc2.closePath();
            A6.crc2.stroke();
            A6.crc2.fillStyle = this.color;
            A6.crc2.fill();
        }
        setStart() {
            this.x = Math.random() * 400;
            this.y = 400 + Math.random() * 100;
        }
        setColor() {
            this.color = "#0B610B";
        }
    }
    A6.Tree = Tree;
})(A6 || (A6 = {}));
//# sourceMappingURL=Tree.js.map