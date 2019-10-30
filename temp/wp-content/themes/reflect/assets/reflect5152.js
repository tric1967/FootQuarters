jQuery(document).ready(function($) {
	
	"use strict";
	
	/*	
		Register Lightbox by magnific-popup
	------------------------------------------------------------------------*/	
	$('.image-lightbox').magnificPopup({type:'image'});
	$('.video-lightbox').magnificPopup({type:'iframe'});
	$('.inline-lightbox').magnificPopup({type:'inline'});
		
	$('.image-lightbox-child').magnificPopup({type:'image'});
	$('.video-lightbox-child').magnificPopup({
		type:'iframe',
		delegate: 'a',
	});
	$('.inline-lightbox-child').magnificPopup({type:'inline'});
	
	
	
	/*	
		Responsive Menu
	------------------------------------------------------------------------*/
	var ph1_responsive_menu = $(".responsive-menu");
	
    function steed_build_responsive_nav_inner(){
		jQuery( "<i class='plus'></i>" ).appendTo(".responsive-menu li.menu-item-has-children" );
		var ttes_menu_panels = $('.responsive-menu > ul li.menu-item-has-children ul.sub-menu').hide();
		
		$('.responsive-menu > ul li.menu-item-has-children i').on( "click", function() {
			if($(this).prev('ul.sub-menu, ul.children').hasClass('active')){
				$(this).prev('ul.sub-menu, ul.children').slideUp();
				$(this).prev('ul.sub-menu, ul.children').removeClass('active');
				
				$(this).removeClass('minus');
				$(this).addClass('plus');
				
			}else{
				if(!$(this).parent().parent().hasClass('active')){
					ttes_menu_panels.slideUp();
					ttes_menu_panels.removeClass('active');
				}
				
				$(this).prev('ul.sub-menu, ul.children').slideDown();
				$(this).prev('ul.sub-menu, ul.children').addClass('active');
				
				$(this).removeClass('plus');
				$(this).addClass('minus');
			}

			return false;
		});
	}
	$('.responsive-menu li.menu-item-has-children i').removeClass('plus');
    
	$('a.responsive-menu-hand').on( "click", function() {
		$( $(this).attr('href') ).clone().appendTo( ph1_responsive_menu );
		steed_build_responsive_nav_inner();
		
		if($(".responsive-menu").hasClass('active')){
			$(".responsive-menu").slideUp();
			$(".responsive-menu").removeClass('active');
			$(".responsive-menu ul").remove();
			$("body").removeClass('mobile-menu-active');
		}else{
			$(".responsive-menu").slideDown();
			$(".responsive-menu").addClass('active');
			$("body").addClass('mobile-menu-active');
		}
		return false;
	});
	
	$('a.responsive-menu-close').on( "click", function() {
		$(".responsive-menu").slideUp();
		$(".responsive-menu").removeClass('active');
		$(".responsive-menu ul").remove();
		$("body").removeClass('mobile-menu-active');
	});
	
	
	/*	
		Fitvids
	------------------------------------------------------------------------*/	
	 $('iframe[src*="youtube"], iframe[src*="videopress"]').parent().fitVids({ 
	 	customSelector: "iframe[src^='https://videopress.com']",
	 });
});