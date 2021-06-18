<?php

/* set variables */
$initials = htmlspecialchars($_POST["initials"]);
$workPlace = htmlspecialchars($_POST["work-place"]);
$position = htmlspecialchars($_POST["position"]);
$degree = htmlspecialchars($_POST["degree"]);
$rank = htmlspecialchars($_POST["rank"]);
$email = htmlspecialchars($_POST["email"]);
$phone = htmlspecialchars($_POST["phone"]);
$message = htmlspecialchars($_POST["message"]);

/* Your address and subject line */
$address = "";
$sub = "message from Congress";

/* form format */
$mes = "message from Congress
Initials: $initials
WorkPlace: $workPlace
Position: $position
Degree: $degree
Rank: $rank
Email: $email
Phone: $phone
Message: $message";

/* send message use mail()  */
$from = ('From:<'. $address .'> ');

if (mail($address, $sub, $mes, $from)) {
    header('Refresh: 5; URL=https:');
    echo 'email sent';}
else {
    header('Refresh: 5; URL=https:');
}

?>