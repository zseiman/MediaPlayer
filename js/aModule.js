var media = angular.module("media", []);
var req = XMLHttpRequest();

//make function that pulls JSON data from node

	req.onreadystatechange = function(url){
		if(req.readyState === 4 && req.status === 200){



		} 
	}

	req.open("POST", url, true);
	req.send();


media.controller("music", function($scope){

	$scope.music = [{artist:"Dead Kennedys", song:"Police Truck", album:"Give Me Convenience Or Give Me Death"}, {artist:"Metallica", song:"Creeping death", album:"Ride The Lightning"}];

})