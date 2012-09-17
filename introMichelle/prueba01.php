<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/mis-stylos.css" />
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/cycle.js"></script>
<script type="text/javascript">
jQuery(document).ready(function() {
	
	for(var i=1; i<=105; i++){
		jQuery('#mask1').append('<div class="pixel" id="'+i+'"></div>');
		};
	
	jQuery('#chicas').cycle();
	jQuery('#time img').fadeIn(1200, function(){
		jQuery('#line').animate({
		width:'422px'	
		},2000);
		});
		
	jQuery('#mask-mb').slideUp(1500,function(){
		jQuery('#mb').fadeIn(1200);
		});	
		
		
	/*jQuery('#99').animate({
		visibility:'hidden'
		},function (){
			jQuery('#74').animate({
				visibility:'hidden'				
				})
			})	*/

		
		
	
    
});
</script>
<title>Documento sin título</title>
</head>

<body>
<div id="ani">

<div id="time" class="absoluto">
    <img src="mis-imgenes/time.jpg" />

</div>

<div id="line" class="absoluto">
<img src="mis-imgenes/line.jpg" />
</div>

<div id="borde-mb" class="absoluto">
<img src="mis-imgenes/borde-mb.jpg" />
</div>

<div id="mb" class="absoluto">
<img src="mis-imgenes/mb.jpg" />
</div>

<div id="chicas" class="absoluto">
	<div>
	<img src="mis-imgenes/chica1.jpg" />
	</div>
    
	<div>
	<img src="mis-imgenes/chica2.jpg" />
	</div>
    
	<div>
	<img src="mis-imgenes/chica3.jpg" />
	</div>        
    
</div>
<div id="mask-mb">
</div>
<!--
<div id="mask1">
</div>

<div id="mask2">
</div>
-->
</div>

</body>

</html>
