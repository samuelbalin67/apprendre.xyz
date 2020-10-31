$(document).ready(function() {
	$('a').mousedown(function(e){
		e.preventDefault();
		content = this.innerHTML;
		var audio = new Audio('sounds/' + content + '.mp3');
		audio.play();
	});
	$('a').click(function(e){
		e.preventDefault();
	});
});