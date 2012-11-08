<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {
window.addEventListener('load',init,false);

var canvas=null, ship=null, y=100, x=0;
var sprite=null, sx=null,sy=null,sw=null,sh=null,dx=400,dy=250,dw=null,dh=null;
var tecla=null, mov=null;
var player=null, bullet=null;	

	//$(document).keypress(kpress);
	$(document).keydown(kdown);
	$(document).keyup(kup);	

var teclaPresionada= new Array();

	function kdown(e){
		teclaPresionada[e.which]=true;
		console.log(e.which);
		}
	function kup(e){
		teclaPresionada[e.which]=false;
		console.log(e.which);
		}				
	
	$(document).click(function(){
		console.log('click')
		bullets();
		})	

function init(){
	canvas=document.getElementById('canvas');
	ship=canvas.getContext('2d');

	//spriteShip=new Image();
	//spriteShip.src="spriteShip.png";	

	sprite=new Image();
	sprite.src="spriteShip.png";

//	player=new dibujarObjetos(250,0,14,14,0,0,14,14);
	player=new dibujarObjetos(sx,sy,sw,sh,dx,dy,dw,dh);
	bullet=new dibujarObjetos(sx,sy,sw,sh,dx,dy,dw,dh);
	
	dibujar();
	setInterval(dibujar,50);
}

function dibujar(){
	//teclaApretada(tecla)
	movimiento();
	dibujarShip(ship)
	bulletMove();
	}
	
function bullets(){
	ship.drawImage(sprite,bullet.sx, bullet.sy, bullet.sw, bullet.sh, bullet.dx, bullet.dy, bullet.dw, bullet.dh);
	
	}
	
function dibujarShip(ship){
	ship.clearRect(0,0,canvas.width,canvas.height);
	
	ship.drawImage(sprite,player.sx, player.sy, player.sw, player.sh, player.dx, player.dy, player.dw, player.dh);
	
		

	ship.fillText(tecla+'-'+mov+'-'+dx+'-'+dy, 50, 50);

	}
	
function dibujarObjetos(sx, sy, sw, sh, dx, dy, dw, dh){
	this.sx=(sx==null)?250:sx
	this.sy=(sy==null)?0:sy
	this.sw=(sw==null)?14:sw
	this.sh=(sh==null)?14:sh
	this.dx=(dx==null)?0:dx
	this.dy=(dy==null)?0:dy
	this.dw=(dw==null)?14:dw
	this.dh=(dh==null)?14:dh
	}	
	
var subirBullet=null

function bulletMove(){
			
			subirBullet=player.y;
			/*subirBullet--*/
			
			bullet.sx=12,
			bullet.sy=134,
			bullet.sw=3,
			bullet.sh=7,
			bullet.dx=bullet.dx,
			bullet.dy=bullet.dy-1,     
			bullet.dw=3,
			bullet.dh=7;
	}


function movimiento(){
		
		if(!teclaPresionada[65] && !teclaPresionada[68] && !teclaPresionada[87] && !teclaPresionada[83])
		{
			player.sx=42,
			player.sy=89,
			player.sw=39,
			player.sh=40,
			player.dx=player.dx,
			player.dy=player.dy,
			player.dw=39,
			player.dh=40;
		
		}
		
		
		
		if(teclaPresionada[65])
		{
			player.sx=5,
			player.sy=43,
			player.sw=30,
			player.sh=43,
			player.dx-=5,
			player.dy=player.dy,
			player.dw=30,
			player.dh=43;
		}
		
		
		if(teclaPresionada[68])
		{
			player.sx=89,
			player.sy=43,
			player.sw=30,
			player.sh=43,
			player.dx+=5,
			player.dy=player.dy,
			player.dw=30,
			player.dh=43;
		}
		
		if(teclaPresionada[87])
		{
			player.sx=42,
			player.sy=43,
			player.sw=39,
			player.sh=43,
			player.dx=player.dx,
			player.dy-=5,
			player.dw=39,
			player.dh=43;
		}
		
		if(teclaPresionada[83])
		{
			player.sx=42,
			player.sy=89,
			player.sw=39,
			player.sh=40,
			player.dx=player.dx,
			player.dy+=5,
			player.dw=39,
			player.dh=40;
		}
		if(teclaPresionada[32])
		{
		console.log('disparar');
		}
		
	}	

});

</script>
<style>
body{
	background-color:#CCC;	
	}
canvas{
	border:2px solid green;
	margin:auto;
	}
</style>  
<title>Documento sin título</title>
</head>
<body>
<canvas id="canvas" width="800px" height="500px"></canvas>
</body>
</html>