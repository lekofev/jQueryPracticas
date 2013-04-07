



$(document).ready(function(e) {


	
	$('#ss2').click(function(){
			$.colorbox({
				inline:true,
				width:410,
				height:240,
				transition:"none",
				opacity:0.5,
				scrolling:false,
				overlayClose:false,
				escKey: false,
				arrowKey:false,
				href:'.img-popup-registrado',
				onComplete:function(){
					$('#cboxClose').hide();					
					}
			});	
	})






    
});