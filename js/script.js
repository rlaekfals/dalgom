$(function(){

	
	$(".right> li> .font0").click(function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().children(".text_info").slideUp();
		$(this).parent('.right li').toggleClass( 'c' );
	});
	
		$(".right> li> .font1").click(function(){
		$(this).next().slideToggle();
		$(this).parent().siblings().children(".text_info").slideUp();
		$( '.noc_po p' ).toggleClass( 'c' );
	});
	


});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children("img").toggleClass("turn");
	});
});

$(function(){
	$(".right> li> ul").click(function(){
		$(this).children().children('plus_w').show();
	});
});






























































