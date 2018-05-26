<?php
class LoginU{
 
    private $conn;
    private $table_name = "tabla_usuarios";
    
    public $idusuario;
    public $usuario;
    public $password;
 
    public function __construct($db){
        $this->conn = $db;
    }
        
    function inUserLog($usuario,$pass){
        $query = $query = "SELECT * FROM  ".$this->table_name."  WHERE nombre_usuario='".$usuario."' AND password ='".$pass."' AND status = 1";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;    
    }
    
}
?>