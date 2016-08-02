$(function(){

var dTheme = 1; // create multiple themes/color schemes
var dVis = 1;   // create various visualizations. Make them awesome!
var open = false;
var source = "/";
var url = "";
var audio = document.getElementById('audio');
var type;
var songs = [];


var ids = function(i){

	/*var id[i] = i;

	document.getElementById(id[i]).addEventListener('click', function(id[i]){
		console.log(document.getElementById(id[i]));
	});
*/

}

var listen = function(songs){
	console.log('listen');
	for(var i = 0; i < songs.length;i++){

		
		ids(i);
	}
}

var toPage = function(songs){


	for(var i = 0; i <= songs.length;i++){

		document.getElementById("musicSelection").innerHTML += "<div class='musicElement' id='" + i + "'>" + songs[i] + "</div><br />";

		if(i === songs.length){
			listen(songs);
		}
	}

}


var sift = function(data){

	console.log("sift");
	for(var i = 0; i < data.length;i++){

		type = data[i].substr(data[i].length - 4, data[i].length);

		if(type === ".mp3" || type === ".m4a" || type === ".wma"){

			songs.push(data[i]);
				
		}

		if(i+1 === data.length){
			toPage(songs);
		}
	}

}

var dissect = function(data){

	data = data.split("|");

	sift(data);
}

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
	$.get(url, function(data){
		dissect(data);
	});

});


});