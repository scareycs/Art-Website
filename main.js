demos= document.querySelectorAll('nav a');

for (let i = 1; i < demos.length; i++)
{	
	 demos[i].addEventListener('click', function() {
    	var aTag = $("a[name='"+ demos[i].id +"']");
    	$('html,body').animate({
        scrollTop: $(aTag).offset().top},
        'slow'); 
        $("#menu").prop("checked", false);
    });
}

$(window).bind('scroll', function() {
	var navHeight = $(window).height() - 80;
	if ($(window).scrollTop() > navHeight) {
		$('nav').addClass('fixedTop');
		//$('nav').removeClass('fixedBottom');
	}
	else {
	 	//$('nav').addClass('fixedBottom');
		$('nav').removeClass('fixedTop');
	}
});

$('#originals').click(function(){

});

function main(){
	
}