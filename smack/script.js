// JavaScript Document
$(document).ready(function() {
    
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
		
	
	jQuery.fn.choque=function(){
		this.each(function(){
			var bullet=$(this);
			var offsetBullet=bullet.offset()
			if(isNaN(offsetBullet)){
				//no hace nada
				}else{
					if(parseInt(offsetBullet.left)>1500){
						bullet.remove();					
					}else{
					//no hace nada	
					}
				}
		})
		return this;
	}
	
	jQuery.fn.bichos=function(){
		this.each(function(){
			var b='.b';
			var nro=Math.floor(Math.random()*10);
			b=b+nro;
			console.log(b)
			var bicho=$(this).children(b);
			var i=Math.floor(Math.random()*500);			
			var t=Math.floor(Math.random()*500);						
			if(i>321){
				i=320;
			}
			if(t>491){
				t=490;
			}
			bicho.css({
				'left':i+'px',
				'top':t+'px',				
			})
		
		})
		return this;
	}	
	
	
	jQuery.fn.killBichos=function(){
		this.each(function(){
			var kill=$(this);
			kill.click(function(){
				kill.css({
					'left':'-200px',
					'top':'200px'
				});				
			})

		})
		return this;
	}
	


	
	
});