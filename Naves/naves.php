<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="styles.css" />
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript" src="scripts.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {

	$('#cuadro').mousemove(function(e){
			var x=e.pageX;
			var y=e.pageY;
			$('#nave').moverNave(y);
			//$('#debug').append(x+'-');//DEBUG
			/*
			var offsetBullet=$('.bullet').offset()
				if(isNaN(offsetBullet)){
					
					}else{
						if(parseInt(offsetBullet.left)>1500){
						$('.bullet').remove();					
						}
					}
			*/
	});

	$('#nave').click(function(){
		$('#cuadro').crearBullets();
	});

function crearMobs(){
	$('#cuadro').crearEnemigos();
	}

function eliminarBullets(){
	$('.bullet').choque()
	}	
	
setInterval(crearMobs,1000)
setInterval(eliminarBullets,5000)

//setInterval(crearLosCubos,1000);
/*	ejemplo de plugin
jQuery.fn.desaparece = function() {
   this.each(function(){
      elem = $(this);
      elem.css("display", "none");
   });   
   return this;
};
*/	
	
});

</script>
<style>
</style>
<title>Documento sin título</title>
</head>
<body>
<input type="button" id="boton"  value="crear"/>
<div id="cuadro">
<div id="nave">La nave</div>
</div>

<div id="debug">
</div>

</body>
</html>