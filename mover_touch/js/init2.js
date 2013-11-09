(function() {

	console.log('init')

	// (function() {
	//   var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	//                               window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
	//   window.requestAnimationFrame = requestAnimationFrame;
	// })();

	var stageAncho=document.body.clientWidth-10;
	var stageAlto=document.body.clientHeight-10;
	

	var naveAncho=40;
	var naveAlto=40;

	// var stageHeight=480;
	// var stageWidth=800;


	var padding=10;

	var posicionInicialX=parseInt(stageAncho/2);
	var posicionInicialY=parseInt(stageAlto-100);

	var posicionFinalX;
	var posicionFinalY;


	var velocidadJugador=1;
	var velocidadProyectil=12;
	var ease=7;
	var anguloR;

	var rotar=false;

	var canvas=document.getElementById('canvas')
	canvas.setAttribute('width',stageAncho)
	canvas.setAttribute('height',stageAlto)

	var jugador= new crearJugador(posicionInicialX, posicionInicialY, naveAncho, naveAlto, '#FF0000');
	
	// var enemigo=new crearEnemigo(700, 50)
	var proyectil;

	var ctxNave=canvas.getContext('2d');
	var ctxBullet=canvas.getContext('2d');
	var ctxEnemigo=canvas.getContext('2d');

	var ctxTest=canvas.getContext('2d');

	var arrProyectiles=[];
	var arrEnemigos=[];

	var temporalEnemigo=0;
	var frecuenciaEnemigo=50;
	var velocidadEnemigo=2;

	var touchEnemigo=false;


	function toDegres(r)
	{
		return (r*180)/Math.PI
	}
	function toRadian(s)
	{
		return (s*Math.PI)/180
	}

	var arrPlayers=[]

	function crearJugador(_posicionInicialX, _posicionInicialY,_ancho, _alto, _color)
	{
		var i = new Object()
		i._x=_posicionInicialX;
		i._y=_posicionInicialY;
		i._w=_ancho;
		i._h=_alto;
		i.color=_color;
		return i;
	}



	var sprite=new Image();
	sprite.src="images/sprite.png";


	render()
	var pause=false;
	function render()
	{
		if(!pause)
		{
			dibujarPlayer()
			dibujarEnemigo()
			dibujarBullet()
			destruirEnemigo()
			// crearTest()

			requestAnimationFrame(render)			
		}		
	}
	// setInterval(function(){dibujarPlayer()},30)

	function dibujarBullet()
	{

		

		if(posicionFinalX && posicionFinalY)
		{
			for(var k=0;k<=arrProyectiles.length-1; k++)
			{
							
				// var _radianes=getRadianes(jugador._x+jugador._w/2, arrEnemigos[k]._x, jugador._y+jugador._h/2 ,arrEnemigos[k]._y)

				// rotacionEjeX=arrEnemigos[k]._x+(14)
				// rotacionEjeY=arrEnemigos[k]._y+(14)

				// arrEnemigos[k]._direccionX=getSin(_radianes)*velocidadEnemigo; 
				// arrEnemigos[k]._direccionY=getCos(_radianes)*velocidadEnemigo;

				// arrEnemigos[k]._x+=arrEnemigos[k]._direccionX;
				// arrEnemigos[k]._y+=arrEnemigos[k]._direccionY;


				// ctxEnemigo.save();
				
				
				arrProyectiles[k]._x+=arrProyectiles[k]._direccionX;
				arrProyectiles[k]._y+=arrProyectiles[k]._direccionY;

				// var __radianes=getRadianes(jugador._x+jugador._w/2, arrEnemigos[k]._x, jugador._y+jugador._h/2 ,arrEnemigos[k]._y)

				rotacionEjeX=arrProyectiles[k]._x+(20);
				rotacionEjeY=arrProyectiles[k]._y+(20);

				ctxBullet.save();
				ctxBullet.translate(rotacionEjeX, rotacionEjeY)
				ctxBullet.rotate(arrProyectiles[k]._angulo)
				ctxBullet.translate(-rotacionEjeX,-rotacionEjeY)

				ctxBullet.drawImage(sprite, 53, 365, arrProyectiles[k]._w, arrProyectiles[k]._h, arrProyectiles[k]._x-arrProyectiles[k]._w/2, arrProyectiles[k]._y-arrProyectiles[k]._h/2, arrProyectiles[k]._w, arrProyectiles[k]._h);
				// ctxBullet.drawImage(sprite, 100, 387, arrProyectiles[k]._w, arrProyectiles[k]._h, arrProyectiles[k]._x-arrProyectiles[k]._w/2, arrProyectiles[k]._y-arrProyectiles[k]._h/2, arrProyectiles[k]._w, arrProyectiles[k]._h);
				ctxBullet.restore();

				if(arrProyectiles[k]._x>800 || arrProyectiles[k]._x<0 || arrProyectiles[k]._y>480 || arrProyectiles[k]._y<0 )
				{
					arrProyectiles.splice(k, 1)
				}


			}	
		}
		
	}	

	function crearBullets(posicionInicialX, posicionInicialY, direccionX, direccionY, angulo)
	{
		var i= new Object();
		i._x=posicionInicialX;
		i._y=posicionInicialY;
		i._direccionX=direccionX;
		i._direccionY=direccionY;
		i._angulo=angulo;
		i._w=40;
		i._h=40;
		return i;
	}

	function getRadianes(posicionFinalX, posicionInicialX, posicionFinalY, posicionInicialY)
	{

		return Math.atan2(posicionFinalX -posicionInicialX, posicionFinalY -posicionInicialY)
	}

	function getSin(r)
	{
		return Math.sin(r)
	}
	function getCos(r)
	{
		return Math.cos(r)
	}


	

	function crearEnemigo(posicionInicialX, posicionInicialY, ancho, alto, direccionX, direccionY, angulo)
	{
		var i= new Object();
		i._x=posicionInicialX;
		i._y=posicionInicialY;
		i._w=ancho;
		i._h=alto;
		i._direccionX=direccionX;
		i._direccionY=direccionY;
		i._angulo=angulo;
		return i;
	}

	
	function dibujarEnemigo()
	{
		
		temporalEnemigo++
		// console.log(temporalEnemigo, 'crearEnemigo')

		if (temporalEnemigo==frecuenciaEnemigo)
		{

			var enemigoX= Math.random()*400;
			var enemigoY= Math.random()*400;

			var radianes=getRadianes(jugador._x+jugador._w/2, enemigoX, jugador._y+jugador._h/2 ,enemigoY)
			
			direccionX=getSin(radianes)*velocidadEnemigo; 
			direccionY=getCos(radianes)*velocidadEnemigo;


			arrEnemigos.push(new crearEnemigo(enemigoX, enemigoY, 28, 28, direccionX, direccionY, (radianes*-1)))		

			temporalEnemigo=0;
		}

		

		if(arrEnemigos.length!=0)
		{
			// console.log(arrEnemigos)

			for(var k=0;k<=arrEnemigos.length-1; k++)
			{
				// ctxEnemigo.fillRect(arrEnemigos[k]._x, arrEnemigos[k]._y,arrEnemigos[k]._w, arrEnemigos[k]._h)


				// var enemigoX= Math.random()*400;
				// var enemigoY= Math.random()*400;

				var _radianes=getRadianes(jugador._x+jugador._w/2, arrEnemigos[k]._x, jugador._y+jugador._h/2 ,arrEnemigos[k]._y)
				rotacionEjeX=arrEnemigos[k]._x+(14)
				rotacionEjeY=arrEnemigos[k]._y+(14)

				arrEnemigos[k]._direccionX=getSin(_radianes)*velocidadEnemigo; 
				arrEnemigos[k]._direccionY=getCos(_radianes)*velocidadEnemigo;

				arrEnemigos[k]._x+=arrEnemigos[k]._direccionX;
				arrEnemigos[k]._y+=arrEnemigos[k]._direccionY;

				// arrEnemigos[k]._x=arrEnemigos[k]._x;
				// arrEnemigos[k]._y=arrEnemigos[k]._y;


				ctxEnemigo.save();
				ctxEnemigo.translate(rotacionEjeX, rotacionEjeY)
				ctxEnemigo.rotate(_radianes*-1)
				// console.log(_radianes)
				ctxEnemigo.translate(-rotacionEjeX,-rotacionEjeY)
				
				ctxEnemigo.drawImage(sprite, 126, 377,arrEnemigos[k]._w, arrEnemigos[k]._h, arrEnemigos[k]._x-arrEnemigos[k]._w/2, arrEnemigos[k]._y-arrEnemigos[k]._h, arrEnemigos[k]._w, arrEnemigos[k]._h)
				// ctxBullet.drawImage(sprite, 100, 387, arrProyectiles[k]._w, arrProyectiles[k]._h, arrProyectiles[k]._x-arrProyectiles[k]._w/2, arrProyectiles[k]._y-arrProyectiles[k]._h/2, arrProyectiles[k]._w, arrProyectiles[k]._h);
				ctxEnemigo.restore();
			}
		}


		
		// ctxEnemigo.fillStyle="#ed1c24";
		// ctxEnemigo.fillRect(enemigo._x, enemigo._y,enemigo._w, enemigo._h)



		// ctxBullet.save();

		// if(posicionFinalX && posicionFinalY)
		// {
		// 	for(var k=0;k<=arrProyectiles.length-1; k++)
		// 	{
		// 		arrProyectiles[k]._x+=arrProyectiles[k]._direccionX;
		// 		arrProyectiles[k]._y+=arrProyectiles[k]._direccionY;
		// 		ctxBullet.drawImage(sprite, 100, 387, arrProyectiles[k]._w, arrProyectiles[k]._h, arrProyectiles[k]._x-arrProyectiles[k]._w/2, arrProyectiles[k]._y-arrProyectiles[k]._h/2, arrProyectiles[k]._w, arrProyectiles[k]._h);

		// 		if(arrProyectiles[k]._x>800 || arrProyectiles[k]._x<0 || arrProyectiles[k]._y>480 || arrProyectiles[k]._y<0 )
		// 		{
		// 			arrProyectiles.splice(k, 1)
		// 		}

		// 	}	
		// }
		// ctxBullet.restore();




	}

	function destruirEnemigo()
	{
		if(arrEnemigos.length!=0 && arrProyectiles.length!=0)
		{
			for(var k=0; k<=arrEnemigos.length-1; k++)
			{
				for(var j=0; j<=arrProyectiles.length-1; j++)
				{
					if(detectarChoque(arrEnemigos[k]._x,arrEnemigos[k]._y, arrEnemigos[k]._w, arrEnemigos[k]._h,arrProyectiles[j]._x,arrProyectiles[j]._y,arrProyectiles[j]._w,arrProyectiles[j]._h))
					{
						// console.log('choque')
						arrEnemigos.splice(k, 1);				
						arrProyectiles.splice(j, 1);				

					}
				}	

				// if(detectarChoque(arrEnemigos[k]._x,arrEnemigos[k]._y, arrEnemigos[k]._w, arrEnemigos[k]._h,jugador._x,jugador._y,jugador._w,jugador._h))
				// {
				// 	arrEnemigos.splice(k, 1);
				// }

			}
			// console.log(arrEnemigos, arrProyectiles)	
		}
	

	}

	function getRandomRange (min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	function detectarChoque(_x, _y, _w, _h, __x, __y, __w, __h )
	{
		// var ax=parseInt(a.css('left'))
		// var ay=parseInt(a.css('top'))
		// var aw=parseInt(a.css('width'))
		// var ah=parseInt(a.css('height'))

		// var bx=parseInt(b.css('left'))
		// var by=parseInt(b.css('top'))
		// var bw=parseInt(b.css('width'))
		// var bh=parseInt(b.css('height'))

		var ax=_x
		var ay=_y
		var aw=_w
		var ah=_h

		var bx=__x
		var by=__y
		var bw=__w
		var bh=__h

		return ( (ax<bx+bw) && (ax+aw>bx) && (ay<by+bh) && (ay+ah>by))
	}


	function dibujarPlayer()
	{
		ctxNave.save();
		ctxNave.clearRect(0,0,stageAncho,stageAlto)

		// ctxNave.translate(stageAncho/2,stageAlto/2)
		// ctxNave.rotate(toRadian(20))



			// mover=false;
			// anguloR=Math.atan2(stage.mouseX-this.x, stage.mouseY-this.y)
			// finX= stage.mouseX;
			// finY= stage.mouseY;
			// velocidadX= Math.sin(anguloR)*velocidadR;
			// velocidadY= Math.cos(anguloR)*velocidadR;
			// this.addEventListener(Event.ENTER_FRAME, avanzando)
			
			// var sector:int;
			// anguloR= Math.atan2(stage.mouseX-this.x, stage.mouseY-this.y);//tangente
			// sector=Math.floor(anguloR/(Math.PI/8));
			// trace(sector)

		// var velocidad=10;
		

		// var velocidadX=Math.sin(anguloR)*velocidad;
		// var velocidadY=Math.cos(anguloR)*velocidad;
		// console.log(anguloR, velocidadX, velocidadY)

		if(posicionFinalX && posicionFinalY && arrEnemigos.length!=0)
		{

			// for (var i = 0; i <= arrEnemigos.length-1; i++) {
			// 	if(detectarChoque(posicionFinalX-7, posicionFinalY-7, 15, 15,arrEnemigos[i]._x, arrEnemigos[i]._y,arrEnemigos[i]._w, arrEnemigos[i]._h))
			// 	{
			// 		// console.log('cjgg')
			// 		jugador._x=jugador._x;
			// 		jugador._y=jugador._y;

			// 	}
			// 	else
			// 	{					
			// 	}

			// };
			// console.log(touchEnemigo)
			// if(touchEnemigo)
			// {
			// 	jugador._x=jugador._x;
			// 	jugador._y=jugador._y;

			// }
			// else
			// {

			// 	jugador._x+=(posicionFinalX-(jugador._w/2)-jugador._x)/ease
			// 	jugador._y+=(posicionFinalY-(jugador._h/2)-jugador._y)/ease
			// }

				jugador._x=jugador._x;
				jugador._y=jugador._y;


		}
		else
		{
			jugador._x=jugador._x;
			jugador._y=jugador._y;
		}

		anguloR=Math.atan2(posicionFinalX-(jugador._x+(jugador._w/2)), posicionFinalY-(jugador._y+(jugador._h/2)))
		
		// anguloR=anguloR+0.1



		rotacionEjeX=jugador._x+(jugador._w/2)
		rotacionEjeY=jugador._y+(jugador._h/2)

		ctxNave.translate(rotacionEjeX, rotacionEjeY)
		ctxNave.rotate(anguloR*-1)
		ctxNave.translate(-rotacionEjeX,-rotacionEjeY)


		ctxNave.drawImage(sprite, 0, 365, jugador._w, jugador._h, jugador._x, jugador._y, jugador._w, jugador._h);
		
		ctxNave.restore();
	}


	function crearTest()
	{
		ctxTest.fillStyle='#db0c0c';
		ctxTest.fillRect(100,100,100,100)
	}

	function detectarTouchEnemigo()
	{
		// console.log('detectarTouchEnemigo')
		console.log(detectarChoque(posicionFinalX, posicionFinalY, 100, 100,100, 100,100, 100))		
		if(arrEnemigos.length!=0)
		{


				if(detectarChoque(posicionFinalX, posicionFinalY, 100, 100,100, 100,100, 100))
				{
					// jugador._x=jugador._x;
					// jugador._y=jugador._y;
					touchEnemigo=true;
					console.log(touchEnemigo)

				}
				else
				{	
					touchEnemigo=false;
				}

			// for (var i = 0; i <= arrEnemigos.length-1; i++) {
			// 	// if(detectarChoque(posicionFinalX-7, posicionFinalY-7, 15, 15,arrEnemigos[i]._x, arrEnemigos[i]._y,arrEnemigos[i]._w, arrEnemigos[i]._h))
			// 	if(detectarChoque(posicionFinalX, posicionFinalY, 100, 100,100, 100,100, 100))
			// 	{
			// 		// jugador._x=jugador._x;
			// 		// jugador._y=jugador._y;
			// 		touchEnemigo=true;
			// 		console.log(touchEnemigo)

			// 	}

			// };
		}
			
	}



	detectarTouch()
	function detectarTouch()
	{
		
		canvas.addEventListener('touchstart', function(e) {
		    e.preventDefault();



		    detectarTouchEnemigo()

			posicionFinalX=e.targetTouches[0].pageX;
			posicionFinalY=e.targetTouches[0].pageY;


			var radianes=getRadianes(posicionFinalX, jugador._x, posicionFinalY, jugador._y)
			
			direccionX=getSin(radianes)*velocidadProyectil; 
			direccionY=getCos(radianes)*velocidadProyectil;

			
			// proyectil=new crearBullets(jugador._x+jugador._w/2, jugador._y, direccionX, direccionY, (radianes*-1))
			// for (var i = 0; i <= 3; i++) {
				
			// };

			arrProyectiles.push(new crearBullets(jugador._x+jugador._w/2, jugador._y+jugador._h/2, direccionX, direccionY, (radianes*-1)))
			
			// arrProyectiles.push(new crearBullets(400, 400, direccionX, direccionY, (radianes*-1)))

		}, false);
		
		canvas.addEventListener('touchend', function(e) {
		    e.preventDefault();

		
		}, false);
		

	}



}());








