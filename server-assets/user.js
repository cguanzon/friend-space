var friends = [
	{
		name: 'Jaime Lannister',
		age: '40',
		relationship: 'brother'
	},
	{
		name: 'Oberyn Martell',
		age: '36',
		relationship: 'frenemy'
	},
	{
		name: 'Bronn the Sellsword',
		age: '34',
		relationship: 'employee'
	},
	{
		name: 'Varys the Spider',
		age: '30',
		relationship: 'co-worker'
	}
];

var personalInfo = {
	name: 'Tyrion Lannister',
	height: '3ft, 2in',
	age: 34,
	favoriteMovie: 'Game of Thrones the Movie',
	favoriteArtist: 'Ross',
	favoriteFood: 'Roast Something Something in honey'
};

module.exports.getFriends = function getFriends(){
	return friends;
};

module.exports.getPersonalInfo = function getPersonalInfo(){
	return personalInfo;
};

module.exports.addFriend = function addFriend(friendObject){
	friends.push(friendObject);
	return friendObject;
};

