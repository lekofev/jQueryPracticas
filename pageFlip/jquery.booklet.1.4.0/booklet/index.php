<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.min.js" type="text/javascript"></script>
<script src="jquery.easing.1.3.js" type="text/javascript"></script>
<script src="jquery.booklet.1.4.0.min.js" type="text/javascript"></script>
<link href="jquery.booklet.1.4.0.css" type="text/css" rel="stylesheet" media="screen, projection, tv" />

<script type="text/javascript">
$(document).ready(function(e) {
    $('#mybook').booklet({
		pageNumbers:false,
		width:532,
		height:288,
		pagePadding:0
		});
 
});

</script>
<style>
#mybook .div{
	border:1px solid red;
	}
.pages{
	width:266px;
	height:288px;
	background-repeat:no-repeat;
	border:1px solid green;
	}	
	
#page1{
	background-image:url(pag-1.png);
	}
#page2{
	background-image:url(pag-2.png);
	}	
#page3{
	background-image:url(pag-3.png);
	}	
#page4{
	background-image:url(pag-4.png);
	}	
	
</style>
</head>

<body>
<div id="mybook">
    <div id="page1" class="pages">
    </div>
    <div id="page2" class="pages">
    </div>
    <div id="page3" class="pages">
    </div>
    
    <div id="page4" class="pages">
    </div>
<!--
    <div>
        <h3>Yay, Page 5!</h3>
    </div>
    
    <div>
        <h3>Yay, Page 6!</h3>
    </div>        
   
    <div>
        <h3>Yay, Page 7!</h3>
    </div>
    
    <div>
        <h3>Yay, Page 8!</h3>
    </div>
    -->
</div>


</body>
</html>