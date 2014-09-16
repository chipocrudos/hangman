var backgroudcanvas;
var hanged = {
    url: "img/hanged.png",
	x: 0,
    y: 0,
    h: 200,
    w: 280,    
};

var hanged_1 = {
    url: "img/hanged_1.png",
    x: 0,
    y: 0,
    h: 200,
    w: 280,    
};

var hanged_2 = {
    url: "img/hanged_2.png",
    x: 0,
    y: 0,
    h: 200,
    w: 280,    
};

var hanged_3 = {
    url: "img/hanged_3.png",
    x: 0,
    y: 0,
    h: 200,
    w: 280,    
};

var hanged_4 = {
    url: "img/hanged_4.png",
    x: 0,
    y: 0,
    h: 200,
    w: 280,    
};

var hanged_5 = {
    url: "img/hanged_5.png",
    x: 0,
    y: 0,
    h: 200,
    w: 280,    
};

var hanged_6 = {
    url: "img/hanged_6.png",
    x: 0,
    y: 0,
    h: 200,
    w: 280,    
};


function begincanvas() {
    var canvas = document.getElementById("block-canvas");
    backgroudcanvas = canvas.getContext("2d");

    hanged.imagen = new Image();
    hanged.imagen.src = hanged.url;
    hanged.imagen.onload = beginhanged;

    hanged_1.imagen = new Image();
    hanged_1.imagen.src = hanged_1.url;

    hanged_2.imagen = new Image();
    hanged_2.imagen.src = hanged_2.url;

    hanged_3.imagen = new Image();
    hanged_3.imagen.src = hanged_3.url;
    
    hanged_4.imagen = new Image();
    hanged_4.imagen.src = hanged_4.url;

    hanged_5.imagen = new Image();
    hanged_5.imagen.src = hanged_5.url;

    hanged_6.imagen = new Image();
    hanged_6.imagen.src = hanged_6.url;


}

function drawtext() {

    backgroudcanvas.font = "9px Arial";
    backgroudcanvas.fillText("Perdidos:", 190, 10);
    backgroudcanvas.fillText("Ganados:", 190, 20);
    backgroudcanvas.fillText("Juegos:", 190, 30);

    backgroudcanvas.fillStyle="#FF0000";
    backgroudcanvas.font = "9px Arial";
    backgroudcanvas.fillText(score.losse, 232, 10);
    backgroudcanvas.fillStyle="#3B61FF";
    backgroudcanvas.fillText(score.win, 232, 20);
    backgroudcanvas.fillStyle="#000000";
    backgroudcanvas.fillText(score.games, 232, 30);

    backgroudcanvas.strokeStyle="#000000";
    backgroudcanvas.font = "12px Arial";
    backgroudcanvas.strokeText("Juedo del ahorcado", 5, 199);
}

function drawword(winlosse) {
    if ( winlosse ) {
        backgroudcanvas.fillStyle="#000000";
    } else {
        backgroudcanvas.fillStyle="#FF0000";
    }
    
    backgroudcanvas.font = "15px Arial";
    backgroudcanvas.fillText(quiz.word, 100, 170);   
}

function beginhanged() {
    drawhanged();
    drawtext();
}

function drawhanged() {
	backgroudcanvas.drawImage(hanged.imagen, hanged.x, hanged.y, hanged.w, hanged.h);

}

function drawhanged_1() {
    backgroudcanvas.drawImage(hanged_1.imagen, hanged_1.x, hanged_1.y, hanged_1.w, hanged_1.h);

}

function drawhanged_2() {
    backgroudcanvas.drawImage(hanged_2.imagen, hanged_2.x, hanged_2.y, hanged_2.w, hanged_2.h);

}


function drawhanged_3() {
    backgroudcanvas.drawImage(hanged_3.imagen, hanged_3.x, hanged_3.y, hanged_3.w, hanged_3.h);

}

function drawhanged_4() {
    backgroudcanvas.drawImage(hanged_4.imagen, hanged_4.x, hanged_4.y, hanged_4.w, hanged_4.h);

}

function drawhanged_5() {
    backgroudcanvas.drawImage(hanged_5.imagen, hanged_5.x, hanged_5.y, hanged_5.w, hanged_5.h);

}

function drawhanged_6() {
    backgroudcanvas.drawImage(hanged_6.imagen, hanged_6.x, hanged_6.y, hanged_6.w, hanged_6.h);

}

function drawhangman(value) {
    if ( value == 1 ){
        drawhanged_1();
        drawtext();
    }else if ( value == 2 ){
        drawhanged_2();
    }else if ( value == 3 ){
        drawhanged_3();
    }else if ( value == 4 ){
        drawhanged_4();
    }else if ( value == 5 ){
        drawhanged_5();
    }else if ( value == 6 ){
        drawhanged_6();
    }else {
        drawhanged();
        drawtext();
    }
    
}

window.addEventListener("load", function(){
	begincanvas();
});