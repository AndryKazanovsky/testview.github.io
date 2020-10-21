<?php

/* set variables */
$name = htmlspecialchars($_POST["name"]);
$messangerContact = htmlspecialchars($_POST["messanger-contact"]);
$message = htmlspecialchars($_POST["message"]);

/* Your address and subject line */
$address = "kazanovsky.andrew@gmail.com";
$sub = "message from AP";

/* form format */
$mes = "message from AP
Name: $name
MessangerContact: $messangerContact
Message: $message";

/* send message use mail()  */
$from = ('From:<'. $address .'> ');

if (mail($address, $sub, $mes, $from)) {
    header('Refresh: 5; URL=https://alpha-pharmaceutical.eu/');
    echo 'email sent';}
else {
    header('Refresh: 5; URL=https://alpha-pharmaceutical.eu/');
}

?>