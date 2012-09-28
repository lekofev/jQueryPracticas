<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<link rel="stylesheet" type="text/css" href="style.css" />
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript" src="script.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {
		
		//console.log(Math.random(1,20));
		
		$('.nice-bicho').click(function(){
			var pts=$('#aa').attr('value');
			pts=parseInt(pts)+10;
			if(pts>200){
			alert('ganaste')
			location="smack4.php"
			}else{
				$('#pts').html(pts)
				$('#aa').attr('value',pts);				
			}
			$(this).css({
				'left':'-200px',
				'top':'200px'	
			})			
			
			var altoNow=$('#death').css('height');		
			altoNow=parseInt(altoNow)-50;
			//console.log(altoNow);
			$('#death').css({'height':altoNow+'px'})
		
		})	

		$('.strong-bicho').dblclick(function(){
			var pts=$('#aa').attr('value');
			pts=parseInt(pts)+20;
			if(pts>200){
			alert('ganaste')
			location="smack4.php"
			}else{
				$('#pts').html(pts)
				$('#aa').attr('value',pts);				
			}
			$(this).css({
				'left':'-200px',
				'top':'200px'	
			})
		
			var altoNow=$('#death').css('height');		
			altoNow=parseInt(altoNow)-100;
			//console.log(altoNow);
			$('#death').css({'height':altoNow+'px'})		
		
		})	

		$('.bad-bicho').click(function(){
			var life=$('#death').css('height');
			life=parseInt(life)+100;
			if(life>500){
				alert('Perdiste')
			}else{
				$('#death').css({
					'height':life+'px'
				});				
			}
			$(this).css({
				'left':'-200px',
				'top':'200px'	
			})
		
		})		

		//$('.bicho').killBichos()
		
		function crearBichos(){
			$('#cuadro').bichos();	 
		};
		function muriendo(){
			var now=$('#death').css('height')
				now=parseInt(now)+1;
			if(now>500){
			alert('perdiste');	
			}else{
			$('#death').css({'height':now+'px'});
			}
		}
		
	setInterval(muriendo,5);
	setInterval(crearBichos,300)
	
	/*var life=$('#death').css('height');
	if(parseInt(life)<500){
		
	}else{
		alert('Loser')
	}*/
});
</script>
</head>
<body>
<input id="aa" type="hidden" value="0" />
<div id="pts">
</div>
<div id="vida">
	<div id="death"></div>
</div>
<div id="cuadro">
<?php
/*
for($i=1;$i<=9;$i++){
	if($i%2!=0 && $i%3!=0&& $i%5!=0 && $i%7!=0 ){
		echo "<div id='' class='bicho bad-bicho b".$i."'></div>";		
	}else{
		echo "<div id='' class='bicho nice-bicho b".$i."'></div>";	
	}
	};
	*/
?>
<div id='' class='bicho bad-bicho b1'></div>
<div id='' class='bicho bad-bicho b2'></div>
<div id='' class='bicho strong-bicho b3'></div>
<div id='' class='bicho strong-bicho b4'></div>
<div id='' class='bicho nice-bicho b5'></div>
<div id='' class='bicho nice-bicho b6'></div>
<div id='' class='bicho nice-bicho b7'></div>
<div id='' class='bicho nice-bicho b8'></div>
<div id='' class='bicho nice-bicho b8'></div>
<div id='' class='bicho nice-bicho b9'></div>
</div>
</body>
</html>
