// JavaScript Document

$(document).ready(function(e) {
    
	function startCycle(startingSlide) {
		opts = $('.cycle-fotos').cycle({ 
			  fx:     'fade',
			  prev:'.flecha-l',
			  next:'.flecha-r',
			  timeout: 0,
			  startingSlide: startingSlide
		}).data('cycle.opts');
	}
	
    startCycle();
	
	
	
$('#foto1').on('click', function(e){
	e.preventDefault;
		$.colorbox({
			iframe:true,
			width:670,
			height:720,
			transition:"none",
			opacity:0.5,
			scrolling:false,
			//overlayClose:false,
			//escKey: false,
			arrowKey:false,
			href:'fotos_agrupadas.html',
				
			onComplete:function(){
			$('#cboxClose').hide();                 
			},
			//href:'fotos_grande.html'
			onClosed:function(){
				console.log('cerrado')
							/*$.colorbox({
										iframe:true,
										width:670,
										height:720,
										transition:"none",
										opacity:0.5,
										scrolling:false,
										//overlayClose:false,
										//escKey: false,
										arrowKey:false,
										href:'fotos_agrupadas.html'
										//href:'fotos_grande.html'
							}); */
					}
			
		}); 
	})

	
	
/* ---------------Enviar form-------------*/
	$(".btn-enviar").click(function(){
			if($(".formulario").valid() == true){
				$.post(url_app + "registro", $(".formulario").serialize(), function(data){
					if(data.ok)
					{
						location = url_app+'mensaje'
    				}else{
                        if(data.date){
                            $('.msj_error').html('Ingresar fecha válida')
                        }
                        if(data.email_exists){
                            $('.msj_error').html('Email ya registrado')
                        }
					} // end data.ok 
				});// end $.post 
			}else{
				return false;				
			} // end $("#formulario-registro").valid 	
	});	//end #btn-continuar.click
	
	
	

	var solotexto='\'\\@+-*/°!"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}+1234567890¡¢£¤¥¦§¨©ª«¬®¯°±²³µ¶·¸¹º»¼½¾¿ÀÂÃÄÅÆÇÈÊËÌÎÏÐÒÔÕÖ×ØÙÛÜÝÞßàâãäåæçèêëìîïðòôõö÷øùûüýþÿŒœŠšŸƒ–—‘’‚“”„†‡•…‰€™´¨¨';
	var solonumero=' \'\\@ñÑ+-*/°!"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}´+abcdefghijklmnopqrstuvwxyz¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿŒœŠšŸƒ–—‘’‚“”„†‡•…‰€™¿¡';
	var soloemail='\'\\¿¡ñÑ+*/°!"#$%&/()=?¡¨*[];:^`~¬\\,{}´+¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿŒœŠšŸƒ‘’‚“”„†‡•…‰€™';
	
	
	$("#nombre, #apellidoPaterno, #apellidoMaterno").alpha({allow:" "},{ichars:solotexto});
	$("#telefono").numeric({ichars:'ñÑ+-*/°!"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}´+¨ç¿ ¡'});
	$("#email").alphanumeric({ichars:soloemail},{allow:'@_--.'});


		
            jQuery.validator.addMethod("nombre_valido", function(value, element) {
				if(
					value == " " || 
					value == "Nombre" || 
					value == "Nombres" || 
					value == "Apellido Paterno" || 
					value == "Apellido Materno" || 
					value == "Dirección" ||
					value == "Dni" ||  
					value == "Nombre" || 
					value == "Provincia" || 
					value == "Distrito" || 
					value == "Departamento" || 
					value == "Día" || 
					value == "Mes" || 
					value == "Año" ||
					value == "A&ntilde;o" || 
					value == "Operador" || 
					value == "Tipo de documento" ||
					value == "000000000" ||
					value == "00000000" ||
					value == "0000000" ||
					value == "Correo Electrónico" ||
					value == "Número de Contacto" ||
					value == "Número Celular" ||
					value == "DNI" ||
					value == "Sexo"	||
					value == "sexo"	||
					value == "Fecha de Nacimiento" ||
					value == "Operador Telefónico"	
				)
				{
					return false;
				}else{
					return true;
				}
			}, "");


	$(".formulario").validate({
				rules:{
					nombre: {
						required: true,
						rangelength: [2,40],
						nombre_valido:true			
					},
					apellidoPaterno: {
						required: true,
						rangelength: [2,40],
						nombre_valido:true
					},
					apellidoMaterno: {
						required: true,
						rangelength: [2,40],
						nombre_valido:true	
					},
					departamento: {
						required: true,
						nombre_valido:true	
					},
					provincia: {
						required: true,
						nombre_valido:true	
					},
					distrito: {
						required: true,
						nombre_valido:true	
					},
					day: {
						required: true,
						nombre_valido:true
					},
					month: {
						required: true,
						nombre_valido:true
					},
					year: {
						required: true,
						nombre_valido:true
					},
					email: {
						required: true,
						email: true,
						rangelength: [2,200]
					},
					telefono: {
						required: true,
						digits: true,
						rangelength: [7,9]
					}
		
				}/* End rules */
			});	/* End Validate */

	
	    $("#checkbox_comprobar").click(function() {  
        if($("#checkbox").is(':checked')) {  
            alert("Está activado");  
        } else {  
            alert("No está activado");  
        }  
    });  
	
	
});//end jQuery