var fs = require("fs");
var http = require("http");
var json = ".json";

//get url for user-selected directory and 
//1.serve media file or
//2.serve JSON file containing media information

var writeResponse = function(response, url){

	//serve files

}



var find = function(url){

//find media files in user-selected directory


}


var build = function(){

//build JSON file

}




http.createServer((req, res) =>{
	console.log(req.url);
	writeResponse(res, req.url);
		}).listen(3000);

