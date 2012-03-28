<?php
require_once 'config.php';

//mysql connection
$db_handle = mysql_connect($server, $username, $password);
mysql_select_db($database, $db_handle);

$tags = $_POST["clusterTags"];
$tags = json_decode($tags);

$title = $_POST["clusterTitle"];
echo $title;

//inserting into clusters table
mysql_query("INSERT INTO clusters (title) VALUES ('$title')");
$lastId = mysql_insert_id();

//insert into clusters2tags table
for($i = 0; $i < count($tags); $i++) {
	mysql_query("INSERT INTO clusters2tags (clusterId, tag) VALUES ('$lastId', '$tags[$i]')");
}


?>
