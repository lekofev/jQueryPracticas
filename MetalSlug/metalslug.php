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
	var dx=50, dy=500, dir=null
	var spriteGunner=null;
	var sx=349,sy=1,sw=66,sh=64,dx=0,dy=300,dw=66,dh=64;
	var pasoL=null;
	var accion=0;
	spriteGunner=new Image();
	spriteGunner.src="img/sluggunner.png";

document.addEventListener('keydown',teclaPrecionada,false);
function teclaPrecionada(e){
tecla=e.keyCode;
}

function init(){
	canvas=document.getElementById('myCanvas');
	gunner=canvas.getContext('2d');		
	setInterval(mover,50);
}
function mover(){
	direccion();
	dibujarGunner(gunner)
	}

function dibujarGunner(gunner){
	gunner.clearRect(0,0,canvas.width,canvas.height);
	gunner.fillText('ultima tecla: '+tecla,0,20)
	gunner.drawImage(spriteGunner,sx,sy,sw,sh,dx,dy,dw,dh);
	//
}

function direccion(){
	//dx+=5;dy+=5
	if(tecla==65)
		{
		dir='left';
		
		}
	if(tecla==87)
		{dir='up';

		}
	if(tecla==68)
		{dir='right';
			
		}
	if(tecla==83)
		{dir='down';
		
		}
//moviemiento y direccion, cambio de sprite
	if(dir==null)
		{
	sx=sx,sy=sy,sw=sw,sh=sh,dx=dx,dy=dy,dw=dw,dh=dh
		
		}
	if(dir=='left')
		{
		sx=285,sy=1,sw=66,sh=64,dx-=5,dy=dy,dw=66,dh=64;				

		}
		
	if(dir=='right')
		{
			if(accion!=0)
			
		sx=349,sy=1,sw=66,sh=64,dx+=5,dy=dy,dw=66,dh=64;
				
		}
			
	if(dir=='up')
		{
		sx=349,sy=1,sw=66,sh=64,dx=dx,dy=dy,dw=66,dh=64;
		}
		
	if(dir=='down')
		{
		sx=572,sy=1842,sw=69,sh=43,dx=dx,dy=dy,dw=69,dh=43;
		
		}					
	accion++;
		if(accion==15)
			{
			accion=0;
			}
	tecla=null
	dir=null
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