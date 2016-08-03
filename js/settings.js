$(function(){

var dTheme = 1; // create multiple themes/color schemes
var dVis = 1;   // create various visualizations. Make them awesome!
var open = false;
var source = "/";
var url = "";
var audio = document.getElementById('audio');
var type;
var songs = [];
var ref;



var listen = function(sound, index){

	//to add click listeners to each music element that plays song with associated url
	//code from here
	document.getElementById(index).addEventListener("click", function(){});


}

var put = function(sound, index){

	//puts HTML elements for each song item

	document.getElementById('musicSelection').innerHTML += '<div class="musicElement" id="' + index + '">' + sound + '</div>';

	listen(sound, index);

}


var sift = function(data){

	//sorts playable media files

	console.log("sift");
	for(var i = 0; i < data.length;i++){

		type = data[i].substr(data[i].length - 4, data[i].length);

		if(type === ".mp3" || type === ".m4a" || type === ".wma"){

			songs.push(data[i]);
				
		}

		if(i+1 === data.length){
			data.forEach(put);
		}
	}

}

var dissect = function(data){

	data = data.split("|");

	sift(data);
}

// Player

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