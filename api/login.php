<?php
session_start();
header('Content-Type: application/json');

$db = new SQLite3(__DIR__ . '/personality.db');

$input = json_decode(file_get_contents('php://input'), true);
$email = $input['email'] ?? '';
$password = $input['password'] ?? '';

$stmt = $db->prepare("SELECT * FROM users WHERE email = :email");
$stmt->bindValue(':email', $email, SQLITE3_TEXT);
$result = $stmt->execute();

if ($user = $result->fetchArray(SQLITE3_ASSOC)) {
    if (password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        echo json_encode(['success' => true]);
        exit;
    }
}

http_response_code(401);
echo json_encode(['error' => 'Invalid credentials']);
?>
