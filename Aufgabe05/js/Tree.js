var A5;
(function (A5) {
    class Tree {
        constructor() {
            this.setColor();
            this.setStart();
            this.draw();
        }
        draw() {
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x, this.y);
            A5.crc2.lineTo(this.x + 20, this.y + 30);
            A5.crc2.lineTo(this.x - 20, this.y + 30);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = this.color;
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x, this.y + 30);
            A5.crc2.lineTo(this.x + 20, this.y + 60);
            A5.crc2.lineTo(this.x - 20, this.y + 60);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = this.color;
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x - 5, this.y + 90);
            A5.crc2.lineTo(this.x + 5, this.y + 90);
            A5.crc2.lineTo(this.x + 5, this.y + 110);
            A5.crc2.lineTo(this.x - 5, this.y + 110);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = "#61210B";
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x, this.y + 60);
            A5.crc2.lineTo(this.x + 20, this.y + 90);
            A5.crc2.lineTo(this.x - 20, this.y + 90);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = this.color;
            A5.crc2.fill();
        }
        setStart() {
            this.x = Math.random() * 400;
            this.y = 400 + Math.random() * 100;
        }
        setColor() {
            this.color = "#0B610B";
        }
    }
    A5.Tree = Tree;
})(A5 || (A5 = {}));
//# sourceMappingURL=Tree.js.map