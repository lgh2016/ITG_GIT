<?php
    function getLogin($usuario,$pass){
        include_once 'dbconn.php';
        include_once 'login.php';
        $database = new Database();
        $db = $database->getConnection();
        $data = new LoginU($db);
        $stmt = $data->inUserLog($usuario,$pass);
        $num = $stmt->rowCount();

        if($num == 1){
            $idUsuario = "";
            $nombre_usuario = "";
            $id_usuario = "";
            while ($row = $stmt->fetch(PDO::FETCH_OBJ)):
                $id_usuario = $row->idtabla_usuarios;
                $idUsuario =$row->idtabla_usuarios;
                $nombre_usuario =$row->nombre;
                //echo $idUsuario;     
            endwhile;
            $result = [
            'id_usuario'=>$id_usuario,
            'status' => true,
            'nombre_usuario' =>$nombre_usuario
            ];
            
        }else{
            $result = [
            'status' => false
            ];
        }
        echo json_encode($result);
        
    }

    function getConsulta($idusuario){
        include_once 'dbconn.php';
        include_once 'consulta.php';
        $database = new Database();
        $db = $database->getConnection();
        $data = new Consulta($db);
        $stmt = $data->consultaNotas($idusuario);
        $num = $stmt->rowCount();

        if($num >= 1){
            $fecha_calendario="";
            $fecha_creada="";
            $titulo="";
            $contenido="";
            $status="";
            while ($row = $stmt->fetch(PDO::FETCH_OBJ)):
                $fecha_calendario =$row->fechaCalendario;
                $fecha_creada =$row->fechaCreada;
                $titulo=$row->titulo;
                $contenido=$row->contenido;
                $status=$row->status;
                $result[]= array(
                    'fecha_calendario' => $fecha_calendario,
                    'fecha_creada' =>$fecha_creada,
                    'titulo'=>$titulo,
                    'contenido'=>$contenido,
                    'status'=>$status); 
            endwhile;
            
            
        }else{
            $result = [
            'fecha_calendario' => '',
            'fecha_creada' =>'',
            'titulo'=>'',
            'contenido'=>'',
            'status' => false
            ];
        }
        echo json_encode($result);
        
    }

    function getConsultaSolicitudViaje($idusuario){
        include_once 'dbconn.php';
        include_once 'solicitud_viaje.php';
        $database = new Database();
        $db = $database->getConnection();
        $data = new SolicitudViaje($db);
        $stmt = $data->consultaSolicitudViaje($idusuario);
        $num = $stmt->rowCount();
        $array_consulta = array();
        if($num >= 1){
            $fecha_salida="";
            $fecha_regreso="";
            $destino_principal="";
            $ciudades_visitar="";
            $observaciones="";
            $status="";
            while ($row = $stmt->fetch(PDO::FETCH_OBJ)):
                $fecha_salida =$row->fechaSalida;
                $fecha_regreso =$row->fechaRegreso;
                $destino_principal=$row->destinoPrincipal;
                $ciudades_visitar=$row->ciudadesVisitar;
                $observaciones=$row->observaciones; 
                $status=$row->status; 
                $result[]= array(
                    'fecha_salida' => $fecha_salida,
                    'fecha_regreso' =>$fecha_regreso,
                    'destino_principal'=>$destino_principal,
                    'ciudades_visitar'=>$ciudades_visitar,
                    'observaciones'=>$observaciones,
                    'status'=>$status);
                  
            endwhile;
                
            
        }else{
            $result = [
            'fecha_salida' => '',
            'fecha_regreso' =>'',
            'destino_principal'=>'',
            'ciudades_visitar'=>'',
            'observaciones' => '',
            'status' => ''
            ];
        }
        echo json_encode($result);
        
    }
?>
