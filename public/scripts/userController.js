var app = angular.module('FriendSpaceApp');

app.controller('UserController', function($scope, UserService){
	$scope.getFriends = function(){
		UserService.getFriends().then(function(res){
			$scope.friends = res.data.friends;
		});
	};

	$scope.getPersonalInfo = function(){
		UserService.getPersonalInfo().then(function(res){
			$scope.personalInfo = res.data.personalInfo;
		});
	};

	$scope.getPersonalInfo();
	$scope.getFriends();

});