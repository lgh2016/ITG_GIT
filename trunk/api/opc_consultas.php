<?php
 header('Access-Control-Allow-Origin: *');  
    if ($_GET["id_usr"]!="" && $_GET["tipo_consulta"]!=""){
        include_once 'functions.php';
        $idusuario = $_GET["id_usr"];
        $tipo_consulta = $_GET["tipo_consulta"];
        switch ($tipo_consulta) {
	    case 1:
	        getConsulta($idusuario);
	        break;
	    case 2:
	        getConsultaSolicitudViaje($idusuario);
	        break;
	    case 3:
	        echo "Organizador";
	        break;
		}
        
    }
          
?>