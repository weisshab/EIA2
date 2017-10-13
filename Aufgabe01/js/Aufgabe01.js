window.addEventListener("load", init);
function init() {
    var canvas = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    var crc2 = canvas.getContext("2d");
    console.log(crc2);
    //Himmel
    crc2.fillStyle = "#81F7F3";
    crc2.fillRect(0, 0, 500, 500);
    //Schnee Piste
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(500, 500);
    crc2.lineTo(0, 500);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    //Linie
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(500, 500);
    crc2.stroke();
    //Linie
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(0, 500);
    crc2.stroke();
    //Linie
    crc2.beginPath();
    crc2.moveTo(0, 500);
    crc2.lineTo(500, 500);
    crc2.stroke();
    //Baumi
    crc2.beginPath();
    crc2.moveTo(100, 200);
    crc2.lineTo(120, 230);
    crc2.lineTo(80, 230);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0B610B";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(100, 230);
    crc2.lineTo(120, 260);
    crc2.lineTo(80, 260);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0B610B";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(95, 290);
    crc2.lineTo(105, 290);
    crc2.lineTo(105, 310);
    crc2.lineTo(95, 310);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#61210B";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(100, 260);
    crc2.lineTo(120, 290);
    crc2.lineTo(80, 290);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0B610B";
    crc2.fill();
    //Sonne
    crc2.beginPath();
    crc2.arc(420, 60, 35, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#ffff00";
    crc2.fill();
    //Skifahrer
    crc2.beginPath();
    crc2.moveTo(248, 260);
    crc2.lineTo(252, 260);
    crc2.lineTo(252, 280);
    crc2.lineTo(248, 280);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#DF7401";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(250, 250, 10, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#DF7401";
    crc2.fill();
}
//# sourceMappingURL=Aufgabe01.js.map