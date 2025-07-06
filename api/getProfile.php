<?php
header("Content-Type: application/json");

$db = new PDO("sqlite:./personality.db");

// For now, just get the first user as a placeholder
$stmt = $db->query("SELECT name, email FROM users LIMIT 1");
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
  echo json_encode($user);
} else {
  echo json_encode(["error" => "User not found"]);
}
?>
