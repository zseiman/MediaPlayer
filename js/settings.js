$(function(){

var dTheme = 1;
var dVis = 1;
var open = false;
var source = "/";
var url = "";

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