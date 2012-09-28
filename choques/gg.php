<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<style>
body,html{
	width:100%;
	height:100%;
	background-color:#F6C;
	margin:0;
	padding:0;
	display:table;
	}

.grande{
	background-color:red;
	width:100%;
	height:92%;
	display:table-cell;
	vertical-align: bottom;
	}
	
.grande:before{
	content:"GGGG";
	}		
	
.chico{
	background-color:yellow;
	width:100%;
	height:50px;
	display:table-cell;	
	}

</style>
</head>

<body>
<div class="grande">
grande
</div>
<div style="clear:both"></div>
<div class="chico">
chico
</div>
</body>
</html>