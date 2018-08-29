function scrollToAnchor(section){
    var aTag = $("a[name='"+ section +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'medium');
}

$("#home").click(function(){
	scrollToAnchor('home');
});

$("#projects").click(function(){
	scrollToAnchor('projects');
});

$("#about").click(function(){
	scrollToAnchor('about');
});

$("#contact").click(function(){
	scrollToAnchor('contact');
});


$(window).bind('scroll', function() {
	if($(window).width() >= 640) {
		var navHeight = $(window).height() - 70;
	}
	else {
		var navHeight = $(window).height() - 20;
	}

	if ($(window).scrollTop() > navHeight) {
		$('nav').addClass('fixedTop');
		$('nav').removeClass('fixedBottom');
	}
	else {
	 	$('nav').addClass('fixedBottom');
		$('nav').removeClass('fixedTop');
	}
});