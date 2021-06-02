<?php

/* set variables */
$name = htmlspecialchars($_POST["name"]);
$lastname = htmlspecialchars($_POST["lastname"]);
$messangerContact = htmlspecialchars($_POST["messanger-contact"]);
$phone = htmlspecialchars($_POST["phone"]);
$message = htmlspecialchars($_POST["message"]);

/* Your address and subject line */
$address = "karyna.strakhova@naturpharm.ua";
$sub = "oway email";

/* form format */
$mes = "oway email
Name: $name
Lastname: $lastname
MessangerContact: $messangerContact
Phone: $phone
Message: $message";

/* send message use mail()  */
$from = ('From:<'. $address .'> ');

if (mail($address, $sub, $mes, $from)) {
    header('Refresh: 5; URL=https://oway.in.ua/');
    echo 'email sent';}
else {
    header('Refresh: 5; URL=https://oway.in.ua/');
}

?>