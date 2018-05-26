<?php
class SolicitudViaje{
 
    private $conn;
    private $table_name = "tabla_solicitud_de_viaje";
    
 
    public function __construct($db){
        $this->conn = $db;
    }
        
    function consultaSolicitudViaje($idusuario){
        $query = "SELECT * FROM  ".$this->table_name."  WHERE tabla_usuarios_idtabla_usuarios='".$idusuario."' AND status = 1";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;    
    }

}
?>