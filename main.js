/**Navigation Section**/

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

/**Fixed Menu Section**/

$(window).bind('scroll', function() {
	var navHeight = $(window).height() - 80;
	if ($(window).scrollTop() > navHeight) {
		$('nav').addClass('fixedTop');
	}
	else {
		$('nav').removeClass('fixedTop');
	}
});

$('#originals').click(function(){

});

function main(){
	
}

/**Shop Gallery Section**/

let pieces = [{
	title: 'Erykah Badu',
	picUrl: 'Badu.jpg',
	original: {
		type: 'canvas',
		price: 1200,
		width: 30,
		height: 30
	},
	photoPrints: [{
		price: 20,
		width: 12,
		height: 12
	},
	{
		price: 30,
		width: 11,
		height: 14
	},
	{
		price: 40,
		width: 16,
		height: 20
	}],
	canvasPrints: {
		price: 60,
		width: 14,
		height: 14
	}
},
{
	title: "Mz. Merized",
	picUrl: 'MzMerized.png',

},
{
	title: "Eleven",
	picUrl: "Eleven.png"
},
{
	title: "Mother Africa",
	picUrl: "motherAfrica.jpg"
},
{
	title: "Sublimation",
	picUrl: "Sublimation.jpg"
}];

for (let j=0; j < pieces.length; j++)
{
	console.log(pieces[j].picUrl);
	$(".gallery").append(`<div class="col-4">
       <img src="${pieces[j].picUrl}" class="pieces" id="piece${j}"></div>`);
}

