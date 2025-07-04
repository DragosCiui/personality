<?php
header('Content-Type: application/json');

$db = new SQLite3(__DIR__ . '/personality.db');

$query = "
  SELECT users.name, user_stats.time_logged, user_stats.tasks_completed
  FROM user_stats
  JOIN users ON user_stats.user_id = users.id
  LIMIT 1
";

$result = $db->query($query);

if ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    echo json_encode([
        "name" => $row["name"],
        "time_logged" => $row["time_logged"],
        "tasks_completed" => $row["tasks_completed"]
    ]);
} else {
    echo json_encode([
        "name" => "Unknown",
        "time_logged" => "0h/0h",
        "tasks_completed" => "0/0"
    ]);
}
?>
