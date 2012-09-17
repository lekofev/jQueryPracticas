<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">


<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>

<style>
body, html{
	margin:0;
	padding:0;
	background-color: #03F;
	}
.absoluto{
	position:absolute;
	
	}
#texto1{
	height:20px;
	background-color:#FC6;
	
	}
#texto2{
	height:20px;
	background-color:#FC6;
	
	}
#texto3{
	height:20px;
	background-color:#FC6;
	
	}
#texto4{
	height:20px;
	background-color:#FC6;
	
	}	
.texto{
	height:20px;
	background-color:#FC6;
	
	}	
	
#pantalla{
	width:296px;
	height:533px;
	margin:50px auto;
	background-color:#fff;
	position:relative;
	
	}
	
#pantalla-wrapper{
	width:290px;
	height:522px;	
	overflow:hidden;
	background-color:#fff;
	margin:0 auto;
	position:relative;
	
	}
	/*
#pantalla{
	background-color:#cccccc;
	}
	
#pantalla-wrapper{
	background-color:#3CF;
	}	
	
*/	
.pixel{
	width:25px;
	height:25px;
	background-image:url(pixel.jpg);
	background-repeat:no-repeat;
	margin:2px;
	float:left;
	
	}	

#auto-enemigo{

	top:0px;
	}

	
.auto{
	background-image:url(car-05.jpg);
	height:116px;
	width:87px;
	position:absolute;
	}
	
.left{
	left:58px;
	}
	
.right{
	left:145px;
	}
	
.left-inicio{
	left:58px;
	}	

#auto-amigo{

	top:406px;
	}
	
.ruta-size{
	width:29px;
	height:87px;	
	/*background-image:url(ruta.jpg);*/
	background-color:pink;		
	}
	
.ruta{

	top:0px;

	
	}
	
.ruta-2{
	top:-29px;
	}	
	
.ruta-3{
	top:-58px;
	top:0px;	
	}	

.ruta-r{
	left:261px;	
	top:-29px;	
	}
	
.ruta-r-2{
	left:261px;	
	}
	
.ruta-r-3{
	left:261px;
	top:-58px;		
	}		

/*---Colors*/

		
		
</style>
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript" >
$(document).ready(function() {
  
 /* function numeroAleatorio(){
	var numeroRandom=Math.floor(Math.random()*10);//un numero entero random  de un digito
	var numeroRandomPar=numeroRandom%2;//modulo dos, para ver residuo

	$('#texto').append(' numero '+numeroRandom+' /residuo '+numeroRandomPar);//TEST
	
	if(numeroRandomPar==0){//pregunto si es para para saber que lado debe ir el auto
		$('#auto-enemigo').addClass('left');
		}else{
		$('#auto-enemigo').addClass('right');			
		}
		
	
	  }*/
  
  /*--------------FUNCIONES PARA MOVER EL AUTO AMIGO--------------*/

  
  function flechas(e){
	  e.preventDefault();
	  var flechaL=parseInt(e.which);
	  $('#texto3').html('type '+e.type+' which '+e.which+' string '+String.fromCharCode(e.which));//TEST
	
	  switch(flechaL){
		  case 37:
			$('#auto-amigo').css('left','58px');
			break; 		  
		  case 39:
			$('#auto-amigo').css('left','145px');
			break;
		  }	  
	 
	  };
	  
 	$(document).keyup(flechas);

/*
   $('#izq').click(function(){
			$('#auto-amigo').css('left','58px');
	   })
   
   $('#der').click(function(){
$('#auto-amigo').css('left','145px');   
	   })   
 */

	
	
/*--------------------FUNCIONES PARA EL AUTO ENEMIGO------------------*/  
 
 function animar(){
 
 	var topUbicacionEnemi=$('#auto-enemigo').css('top');
		topUbicacionEnemi=parseInt(topUbicacionEnemi)+116;
	var leftUbicacionEnemi=$('#auto-enemigo').css('left');
		
	var topUbicacionFriend=$('#auto-amigo').css('top');
	var leftUbicacionFriend=$('#auto-amigo').css('left');

 if(topUbicacionEnemi==parseInt(topUbicacionFriend) && parseInt(leftUbicacionEnemi)==parseInt(leftUbicacionFriend)){
	
	//$('#texto4').append('choque');//TEST
	 }else{
	 bajar();
	 ruta();
		 
		//alert('choque');
	//$('#texto4').append('topEnemi ' +topUbicacionEnemi+' topFriend '+topUbicacionFriend+' leftEnemi '+leftUbicacionEnemi+' leftFriend '+leftUbicacionFriend);//TEST		
	//$('#texto5').append('pase');//TEST		 
		 }//end if topUbicacionEnemi!=parseInt(topUbicacionFriend)
 
 }
 
 
 
  function bajar(){
	//var xy=$('#auto-enemigo').offset();
	
		
	var altura=$('#auto-enemigo').css('top');
		altura= parseInt(altura)+29;	
	
	$('#texto1').html(' altura actual del auto'+altura);//TEST
	
	$('#auto-enemigo').css({
		top:altura+'px'
	});
	
	if(parseInt(altura)>523){
		
			$('#auto-enemigo').css({
					top:'-116px'
				});		
		
	var numeroRandom=Math.floor(Math.random()*10);//un numero entero random  de un digito
	var numeroRandomPar=numeroRandom%2;//modulo dos, para ver residuo

	$('#texto2').html(' numero '+numeroRandom+' /residuo '+numeroRandomPar);//TEST
	
		if(numeroRandomPar==0){//pregunto si es para para saber que lado debe ir el auto
			$('#auto-enemigo').removeClass('left-inicio left right');//remueve la left inicio
			$('#auto-enemigo').addClass('left');
			}else{
			$('#auto-enemigo').removeClass('left-inicio left right');	
			$('#auto-enemigo').addClass('right');			
			}//end if numeroRandomPar==0
		
		
		}//end if parseInt(altura)>523
	
  }//end function bajar
 

 
 function ruta(){
	var alturaRuta=$('.ruta').css('top');
		alturaRuta= parseInt(alturaRuta)+29;	
	
		$('.ruta').css({
			top:alturaRuta+'px'
		});	 
		
	if(parseInt(alturaRuta)>523){
		
			$('.ruta').css({
					top:'-87px'
				});	
		}
		
		
		
		
		
		
	var alturaRuta=$('.ruta-r').css('top');
		alturaRuta= parseInt(alturaRuta)+29;	
	
		$('.ruta-r').css({
			top:alturaRuta+'px'
		});	 
		
	if(parseInt(alturaRuta)>523){
		
			$('.ruta-r').css({
					top:'-87px'
				});	
		}
	 
	 
	 
	 }// end ruta
 
	/*function crearRuta(){
	 	$('#pantalla-wrapper').prepend('<div id="ruta" class="ruta absoluto"></div><div id="ruta-r" class="ruta absoluto"></div>');
	 
	 
	 }
	 
  	crearRuta();*/
 
 
 
  var tiempo=50;
  // setInterval(numeroAleatorio,1500)   
	setInterval(animar,tiempo);
   	//setInterval(ruta,tiempo);

   
});
</script>


</head>

<body>
<div id="texto1"></div>
<div id="texto2"></div>
<div id="texto3"></div>
<div id="texto4"></div>
<div id="texto5" class="texto"></div>


<div id="pantalla" class="">
	<div id="pantalla-wrapper">
    	
        <div id="" class="ruta absoluto"></div>
        <div id="" class="ruta-2 absoluto"></div>
        <div id="" class="ruta-3 absoluto"></div>                
        
        <div id="" class="ruta-r absoluto"></div>
        <div id="" class="ruta-r-2 absoluto"></div>
        <div id="" class="ruta-r-3 absoluto"></div>                
      
    
    <div id="auto-enemigo" class="auto left-inicio">
    </div>   
	
    <div id="auto-amigo" class="auto left-inicio">
    </div>  
  
    <?php
		for($i=1;$i<=180;$i++){
		echo'<div id="" class="pixel">';
        echo '</div>';
		
			
			}
	?>
    </div>
</div>
<div id="botones">
<a id="izq" href="#">izquierda</a>
<a id="der" href="#">derecha</a>
</div>
</body>
</html>