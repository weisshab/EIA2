document.addEventListener('Load', moin);

function moin(): void{
    let text:string;
    let person = prompt("Wie hei�en Sie?", "Name");
    
    if(person == null || person == ""){
        text = "Nameless";
    }
    else{
        text += "Sch�n dich zu sehen" + person + "!";
    }
    
    document.getElementById("text").innerHTML = text;
}