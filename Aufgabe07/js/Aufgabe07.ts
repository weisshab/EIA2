namespace StudiVZ {
    interface StudentData {
        matrNr: number;
        name: string;
        firstName: string;
        age: number;
        gender: boolean;
        comment: string;

    }
    var students: StudentData[] = [];
    var stop: boolean = false;
    var i: number = 0;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                console.log(i);
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                i++;
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));

                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }


    }

    function saveData(_input: string): string {


        var str: string = _input;
        var res: string[] = str.split(",");

        var gend: boolean;
        if (res[4] == "0") {
            gend = false;
        }

        if (res[4] == "1") {
            gend = true;
        }

        students[i - 1] = {
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


    function queryData(_matrikel: number): string {

        for (var j: number = 0; j < students.length; j++) {
            var s: StudentData = students[j];
            console.log(s.matrNr);
            console.log(j);

            if (_matrikel == s.matrNr) {
                return `Matrikelnummer: ${s.matrNr}
                       \nName: ${s.name}
                       \nVorname: ${s.firstName}
                       \nAlter: ${s.age}
                       \nGeschlecht: ${s.gender}
                       \nKommentar:${s.comment}`;
            }
        }
    }
}