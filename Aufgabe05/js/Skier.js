var A5;
(function (A5) {
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
            drawSki(this.x, this.y, this.colorHead, this.colorBody, this.colorSki);
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
    A5.Skier = Skier;
    //Skifahrer
    function drawSki(x, y, _colorHead, _colorBody, _colorSki) {
        A5.crc2.beginPath();
        A5.crc2.moveTo(x, y);
        A5.crc2.lineTo(x + 40, y + 15);
        A5.crc2.lineTo(x + 35, y + 18);
        A5.crc2.lineTo(x - 5, y + 3);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = _colorSki;
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.moveTo(x + 8, y - 15);
        A5.crc2.lineTo(x + 12, y - 15);
        A5.crc2.lineTo(x + 12, y + 5);
        A5.crc2.lineTo(x + 8, y + 5);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = _colorBody;
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.arc(x + 10, y - 25, 10, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = _colorHead;
        A5.crc2.fill();
        A5.crc2.beginPath();
        A5.crc2.arc(x + 15, y - 27, 1, 0, 2 * Math.PI);
        A5.crc2.closePath();
        A5.crc2.stroke();
        A5.crc2.fillStyle = "#000000";
        A5.crc2.fill();
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=Skier.js.map