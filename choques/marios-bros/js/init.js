/**
*
* @fileoverview Libreria con funciones de utilidad
* @author Nombre_programador
* @date Fecha_inicio
* @version 1.0
*/

$(document).ready(function(){
	
	var mario = $("#mario");

	$(document).on("keydown", function(event){
		
		//console.log(event.keyCode)
		if(event.keyCode == 39){ //derecha
			mario.css("left","+=2px");
		}else if(event.keyCode == 37){ //izquierda
			mario.css("left","-=2px");
		}else if(event.keyCode == 40){ //abajo
			mario.css("background-position","-160px 0");
		}else if(event.keyCode == 38){ //saltar
			mario.css("background-position","-120px 0").css("bottom","150px");
		}

	});

	$(document).on("keyup", function(event){

		//console.log(event.keyCode)
		if(event.keyCode == 40 || event.keyCode == 38){
			mario.css("background-position","0 0").css("bottom","112px");
		}

	});

	

});


function sprite_mario(){
	var array_position = [40,80];
	$("#mario").css("background-position","-"+array_position[0]+"px 0");
}






