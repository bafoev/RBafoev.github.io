$(function(){
	$('.spoiler-body').hide();
	$('.spoiler-title').click(function(){
		$(this).next().slideToggle(500);
	});
	function srollToDiv(element){
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop;

		$('body, html').animate({
			scrollTop: totalScroll
		}, 2000);
	}

	$('nav ul li a').click(function(){
		var el = $(this).attr('href');
		var elWrapped = $(el);

		scrollToDiv(elWrapped);

		return false;
	})


});

