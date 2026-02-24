<?php
// Prevent direct access
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    header("Location: contact.html");
    exit;
}

// Your email address
$to = "ukashasyed15@gmail.com";

// Get form data and sanitize
$name = htmlspecialchars(trim($_POST['name']));
$email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($_POST['phone']));
$service = htmlspecialchars(trim($_POST['service']));
$budget = htmlspecialchars(trim($_POST['budget']));
$message = htmlspecialchars(trim($_POST['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: contact.html?error=invalid_email");
    exit;
}

// Create email subject
$subject = "New Contact Form Submission from $name";

// Create email body
$body = "You have received a new message from your portfolio contact form.\n\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Service: $service\n";
$body .= "Budget: $budget\n\n";
$body .= "Message:\n$message\n";

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
if (mail($to, $subject, $body, $headers)) {
    header("Location: contact.html?success=1");
} else {
    header("Location: contact.html?error=send_failed");
}
exit;
?>
