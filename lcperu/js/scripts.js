// JavaScript Document

$(document).ready(function(e) {
	function startCycle(startingSlide) {
	opts = $('.banner-home-cycle').cycle({ 
		  fx:     'fade',
		  prev:'.flecha-l',
		  next:'.flecha-r',
		 timeout: 0,
		  pager:  '.paginador-cycle'
	}).data('cycle.opts');
	}
	
	function startCycleBannerChicos() {
	opts = $('.banner-chico-2').cycle({ 
		  fx:     'scrollHorz',
		 timeout: 0
	}).data('cycle.opts');
	}
	
	function tabsHome() {
		console.log('ff')
		opts = $('.tabsHome').tabs({ 
		}).data('tabs.opts');
	}
	
	startCycle();
	startCycleBannerChicos();
	tabsHome();
	
	$( "#dialog-link, #icons li" ).hover(
		function() {
			$( this ).addClass( "ui-state-hover" );
		},
		function() {
			$( this ).removeClass( "ui-state-hover" );
		}
	);
	
	
});// end jquery

