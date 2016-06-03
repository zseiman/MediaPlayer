var analyser, actx, canvas, source, dataArr, bars, draw;
var audio = document.getElementById('audio');


window.addEventListener('load',audioini, false);

function audioini(){

actx = new AudioContext();
analyser = actx.createAnalyser();
canvas = document.getElementById("canvas");
draw = canvas.getContext("2d");
source = actx.createMediaElementSource(audio);
source.connect(analyser);
vis();
}

function vis(){

	window.requestAnimationFrame(vis);
	dataArr = new Uint8Array(analyser.frequencyBinCount);
	analyser.getByteFrequencyData(dataArr);
	analyser.connect(actx.destination);
	draw.clearRect(0,0, canvas.width, canvas.height);
	draw.fillStyle = '#0f0';
	bars = 14;
	for(var i = 0; i < bars;i++){

		var bloc = i * 20 + 20;
		var bwid = 10;
		var bheight = dataArr[i] / -1.9;

		draw.fillRect(bloc, 140, 10, bheight);
	}


}