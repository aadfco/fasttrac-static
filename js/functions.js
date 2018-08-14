$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
	});
});

var  mn = $(".main-nav");
    mms = "mobile-menu-scroll";
    hh = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > 250 ) {
    mn.addClass(mms);
  } else {
    mn.removeClass(mms);
  }
});
