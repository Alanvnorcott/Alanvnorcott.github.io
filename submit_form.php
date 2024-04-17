<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form fields and sanitize them
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // Your email address where you want to receive messages
    $to = "your_email@example.com";

    // Email subject
    $subject = "New Message from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message";

    // Email headers
    $headers = "From: $name <$email>";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        // If the email was sent successfully, redirect back to the contact page with a success message
        header("Location: contact.html?success=1");
    } else {
        // If there was an error sending the email, redirect back to the contact page with an error message
        header("Location: contact.html?success=0");
    }
} else {
    // If the form was not submitted via POST method, redirect back to the contact page
    header("Location: contact.html");
}
?>
