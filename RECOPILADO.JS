// JavaScript Document

$(document).ready(function(e) {
    


	var lt_ie9=false;
	var msie=false;
	var url=document.URL;
	var urlHash;
	var urlLimpia;

	// urlHash=url.replace(location.protocol+'//'+location.host+location.pathname,'')
	urlHash=location.hash;
	urlHash=urlHash.substring(1,urlHash.length)

	var urlLimpia=url;
	while(urlLimpia.search('#')!=-1)
	{
		urlLimpia=urlLimpia.substring(0,urlLimpia.length-1)
	}

	// //console.log(url)
	// //console.log(urlHash)
	// //console.log(urlLimpia)

	if(jQuery.browser.msie && jQuery.browser.version<9.0)
	{
		lt_ie9=true;
	}	

	if(jQuery.browser.msie)
	{
		msie=true;
	}		


	if($('.page').hasClass('inicio_page'))
	{
		inicio()
	}
	else if($('.page').hasClass('video_page'))
	{
		video()
	}
	else if($('.page').hasClass('caracteristicas_page'))
	{
		
		caracteristicas();
	}
	else if($('.page').hasClass('familia_page'))
	{
		
		familia();
	}
	else if($('.page').hasClass('familia_detalles_page'))
	{
		
		familia_detallles();
	}



		switch(urlHash)
		{
			case '':
				prealoder()
			break;
			case 'inicio':
				lavadoras()
			break;
			default:
				prealoder()
			break;
		}


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
	


			if(jQuery.browser.msie && jQuery.browser.version<9.0)
			{
				inciarAnimacionesHomeParaIe()
			}else
			{
				inciarAnimacionesHome()
			}
	
	
			if(!(jQuery.browser.msie && jQuery.browser.version<9.0))
			{
				animarToolTip()
			}

	var Tween_ondas_sonido=TweenMax.to($('.ondas_sonido'), 0.5,{autoAlpha:1, yoyo:true, repeat:-1, paused:true})
	
// You can define onStart, onUpdate, onComplete, onReverse, and/or onReverseComplete event callbacks.
// All of them [optionally] accept an array of parameters as illustrated with the onCompleteParams property above.

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
	
	
	
	
						var url=document.URL;
						if(url.search('#')!=-1)
						{
							url=url.substring(0,url.length-2)
						}
						history.pushState(null, null, url+'#'+(parseInt(opts.childInFocus)+1)+'');
						
						var color=$('.roundabout-in-focus').children('.refri-foto').attr('data-doble-modelo');
						if(color=='true')
						{
							$('.colores').css('visibility','visible');
						}else{
							$('.colores').css('visibility','hidden');
						}
						
						
						
						
						
						
						
	function startRound(startingChild) {
		opts = $('ul.rr').roundabout({
					btnNext: '.flecha-r',
					btnPrev:'.flecha-l',
					autoplay: false,
					minOpacity:-1,
					maxOpacity:1,
					clickToFocus:false,
					minScale:1,
					startingChild:startingChild,
					//clickToFocusCallback:function(){console.log('sdfdsf')},
					btnNextCallback:function(){
						var url=document.URL;
						if(url.search('#')!=-1)
						{
							url=url.substring(0,url.length-2)
						}
						history.pushState(null, null, url+'#'+(parseInt(opts.childInFocus)+1)+'');
						
						var color=$('.roundabout-in-focus').children('.refri-foto').attr('data-doble-modelo');
						if(color=='true')
						{
							$('.colores').css('visibility','visible');
						}else{
							$('.colores').css('visibility','hidden');
						}

						
	

						
					},
					btnPrevCallback:function(){
						var url=document.URL;
						if(url.search('#')!=-1)
						{
							url=url.substring(0,url.length-2)
						}
						history.pushState(null, null, url+'#'+(parseInt(opts.childInFocus)+1)+'');
						
						var color=$('.roundabout-in-focus').children('.refri-foto').attr('data-doble-modelo');
						if(color=='true')
						{
							$('.colores').css('visibility','visible');
						}else{
							$('.colores').css('visibility','hidden');
						}
						
					}
					
				})
		.data('roundabout.opts');
		
	}
		
		
		
		
		
		
		
		
	

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
					value == "Modelo" || 
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
					value == "Operador Telefónico"	||
					value == "Especificar Modelo"
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
					apellido_paterno: {
						required: true,
						rangelength: [2,40],
						nombre_valido:true
					},
					apellido_materno: {
						required: true,
						rangelength: [2,40],
						nombre_valido:true	
					},
					email: {
						required: true,
						email: true,
						rangelength: [2,200]
					},
					celular: {
						required: true,
						digits: true,
						rangelength: [9,9],
						nombre_valido:true	
					},
					direccion: {
						required: true,
						rangelength: [2,200]
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
					operador: {
						required: true,
						nombre_valido:true
					},
					modelo: {
						required: true,
						nombre_valido:true
					},
					telefono: {
						required: true,
						digits: true,
						rangelength: [7,9]
					},
					otros: {
						required: true,
						nombre_valido:true
					}
		
				},//End rules 
				messages: {
					nombre:'Ingrese un nombre válido',
					apellido_paterno:'Ingrese un apellido paterno',
					apellido_materno:'Ingrese un apellido materno',
					email: 'Ingrese un apellido materno',
					celular: 'Ingrese un apellido materno',
					direccion: 'Ingrese un apellido materno',
					departamento: 'Ingrese un apellido materno',
					provincia: 'Ingrese un apellido materno',
					distrito: 'Ingrese un apellido materno',
					day: 'Ingrese un apellido materno',
					month: 'Ingrese un apellido materno',
					year: 'Ingrese un apellido materno',
					operador: 'Ingrese un apellido materno',
					modelo: 'Ingrese un apellido materno',
					telefono:'Ingrese un apellido materno',
					otros: 'Ingrese un apellido materno'
    			}
			});	// End Validate

	
	    $("#checkbox_comprobar").click(function() {  
        if($("#checkbox").is(':checked')) {  
            alert("Está activado");  
        } else {  
            alert("No está activado");  
        }  
    });  
	




/* ---------- Focus -------------*/

$('#formulario-registro input').focusin(function(){
		$('.error_edad').html('')
	})

$('#nombre').focusin(function(){
		if(this.value=='Nombre'){
			this.value=''
		}
	})
$('#nombre').focusout(function(){
		if(this.value==''){
			this.value='Nombre'
		}
	})
	
$('#apellidoPaterno').focusin(function(){
		if(this.value=='Apellido Paterno'){
			this.value=''
		}
	})
$('#apellidoPaterno').focusout(function(){
		if(this.value==''){
			this.value='Apellido Paterno'
		}
	})	

$('#apellidoMaterno').focusin(function(){
		if(this.value=='Apellido Materno'){
			this.value=''
		}
	})
$('#apellidoMaterno').focusout(function(){
		if(this.value==''){
			this.value='Apellido Materno'
		}
	})

$('#dni').focusin(function(){
		if(this.value=='Dni' || this.value=='Dni ya registrado' ){
			this.value=''
		}
	})
$('#dni').focusout(function(){
		if(this.value==''){
			this.value='Dni'
		}
	})

$('#email').focusin(function(){
		if(this.value=='Email'){
			this.value=''
		}
	})
$('#email').focusout(function(){
		if(this.value==''){
			this.value='Email'
		}
	})

$('#numeroContacto').focusin(function(){
		if(this.value=='Número de Contacto'){
			this.value=''
		}
	})
$('#numeroContacto').focusout(function(){
		if(this.value==''){
			this.value='Número de Contacto'
		}
	})						
	





  var videoID = "KhAdokkgkNc"
  var params = { allowScriptAccess: "always", wmode: "transparent" };
  var atts = { id: "ytPlayer" };
  swfobject.embedSWF("//www.youtube.com/v/" + videoID + "?version=3&enablejsapi=1&playerapiid=player1&wmode=transparent", "bbVideo", "560", "340", "9", null, null, params, atts);

function onYouTubePlayerReady(playerId) {
  ytplayer = document.getElementById("ytPlayer");
}

function playVideo() {
  if (ytplayer)
  {
	ytplayer.playVideo();
  }
}

function pauseVideo() {
  if (ytplayer)
  {
	ytplayer.pauseVideo();
  }
}  












	
});//end jQuery


// ckeck formato de video
function checkVideo()
{
    if(!!document.createElement('video').canPlayType)
    {

        var vidTest=document.createElement("video");

        h264Test=vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');

        if (!h264Test)
        {
            videoOk=false;
        }
        else
        {
            if (h264Test=="probably")
            {
                video=true;
            }
            else
            {
                videoOk=true;
            }
        }

    }
    else
    {
        videoOk=false;
    }
}


	if(jQuery.browser.msie && jQuery.browser.version<9.0)
	{
		inciarAnimacionesHomeParaIe()
	}else
	{
		inciarAnimacionesHome()
	}

// ajax
	function cargarPaginaInicio(){
		$(".page-ajax").empty()
		
		$('.page').removeClass('bg-loader bg-linea bg-tips bg-inicio').addClass('bg-inicio')
		history.pushState(null, null, 'inicio.html');
		$.ajax({
		  url: "inicio.html",
		  cache:false,
		  context: document.body,
		  success:function(){

			}
		})
		.done(function(pagina)
		{
 			$(".escenas-home").html($(pagina).find(".cycle-escenas"));
			$('.menu-tab .menu-inicio').addClass('activo')


			var ua = navigator.userAgent.toLowerCase();
			if(jQuery.browser.msie && jQuery.browser.version<9.0)
			{
				inciarAnimacionesHomeParaIe()
			}else
			{
				inciarAnimacionesHome()//inicia la animacion del home
			}
			
		
		});	
		
	}




	// roundabout


opts = $('ul.rr').roundabout({
					btnNext: '.flecha-r',
					btnPrev:'.flecha-l',
					autoplay: false,
					minOpacity:-6,
					maxOpacity:1,
					duration:velocidad,
					clickToFocus:false,
					minScale:1,
					startingChild:startingChild,
					btnNextCallback:function(){
						var roundOnFocus;
						for(var k=0;k<=7;k++)
						{
							$('.refris').removeClass('cerrar-'+k+'')
						}
						roundOnFocus=parseInt($('ul.rr').roundabout('getChildInFocus'))
						if(jQuery.browser.msie)
						{
							$('.refris').addClass('cerrar-'+roundOnFocus+'')
						}else{
							$('.refris').addClass('cerrar-'+roundOnFocus+'')							
						}
					
						
						var url=document.URL;
							while(url.search('#')!=-1)
							{
								url=url.substring(0,url.length-1)
							}	
						var urlNueva;
						if(jQuery.browser.msie){	

							location.hash=urlNueva;

						}else{
							history.pushState(null, null, url+'#'+(urlNueva)+'');
						}
						
						var color=$('.roundabout-in-focus').children('.refri-foto').attr('data-doble-modelo');
						if(color=='true')
						{
							$('.colores').css('visibility','visible');
						}else{
							$('.colores').css('visibility','hidden');
						}
						
											
						
					},
					btnPrevCallback:function(){
						var roundOnFocus;
						for(var k=0;k<=7;k++)
						{
							$('.refris').removeClass('cerrar-'+k+'')
						}
						roundOnFocus=parseInt($('ul.rr').roundabout('getChildInFocus'))
						
						if(jQuery.browser.msie)
						{
							$('.refris').addClass('cerrar-'+roundOnFocus+'')
						}else{
							$('.refris').addClass('cerrar-'+roundOnFocus+'')							
						}
						var url=document.URL;

						while(url.search('#')!=-1)
						{
							url=url.substring(0,url.length-1)
						}	
						var urlNueva;
						if(jQuery.browser.msie){
							location.hash=urlNueva;

						}else{
							history.pushState(null, null, url+'#'+(urlNueva)+'');
						
						}



						var color=$('.roundabout-in-focus').children('.refri-foto').attr('data-doble-modelo');
						if(color=='true')
						{
							$('.colores').css('visibility','visible');
						}else{
							$('.colores').css('visibility','hidden');
						}
						
												
					}
					
				}).data('roundabout.opts');






var tl_EscenasControl = new TimelineMax(
				{
					paused:false,
					onStart:function(){
					},
					onComplete:function(){
						$('.navegador.navegador-firsttime').hide()
						primeraVez=false;
						continuarBg=false;
                        if(!agregarEscenasSalida){ //agregado
                            agregarEscenasSalida=true;
                        }
					}
				});
				
				tl_EscenasControl.add('escena_1',0)
				tl_EscenasControl.add(control_escena1(),'escena_1')
				
				tl_EscenasControl.add('escena_2','+='+delayEntreEscenas)
				tl_EscenasControl.add(control_escena2(),'escena_2')


function control_escena3()
				{
					var tl_escena = new TimelineLite({
						paused:false,
						onStart:function(){
							_gaq.push(['_trackPageview','/samsung-refrigeradorasTMF-InicioEscenaAperitivos3'])
							animarControl('134px')
							$('.navegador-botones').hide();
							contadorEscenas=3;
							$('.horario-contenedor').css('opacity','1')

							if(primeraVez)
							{
								escena_2_salida();						
							}
							$('.tooltipsContenedor .tooltip-escenas').hide()
							$('.tooltipsContenedor .tooltip-escena-3').show()
							mover=true;
						},
						onComplete:function(){
							grupos_true_false(1)
							$('.navegador-botones').show();
							$('.navegador-botones.boton-3').hide();
							
						}	
					});
					
					tl_escena.add
					(
						[
							// TweenMax.to
							// (
							// 	$('.escena-3 .refrigeradora'),
							// 	velocidadEntreEscenas/6,
							// 	{
							// 		autoAlpha:1
							// 	}
							// ),
							TweenMax.to
							(
								$('.escena-3 .brillos'),
								velocidadEntreEscenas/2,
								{
									autoAlpha:1
								}
							),
							TweenMax.to
							(
								$('.escena-3 .personas'),
								velocidadEntreEscenas/2,
								{
									autoAlpha:1,
									delay:1
								}
							),
							TweenMax.to
							(
								$('.escena-3 .vitrinas,.escena-3 .vitrina-grande,.escena-3 .vitrina-chica, .escena-3 .marco-blur'),
								velocidadEntreEscenas/4,
								{
									autoAlpha:1
								}
							),
							TweenMax.to
							(
								$('.escena-3 .reloj, .escena-3 .refrigeradora,.escena-3 .microonda'),
								0.01,
								// velocidadEntreEscenas/4,
								{
									autoAlpha:1
								}
							),
							TweenMax.staggerTo
							(
								$('.escena-3 .vitrina-grande'),
								velocidadEntreEscenas/4,
								{
									autoAlpha:1
								},0.2
							),
							TweenMax.staggerTo
							(
								$('.escena-3 .repostero-objetos'),
								velocidadEntreEscenas/4,
								{
									left:'+=100',
									autoAlpha:1
								},0.1
							),
							TweenMax.to
							(
								$('.escena-3 .vitrina-gabinete-objetos, .escena-3 .vitrina-chica, .escena-3 .vitrina-grande'),
								velocidadEntreEscenas/3,
								{
									left:'+=50px',
									autoAlpha:1
								}
							),
							TweenMax.to
							(
								$('.cycle-escenas'),
								velocidadEntreEscenas/4,
								{
									backgroundColor:'#CAC0B6'

								}
							),
							TweenMax.to
							(
								$('.horario'),
								velocidadEntreEscenas,
								{
									rotation:'+='+rotacionHorario+'deg'

								}
							),
							TweenMax.to
							(
								$('.minutero'),
								velocidadEntreEscenas,
								{
									rotation:'+='+rotacionMinutero+'deg'

								}
							)
						],'start'
					)
					
					return tl_escena;   
					
				}


				tl_grupo_2.add
				(
					[
						TweenMax.staggerTo
						(
							$('.grupo_2 .pared_lineas'),
							velocidadEntreEscenas/2,
							{
								left:'0px',
								ease:Back.easeOut
							},0.2
						),
						TweenMax.staggerTo
						(
							[
							'.grupo_2 .gabinete-1',
							'.grupo_2 .gabinete-2',
							'.grupo_2 .gabinete-2b',
							'.grupo_2 .gabinete-3',
							'.grupo_2 .gabinete-4',
							'.grupo_2 .gabinete-5',
							'.grupo_2 .gabinete-6',
							'.grupo_2 .gabinete-7',
							'.grupo_2 .gabinete-8'
							],
							velocidadEntreEscenas/4,
							{
								autoAlpha:1
							},0.1
						),
						TweenMax.staggerTo
						(
							[
							'.grupo_2 .repostero-1',
							'.grupo_2 .repostero-2',
							'.grupo_2 .repostero-3',
							'.grupo_2 .repostero-4',
							'.grupo_2 .repostero-5',
							'.grupo_2 .repostero-6',
							'.grupo_2 .repostero-7',
							'.grupo_2 .repostero-8'
							],
							velocidadEntreEscenas/4,
							{
								autoAlpha:1
							},0.1
						),
						TweenMax.to
						(
							$('.grupo_2 .sombra-piso'),
							velocidadEntreEscenas,
							{
								autoAlpha:1
							}
						),
						TweenMax.to
						(
							$('.grupo_2 .video'),
							velocidadEntreEscenas/4,
							{
								autoAlpha:1
							}
						)
						
						
					],'start'
				)




// url
	var u=document.URL;
	u=u.replace(location.protocol+'//'+location.host+location.pathname,'')

				if(document.location.hash.search('RT22FAJADSP')!=-1)
				{
					startingChild=1;
				}

						if(jQuery.browser.msie){
							location.hash=urlNueva;

						}else{
							history.pushState(null, null, url+'#'+(urlNueva)+'');
						
						}

			var url=$(this).attr('data-url')
			
			if(url=='inicio')
			{
				location=location.protocol+'//'+location.hostname+'/index.html'	
			}else if(url=='linea-2013')
			{
					location=location.protocol+'//'+location.hostname+'/linea.html'	
			}else if(url=='tips')
			{
					location=location.protocol+'//'+location.hostname+'/tips.html'
			}


		var uu=document.URL;
		if(uu.search('linea.html')!=-1)
		{
			iniciarTodo()
		}else if(uu.search('detalle.html')!=-1)
		{
			iniciarTodo()
		
		}else if(uu.search('tips.html')!=-1)
		{	
			iniciarTodo()		
		}else{
			
		}	

//preloader

	if($('body').hasClass('preloader'))
	{
		$.loaderItems({ 
				allImages: true, 
				eachCb: function (percent) { 
				var p=percent
				p=parseInt(570*p/100)
				
				TLloader= new TimelineMax({paused:false});
				TLloader.to($('.loader-on'), 0.5, 
								{
									width:''+p+''				
								}
				)
				}, 
				allCb: function () { 
				
				setTimeout(function(){
					$('.barra-loader').fadeOut(400, function(){
						$('.capa-loader').fadeOut(1500)
					})
				},2500)
				

					iniciarTodo()
				} 
				
		});
	}



opts = $('.escenas-home-ie .cycle-escenas').cycle({ 
			fx: 'fade',
			timeout:9000,
			//delay:3000,
			speed:1000,
			slideResize: true,
			containerResize: true,
			width: '100%',
			height: '100%',
			fit: 1,
			before:function(curr, next, opts){
			},			
			end:function(){
				}
		}).data('cycle.opts');



function prealoder()
{
			$.loaderItems({ 
				allImages: true, 
				eachCb: function (percent) { 
				var p=percent
				p=parseInt(570*p/100)
				
				TLloader= new TimelineMax({paused:false});
				TLloader.to($('.loader-on'), 0.5, 
								{
									width:''+p+''				
								}
				)
				}, 
				allCb: function () { 
				
				setTimeout(function(){
					$('.barra-loader').fadeOut(400, function(){
						$('.capa-loader').fadeOut(1500)
					})
				},2500)
				

					iniciarTodo()
				} 
				
		});
}

						tl.add(
							[
								TweenMax.to($('.preloader .capa_sub'), 0.5,
										{
											autoAlpha:0,
										}
								),
								TweenMax.to($('.preloader .tiempo'), 0.5,
										{
											autoAlpha:0,
										}
								)
							]





			var tl_nivel_agua=new TimelineMax({
				paused:true,
				onComplete:function(){
					tl_prendas.play()
					iniciarBurbujas()
				}
			})
			var tl_prendas=new TimelineMax({
				paused:true,
				yoyo:true,
				repeat:-1
			})

			// tl_tambor.play()
			tl_nivel_agua.play()

			tl_nivel_agua.add(
				[
					TweenMax.to($('.tambor'),tiempo_ciclo/2,
						{
							right:'-1880px',
							ease:Linear.easeNone
							// ease:Power1.easeInOut
						}
					),
					TweenMax.to($('.agua_ondas'),tiempo_ciclo/2,
						{
							top:'93px',
							right:'-18462px',
							ease:Power1.easeOut
						}
					),
					TweenMax.to($('.agua'),tiempo_ciclo/2,
						{
							top:'233px',
							ease:Power1.easeOut

						}
					)
				],null, "start", null
			)


function pushHistory(n)
		{
			if(msie)
			{
				switch(n)
				{
					case 0:
						location.hash='WA18F7G6DTS';
					break;
					case 1:
						location.hash='WA18F7L8DTA';
					break;
					case 2:
						location.hash='WA16F7L8DTA';
					break;
					case 3:
						location.hash='WA16F7L4UWA';
					break;
					case 4:
						location.hash='WA16F7L2UWW';
					break;
					case 5:
						location.hash='WA14F5L8DTA';
					break;
					case 6:
						location.hash='WA14F5L4UWA';
					break;
					case 7:
						location.hash='WA14F5L2UWW';
					break;
					case 8:
						location.hash='WA12F5L8DTA';
					break;
					case 9:
						location.hash='WA12F5L4UWA';
					break;
					case 10:
						location.hash='WA12F5L4UWW';
					break;
					case 11:
						location.hash='WA12F5L2UWW';
					break;
					case 12:
						location.hash='WA10F5L8DTA';
					break;
					case 13:
						location.hash='WA10F5L4UWA';
					break;
					case 14:
						location.hash='WA10F5L2UWW';
					break;
				}
			}
			else
			{
				switch(n)
				{
					case 0:
						history.pushState(null, null, urlLimpia+'#WA18F7G6DTS');
					break;
					case 1:
						history.pushState(null, null, urlLimpia+'#WA18F7L8DTA');
					break;
					case 2:
						history.pushState(null, null, urlLimpia+'#WA16F7L8DTA');
					break;
					case 3:
						history.pushState(null, null, urlLimpia+'#WA16F7L4UWA');
					break;
					case 4:
						history.pushState(null, null, urlLimpia+'#WA16F7L2UWW');
					break;
					case 5:
						history.pushState(null, null, urlLimpia+'#WA14F5L8DTA');
					break;
					case 6:
						history.pushState(null, null, urlLimpia+'#WA14F5L4UWA');
					break;
					case 7:
						history.pushState(null, null, urlLimpia+'#WA14F5L2UWW');
					break;
					case 8:
						history.pushState(null, null, urlLimpia+'#WA12F5L8DTA');
					break;
					case 9:
						history.pushState(null, null, urlLimpia+'#WA12F5L4UWA');
					break;
					case 10:
						history.pushState(null, null, urlLimpia+'#WA12F5L4UWW');
					break;
					case 11:
						history.pushState(null, null, urlLimpia+'#WA12F5L2UWW');
					break;
					case 12:
						history.pushState(null, null, urlLimpia+'#WA10F5L8DTA');
					break;
					case 13:
						history.pushState(null, null, urlLimpia+'#WA10F5L4UWA');
					break;
					case 14:
						history.pushState(null, null, urlLimpia+'#WA10F5L2UWW');
					break;
				}				
			}

		}//pushHistory



	function shareTW(a) {
		this.id=a;
		var name, url
			switch(id)
			{
			case '1':
				name='¡Una refrigeradora con 10 años de garantía! Conoce el modelo Samsung RT22FAJADSP.';
				url='http://bit.ly/10ZHKVP'
			break;
			case '2':
				name='¡La refrigeradora perfecta para tus verduras! Conoce la nueva refrigeradora Samsung RT25FAJADSP.';
				url='http://bit.ly/14xygC7'
			break;
			case '3':
				name='¿Botellas de 3 litros en tu refrigeradora? ¡Con la nueva Samsung RT29FAJHDSP es posible!';
				url='http://bit.ly/120bC9p'
			break;
			case '13':
				name='¿Botellas de 3 litros en tu refrigeradora? ¡Con la nueva Samsung RT29FAJHDWW es posible!';
				url='http://bit.ly/15KRJSI'
			break;
			case '4':
				name='¡Conoce la nueva refrigeradora Samsung RT32FAJHDSL que te ayudará a ahorrar electricidad!';
				url='http://bit.ly/11lOwVH'
			break;
			case '14':
				name='¡Conoce la nueva refrigeradora Samsung RT32FAJHDWW que te ayudará a ahorrar electricidad!';
				url='http://bit.ly/15C6Hd3'
			break;
			case '5':
				name='¡La refrigeradora con 5L de agua de capacidad! Conoce el modelo Samsung RT32FBRHDSL.';
				url='http://bit.ly/183TjDw'
			break;
			case '6':
				name='¡Controla tu refrigeradora sin abrirla! Conoce el Samsung RT35FEAJDSL con panel digital.';
				url='http://bit.ly/15KRYxj'
			break;
			case '16':
				name='¡Controla tu refrigeradora sin abrirla! Conoce el Samsung RT35FEAJDWW con panel digital.';
				url='http://bit.ly/11lOHjQ'
			break;
			case '7':
				name='¡Congela bebidas en tiempo récord! Conoce la nueva refrigeradora Samsung RT38FEAJDSL.';
				url='http://bit.ly/19JNrO0'
			break;
			case '8':
				name='¡Nunca faltará hielo en tu refrigeradora! Conoce el modelo Samsung RT38FEAKDSL con Auto Ice Maker.';
				url='http://bit.ly/18PvY5t'
			break;
				
			}
		
			var txt_tw = encodeURIComponent(name);	
			window.open('https://twitter.com/share?text=' + txt_tw + '&url='+url, "Tw", "menubar=1,resizable=1,width=650,height=450");
			return false;
	
	}