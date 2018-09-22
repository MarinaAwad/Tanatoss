$(function () {
	'use strict';
	//to trigger niceScroll plugin
	$('html').niceScroll({
		cursorcolor:'#f7600c',
		cursorwidth:8,
		cursorborderradius:8,
		cursorborder:'1px solid #f7600c'
	});
	
	//move to our team by hire button
	$('.hire').click(function(){
		$('html, body').animate({
			scrollTop: $('.our-team').offset().top
		},2000);
	});
	
	//move to our team by hire button
	$('.work').click(function(){
		$('html, body').animate({
			scrollTop: $('.our-work').offset().top
		},2000);
	});
	
	//change header height to full screen size
	$('.header').height($(window).height());
    
	//scroll arrow to features
	$('.header .arrow i').click(function(){
		$('html, body').animate({
			scrollTop: $('.features').offset().top
		},2000);
	});
	
	//to show hidden images in our work
	$('#show-more').click(function(){
		$('.our-work .items-box .hidden').fadeIn(1000);
	});
	
	//check of testimonial
	var leftArrow = $('.testim .fa-chevron-left'),
		rightArrow= $('.testim .fa-chevron-right');
	function checkClients()
	{
		/*
		if ($('.client:first').hasClass('active')){
			leftArrow.fadeOut(1000);
		}
		else{
			leftArrow.fadeIn();
		}
		*/
		// the same if mo5tasra
		$('.client:first').hasClass('active') ? leftArrow.hide() :leftArrow.fadeIn();
		$('.client:last').hasClass('active') ? rightArrow.hide() :rightArrow.fadeIn();
	}
	checkClients();
	
	$('.testim i').click(function () {
		if($(this).hasClass('fa-chevron-right'))
		{
			$('.testim .active').fadeOut(100, function(){
				$(this).removeClass('active').next('.client').removeClass('hidden').addClass('active').fadeIn();
				checkClients();
			});
		}//end if
		
		if($(this).hasClass('fa-chevron-left'))
		{
			$('.testim .active').fadeOut(100, function(){
				$(this).removeClass('active').prev('.client').removeClass('hidden').addClass('active').fadeIn();
				checkClients();
			});
		}//end if
	});
	
}); 