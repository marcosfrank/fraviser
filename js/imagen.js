/// <reference path="jquery-1.11.0.js" />

$(document).ready(function () {
    const tiempoAnimacion = 2000;
    var piso = 1;
    var tierraFondo = "tierra"
    var tierra = "tierraSembrada";
    var maquina = "sembradora";
    var claseTierra = "";
    var claseMaquina = "";
    desplazar();



    function desplazar() {
        claseTierraFondo = "." + tierraFondo.toString() + ".nivel" + piso.toString();
        claseTierra = "." + tierra.toString() + ".nivel" + piso.toString();
        claseMaquina = "." + maquina.toString();
        if (piso == 1 || piso == 3) {
            $(claseMaquina).animate({ left: "+=480px" }, tiempoAnimacion, rotarMaquina);
            $(claseTierra).animate({ width: "+=450px" }, tiempoAnimacion);
        } else {
            $(claseMaquina).animate({ left: "-=480px" }, tiempoAnimacion, rotarMaquina);
            $(claseTierraFondo).animate({ width: "-=450px" }, tiempoAnimacion);
        }
    }

     function rotarMaquina() {
        var $elem = $(claseMaquina);
            
        if(piso<3){
            var angulo;

            if(piso==1 || piso == 3){
                angulo = 180;
            }else{
                angulo = -180;
                $elem.css("top","+=150px");
            }
            piso++;
            $({ deg: 0 }).animate({ deg: angulo }, {
                duration: tiempoAnimacion,
                step: function (now) {
                    $elem.css({
                        transform: 'rotate(' + now + 'deg)',
                    });
                },
               complete:desplazar
            });
        }else{
            $elem.fadeOut(600);
        }
    }

    
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



