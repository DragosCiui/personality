<?php
$dbPath = __DIR__ . '/personality.db';

if (file_exists($dbPath)) {
    echo "Database already exists.";
    exit;
}

try {
    $db = new SQLite3($dbPath);
    $db->exec('PRAGMA foreign_keys = ON');

    // Create users table
    $db->exec("CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL
    )");

    // Create user_stats table with user_id as foreign key
    $db->exec("CREATE TABLE user_stats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        time_logged TEXT,
        tasks_completed TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
    )");

    // Insert dummy user
    $db->exec("INSERT INTO users (name) VALUES ('John')");

    // Link the stats to the inserted user (id = 1)
    $db->exec("INSERT INTO user_stats (user_id, time_logged, tasks_completed)
               VALUES (1, '32h/40h', '12/15')");

    echo "Database created and linked successfully.";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
