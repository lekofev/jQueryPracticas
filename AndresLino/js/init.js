// JavaScript Document

$(document).ready(function() {
	
	var docWidth=null;
	
	docWidth=$(window).width();
	
	$(window).resize(function() {
		docWidth=$(window).width();
		//console.log(docWidth)
	
	});

var a=$(window).width();   // returns height of browser viewport
var b=$(document).width(); // returns height of HTML document	

//console.log((docWidth)+'-'+b);
	
	$('#galeria-items').css('width',(docWidth-193)+'px');
	$('#page').css('width',(docWidth)+'px');
	//console.log(docWidth-193)
    $('#items').hoverscroll({
            fixedArrows: true,
			vertical: false,
			width:(docWidth-193),
			height:512,
			arrows:false,
			speed:5000
    });
	//$('.txt-hover-in').css('display','none');
/*	$('#items li a').mouseenter(function(){
			$(this).children('.capa-hover-out').stop().animate({
				'opacity':'0'
			}, 300);
			$(this).children('.txt-hover-in').stop().animate({
				'opacity':'1'
			}, 300);
			
	});

	$('#items li a').mouseleave(function(){
			$(this).children('.capa-hover-out').stop().animate({
				'opacity':'1'
			}, 300);
			$(this).children('.txt-hover-in').stop().animate({
				'opacity':'0'
			}, 300);			
	});*/


//var a=$(window).width();   // returns height of browser viewport
//var b=$(document).width(); // returns height of HTML document



});// end jQuery