/*
Aufgabe: 10
Name: Bastian Weisshaar
Matrikel: 256578
Datum: 12.12.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var A10;
(function (A10) {
    window.addEventListener("load", init);
    let baum = [];
    let holder = [];
    let height;
    let licht = [];
    let schmuck = [];
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
        let checkIt = document.getElementById("check");
        checkIt.addEventListener("click", priceBox);
    }
    function handleChange(_event) {
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        if (target.name == "Radiogroup") {
            let currentTree = target.id;
            let currentPrice = target.value;
            baum[0] = currentTree;
            baum[1] = currentPrice;
            console.log(baum);
        }
        if (target.name == "Radiogroup2") {
            let currentTree = target.id;
            let currentPrice = target.value;
            holder[0] = currentTree;
            holder[1] = currentPrice;
            console.log(holder);
        }
        if (target.name == "Radiogroup1") {
            let currentLights = target.id;
            let currentPrice = target.value;
            licht[0] = currentLights;
            licht[1] = currentPrice;
            console.log(licht);
        }
        if (this.id == "glamour") {
            console.log("Changed " + target.name + " to " + target.checked);
            if (target.checked == true) {
                let currentGlam = target.id;
                let currentPrice = target.value;
                schmuck.push(currentGlam, currentPrice);
                console.log(schmuck);
            }
            else {
                let currentGlam = "";
                let currentPrice = 0;
                schmuck.shift();
                schmuck.shift();
            }
        }
    }
    function priceBox() {
        let price;
        let priceTree = 0;
        let priceHolder = 0;
        let priceLight = 0;
        let priceGlam = 0;
        console.log(licht[1]);
        if (baum[1] != undefined) {
            priceTree += parseFloat(baum[1]);
        }
        else {
            priceTree = 0;
        }
        if (holder[1] != undefined) {
            priceHolder += parseFloat(holder[1]);
        }
        else {
            priceHolder = 0;
        }
        if (licht[1] != undefined) {
            priceLight += parseFloat(licht[1]);
        }
        for (let i = 1; i < schmuck.length; i += 2) {
            if (schmuck[i] != undefined) {
                priceGlam += parseFloat(schmuck[i]);
                console.log("glam: " + priceGlam);
            }
        }
        console.log("light: " + priceLight);
        console.log("tree: " + priceTree);
        console.log("Glam: " + priceGlam);
        let total = priceTree + priceHolder + priceLight + priceGlam;
        if (total != NaN) {
            price = "Gesamtbetrag: " + total + " Euro";
            alert(`Baumart: ${priceTree + " Euro"}
                \nHalterung: ${priceHolder + " Euro"}
                \nBeleuchtung: ${priceLight + " Euro"}
                \nSchmuck: ${priceGlam + " Euro"}
                \n${price}`);
        }
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=main.js.map