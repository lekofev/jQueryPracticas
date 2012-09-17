<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>

<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript" >
$(document).ready(function() {
	var activeWidth=$('#menu ul li a.active').css('width');
	var activeUbicacion=$('#menu ul li a.active').offset();
	
	$('#raya').css({
		width:activeWidth,
		left:activeUbicacion.left
		});
	
	$('#menu ul li a').each(function() {
       $(this).mouseover(function(){
		    var ancho=$(this).css('width');
			var ubicacion=$(this).offset();
				   
			$('#texto').html('ancho: '+ancho+' ubicacion left: '+ubicacion.left);
			$('#raya').stop().animate({
				'width':ancho,
				'left':ubicacion.left+'px'
			});	   
		})
		
	$('#menu ul').mouseleave(function(){
		var activeWidth2=$('#menu ul li a.active').css('width');
		var activeUbicacion2=$('#menu ul li a.active').offset();
			$('#raya').stop().animate({
				'width':activeWidth2,
				'left':activeUbicacion2.left+'px'
			});	 
		})	

    });

	

});
</script>
<style>
body, html{
	width:100%;
	height:100%;
	margin:0;
	padding:0;
	
	}
body{
	background-color:#FFFFCC;
	
	}	
	
ul, li{
	margin:0;
	padding:0;	
	}	
ul{	
background: none repeat scroll 0 0 green;
    height: 50px;
    margin: 0;
    padding: 0;	
}
#menu{
	background-color:#CCFFFF;
	height:50px;
	position:relative;
	
	}	

#menu ul li{
	float: left;
    list-style: none outside none;
    margin: 0 1px;
    padding: 0 1px;
	background-color:#FCF;
	
	}	
	
#menu ul li a{
	color: #333333;
    float: left;
    height: 2.4em;
    line-height: 2.4em;
    margin: 0 0.8em;
    text-decoration: none;
	background-color:#FFFFFF;
	
	}	
	
#menu ul li a:hover{
	color: #333333;
    float: left;
    height: 2.4em;
    line-height: 2.4em;
    margin: 0 0.8em;
    text-decoration: none;
	background-color:#FFFFFF;
		
	}

#raya{
	width:60px;
	height:2px;
	background-color:#00F;
	position:absolute;
	top:30px;
	
	}	
			
	
</style>

</head>

<body>
<div id="menu">
<ul>
<li><a href="#">HOME</a></li>
<li><a class="active" href="#">PAGINA1</a></li>
<li><a href="#">PROYECTOS</a></li>
<li><a href="#">TAZA</a></li>
<li><a href="#">PELOTA ROJA</a></li>
</ul>
<div id="raya">
</div>
</div>
<div id="texto">
</div>
</body>
</html>
