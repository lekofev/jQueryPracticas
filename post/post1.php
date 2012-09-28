<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="../jquery.js"></script>
<script type="text/javascript">
$(document).ready(function(e) {
   // { name: "erick", time: "2pm" }
		$.get('req.php',{name:"erick", edad:"99"}, function(data){
			$('#tex').html(data);
		});		
	

});
</script>
<title>Documento sin título</title>
</head>
<body>
<div id="tex">
</div>
<a id="ahref" href="req.php">click me</a>


</body>
</html>