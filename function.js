console.log("CV García Nicolas")

$(document).ready(function(){

	$('.Botoncito').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.Botoncito').slideDown(300);
		} else {
			$('.Botoncito').slideUp(300);
		}
	});

});
function cambiar() {
	document.getElementById('Fondo').style.backgroundColor='green';
}