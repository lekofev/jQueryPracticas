<!DOCTYPE html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {
window.addEventListener('load',init,false);

var canvas=null, ship=null, y=100, x=0;
var spriteShip=null, sx=null,sy=null,sw=null,sh=null,dx=400,dy=250,dw=null,dh=null;
var tecla=null, mov=null;
/*
document.addEventListener('keypress',kpress,false);
function kpress(e){
tecla=e.keyCode;
console.log(tecla)
}


document.addEventListener('keydown',kdown,false);
function kdown(e){
tecla=e.keyCode;
console.log(tecla)
}

document.addEventListener('keyup',kup,false);
function kup(e){
tecla=e.keyCode;
console.log(tecla)
}*/


	
	$(document).keypress(kpress);
	$(document).keydown(kdown);
	$(document).keyup(kup);	
	function kpress(e){
		//console.log(e.which)
		}
	function kdown(e){
		tecla=e.which;
		console.log(tecla);
		}
	function kup(e){
		if(tecla==e.which)
		{tecla=null;}
		console.log(tecla)
		}				
	


function init(){
	canvas=document.getElementById('canvas');
	ship=canvas.getContext('2d');

	spriteShip=new Image();
	spriteShip.src="spriteShip.png";
	
	dibujar();
	setInterval(dibujar,50);
}
function dibujar(){
	teclaApretada(tecla)
	spriteChange(mov);
	//moviemientoNave(mov)
	dibujarShip(ship)
	
	}
	
function dibujarShip(ship){
	ship.clearRect(0,0,canvas.width,canvas.height);
	
	ship.drawImage(spriteShip,sx, sy, sw, sh, dx, dy, dw, dh);
	
	fx.strokeStyle="#FF0000";
	fx.strokeRect(dx,dy,dw,dh);
	
	ship.fillText(tecla+'-'+mov+'-'+dx+'-'+dy, 50, 50);

	}
	
function moviemientoNave(mov){
	}	
	

function spriteChange(mov){
		switch(mov){
		case null:
			sx=42,sy=3,sw=39,sh=36,dx=dx,dy=dy,dw=39,dh=36;		
		break;
		
		case 'left':
			sx=5,sy=43,sw=30,sh=43,dx-=5,dy=dy,dw=30,dh=43;
		break;
		
		case 'right':
			sx=89,sy=43,sw=30,sh=43,dx+=5,dy=dy,dw=30,dh=43;
		break;
		
		case 'up':
			sx=42,sy=43,sw=39,sh=43,dx=dx,dy-=5,dw=39,dh=43;
		break;
		
		case 'bottom':
			sx=42,sy=89,sw=39,sh=40,dx=dx,dy+=5,dw=39,dh=40;
		break;
		}
	mov=null
	}	


function teclaApretada(tecla){
		switch(tecla){
		case null:
		return (mov=null)
		case 65:
		return (mov='left')
		break;
		case 87:
		return (mov='up')
		break;
		case 68:
		return (mov='right')
		break;
		case 83:
		return (mov='bottom')
		break;
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