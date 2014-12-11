$(function() {
	var $menu = $('#sidebar-wrapper');
	var $content = $('#main-wrapper');
	
	if ($.cookie('offcanvas') == 'hide') {
		$content.addClass('no-transition');
		$menu.hide();
		$menu.css('right', -($menu.outerWidth() + 10));
		$content.removeClass('col-md-10').addClass('col-md-12');
	} else if ($.cookie('offcanvas') == 'show') {
		$menu.show(500).animate({
			right : 0
		});
		//  $menu.show();
		$content.removeClass('no-transition');
		$content.removeClass('col-md-12').addClass('col-md-10');
	}
	
	$('.toggle-button').click(function() {
		$content.removeClass('no-transition');
		if ($menu.is(':visible') && $content.hasClass('col-md-10')) {
			// Slide out
			$menu.animate({
				right : -($menu.outerWidth() + 10)
			}, function() {
				$menu.hide(1000);
			});
			$content.removeClass('col-md-10').addClass('col-md-12');
			$.cookie('offcanvas', 'hide');
		} else {
			// Slide in
			$menu.show(500).animate({
				right : 0
			});
			$content.removeClass('col-md-12').addClass('col-md-10');
			$.cookie('offcanvas', 'show');
		}
		if ($content.hasClass('col-md-12') && $menu.is(':hidden')) {
			$menu.animate({
				right : 0
			}, function() {
				$menu.show(1000);
			});
			//  $menu.show();
			$content.removeClass('no-transition');
			$content.removeClass('col-md-12').addClass('col-md-10');
		}
	});
	$('.bs-tooltip').tooltip();
});