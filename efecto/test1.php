<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="style.css" />
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	//$('#btn1').animate({'left':'428px'},1000);   
	
	$('#area1').toggle(a,b);
	
	
	function a(){
		$(this).animate({'width':'428px'},500,function(){
			$('.cont-img').load('contenido1.php',function(){
				$('.cont-img').fadeIn(300);
				});
			});
		
		
	
			}
	function b(){
		
		
//		
		$('.cont-img').fadeOut(200,function(){
			$('#area1').animate({'width':'30px'},500);
			});
		}



});
</script>
<style>
</style>

<title>Documento sin título</title>
</head>

<body>
<div id="cont">
<div id="area1" class="area">
	<div class="cont-img">
    </div>
	<div class="btn">
    </div>
</div>
<!--<div id="btn2" class="btn">
</div>
<div id="btn3" class="btn">
</div>
<div id="btn4" class="btn">
</div>-->

</div>


</body>
</html>