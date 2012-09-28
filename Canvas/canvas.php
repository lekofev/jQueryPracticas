<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <script type="text/javascript" src="../jquery.js"></script>
  <script type="text/javascript" src="jcanvas.min.js"></script>
<script type="text/javascript">
	var canvas=document.getElementById('myCanvas');
	var ctx=canvas.getContext('2d');
	ctx.fillStyle='#FF0000';
	ctx.fillRect(0,0,80,100);
</script> 
<script type="text/javascript">
	$(document).ready(function() {
	$("canvas").drawArc({
	  fillStyle: "#3c3c3c",
	  x: 50, 
	  y: 50,
	  radius: 25
	});
	   
	});
</script>

  
<title>Documento sin título</title>
</head>

<body>
<canvas id="canvas" width="500px" height="500px">
</canvas>
</body>
</html>