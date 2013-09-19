/**
*
* @fileoverview Libreria con funciones de utilidad
* @author Nombre_programador
* @date Fecha_inicio
* @version 1.0
*/

$(document).ready(function(){

	
	
	var moverDerecha=false;
	var moverIzquierda=false;
	var moverAbajo=false;
	var moverArriba=false;
	var avion=$('.avion')
	var nuevoValor;
	var direccionX;
	var direccionY;

	var velocidad=10;
	var stageWidth=630;
	var stageHeight=350;

	var avionWidth=50;
	var avionHeight=50;

	var puntos=0;

	var xPosicion=200;
	var yPosicion=200;

	var pause=false;

	var onsehot=false;

	var xEnemigo;
	var yEnemigo;
	var arrEnemigo;
	var velocidadEnemigo=2;

	var intervaloEnemigo=0;

	var timer=setInterval(function(){init();},10)

	// setInterval(function(){crearEnemigos()}, 1000)

	avion.css('left', xPosicion+'px')
	avion.css('top', yPosicion+'px')



	$('.play').on('click', function(){
		pause=false;
	})
	$('.pause').on('click', function(){
		pause=true;
	})

	function init()
	{	
		if(!pause)
		{
			detectarTecla()
			moverAvion()
			moverEnemigos()
			detectarChoques()

			intervaloEnemigo++
			if(intervaloEnemigo==50)
			{
				crearEnemigos()
				intervaloEnemigo=0;
			}			
		}
	}


	function detectarTecla()
	{
		$(document).keydown(function(e) {
			// console.log(e.keyCode)
			switch(e.keyCode)
			{
				case 37:
					moverIzquierda=true;
				break;
				case 38:
					moverArriba=true;
				break;
				case 39:
					moverDerecha=true;
				break;
				case 40:
					moverAbajo=true;
				break;
				case 32:
					onsehot=true;
					crearProyectiles()
				break;
			}
		});	

		$(document).keyup(function(e) {

			// console.log(e.keycode)
			switch(e.keyCode)
			{
				case 37:
					moverIzquierda=false;
				break;
				case 38:
					moverArriba=false;				
				break;
				case 39:
					moverDerecha=false;
				break;
				case 40:
					moverAbajo=false;
				break;

				// case 32:
				// 	crearProyectiles()
				// break;

			}
		});

	}
	function crearProyectiles()
	{
		if(onsehot)
		{
			$('.caja').append('<div class="proyectil" style="left:50px; top:250px;"></div>')	
			onsehot=false;
		}
		

	}
	function moverProyectiles()
	{

	}

	function moverAvion()
	{
		if(moverIzquierda)
		{			
			direccionX = parseInt(avion.css('left'))-velocidad
			if(direccionX>0)
			{
				avion.css('left',direccionX+'px')
			}
		}
		else if(moverDerecha)
		{
			direccionX = parseInt(avion.css('left'))+velocidad
			if(direccionX<(630-avionWidth))
			{
				avion.css('left',direccionX+'px')
			}
		}
		else if(moverArriba)
		{
			direccionY = parseInt(avion.css('top'))-velocidad
			if(direccionY>0)
			{
				avion.css('top',direccionY+'px')
			}
		}
		else if(moverAbajo)
		{
			direccionY = parseInt(avion.css('top'))+velocidad
			if(direccionY<(350-avionHeight))
			{
				avion.css('top',direccionY+'px')
			}
		}
	}


	
	

	function crearEnemigos()
	{

		enemigoLeft=Math.round(Math.random()*630)
		
		$('.caja').append('<div class="enemigo" style="top:0px; left:'+enemigoLeft+'px"></div>');
	}

	function moverEnemigos()
	{
		$('.enemigo').each(function(){
			var enemigTop=parseInt($(this).css('top'))
			if(enemigTop<350)
			{
				enemigTop+=velocidadEnemigo
				$(this).css('top',enemigTop+'px')
			}
			else
			{
				$(this).remove()
			}		
		})

	}

	function detectarChoques()
	{
		$('.enemigo').each(function(){		
			if(choques(avion, $(this)))
			{
				$(this).remove()
				puntos++
				$('.puntos').html(puntos)
			}
		})


	}

	function choques(a, b)
	{
		var ax=parseInt(a.css('left'))
		var ay=parseInt(a.css('top'))
		var aw=parseInt(a.css('width'))
		var ah=parseInt(a.css('height'))

		var bx=parseInt(b.css('left'))
		var by=parseInt(b.css('top'))
		var bw=parseInt(b.css('width'))
		var bh=parseInt(b.css('height'))
		return ( (ax<bx+bw) && (ax+aw>bx) && (ay<by+bh) && (ay+ah>by))
	}
	
	// mouseMove()
	function mouseMove()
	{
		$(".caja").on('mousemove', function(event) {
		  // console.log(event.pageX , event.pageY)		 
		  $('.avion').css({
		  	left:(event.pageX-$(".caja").position().left-(avionWidth/2))+'px',
		  	top:(event.pageY-$(".caja").position().top-(avionHeight/2))+'px'
		  })
		});
	}

	detectarTouch()
	function detectarTouch()
	{
		var dato=document.getElementById('touch')	
		var _avion=document.getElementsByClassName('avion')
		_avion[0].innerHTML = "Avion"
		
		document.addEventListener('touchmove', function(e) {
		    e.preventDefault();
		    var touch = e.touches[0];	

			dato.innerHTML = touch.pageX + " - " + touch.pageY;

			if(!pause)
			{
				_avion[0].style.left=(touch.pageX-200)+"px"
				_avion[0].style.top=(touch.pageY-$(".caja").position().top-(avionHeight/2))+"px"

			}
		}, false);
		
	}

	
	

});







