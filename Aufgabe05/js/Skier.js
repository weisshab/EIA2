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
            A5.drawSki(this.x, this.y, this.colorHead, this.colorBody, this.colorSki);
        }
        move() {
            this.x += 8;
            this.y += Math.random() * 6 + 6;
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
})(A5 || (A5 = {}));
//# sourceMappingURL=Skier.js.map