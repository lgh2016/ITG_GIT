<?php
 header('Access-Control-Allow-Origin: *');  
    if ($_GET["id_usr"]!=""){
        include_once 'functions.php';
        $idusuario = $_GET["id_usr"];
        getConsulta($idusuario);
    }
          
?>