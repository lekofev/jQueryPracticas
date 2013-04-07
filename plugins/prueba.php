
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<script type="text/javascript" src="../jquery-1.8.3.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {
    
	
jQuery.fn.miPlugin =	function(cualquierCosa, opciones) {
							//Defino unas opciones por defecto
							   var configuracion = {
								  dato1: "lo que sea",
								  dato2: 78
							   }
						   
						    //extiendo las opciones por defecto con las recibidas
   							jQuery.extend(configuracion, opciones);
							console.log(configuracion.dato1+" - "+configuracion.dato2)
						   //resto del plugin
						   //donde tenemos la variable configuracion para personalizar el plugin   
		   
						};

	

$("body").miPlugin({
   dato1: "Hola amigos!",
   dato2: true
});
	
});




</script>


</head>

<body>


</body>
</html>