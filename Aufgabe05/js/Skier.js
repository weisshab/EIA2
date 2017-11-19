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
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x, this.y);
            A5.crc2.lineTo(this.x + 40, this.y + 15);
            A5.crc2.lineTo(this.x + 35, this.y + 18);
            A5.crc2.lineTo(this.x - 5, this.y + 3);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = this.colorSki;
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.moveTo(this.x + 8, this.y - 15);
            A5.crc2.lineTo(this.x + 12, this.y - 15);
            A5.crc2.lineTo(this.x + 12, this.y + 5);
            A5.crc2.lineTo(this.x + 8, this.y + 5);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = this.colorBody;
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 10, this.y - 25, 10, 0, 2 * Math.PI);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = this.colorHead;
            A5.crc2.fill();
            A5.crc2.beginPath();
            A5.crc2.arc(this.x + 15, this.y - 27, 1, 0, 2 * Math.PI);
            A5.crc2.closePath();
            A5.crc2.stroke();
            A5.crc2.fillStyle = "#000000";
            A5.crc2.fill();
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
    }
})(A5 || (A5 = {}));
//# sourceMappingURL=Skier.js.map