<?php
require_once 'config.php';

$db_handle = mysql_connect($server, $username, $password);
mysql_select_db($database, $db_handle);

$title = $_GET["clusterTitle"];

$results = mysql_query("SELECT * FROM clusters WHERE title='$title'");

$number_of_rows = mysql_num_rows($results);

if($number_of_rows > 0) {
	echo "error";
}
else {
	echo "success";
}


?>
