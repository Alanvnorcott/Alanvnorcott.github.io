<?php
// FOR LATER USE
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);


    $to = "Alanvnorcott@gmail.com";


    $subject = "New Message from $name";


    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message";


    $headers = "From: $name <$email>";


    if (mail($to, $subject, $email_content, $headers)) {

        header("Location: contact.html?success=1");
    } else {

        header("Location: contact.html?success=0");
    }
} else {

    header("Location: contact.html");
}
?>
