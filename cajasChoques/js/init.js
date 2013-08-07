/**
*
* @fileoverview Libreria con funciones de utilidad
* @author Nombre_programador
* @date Fecha_inicio
* @version 1.0
*/

$(document).ready(function() {

	    // animateDiv([$('.a')]);
	   var array=[$('.a')]
	    // animateDiv($('.b'));
	    // animateDiv($('.c'));

	function makeNewPosition($container) {

	    // Get viewport dimensions (remove the dimension of the div)
	    var h = $container.height() - 50;
	    var w = $container.width() - 50;

	    var nh = Math.floor(Math.random() * h);
	    var nw = Math.floor(Math.random() * w);
	    console.log(h,w,nh,nw)

	    return [nh, nw];

	}
	animateDiv()
	function animateDiv() {
		console.log(array)
	    $.each(array, function(index, val) {
	    	console.log(index, val)
		    var newq = makeNewPosition($(this).parent());
		    var oldq = $(this).offset();
		    var speed = calcSpeed([oldq.top, oldq.left], newq);
	    
	    	 //iterate through array or object
	    	
	    	$(this).animate({
			        top: newq[0],
			        left: newq[1]
			    }, speed/*, function() {animateDiv(array)}*/);
	    });

	};

	// setInterval(function(){animateDiv()},1000)


	function calcSpeed(prev, next) {

	    var x = Math.abs(prev[1] - next[1]);
	    var y = Math.abs(prev[0] - next[0]);

	    var greatest = x > y ? x : y;

	    var speedModifier = 0.1;

	    var speed = Math.ceil(greatest / speedModifier);

	    return speed;

	}
});






