<html ng-app="twitch-support-app">
<head>
	<title>Channel Support Record</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
</head>
<body>
	<div class="sidebar">
		sidebar
	</div>
	<div class="container-fluid main-container" ng-controller="RecordController">
		<div class="row">
			<div class="col-md-12">
				<h1>Channel Support Record</h1>
				<div class="container-fluid record-list">

					<div class="row record record-type-{{record.type}}" ng-repeat="record in records" style="z-index: {{records.length - $index}};">
						<div class="col-xs-1 record-info-container">
							<div class="record-info">
								<div class="record-type">{{record.type}}</div>
								<div class="record-time">{{record.time}}</div>
							</div>
						</div>
						<div class="col-xs-8 record-name-container">
							<div class="record-name">{{record.name}}</div>
						</div>
						<div class="col-xs-3 record-amount-container">
							<div class="record-amount hide-{{record.amount.length == 0}}">
								<span class="record-pay-amount">{{record.amount}}</span>
								<span class="record-est-pay-amount">({{record.estAmount}})</span>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>

		<br><br>
		<button type="button" class="btn btn-default" ng-click="addRecord()">Add record (test)</button>
		<button type="button" class="btn btn-default" ng-click="populateRecords()">Add real records (API test)</button>
		<br><br>
		<img src="http://ttv-api.s3.amazonaws.com/assets/connect_dark.png" class="twitch-login hide-{{loggedIn}}" ng-click="login()" href="#" /> 
		<button type="button" class="btn btn-default twitch-logout hide-{{!loggedIn}}" ng-click="logout()">Logout</button>
	</div>

	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/twitch.min.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
</body>
</html>