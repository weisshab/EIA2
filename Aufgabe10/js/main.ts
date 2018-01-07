/*
Aufgabe: 10
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 12.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/

namespace A10 {
    window.addEventListener("load", init);

    let baum: string[] = [];
    let holder: string[] = [];
    let height: number;
    let licht: string[] = [];
    let schmuck: string[] = [];

    function init(_event: Event): void {

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

        let checkIt = document.getElementById("check");
        checkIt.addEventListener("click", priceBox);

    }

    function handleChange(_event: Event): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        console.log("Changed " + target.name + " to " + target.value);

        if (target.name == "Radiogroup") {
            let currentTree: string = target.id;
            let currentPrice: string = target.value;
            baum[0] = currentTree;
            baum[1] = currentPrice;
            console.log(baum);
        }

        if (target.name == "Radiogroup2") {
            let currentTree: string = target.id;
            let currentPrice: string = target.value;
            holder[0] = currentTree;
            holder[1] = currentPrice;
            console.log(holder);
        }

        if (target.name == "Radiogroup1") {
            let currentLights: string = target.id;
            let currentPrice: string = target.value;
            licht[0] = currentLights;
            licht[1] = currentPrice;
            console.log(licht);
        }

        if (this.id == "glamour") {
            console.log("Changed " + target.name + " to " + target.checked);
            if (target.checked == true) {
                let currentGlam: string = target.id;
                let currentPrice: string = target.value;
                schmuck.push(currentGlam, currentPrice);
                console.log(schmuck);
            } else {
                let currentGlam: string = "";
                let currentPrice: number = 0;
                schmuck.shift();
                schmuck.shift();
            }
        }

    }

    function priceBox(): void {
        let price: string;
        let priceTree: number = 0;
        let priceHolder: number = 0;
        let priceLight: number = 0;
        let priceGlam: number = 0;

        console.log(licht[1]);

        if (baum[1] != undefined) {
            priceTree += parseFloat(baum[1]);
        } else { priceTree = 0; }

        if (holder[1] != undefined) {
            priceHolder += parseFloat(holder[1]);
        } else { priceHolder = 0; }

        if (licht[1] != undefined) {
            priceLight += parseFloat(licht[1]);
        }

        for (let i: number = 1; i < schmuck.length; i += 2) {
            if (schmuck[i] != undefined) {
                priceGlam += parseFloat(schmuck[i]);
                console.log("glam: " + priceGlam);
            }
        }
        console.log("light: " + priceLight);
        console.log("tree: " + priceTree);
        console.log("Glam: " + priceGlam);

        let total: number = priceTree + priceHolder + priceLight + priceGlam;


        if (total != NaN) {
            price = "Gesamtbetrag: " + Math.round(total) + " Euro";
            alert(`Baumart: ${priceTree + " Euro"}
                \nHalterung: ${priceHolder + " Euro"}
                \nBeleuchtung: ${priceLight + " Euro"}
                \nSchmuck: ${priceGlam + " Euro"}
                \n${price}`);
        }
    }
}

