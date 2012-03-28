<?php
if(isset($_GET["clusterName"])) {
	header('Location: html/cluster.php?clusterName='.$_GET["clusterName"]);
}
?>
<html>
<head>
	<title>Clustergram</title>
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Just+Me+Again+Down+Here' rel='stylesheet' type='text/css'>
	<link href="css/master.css" rel="stylesheet" type="text/css">
</head>
<body>
	<div id="content">
		<h1>Clustergram<h1>
		<h3>To create your clustergram start by typing down your first tag and hitting 'enter'</h3>
		<input type="text" id="cluster_tags" />
		<div id="tags">
		</div>
		<div id="titlecontainer">
			<h3>Once you're finished adding tags give your clustergram a title and hit 'enter' to check if it is available.</h3>
			<input type="text" id="cluster_title"/>
			<div id="title_success" class="message">Your title is available!</div>
			<div id="title_error" class="message">Uh oh, looks like your title has been taken</div>
		</div>
		<div id="submit_container">
			<h3>Looks like you're ready to create your clustergram!</h3>
			<h3>Just click the button below and away we go!</h3>
			<h3 id="submit_button">Submit</h3>
		</div>
		<div id="submit_success_message">
			<h1>Wooh! Your clustergram is ready!</h1>
			<h1>Redirecting soon.</h1>
		</div>
	</div>
</body>
</html>
