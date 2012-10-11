<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript" src="js/canvas-opciones.js"></script>
<script type="text/javascript" src="js/canvas-objetos.js"></script>
<script type="text/javascript" src="js/movimiento.js"></script>
<style>
body{
	background-color:#CCC;
	
	}
canvas{
	background-color: #09C;
	border:2px solid #00F;
	margin:auto;
	}	
</style>
<script type="text/javascript">
window.addEventListener('load',init,false);
	var canvas=null,gunner=null;
	var tecla=null;
	var dx=50, dy=50, dir=null
	var spriteGunner=null;
	var sx=349,sy=1,sw=66,sh=64,dx=0,dy=0,dw=66,dh=64;
	
	spriteGunner=new Image();
	spriteGunner.src="img/sluggunner.png";

document.addEventListener('keydown',teclaPrecionada,false);
function teclaPrecionada(e){
tecla=e.keyCode;
}

function init(){
	canvas=document.getElementById('myCanvas');
	gunner=canvas.getContext('2d');		
	setInterval(mover,100);
}
function mover(){
	direccion();
	dibujarGunner(gunner)
	}

function dibujarGunner(gunner){
	gunner.clearRect(0,0,canvas.width,canvas.height);
	gunner.fillText('ultima tecla: '+tecla,0,20)
	gunner.drawImage(spriteGunner,349,1,66,64,dx,dy,66,64);
	//
}

function direccion(){
	//dx+=5;dy+=5
	if(tecla==65)
		{dir=1;}
	if(tecla==87)
		{dir=2;}
	if(tecla==68)
		{dir=3;}
	if(tecla==83)
		{dir=4;}
		
	if(dir==null)
		{dx+=5;}
	if(dir==1)
		{dx-=5;}
	if(dir==2)
		{dy-=5;}
	if(dir==3)
		{dx+=5;}
	if(dir==4)
		{dy+=5;}						
	//return dir
	}

/*
	this.sx=349;
	this.sy=1;
	this.sw=66;
	this.sh=64;
	this.dx=0;
	this.dy=0;
	this.dw=66;
	this.dh=64;
*/
</script>
</head>
<body>
<canvas id="myCanvas" width="960" height="500">
</canvas>

</body>
</html>