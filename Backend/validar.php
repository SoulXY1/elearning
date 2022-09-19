<?php

include('conexion.php');
session_start();

$codigo = $_POST['codigoStudent'];
$password = $_POST['passwordStudent'];



$consulta = "SELECT*FROM students WHERE codigoStudent='$codigo' AND passwordStudent='$password'";
$res = $mysqli->query($consulta);

$row = $res->fetch_assoc();

if($row['codigoStudent'] == $codigo && $row['passwordStudent'] == $password){
    $nombre=$row['nombreStudent'];
    $correo=$row['correoStudent'];
    $_SESSION['nombreStudent'] = $nombre;
    $_SESSION['codigoStudent'] = $codigo;
    $_SESSION['correoStudent'] = $correo;

    header("location: ../indexStudent.php"); 
} else{
    header("location: ../iniciar.php");
      
}


?>