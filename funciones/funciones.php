<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {

window.addEventListener('load',init,false);
var canvas=null, fx=null, y=100, x=0, objA=null, objB=null;
var xA=null, yA=null, xB=null, yB=null;

function init(){
	canvas=document.getElementById('canvas');
	fx=canvas.getContext('2d');
	
	/*objA=canvas.getContext('2d')
	objB=canvas.getContext('2d')
	
	objA.fillStyle='#FF0000';
	objA.fillRect(200,300,10,10);

	objB.fillStyle='#21459b';
	objB.fillRect(120,90,10,10);

	xA=objA.x;
	yA=objA.y;

	xB=objB.x;
	yB=objB.y;	*/

	fx.fillText(fx.x+'-'+fx.y, 50, 50);
	setInterval(dibujar,100);
}
function dibujar(){
	x++;
	y--;
	crearPixel(fx)
	}

function crearPixel(fx){
	//fx.clearRect(0,0,canvas.width,canvas.height);
	fx.fillStyle='#FF0000';
	fx.fillRect(x,y,1,1);
	//fx.fillText(fx.width+'-'+fx.height, 50, 50);

	}

});

</script>
<style>
body{
	background-color:#CCC;	
	}
canvas{
	border:2px solid green;	
	}
</style>  
<title>Documento sin título</title>
</head>
<body>
<canvas id="canvas" width="500px" height="500px"></canvas>
</body>
</html>