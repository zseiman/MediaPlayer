$(function(){

$('#mClick').click(function(){
	$('#mClick').css({'text-shadow':'1px 1px #aea3dc'});
	$('#vClick').css({'text-shadow':'0px 0px'});
	$('#video').css({'-moz-transform':'rotateY(180deg)','-ms-transform':'rotateY(180deg)','-webkit-transform':'rotateY(180deg)','-o-transform':'rotateY(180deg)'});
	$('#music').css({'-moz-transform':'rotateY(0deg)','-ms-transform':'rotateY(0deg)','-webkit-transform':'rotateY(0deg)','-o-transform':'rotateY(0deg)'});
});

$('#vClick').click(function(){
	$('#vClick').css({'text-shadow':'1px 1px #aea3dc'});
	$('#mClick').css({'text-shadow':'0px 0px'});
	$('#video').css({'-moz-transform':'rotateY(0deg)','-ms-transform':'rotateY(0deg)','-webkit-transform':'rotateY(0deg)','-o-transform':'rotateY(0deg)'});
	$('#music').css({'-moz-transform':'rotateY(180deg)','-ms-transform':'rotateY(180deg)','-webkit-transform':'rotateY(180deg)','-o-transform':'rotateY(180deg)'});
});

});