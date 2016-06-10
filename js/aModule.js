var media = angular.module("media", []);

//make function that pulls JSON data from node







media.controller("music", function($scope){

	$scope.music = [{artist:"Dead Kennedys", song:"Police Truck", album:"Give Me Convenience Or Give Me Death"}, {artist:"Metallica", song:"Creeping death", album:"Ride The Lightning"}];

})