<html ng-app="app">
<head>
	<title ng-bind="title"></title>
	<link rel="stylesheet" href="<?php echo url('css/app.css');?>">
	<link rel="stylesheet" href="<?php echo url('css/main.css');?>">
	<link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
</head>
<body>

	 <div ui-view class="[[ vm.pageClass ]]"></div>

	<script src="<?php echo url('js/main.js');?>"></script>
</body>
</html>