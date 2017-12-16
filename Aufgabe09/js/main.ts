/*
Aufgabe: 9
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 12.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A9 {
    window.addEventListener("load", initBlackmail);
    document.addEventListener("keydown", handleKeyDown);

    let savedLetter: string;
    let savedColor: string;


    function initBlackmail(): void {
        alert("Ihren persönlicher Erpresserbrief können Sie hier erstellen");

        for (let i: number = 0; i < 26; i++) {
            let h: HTMLHeadingElement = document.createElement("h1");
            h.innerText = String.fromCharCode(65 + i);
            h.addEventListener("mousedown", handleMouseDown);
            h.style.cssFloat = "left";
            h.style.fontSize = "30px";
            h.style.marginRight = "5px";
            h.style.marginLeft = "5px";
            h.style.padding = "5px";
            h.style.backgroundColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            document.body.appendChild(h);
        }

        writingBox();

    }


    function handleMouseDown(_event: MouseEvent): void {
        console.log(_event.target);
        let h: HTMLHeadingElement = <HTMLHeadingElement>_event.target;
        savedLetter = h.innerText;
        savedColor = h.style.backgroundColor;
        console.log(h.style.backgroundColor);
        console.log(h.style.fontSize);
    }

    function handleKeyDown(_event: KeyboardEvent): void {
        console.log(_event);

        if (_event.keyCode > 64 && _event.keyCode < 91 || _event.keyCode == 16 || _event.keyCode == 20 ) {
            savedLetter = String.fromCharCode(_event.keyCode);
            console.log(savedLetter);
        } else {
            alert("Bitte nur Buchstaben");
        }
        savedColor = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
    }

    function writingBox(): void {
        let div: HTMLDivElement = document.createElement("div");

        div.style.cssFloat = "left";
        div.style.width = "90%";
        div.style.height = "20em";
        div.style.margin = "5%";
        div.style.backgroundColor = "#aaaaaa";

        document.body.appendChild(div);

        div.addEventListener("click", drawLetters);

    }

    function drawLetters(_event: MouseEvent): void {

        let box: HTMLDivElement = document.createElement("div");

        box.innerText = savedLetter;

        if (savedLetter != undefined) {
            box.style.backgroundColor = savedColor;
            box.style.cssFloat = "left";
            box.style.fontSize = "30px";
            box.style.marginRight = "5px";
            box.style.marginLeft = "5px";
            box.style.padding = "5px";
            box.style.position = "absolute";
            box.style.left = _event.pageX + "px";
            box.style.top = _event.pageY + "px";

            document.body.appendChild(box);
        }
    }

}

