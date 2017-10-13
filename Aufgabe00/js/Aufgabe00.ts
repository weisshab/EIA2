document.addEventListener('Load', moin);

function moin(): void{
    let text:string="";
    let person = prompt("Wie heissen Sie?", "Name");
    
    if(person == null || person == ""){
        text = "Nameless";
    }
    else{
        text += "Schoen dich zu sehen " + person + " !";
    }
    
    document.getElementById("text").innerHTML = text;
}