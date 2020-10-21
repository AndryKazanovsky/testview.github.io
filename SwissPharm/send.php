<?php

/* set variables */
$name = htmlspecialchars($_POST["name"]);
$messangerContact = htmlspecialchars($_POST["messanger-contact"]);
$message = htmlspecialchars($_POST["message"]);

/* Your address and subject line */
$address = "info@swiss-pharmaceutical.ch";
$sub = "message from SP";

/* form format */
$mes = "message from SP
Name: $name
MessangerContact: $messangerContact
Message: $message";

/* send message use mail()  */
$from = ('From:<'. $address .'> ');

if (mail($address, $sub, $mes, $from)) {
    header('Refresh: 5; URL=http://swiss-pharmaceutical.ch/');
    echo 'ok';}
else {
    header('Refresh: 5; URL=http://swiss-pharmaceutical.ch/');
}

?>