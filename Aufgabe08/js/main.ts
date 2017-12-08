/*
Aufgabe: 8
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 07.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A8 {
    window.addEventListener("load", input);

    function input(): void {
        let numbre: string = prompt("Gib eine Zahl zwischen 10 und 100 ein und schau was passiert! :)");

        if (Number.isNaN(parseInt(numbre)) || (parseInt(numbre)) < 10 || (parseInt(numbre) > 100)) {
            alert("Zahl ist nicht zwischen 10 und 100 mein Freund, versuche es nochmal");
            input();
        } else {
            
            //Random Größen sehen cooler aus
            for (let i: number = 0; i < parseInt(numbre); i++) {
                main(Math.random() * window.innerWidth, Math.random() * window.innerHeight, 10 + Math.random() * 70, Math.random() * 360);
            }

        }


        function main(_left: number, _top: number, _size: number, _color: number): void {

            let square: HTMLDivElement = document.createElement("div");
            square.style.position = "absolute";
            square.style.width = `${_size}px`;
            square.style.height = `${_size}px`;

            square.style.left = `${_left}px`;
            square.style.top = `${_top}px`;

            square.style.border = "2px solid black";

            square.style.backgroundColor = "hsl(" + _color + ", 100%, 50%)";

            document.body.appendChild(square);
        }
    }
}
