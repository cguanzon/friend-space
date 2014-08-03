var app = angular.module('FriendSpaceApp');

app.service('UserService', function($http){
	this.getFriends = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:8765/friends'
		});
	};

	this.getPersonalInfo = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:8765/personalInfo'
		});
	};
});