$(function() {
    $(".main-nav").hide();

    $("#menu-toggle").on("click",function(){
    	$(".main-nav").slideToggle();

    });

    $('.bxslider').bxSlider({
    	mode: 'fade',
    	pager: false
  	});

    $('.bxslider2').bxSlider({
    	mode: 'fade',
    	pager: false,
     	nextSelector: '#carousel-next',
  		prevSelector: '#carousel-prev',
    	nextText: '',
  		prevText: ''
  	});
});
