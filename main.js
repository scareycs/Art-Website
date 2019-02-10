function scrollToAnchor(section){
    var aTag = $("a[name='"+ section +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'medium');
}

$("#home").click(function(){
	scrollToAnchor('home');
});

$("#shop").click(function(){
	scrollToAnchor('shop');
});

$("#about").click(function(){
	scrollToAnchor('about');
});

$("#contact").click(function(){
	scrollToAnchor('contact');
});


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