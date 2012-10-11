<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
<script type="text/javascript">

function apple(type){
	this.type=type;
	this.color='red';
	this.getInfo=appleGetInfo;
	}
	
function appleGetInfo(){
	var t= 'Color: ' +this.color+', Modelo '+this.type+' apple';
	return t;
	}


function fruta(tipo){
	this.tipo=tipo;
	this.imprimir=printFruta;
	//return tipo;
	}
function printFruta(){
	return 'La fruta es '+this.tipo;
	}
	
var laFruta= new fruta('Pera');
var laFrutab= new fruta('Manzana');	
var laFrutac= new fruta('Limon');	
console.log(laFruta.imprimir());	
console.log(laFrutab.imprimir());
console.log(laFrutac.imprimir());
//console.log(fruta('limon'));

//var aaple=  new apple('Mac');
//console.log(aaple.getInfo());




</script>
</head>

<body>
</body>
</html>