$(function(){

var dTheme = 1;
var dVis = 1;
var open = false;
var source = "/";
var url = "";
var audio = document.getElementById('audio');


// Player

//Make file selectable from created JSON file
audio.src = './music-temp/EverythingSux.m4a';

//Interaction with player
audio.controls = false;
audio.loop = false; //Possibly add loop button
audio.autoplay = false;


var musicSwitch = function(){
		if(audio.paused){
	 	 audio.play();
			}
		else{
			audio.pause();
			}
		}



document.getElementById('playPause').addEventListener('click', musicSwitch);

// end Player



//open settings
$("#settings").click(function(){$("#settingsMenu").css({ "margin-left":"84%"});});
//close settings
$("#exit").click(function(){$("#settingsMenu").css({ "margin-left":"100%"});});

$("#sub").click(function(){

	url = document.getElementById('musicSource').value;
	console.log(url);
	$.get(url, function(){
		console.log("get");
	});

});


});