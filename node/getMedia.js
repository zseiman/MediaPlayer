var fs = require("fs");
var http = require("http");
var directory = {'folder':{'one':'0'},
				'topLength': 0,
				'midLength': 0,
				'botLength': 0};
var url;
var mainFolders = [];




var pullData = function(response){

	fs.readFile("ref.txt", (err, out)=>{

		if(err){
			console.log(err);
		}
		else{

		response.writeHead(200, {'context-type':'text/html'});
	 	response.write(out);
	 	response.end();
		

		}

	});

}

var thirdLayer = function(lurl, i, toplength, j, midlength, response){

	fs.readdir(lurl,(err, out)=>{
		if(err){
			console.log(err);
		}
		else{
			for(var k = 0; k < out.length;k++){
				fs.appendFile("ref.txt",  lurl + "/" + out[k] + "|");
			}

			if(i + 1 === toplength && k === out.length){

				pullData(response);
			}
		}
	});

}


var secondLayer = function(lurl, i, toplength, response){
	fs.readdir(lurl,(err, out)=>{
		if(err){
			console.log(err);
		}
		else{
			directory.midLength = out.length;
			for(var j = 0; j < out.length;j++){

				thirdLayer(lurl + '/' + out[j], i, toplength, j, directory.midLength, response);

			}
		}
	});

}


var firstLayer = function(url, response){
		fs.readdir(url,(err, out)=>{
		if(err){
			console.log(err);
		}

		else{
			directory.topLength = out.length;
			for(var i = 0; i < out.length;i++){
					mainFolders.push(out[i]);
					secondLayer(url + '/' + out[i], i, directory.topLength, response);
			}


			}

		});



	}

var findData = function(url, response){
	fs.writeFile("ref.txt"," ");
	firstLayer(url, response);
}

var respond = function(err, data, response){
if(err){
		console.log(err);
	}

	else{
		response.write(data);
		response.end();

	}	
}

var writeResponse = function(response,requestUrl,request){

if(requestUrl === "/"){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/index.html', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/css/main.css'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/css/main.css', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/css/reset.css'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/css/reset.css', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/css/bootstrap.css'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/css/bootstrap.css', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/js/jquery.js'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/jquery.js', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/js/settings.js'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/settings.js', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/js/angular.js'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/angular.js', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/js/aModule.js'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/aModule.js', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/js/main.js'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/main.js', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/js/player.js'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/player.js', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/js/visualizer.js'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/js/visualizer.js', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/images/buttonbk.png'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/images/buttonbk.png', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/images/playPause.png'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/images/playPause.png', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/images/buttonfwd.png'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/images/buttonfwd.png', (err,data)=>{respond(err, data, response)});}

else if(requestUrl === '/images/sliderBackground.png'){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile('C:/users/Zseiman/Documents/GitHub/MusicPlayer/images/sliderBackground.png', (err,data)=>{respond(err, data, response)});}

else if(requestUrl.length > 60){
	response.writeHead(200, {'context-type':'text/html'});
	fs.readFile(requestUrl, (err,data)=>{respond(err, data, response)});
}

else{
	findData(requestUrl, response);
}

}





http.createServer((req, res) =>{
	req.url = req.url.split('%20');
	req.url = req.url.join(' ');
	req.url = req.url.split('%5C');
	req.url = req.url.join('/');
	console.log(req.url);
	writeResponse(res, req.url, req);
		}).listen(3000);

