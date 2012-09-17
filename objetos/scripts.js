// JavaScript Document
$(document).ready(function(e) {
  
   jQuery.fn.crearBullets=function(){
		this.each(function(){
			obj=$(this);
			var bullets="<div id='' class='bullet'></div>"
			obj.append(bullets);
			var naveY=$('#nave').css('top');
			naveY=(parseInt(naveY)+100)
			$('.bullet').css('top',naveY+'px');
			$('.bullet').animate({
				'left':'1500px'
			});
		});
		return this;
	};

	jQuery.fn.moverNave=function(posicionDelMouseY){
		this.each(function(){
			nave=$(this);
			nave.css({'top':(posicionDelMouseY-150)+'px'});
		});
		return this;
	};

	jQuery.fn.crearEnemigos=function(){
		this.each(function(){
			var zona=$(this);
			var posicionInicial=Math.floor(Math.random()*1000);
			var enemigos="<div id='' class='enemigos'>El enemigo</div>";
			zona.append(enemigos);
			$('.enemigos').last().css({
				'top':posicionInicial+'px'
				});
			});
			$('.enemigos').last().animate({
				'right':'1500px'		
				},5000);
			
		return this;	
		};







});