// JavaScript Document
$(document).ready(function(e) {
   jQuery.fn.crearEnemigos=function(){
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


});
