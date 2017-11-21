var A6;
(function (A6) {
    class Skier {
        constructor() {
            this.setColor();
            this.setStart();
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x, this.y);
            A6.crc2.lineTo(this.x + 40, this.y + 15);
            A6.crc2.lineTo(this.x + 35, this.y + 18);
            A6.crc2.lineTo(this.x - 5, this.y + 3);
            A6.crc2.closePath();
            A6.crc2.stroke();
            A6.crc2.fillStyle = this.colorSki;
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.moveTo(this.x + 8, this.y - 15);
            A6.crc2.lineTo(this.x + 12, this.y - 15);
            A6.crc2.lineTo(this.x + 12, this.y + 5);
            A6.crc2.lineTo(this.x + 8, this.y + 5);
            A6.crc2.closePath();
            A6.crc2.stroke();
            A6.crc2.fillStyle = this.colorBody;
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 10, this.y - 25, 10, 0, 2 * Math.PI);
            A6.crc2.closePath();
            A6.crc2.stroke();
            A6.crc2.fillStyle = this.colorHead;
            A6.crc2.fill();
            A6.crc2.beginPath();
            A6.crc2.arc(this.x + 15, this.y - 27, 1, 0, 2 * Math.PI);
            A6.crc2.closePath();
            A6.crc2.stroke();
            A6.crc2.fillStyle = "#000000";
            A6.crc2.fill();
        }
        move() {
            this.x += 10;
            this.y += Math.random() * 8 + 6;
        }
        setStart() {
            this.x = Math.random() * -100;
            this.y = Math.random() * 400;
        }
        setColor() {
            this.colorHead = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorBody = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.colorSki = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
    }
    A6.Skier = Skier;
    //Skifahrer
    function drawSki(x, y, _colorHead, _colorBody, _colorSki) {
    }
})(A6 || (A6 = {}));
//# sourceMappingURL=Skier.js.map