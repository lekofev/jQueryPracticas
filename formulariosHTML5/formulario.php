<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>

<link href="webforms/style.css" rel="stylesheet" type="text/css" media="all" />
<link href="webforms/css-form.css" rel="stylesheet" type="text/css" media="all" />
<script type="text/javascript" src="webforms/webforms2-p.js"></script>

<script type="text/javascript">
jQuery(document).ready(function() {
  
	
});

</script>


</head>

<body>


<form id="frmIns" method="post" action="send_mail.php">
    
    <h1>Datos personales</h1>
    <div class="error" id="er1">Debe completar los campos marcados</div>
    
    
    <ul class="list-form">
      <li>
      <label class="txt_label blq_label">Nombre (*)</label>
      <input name="txt_nombre" type="text" class="blq_txt" id="txt_nombre" required autofocus>
      </li>
      
      <li>
      <label class="txt_label blq_label">Apellido paterno (*)</label>
      <input name="txt_apaterno" type="text" class="blq_txt" id="txt_apaterno" required>
      </li>
      
      <li>
      <label class="txt_label blq_label">Apellido materno (*)</label>
      <input name="txt_amaterno" type="text" class="blq_txt" id="txt_amaterno" required>
      </li>
      
      <li>
      <label class="txt_label blq_label">DNI (*)</label>
      <input type="tel" pattern="[0-9]+" name="txt_dni" class="blq_txt" id="txt_dni" required>
      </li>
     
      <li>
          <span class="txt_span">Fecha de nacimiento (*)</span>
          
          <div style="float:left; width:90px; padding-top:3px;">
          <label class="txt_label blq_label" for="cmd_d">Día</label>
         <!-- <input type="month" name="cmb_d" id="cmb_d">-->
            
          <select name="cmb_d" id="cmb_d" class="cmb_select">
              	<option value="0">--</option>
                <?php
				for ($i=1; $i<=31;$i++){
					echo "<option value='".$i."'>";
					echo "".$i;
					echo "</option>";					
					
					}
				
				?>             
         </select>
          </div>
          
          <div style="float:left; width:130px; padding-top:3px;">
          <label class="txt_label blq_label" for="cmb_m">Mes</label>
              <select name="cmb_m" id="cmb_m" class="cmb_select">
                   <option value="0">--</option>
                   <option value="Enero">Enero</option>
                   <option value="Febrero">Febrero</option>
                   <option value="Marzo">Marzo</option>
                   <option value="Abril">Abril</option>
                   <option value="Mayo">Mayo</option>
                   <option value="Junio">Junio</option>
                   <option value="Julio">Julio</option>
                   <option value="Agosto">Agosto</option>
                   <option value="Setiembre">Setiembre</option>
                   <option value="Octubre">Octubre</option>
                   <option value="Noviembre">Noviembre</option>
                   <option value="Diciembre">Diciembre</option>
              </select>
          </div>
          
          
          <div style="float:left; width:90px; padding-top:3px;">
          <label class="txt_label blq_label" for="cmb_y">Año</label>
              <select name="cmb_y" id="cmb_y" class="cmb_select" required>
              	<option value="0">--</option>
                <?php
				$anio=date("Y");
				$anio=$anio-17;
				$anio_min=$anio-100;
				for ($i=$anio; $i>=$anio_min;$i--){
					echo "<option value='".$i."'>";
					echo "".$i;
					echo "</option>";					
					
					}
				
				?>     
              </select>
          </div>
          
          
          
          <br style="clear:both;">
      </li>
          
      
      <li>
      <span class="txt_span">Sexo (*)</span>
      <label class="txt_label" for="rd_sex1">Masculino</label>
      <input name="rd_sex" type="radio" id="rd_sex1" style="margin-right:15px;" value="M" checked>
      
      <label class="txt_label" for="rd_sex2">Femenino</label>
      <input name="rd_sex" type="radio" value="F" id="rd_sex2">
      </li>
      
      
      <li>
      <label class="txt_label blq_label">Empresa</label>
      <input name="txt_empresa" type="text" class="blq_txt" id="txt_empresa">
      </li>
      
      <li>
      <label class="txt_label blq_label">Rubro</label>
      <input name="txt_rubro" type="text" class="blq_txt" id="txt_rubro">
      </li>
      
      <li>
      <label class="txt_label blq_label">Cargo</label>
      <input name="txt_cargo" type="text" class="blq_txt" id="txt_cargo">
      </li>
      
      <li>
      <label class="txt_label blq_label">Direcci&oacute;n</label>
      <input name="txt_dir" type="text" class="blq_txt" id="txt_dir">
      </li>
      
      <li>
      <label class="txt_label blq_label">Distrito</label>
      <input name="txt_distrito" type="text" class="blq_txt" id="txt_distrito">
      </li>
      
      <li>
      <label class="txt_label blq_label">Ciudad</label>
      <input name="txt_ciudad" type="text" class="blq_txt" id="txt_ciudad">
      </li>
      
      <li>
      <label class="txt_label blq_label">Tel&eacute;fono (*)</label>
      <input type="tel" pattern="[0-9]+" name="txt_fono" class="blq_txt" id="txt_fono" required>
      </li>
      
      <li>
      <label class="txt_label blq_label">Celular (*)</label>
      <input type="tel" pattern="[0-9]+" name="txt_celular" class="blq_txt" id="txt_celular" required>
      </li>
      
      <li>
      <label class="txt_label blq_label">Correo electr&oacute;nico (*)</label>
      <input name="txt_correo" type="email" class="blq_txt" id="txt_correo" required>
      </li>
      
      <li>
      <label class="txt_label blq_label">Persona de contacto</label>
      <input name="txt_contacto" type="text" class="blq_txt" id="txt_contacto" >
      </li>
      
      <li>
      <label class="txt_label blq_label">Tel&eacute;fono</label>
      <input type="tel" pattern="[0-9]+" name="txt_fonocontact" class="blq_txt" id="txt_fonocontact">
      </li>
      
    </ul>
    
    
    
    
    <h1>Comprobante de pago</h1>
   
    <ul class="list-form">
        <li>
        <label class="txt_label" for="rd_pagoF">Factura</label>
        <input name="rd_pago" type="radio" id="rd_pagoF" style="margin-right:15px;" value="Factura" checked>
        <label class="txt_label" for="rd_pagoB">Boleta</label>
        <input name="rd_pago" type="radio" value="Boleta" id="rd_pagoB">
        </li>
    </ul>
    
    <div>
     <ul class="list-form">
      
      <li>
      <label for="txt_rsocial" class="txt_label blq_label">Raz&oacute;n social (*)</label>
      <input name="txt_rsocial" type="text" class="blq_txt" id="txt_rsocial" required>
      </li>
     
      <li>
      <label class="txt_label blq_label" for="txt_ruc">RUC (*)</label>
      <input name="txt_ruc" type="tel" pattern="[0-9]+" class="blq_txt" id="txt_ruc" required>
      </li>
      
      <li>
      <label class="txt_label blq_label" for="txt_dir2">Direcci&oacute;n (*)</label>
      <input name="txt_dir2" type="text" class="blq_txt" id="txt_dir2" required>
      </li>
      
      <li>
      <label class="txt_label blq_label" for="txt_distrito2">Distrito (*)</label>
      <input name="txt_distrito2" type="text" class="blq_txt" id="txt_distrito2" required>
      </li>
      
      <li>
      <label class="txt_label blq_label" for="txt_ciudad2">Ciudad (*)</label>
      <input name="txt_ciudad2" type="text" class="blq_txt" id="txt_ciudad2" required>
      </li>
      
      <li>
      <label class="txt_label blq_label">Persona de contacto</label>
      <input name="txt_contacto2" type="text" class="blq_txt" id="txt_contacto2">
      </li>
      
      <li>
      <label class="txt_label blq_label">Tel&eacute;fono</label>
      <input name="txt_fonocontact2" type="tel" pattern="[0-9]+" class="blq_txt" id="txt_fonocontact2">
      </li>
      
     </ul>
   
    </div>
   
    <div class="error" id="er2">Debe completar los campos marcados</div>
    
    <input name="cmd_send" type="submit" class="btn_cmd" id="cmd_send" value="Enviar la ficha de inscripci&oacute;n">
    
    
   </form>
</body>
</html>
