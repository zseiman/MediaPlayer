var fs = require("fs");
var http = require("http");
var aType = [".mp3"];

var directory = {'folder':{'one':'0'}};

var mainFolders = [];
	var child;
	var schild;


/*
var findData = function(url){

fs.readdir(url,(err, folders)=>{

	if(err){
		console.log(err);
	}

	else{
		for(var i = 0; i<folders.length;i++){
			directory.folder.one[i] = folders[i];
			console.log(directory.folder.one[i]);
			fs.readdir(url + '/' + folders[i], (err, files)=>{
				if(err){
					console.log(err);
				}
				else{
					for(var j = 0; j<files.length;j++){
						console.log(files[j]);
					}
				}
			});
		}
	}

})

}


*/

var findData = function(url, mainFolders){

	console.log("findData");

	var firstLayer = function(url, mainFolders){
		console.log("firstLayer");
		fs.readdir(url,(err, out)=>{

		if(err){
			console.log(err);
		}

		else{
			for(var i = 0; i < out.length;i++){
					mainFolders.push(out[i]);
					
			}

			var secondLayer = function(url, mainFolders){
				console.log("secondlayer");
				var children = [];
				for(var j = 0; j < mainFolders.length;j++){
					var lurl = url + "/" + mainFolders[j];
					console.log(lurl);
					fs.readdir(lurl,(err, out)=>{
						if(err){
							console.log(err);
						}
						else{
							children.push(out[j]);
							console.log(children[j]);
						}


					});

				}

			}

			secondLayer(url, mainFolders);

			}

		});



	}

firstLayer(url, mainFolders);


}








var writeResponse = function(response,requestUrl,request){

//get url for user-selected directory and 
//1.serve media file or
//2.serve JSON file containing media information
if(requestUrl === '/'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/index.html', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/css/main.css'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/css/main.css', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/css/reset.css'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/css/reset.css', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/css/bootstrap.css'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/css/bootstrap.css', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/js/jquery.js'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/jquery.js', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/js/settings.js'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/settings.js', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/js/angular.js'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/angular.js', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/js/aModule.js'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/aModule.js', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/js/main.js'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/main.js', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/js/player.js'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/player.js', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

	else if(requestUrl === '/js/visualizer.js'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/visualizer.js', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/images/buttonbk.png'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/images/buttonbk.png', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/images/playPause.png'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/images/playPause.png', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/images/buttonfwd.png'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/images/buttonfwd.png', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}

else if(requestUrl === '/images/sliderBackground.png'){
	
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/images/sliderBackground.png', (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});}






else{
	response.writeHead(200, {'context-type':'text/html'});


	findData(requestUrl, mainFolders);


	/*fs.readFile(requestUrl, (err,data) => {

	if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}});*/}

	/*else{

		response.writeHead(200, {'context-type':'text/plain'});
		findData(requestUrl);
		response.end();



	}*/}





var find = function(url){

//find media files in user-selected directory


}


var build = function(){

//build JSON file

}




http.createServer((req, res) =>{
	req.url = req.url.split('%20');
	req.url = req.url.join(' ');
	req.url = req.url.split('%5C');
	req.url = req.url.join('/');
	console.log(req.url);
	writeResponse(res, req.url, req);
		}).listen(3000);

