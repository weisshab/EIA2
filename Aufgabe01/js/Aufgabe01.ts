window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    console.log(crc2);
    
    //Himmel
    crc2.fillStyle = "#81F7F3";
    crc2.fillRect(0, 0, 800, 600);
    
    //Schnee Piste
    crc2.beginPath();
    crc2.moveTo(0, 0);
    crc2.lineTo(800, 600);
    crc2.lineTo(0, 600);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#ffffff";
    crc2.fill();
    
    
    //Baum1
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
    
    //Baum2
    crc2.beginPath();
    crc2.moveTo(200, 400);
    crc2.lineTo(220, 430);
    crc2.lineTo(180, 430);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0B610B";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(200, 430);
    crc2.lineTo(220, 460);
    crc2.lineTo(180, 460);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0B610B";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(195, 490);
    crc2.lineTo(205, 490);
    crc2.lineTo(205, 510);
    crc2.lineTo(195, 510);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#61210B";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(200, 460);
    crc2.lineTo(220, 490);
    crc2.lineTo(180, 490);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0B610B";
    crc2.fill();
    
    //Sonne
    crc2.beginPath();
    crc2.arc(700, 60, 35, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#ffff00";
    crc2.fill();
    
    /*
    //Skifahrer
    crc2.beginPath();
    crc2.moveTo(240, 305);
    crc2.lineTo(280, 320);
    crc2.lineTo(275, 323);
    crc2.lineTo(235, 308);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#0000FF";
    crc2.fill();
    
    crc2.beginPath();
    crc2.moveTo(248, 290);
    crc2.lineTo(252, 290);
    crc2.lineTo(252, 310);
    crc2.lineTo(248, 310);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#DF7401";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(250, 280, 10, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#DF7401";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(255, 278, 1, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.stroke();
    crc2.fillStyle = "#000000";
    crc2.fill();
    */
    
    //Schneemann
    crc2.beginPath();
    crc2.arc(450, 495, 12, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fillStyle = "#A9F5F2";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(450, 520, 20, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fillStyle = "#A9F5F2";
    crc2.fill();
    
    crc2.beginPath();
    crc2.arc(450, 555, 30, 0, 2 * Math.PI);
    crc2.closePath();
    crc2.fillStyle = "#A9F5F2";
    crc2.fill();
    
    
    //Ski-Lift
    crc2.fillStyle = "#000000";     //Masten
    crc2.fillRect(100, 76, 5, 70);
    
    crc2.fillStyle = "#000000";     //Querbalken
    crc2.fillRect(90, 76, 10, 5);
    
    crc2.fillStyle = "#000000";     //Masten
    crc2.fillRect(200, 152, 5, 70);
    
    crc2.fillStyle = "#000000";     //Querbalken
    crc2.fillRect(190, 152, 10, 5);
    
    crc2.fillStyle = "#000000";     //Masten
    crc2.fillRect(300, 228, 5, 70);
    
    crc2.fillStyle = "#000000";     //Querbalken
    crc2.fillRect(290, 228, 10, 5);
    
    crc2.fillStyle = "#000000";     //Masten
    crc2.fillRect(400, 304, 5, 70);
    
    crc2.fillStyle = "#000000";     //Querbalken
    crc2.fillRect(390, 304, 10, 5);
    
    crc2.fillStyle = "#000000";     //Masten
    crc2.fillRect(500, 380, 5, 70);
    
    crc2.fillStyle = "#000000";     //Querbalken
    crc2.fillRect(490, 380, 10, 5);
    
    crc2.fillStyle = "#000000";     //Masten
    crc2.fillRect(600, 456, 5, 70);
    
    crc2.fillStyle = "#000000";     //Querbalken
    crc2.fillRect(590, 456, 10, 5);
    
    
    
    crc2.beginPath();       //Seil
    crc2.moveTo(0, 10);
    crc2.lineTo(782, 600);
    crc2.closePath();
    crc2.stroke();
    
    //Schneemann
    
}