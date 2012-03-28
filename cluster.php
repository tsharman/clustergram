<?php

require_once 'ajax/config.php';
$db_handle = mysql_connect($server, $username, $password);
mysql_select_db($database, $db_handle);


$clusterTitle = $_GET["clusterTitle"];

$clusterRes = mysql_query("SELECT * FROM clusters WHERE title='$clusterTitle'");
$clusterRes = mysql_fetch_assoc($clusterRes);

$clusterId = $clusterRes["id"];

$tagRes = mysql_query("SELECT * FROM clusters2tags WHERE clusterId='$clusterId'");



$results = array();
while($row = mysql_fetch_row($tagRes)) {
	$results[] = $row[2];
}
?>

<html>

<head>	
	<script type="text/javascript">
	clusterTags = <?php echo json_encode($results); ?>;
	clusterTitle = '<?php echo $clusterTitle; ?>';
	clientId = '<?php echo $client_id; ?>';
	</script>
	<title><?php echo $clusterTitle; ?> | Clustergram</title>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <script type="text/javascript" src="js/instagram.js"></script>
	<script type="text/javascript" src="js/cluster.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Just+Me+Again+Down+Here' rel='stylesheet' type='text/css'>
        <link href="css/master.css" rel="stylesheet" type="text/css">
</head>

<body>
	<div id="content">
		<h1><?php echo $clusterTitle; ?></h1>
		<div id="photos">
		</div>		
	</div>
</body>

</html>



