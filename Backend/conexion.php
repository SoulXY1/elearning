<?php


error_reporting(E_STRICT);

$mysqli = mysqli_init();
$mysqli->ssl_set(NULL, NULL, "/etc/ssl/certs/ca-certificates.crt", NULL, NULL);
$mysqli->real_connect('[us-east.connect.psdb.cloud]', '[0cod931r1crdz79hfu05]', '[pscale_pw_5qxXOjyQRLzLUoDEGrh902ibvpzHlvOLgCXBz72v8Lm]', '[polilearning]');
$mysqli->close();


?>

