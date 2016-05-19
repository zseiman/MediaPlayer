$(function(){
	
$('#mClick').click(function(){
	$('#mClick').css({'text-shadow':'2px 2px #999'});
	$('#vClick').css({'text-shadow':'0px 0px'});
	$('#video').css({'-moz-transform':'rotatey(180deg)','-ms-transform':'rotatey(180deg)','-webkit-transform':'rotatey(180deg)','-o-transform':'rotatey(180deg)'});
	$('#music').css({'-moz-transform':'rotatey(0deg)','-ms-transform':'rotatey(0deg)','-webkit-transform':'rotatey(0deg)','-o-transform':'rotatey(0deg)'});
});

$('#vClick').click(function(){
	$('#vClick').css({'text-shadow':'2px 2px #999'});
	$('#mClick').css({'text-shadow':'0px 0px'});
	$('#video').css({'-moz-transform':'rotatey(0deg)','-ms-transform':'rotatey(0deg)','-webkit-transform':'rotatey(0deg)','-0-transform':'rotatey(0deg)'});
	$('#music').css({'-moz-transform':'rotatey(180deg)','-ms-transform':'rotatey(0deg)','-webkit-transform':'rotatey(0deg)','-o-transform':'rotatey(0deg)'});
});

});