document.addEventListener('Load', moin);

function moin(): void{
    let text:string;
    let person = prompt("Wie heißen Sie?", "Name");
    
    if(person == null || person == ""){
        text = "Nameless";
    }
    else{
        text += "Schön dich zu sehen" + person + "!";
    }
    
    document.getElementById("text").innerHTML = text;
}