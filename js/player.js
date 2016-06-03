var audio = document.getElementById('audio');


//Make file selectable from created JSON file
audio.src = './music-temp/EverythingSux.m4a';

//Interaction with player
audio.controls = false;
audio.loop = false; //Possibly add loop button
audio.autoplay = false;

document.getElementById('playPause').addEventListener('click', musicSwitch);

function musicSwitch(){
		if(audio.paused){
	 	 audio.play();
			}
		else{
			audio.pause()
			}
		}
