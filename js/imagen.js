/// <reference path="jquery-1.11.0.js" />
$(document).ready(function () {
    desplazaDerecha();
});

function desplazaDerecha() {
    $("#sembradora").animate({ left: "+=450px" }, 5000, desapareceSembradora);
    $("#tierraArada").animate({ width: "+=450px" }, 5000);
}

function desapareceSembradora() {
    $("#sembradora").fadeOut("slow",apareceSembradora);
    
}

function apareceSembradora() {
    $("#sembradora").css("top", "+=150px");
    $("#sembradora").fadeIn("slow",desplazaIzquierda);
}

function desplazaIzquierda() {
    $("#sembradora").animate({ left: "-=450px" }, 5000, desapareceSembradora);
    $("#tierraArada2").animate({ left: "-=450px", width: "+=450px" }, 5000);
}


function desplazar(ladoInicio, piso, accion) { 
    
}




