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
var proyectiles = new Array();
	function kdown(e){
		teclaPresionada[e.which]=true;
		//console.log(e.which);
		}
	function kup(e){
		teclaPresionada[e.which]=false;
		//console.log(e.which);
		}				
	
	$(document).click(function(){
		//console.log('click')
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
	
	
	
	dibujar();
	setInterval(dibujar,50);
}

function dibujar(){
	//teclaApretada(tecla)
	movimiento();
	dibujarShip(ship)
	//bulletMove();
	}
	
function bullets(ship){
	
	
	}
	
function dibujarShip(ship){
		ship.clearRect(0,0,canvas.width,canvas.height);
		ship.drawImage(sprite,player.sx, player.sy, player.sw, player.sh, player.dx, player.dy, player.dw, player.dh);
		//console.log(player.sw)
			
		ship.fillText(player.dx+'-'+player.dy, 50, 50);
		disparar();
	}



function disparar(){
if(teclaPresionada[69])
		{
			proyectiles.push(new dibujarObjetos(sx,sy,sw,sh,dx,dy,dw,dh));
			console.log(proyectiles.length);
		}
		
		for(var j=0; j<proyectiles.length;j++)
		{
			proyectiles[j].sx=12,
			proyectiles[j].sy=134,
			proyectiles[j].sw=3,
			proyectiles[j].sh=7
				if(j==(proyectiles.length-1))
				{
					proyectiles[j].dx=(player.dx+18)
				}else
				{
					proyectiles[j].dx=proyectiles[j].dx
				}
			
				if(j==(proyectiles.length-1))
				{
					proyectiles[j].dy=player.dy    
				}else
				{
					proyectiles[j].dy=proyectiles[j].dy-15
				}
			
			proyectiles[j].dw=3,
			proyectiles[j].dh=7;
			//console.log(player.dx)
			
			
			
		ship.drawImage(	sprite,
						proyectiles[j].sx, 
						proyectiles[j].sy, 
						proyectiles[j].sw, 
						proyectiles[j].sh, 
						proyectiles[j].dx, 
						proyectiles[j].dy, 
						proyectiles[j].dw, 
						proyectiles[j].dh
						);
		
		
		}	
	
	
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
		//console.log(player.dx+' - '+ player.dy)
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