<?php
 header('Access-Control-Allow-Origin: *');  
    if ($_GET["usr"]!="" && $_GET["pass"]!=""){
        include_once 'functions.php';
        $usuario = $_GET["usr"];
        $pass= md5($_GET["pass"]);
        getLogin($usuario,$pass);
    }
          
?>