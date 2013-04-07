<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/reset.css" />
<link rel="stylesheet" type="text/css" href="css/style.css" />
<link rel="stylesheet" type="text/css" href="css/colorbox.css" />
<link rel="stylesheet" type="text/css" href="css/hoverscroll.css" />

<link href='http://fonts.googleapis.com/css?family=Didact+Gothic' rel='stylesheet' type='text/css'>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="js/jquery.hoverscroll.js"></script>
<script type="text/javascript" src="js/jquery.opacityrollover.js"></script>
<script type="text/javascript" src="js/jquery.colorbox-min.js"></script>
<script type="text/javascript" src="js/modernizr.js"></script>
<script type="text/javascript" src="js/jquery-ui-1.9.2.acordion.js"></script>
<script type="text/javascript" src="js/init.js"></script>
<script type="text/javascript" >
$(document).ready(function(e) {
    $('#link').colorbox({
		iframe:true,
		width:1025,
		height:610,
		scrolling:false,
		opacity:0.9,
		transition: "none"
		})
		
	var onMouseOutOpacity = 0.5;
	$('#items li').opacityrollover({
		mouseOutOpacity:   onMouseOutOpacity,
		mouseOverOpacity:  1.0,
		fadeSpeed:         'fast',
		exemptionSelector: '.selected'
	});
		
		
	$('#galeria-items .item a').mouseenter(function(){
			console.log('in')
			$(this).children('.txt-hover-in').show();
			
			})
			
	/*$('#galeria-items .item a').unbind('mouseenter');
			
			$('#galeria-items .item').each(function() {
            
			console.log('in')
			$(this).mouseenter(function(){
				.children('txt-hover-in').show();
				});

			     
	    });
		
	$('.sub-title').mouseenter(function(){})*/

		$('#galeria-items .item .txt-hover-in').mouseout(function(){
			console.log('out')
			$('.txt-hover-in').hide();
			})
		
		$('#menu-acordeon').accordion({
            collapsible: true
        });
			
});

</script>
<title>Documento sin título</title>
</head>
<body>
<!-- <a id="link" href="galeria.php">colorox</a> -->
    <section id="contenedor">
    	<header>
        	<div id="logo">
            	ANDRES LINO
            </div>
		</header>
        <section id="page">
        	<aside id="sidebar">
            	<nav id="menu">
                <h3><a class="facebook icons-img" href="">ANDRES LINO</a></h3>
                	<div id="menu-acordeon">
                    	<h3><a class="facebook icons-img" href="">GALLERÍA</a></h3>
                        <ul>
                            <li><a class="" href="">2012</a></li>
                            <li><a class="" href="">2011</a></li>
                            <li><a class="" href="">2010</a></li>
                   		</ul>	
                        
                    </div>
                 <h3><a class="youtube icons-img" href="">ESCRÍBEME</a></h3>
                	<!-- <ul>
                    	<li><a class="facebook icons-img" href="">ANDRES LINO</a></li>
                    	<li><a class="twitter icons-img" href="">GALLERÍA</a></li>
                    	<li><a class="youtube icons-img" href="">ESCRÍBEME</a></li>
                    </ul>	
                    -->
                </nav>
            
            	<section id="social-icons">
                	<ul>
                    	<li><a class="facebook icons-img" href=""></a></li>
                    	<li><a class="twitter icons-img" href=""></a></li>
                    	<li><a class="youtube icons-img" href=""></a></li>
                    	<li><a class="gallery icons-img" href=""></a></li> 
                    </ul>
                </section>
            </aside>
            
            <section id="galeria-items">
            	<ul id="items">
                	<li>
                    <a id="link" href="galeria.php">
        <div class="txt-hover-in txt-galeria title">RALLY<br />
        CAMINOS DEL INCA 2012 DOLOR SIT AMET, 
        CONSECTETUR ADIPISICING 
            <div class="sub-title">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            </div>
        </div>
                    <img src="img/fotos/lino (1).jpg" />
                    </a>
                    </li>                    
                    
                    <li>
                    <a href="#">
        <div class="txt-hover-in txt-galeria title">RALLY<br />
        CAMINOS DEL INCA 2012 DOLOR SIT AMET, 
        CONSECTETUR ADIPISICING 
            <div class="sub-title">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            </div>
        </div>
                    <img src="img/fotos/lino (2).jpg" />
                    </a>
                    </li>
                    
                    <li>
                    <a href="#">
        <div class="txt-hover-in txt-galeria title">RALLY<br />
        CAMINOS DEL INCA 2012 DOLOR SIT AMET, 
        CONSECTETUR ADIPISICING 
            <div class="sub-title">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            </div>
        </div>
                    <img src="img/fotos/lino (3).jpg" />
                    </a>
                    </li>
                    
                    <li><img src="img/fotos/lino (4).jpg" /></li> 
                    <li><img src="img/fotos/lino (5).jpg" /></li>
                    <li><img src="img/fotos/lino (6).jpg" /></li> 
                    <li><img src="img/fotos/lino (7).jpg" /></li> 
                    <li><img src="img/fotos/lino (8).jpg" /></li> 
                    <li><img src="img/fotos/lino (9).jpg" /></li> 
                    <li><img src="img/fotos/lino (10).jpg" /></li>                                                                                                      
                                                                                                
                </ul>           
            </section>        
       
        </section>
        
        
        
    </section>
</body>
</html>