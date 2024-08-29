<?php 


$nombre=$_POST['nombre'];
$apellidos=$_POST['apellidos'];
$email=$_POST['email'];
$asunto2=$_POST['asunto'];
$mensaje=$_POST['mensaje'];

$cuerpo = ' 
Asunto: 


sdfgfs
'; 
$cuerpo1 = ' 
Asunto: 


sdfgfs
'; 


///mail('info@amonca.com','Nuevo mensaje desde sitio web',$nombre. ' '.$apellidos. ' Email:'.$email. '  Asunto:'.$asunto.' Mensaje:'.$mensaje);



$destinatario = "business@serviciosductosyaires.com"; 
$asunto = "Mensaje enviado desde sitio web"; 
$cuerpo = ' 
<html> 
<head> 
   <title></title> 

</head> 
<body> 
<h1>Hola, tienes un mensaje enviado desde tu sitio web.</h1> 
<p> Asunto: '.$asunto2.'<br>
 Mensaje: '.$mensaje.'<br>
 Nombres: '.$nombre.'<br>
 Contacto: '.$apellidos.'<br>
  Email: '.$email.'<br>
<b>

</body> 
</html> 
'; 

//para el envío en formato HTML 
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

//dirección del remitente 
$headers .= "From: <business@serviciosductosyaires.com>\r\n"; 

//dirección de respuesta, si queremos que sea distinta que la del remitente 
///$headers .= "Reply-To: mariano@desarrolloweb.com\r\n"; 

//ruta del mensaje desde origen a destino 
///$headers .= "Return-path: holahola@desarrolloweb.com\r\n"; 

//direcciones que recibián copia 
///$headers .= "Cc: maria@desarrolloweb.com\r\n"; 

//direcciones que recibirán copia oculta 
///$headers .= "Bcc: pepe@pepe.com,juan@juan.com\r\n"; 

mail($destinatario,$asunto,$cuerpo,$headers)  

?>	