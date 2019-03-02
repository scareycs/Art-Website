function scrollToAnchor(section){
    var aTag = $("a[name='"+ section +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'medium');
}

$("#home").click(function(){
	scrollToAnchor('home');
});

$("#shop").click(function(){
	scrollToAnchor('shop');
	if ($(window).width() < 780)
	{
		$("#menu").prop("checked", false);
	}
});

$("#about").click(function(){
	scrollToAnchor('about');
	if ($(window).width() < 780)
	{
		$("#menu").prop("checked", false);
	}
});

$("#contact").click(function(){
	scrollToAnchor('contact');
	if ($(window).width() < 780)
	{
		$("#menu").prop("checked", false);
	}
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