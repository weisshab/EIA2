var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    var i = 0;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                console.log(i);
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                i++;
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var str = _input;
        var res = str.split(",");
        var gend;
        if (res[4] == "0") {
            gend = false;
        }
        if (res[4] == "1") {
            gend = true;
        }
        students[i] = {
            matrNr: parseInt(res[0]),
            name: res[1],
            firstName: res[2],
            age: parseInt(res[3]),
            gender: gend,
            comment: res[5]
        };
        console.log(students[i], students[i - 1]);
        return "Speicherung efolgreich";
    }
    function queryData(_matrikel) {
        for (var j = 0; j < students.length; j++) {
            var s = students[j];
            console.log(s.matrNr);
            console.log(j);
            if (_matrikel == s.matrNr) {
                return s.toString();
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe07.js.map