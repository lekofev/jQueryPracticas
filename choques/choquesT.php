<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<style>
body,html{
	width:100%;
	height:100%;
	margin:0;
	padding:0;
	}

.contenedor{
	background-color:red;
	width:800px;
	height:500px;
	margin:80px auto;
	position:relative;
	}

.cubos{
	width:80px;
	height:50px;
	position:absolute;
	}

.a{
	background-color:orange;
	top:250px;
	left:100px;
	}
.b{
	background-color:green;
	top:250px;
	left:300px;
	}		
.data{
	width:100%;
	height:80px;
	background-color:black;
	color:white;
	position:absolute;
	top:0;	
	}
</style>
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript">
$(document).ready(function() {

$('.a').animate({
	left:'400px'
	},5000);

	function choque(){
		
	var data=$('.data');
	var a=$('.a').offset();
	var b=$('.b').offset();
	var aWidth=parseInt($('.a').css('width'));
	var aHeight=parseInt($('.a').css('height'));
	var axLong=parseInt(a.left)+aWidth;
	var ayLong=parseInt(a.top)+aHeight;
	
	var bWidth=parseInt($('.b').css('width'));
	var bHeight=parseInt($('.b').css('height'));
	var bxLong=parseInt(b.left)+bWidth;
	var byLong=parseInt(b.top)+bHeight;
	
	var mm=false;
		
		
		if(a.left<bxLong && axLong > b.left && a.top < byLong && ayLong > b.top)
			mm=true;
			else
			mm=mm;
			
		if(mm)
		//console.log('choque')
		data.html('choque')
		else
		//console.log('no-choque')
		data.html('no-choque')
	}
   setInterval(choque,500);
	
});
</script>

</head>
<body>
<div class="contenedor">
	<div class="a cubos"></div>
    <div class=" b cubos"></div>

</div>
<div class="data"></div>
</body>
</html>