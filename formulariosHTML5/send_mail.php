<?php

// Envio de formulario a correo

// RECEPCION DE DATOS
//Datos personales
$receptor="erick@86interactive.com";
$vd_nombres    = $_POST["txt_nombre"];
$vd_apaterno   = $_POST["txt_apaterno"];
$vd_amaterno   = $_POST["txt_amaterno"];
$vd_dni        = $_POST["txt_dni"];
$vd_dia		   = $_POST["cmb_d"];
$vd_mes		   =$_POST["cmb_m"];
$vd_anio	   =$_POST["cmb_y"];
$vd_sexo       = $_POST["rd_sex"];
$vd_empresa    = $_POST["txt_empresa"];
$vd_rubro      = $_POST["txt_rubro"];
$vd_cargo      = $_POST["txt_cargo"];
$vd_direccion  = $_POST["txt_dir"];
$vd_distrito   = $_POST["txt_distrito"];
$vd_ciudad     = $_POST["txt_ciudad"];
$vd_fono       = $_POST["txt_fono"];
$vd_celular    = $_POST["txt_celular"];
$vd_correo     = $_POST["txt_correo"];
$vd_pcontact   = $_POST["txt_contacto"];
$vd_fcontact   = $_POST["txt_fonocontact"];

//Comprobante de pago
$vd_tipo       = $_POST["rd_pago"];
$vd_rsocial    = $_POST["txt_rsocial"];
$vd_ruc        = $_POST["txt_ruc"];
$vd_direccion2 = $_POST["txt_dir2"];
$vd_distrito2  = $_POST["txt_distrito2"];
$vd_ciudad2    = $_POST["txt_ciudad2"];
$vd_pcontact2  = $_POST["txt_contacto2"];
$vd_fcontact2  = $_POST["txt_fonocontact2"];

$mensaje =
"Nombre :".$vd_nombres.
"\nApellido Paterno :".$vd_apaterno.
"\nApellido Materno :".$vd_amaterno.
"\nNúmero de DNI :".$vd_dni.
"\nFecha Nac. d&iacute;a :".$vd_dia.
"\nFecha Nac. mes :".$vd_mes.
"\nFecha Nac. A&n;o :".$vd_anio.
"\nSexo :".$vd_sexo.
"\nEmpresa :".$vd_empresa.
"\nRubro :".$vd_rubro.
"\nCargo :".$vd_cargo.
"\nDirecci&oacute;n :".$vd_direccion.
"\nDistrito :".$vd_distrito.
"\nCiudad :".$vd_ciudad.
"\nFono :".$vd_fono.
"\nCelular :".$vd_celular.
"\nCorreo :".$vd_correo.
"\nPersona Contacto :".$vd_pcontact.
"\nTel&eacute;fono Contacto :".$vd_fcontact.
"\n\nCOMPROBANTES DE PAGO
\nTipo de pago :".$vd_tipo.
"\nRaz&oacute;n Social :".$vd_rsocial.
"\nRUC :".$vd_ruc.
"\nDirecci&oacute;n2 :".$vd_direccion2.
"\nDistrito2 :".$vd_distrito2.
"\nCiudad2 :".$vd_ciudad2.
"\nPersona Cont&aacute;cto :".$vd_pcontact2.
"\nTel&eacute;fono Cont&aacute;cto :".$vd_fcontact2;

echo $vd_nacimiento;

mail($receptor, "Formulario Emprendedores", $mensaje,"From: yo@yo.com");

?>

<!DOCTYPE html>

<!--[if lt IE 7 ]> <html class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html class="">
<!--<![endif]-->

<head>
<meta charset="utf-8" />
<title>Emprendores</title>
<meta content="Nombre del Autor" name="author" />
<meta content="Descripción de la página" name="description" />
<meta content="etiqueta1, etiqueta2, etiqueta3" name="keywords" />
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
</head>


<body>
<div id="cabecera">
  <div id="header">
    <div id="logo"> <a href="http://www.test.86interactive.com/emprendedores"><img src="images/logo.png" width="337" height="168" alt="logo" /></a> </div>
    <div id="extra"> <img src="images/extra-head.png" height="150" width="525" alt="extra head"  /> </div>
    <div id="foco"></div>
  </div>
</div>
<div id="menu">
  <div class="lista-menu">
    <ul style="padding-top:11px; padding-left:70px;">
      <li><a href="http://www.test.86interactive.com/emprendedores">Inicio</a></li>
      <li><a href="evento.html">El Evento</a></li>
      <li><a class="active" href="inscripciones.html">Inscripciones</a></li>
      <li><a href="feria.html">La Feria</a></li>
      <li><a href="construccion.html">El Programa </a></li>
      <li><a href="construccion.html">Sala de Prensa</a></li>
    </ul>
  </div>
</div>
<div id="container">
  <div id="main" style="padding: 0 18px; width:918px;">
    <div class="contenido-evento">
      <div style="clear:both"> <img src="images/inscripciones.jpg" width="918" height="79" alt="Inscripciones" /> </div>
      <div style="padding-left:66px; clear:both;  width: 775px; padding-top:30px;">
        <p>
        Gracias por escribirnos
        </p>
        
        
      
        
        
                
    </div>
  </div>
</div>
</div>
<div id="footer">
  <div class="copyright">
    <p style="float:left; padding-left:60px; padding-top:14px;">©  2012 - Todos los derechos reservados</p>
    <p style="float:right; padding-right:80px;padding-top:6px;"><a style="float:left; padding-top:7px;" href="http://86interactive.com/">Diseño</a> <a href="http://86interactive.com/"><img src="images/log-foot.jpg" width="34" height="23" alt="86interactive" /></a></p>
  </div>
</div>
</body>
</html>


