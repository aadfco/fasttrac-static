$(document).ready(function(){
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
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


//Hide Drinks on page load
$(".drinks").hide();

// shows and hides filtered items
$(".filter-simple-button").click(function() {
  var value = $(this).attr('data-filter');
    $(".stacked-wrapper").not('.'+value).hide();
    $('.stacked-wrapper').filter('.'+value).show();
});

// changes active class on filter buttons
$('.filter-simple-button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});

});
