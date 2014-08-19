//angular app
angular.module('twitch-support-app', [])
	.controller('RecordController', ['$scope', function ($scope) {
/*		$scope.records = [
			{
				type: "follow",
				time: "< 1 min ago",
				name: "Cirno_TV",
				amount: "",
				estAmount: ""
			},
			{
				type: "donation",
				time: "2 min ago",
				name: "Richard_Hammer",
				amount: "350.00",
				estAmount: "339.55"
			},
			{
				type: "refollow",
				time: "13 min ago",
				name: "THIS_IS_THE_MAXIMUM_NAME_LENGTH",
				amount: "",
				estAmount: ""
			},
			{
				type: "sub",
				time: "2 hours ago",
				name: "ProfessorBroman",
				amount: "5.00",
				estAmount: "2.50"
			},
			{
				type: "resub",
				time: "3 hours ago",
				name: "SnarfyBobo",
				amount: "5.00",
				estAmount: "2.50"
			},
			{
				type: "donation",
				time: "1 day ago",
				name: "CobaltStreak",
				amount: "1.69",
				estAmount: "1.34"
			},
			{
				type: "donation",
				time: "2 weeks ago",
				name: "TrumpSC",
				amount: "50.00",
				estAmount: "48.25"
			},{
				type: "follow",
				time: "< 1 min ago",
				name: "Cirno_TV",
				amount: "",
				estAmount: ""
			},
			{
				type: "donation",
				time: "2 min ago",
				name: "Richard_Hammer",
				amount: "350.00",
				estAmount: "339.55"
			},
			{
				type: "refollow",
				time: "13 min ago",
				name: "THIS_IS_THE_MAXIMUM_NAME_LENGTH",
				amount: "",
				estAmount: ""
			},
			{
				type: "sub",
				time: "2 hours ago",
				name: "ProfessorBroman",
				amount: "5.00",
				estAmount: "2.50"
			},
			{
				type: "resub",
				time: "3 hours ago",
				name: "SnarfyBobo",
				amount: "5.00",
				estAmount: "2.50"
			},
			{
				type: "donation",
				time: "1 day ago",
				name: "CobaltStreak",
				amount: "1.69",
				estAmount: "1.34"
			},
			{
				type: "donation",
				time: "2 weeks ago",
				name: "TrumpSC",
				amount: "50.00",
				estAmount: "48.25"
			}
		];*/
		$scope.records = [];

		//twitch sdk
		Twitch.init({clientId: 'crb1ojhb370d5irnxarppv02ea303fz'}, function(error, status) {
			$scope.loggedIn = status.authenticated;
		});



		//angular
		$scope.addRecord = function() {
			$scope.records.push({
				type: "donation",
				time: "2 min ago",
				name: "Richard_Hammer",
				amount: "350.00",
				estAmount: "339.55"
			});
		};

		$scope.populateRecords = function() {
			//TODO: remove static test case
			Twitch.api({method: 'channels/KinoftheFlames/follows'}, function(error, channel) {
				console.log(channel);

				for (i=0; i < channel.follows.length; i++){
					addFollower(new Date(channel.follows[i].created_at), channel.follows[i].user.display_name);
				}
				$scope.$apply();
			});
		};

		$scope.login = function() {
			Twitch.login({
				scope: ['user_read', 'channel_read']
			});
			$scope.loggedIn = true;
		}

		$scope.logout = function() {
			Twitch.logout(function(error){
				console.log(error);
			});
			$scope.loggedIn = false;
		}



		//general functions
		function addFollower(time, name) {
			$scope.records.push({
				type: "follow",
				time: timeSince(time),
				name: name,
				amount: "",
				estAmount: ""
			});
		}

		function timeSince(date) {
			var seconds = Math.floor((new Date() - date) / 1000);
			var interval = Math.floor(seconds / 31536000);

			if (interval > 1)
				return interval + " years ago";
			interval = Math.floor(seconds / 2592000);
			if (interval > 1)
				return interval + " months ago";
			interval = Math.floor(seconds / 86400);
			if (interval > 1)
				return interval + " days ago";
			interval = Math.floor(seconds / 3600);
			if (interval > 1)
				return interval + " hours ago";
			interval = Math.floor(seconds / 60);
			if (interval > 1)
				return interval + " minutes ago";
			return Math.floor(seconds) + " seconds ago";
		}
	}]);