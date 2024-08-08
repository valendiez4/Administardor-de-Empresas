<?php
include 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usu = $_POST['usuario'];
    $contra = $_POST['contraseña'];

    // Consulta para verificar si el usuario y la contraseña coinciden
    $sql = "SELECT * FROM login WHERE usuario = '$usu' AND contraseña = '$contra'";
    $result = $con->query($sql);

    if ($result->num_rows > 0) {
        echo json_encode(["status" => "success", "message" => "Inicio de sesión exitoso"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Usuario o contraseña incorrectos"]);
    }
}
?>
