/// <reference path="jquery-1.11.0.js" />

$(document).ready(function () {
    function desplazar() {
        claseTierra = "." + tierra.toString() + ".nivel" + piso.toString();
        claseMaquina = "." + maquina.toString();
        if (piso == 1 || piso == 3) {
            $(claseMaquina).animate({ left: "+=480px" }, 5000, desapareceSembradora);
            $(claseTierra).animate({ width: "+=450px" }, 5000);
        } else {
            $(claseMaquina).animate({ left: "-=480px" }, 5000, desapareceSembradora);
            $(".tierra.nivel2").animate({ width: "-=450px" }, 5000);
        }
    }


    function desapareceSembradora() {
        $(claseMaquina).fadeOut("slow", apareceSembradora);
    }

    function apareceSembradora() {
        piso++;
        if (piso != 4) {
            $(claseMaquina).css("top", "+=150px");
            $(claseMaquina).fadeIn("slow", desplazar);
        }
    }

    var piso = 1;
    var tierra = "tierraSembrada";
    var maquina = "sembradora";
    var claseTierra = "";
    var claseMaquina = "";

    desplazar();
});

//function desplazaDerecha() {
//    $("#sembradora").animate({ left: "+=450px" }, 5000, desapareceSembradora);
//    $("#tierraSembrada").animate({ width: "+=450px" }, 5000);
//}

//function desapareceSembradora() {
//    $("#sembradora").fadeOut("slow",apareceSembradora);
//    
//}

//function apareceSembradora() {
//    $("#sembradora").css("top", "+=150px");
//    $("#sembradora").fadeIn("slow",desplazaIzquierda);
//}

//function desplazaIzquierda() {
//    $("#sembradora").animate({ left: "-=450px" }, 5000, desapareceSembradora);
//    $("#tierraArada2").animate({ left: "-=450px", width: "+=450px" }, 5000);
//}



