
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<title>Trabajando con plugins en jQuery - Tip simple</title>
<style type="text/css">
.tip{
background-color: #ffcc99;
padding: 10px;
display: none;
position: absolute;
    width: 200px;
}
</style>
<script type="text/javascript" src="../jquery-1.8.3.js"></script>
<script>

jQuery.fn.creaTip = function(textoTip) {
	   this.each(function(){
		   
		  elem = $(this);
		  var miTip = $('<div class="tip">' + textoTip + '</div>');
		  $(document.body).append(miTip);
		  elem.data("capatip", miTip);
		  
		  elem.mouseenter(function(e){
			 var miTip = $(this).data("capatip");
			 miTip.css("left", e.pageX + 10);
			 miTip.css("top", e.pageY + 5);
			 miTip.show(500);
		  });
		  
		  elem.mouseleave(function(e){
			 var miTip = $(this).data("capatip");
			 miTip.hide(500);
		  });
	  
	   });
	   
   return this;
};

$(document).ready(function(){
	$("#elemento1").creaTip("todo bien...");
})
</script>

</head>
<body>
<div id="elemento1" style="background-color: #ccccff; padding: 5px;">
Pasa el ratón por encima de esta capa...
</div>

<p>
Este texto es para poner <a id="elemento2" href="#">este enlace que también tiene tip</a>.
</p>

</body>
</html>