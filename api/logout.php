<?php
session_start();
header('Content-Type: application/json');

// Unset session and destroy it
session_unset();
session_destroy();

echo json_encode(['success' => true, 'message' => 'Logged out']);
?>
