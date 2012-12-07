
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<title>Trabajando con plugins en jQuery - Tip simple</title>
<style type="text/css">
.tip{
background-color: #ffcc99;
padding: 10px;
display: none;
position: absolute;
    width: 200px;
}
.otroestilotip{
background-color: red;
padding: 10px;
display: none;
position: absolute;
    width: 200px;
	}
</style>
<script type="text/javascript" src="../jquery-1.8.3.js"></script>
<script>

jQuery.fn.creaTip = function(textoTip,opciones) {
	   
	   
   //opciones por defecto
   var configuracion = {
      velocidad: 100,
      animacionMuestra: {width: "show"},
      animacionOculta: {opacity: "hide"},
      claseTip: "tip"
   }
   //extiendo las opciones por defecto con las opciones del parámetro.
   jQuery.extend(configuracion, opciones);
	   
	   
	  this.each(function(){
		  elem = $(this);
		  var miTip = $('<div class="' + configuracion.claseTip + '">' + textoTip + '</div>');
		  $(document.body).append(miTip);
		  elem.data("capatip", miTip);
		  
		  elem.mouseenter(function(e){
			 var miTip = $(this).data("capatip");
			 miTip.css({
				left: e.pageX + 10,
				top: e.pageY + 5   
			 });
			 miTip.animate(configuracion.animacionMuestra, configuracion.velocidad);
		  });
		  elem.mouseleave(function(e){
			 var miTip = $(this).data("capatip");
			 miTip.animate(configuracion.animacionOculta, configuracion.velocidad);
		  });
   	   });
	   
   return this;
};

$(document).ready(function(){
	$("#elemento1").creaTip("todo bien...");


	$("#elemento2").creaTip("Otra prueba...", {
	   velocidad: 1000,
	   claseTip: "otroestilotip",
	   animacionMuestra: {
		  opacity: "show",
		  padding: '25px',
		  'font-size': '2em'
	   },
	   animacionOculta: {
		  height: "hide",
		  padding: '5px',
		  'font-size': '1em'
	   }
	});


})
</script>

</head>
<body>
<div id="elemento1" style="background-color: #ccccff; padding: 5px;">
Pasa el ratón por encima de esta capa...
</div>

<p>
Este texto es para poner .
</p>
<a id="elemento2" href="#">este enlace que también tiene tip</a>
</body>
</html>