<!DOCTYPE html>
<!--[if lt IE 7]> <html lang="es" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html lang="es" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html lang="es" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html lang="es" class="no-js"> <!--<![endif]-->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>

<style>
body { background-color: black;}
</style>



</head>
<body>
<canvas id="a4" width="600" height="600"></canvas>

<script type="text/javascript">

(function(){

	var d = document,
	canvas = d.getElementById( 'a4' ),
	c = canvas.getContext( '2d' ),
	cx = 300,	cy = 300,	dec = 0;
  
	setInterval( animar, 10 );
	
	

	function animar() {
		c.fillStyle = "rgba(5, 3, 17, 0.2)";
		c.fillRect( 0, 0, 600, 600);
		dec = dec + 0.0001 ;
		for (var i = 1; i < 60; i++)
  		{		
			c.fillStyle = "rgba(" + i*4 + ", 60, 220, " + 0.4*i + ")";
			c.fillRect (600-i*5-Math.cos(dec*i)*40, 600-i*5-Math.sin(dec*i)*40, 5, 5);
			//console.log((600-i*5-Math.cos(dec*i)*40), Math.cos(5))
			c.fillRect (0+i*5-Math.sin(dec*i)*40, 0+i*5-Math.cos(dec*i)*40, 2, 2);
		}
	}
	
	
	
	
	
})()

</script>
</body>
</html>