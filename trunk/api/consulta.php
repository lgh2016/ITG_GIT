<?php
class Consulta{
 
    private $conn;
    private $table_name = "tabla_notas";
    
 
    public function __construct($db){
        $this->conn = $db;
    }
        
    function consultaNotas($idusuario){
        $query = "SELECT * FROM  ".$this->table_name."  WHERE tabla_usuarios_idtabla_usuarios='".$idusuario."' AND status = 1";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;    
    }

   
 
}
?>