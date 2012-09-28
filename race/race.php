<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<link rel="stylesheet" type="text/css" href="style.css" />
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript" src="script.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	var nave=$('#nave');
	//$(document).keypress(mover);
	$(document).keydown(mover);
	//$(document).keyup(mover);
	function mover(event){

		if(event.keyCode==39){
		console.log(event.keyCode)			
			nave.css("left","+=10px");
		}else if(event.keyCode==37){
		console.log(event.keyCode)			
			nave.css("left","-=10px");	
		}
	}

});	
</script>
</head>
<body>
<div id="cuadro">
	<div id="nave">
    </div>
</div>
</body>
</html>