<?php

/* set variables */
$name = htmlspecialchars($_POST["name"]);
$messangerContact = htmlspecialchars($_POST["messanger-contact"]);
$message = htmlspecialchars($_POST["message"]);

/* Your address and subject line */
$address = "for23motor@gmail.com";
$sub = "Сообщение с сайта AP";

/* form format */
$mes = "Сообщение с сайта AP\n
Name: $name
MessangerContact: $messangerContact
Message: $message";

/* send message use mail()  */
$from = ('From:<'. $address .'> ');

if (mail($address, $sub, $mes, $from)) {
    header('Refresh: 5; URL=https://andrykazanovsky.github.io/testview.github.io/AlphaPharmaceutical/index.html');
    echo 'ok';}
else {
    header('Refresh: 5; URL=https://andrykazanovsky.github.io/testview.github.io/AlphaPharmaceutical/index.html');

?>