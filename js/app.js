$(document).foundation().ready( function(){
  $('.hamburger').click(function(){
		$(this).toggleClass('is-active');
	});

  // Wow Animation Settings and Initialization
	wow = new WOW({
		boxClass:						'wow',
		anmiateClass:				'animated',
		offset:							0,
		mobile:							true,
		live:								true
  	})
	wow.init();

// Enable sticky tab nav on Food and Drinks Page
  var   fadCheck = window.location.href.indexOf('foodanddrinks.php');
        tabnav = $(".tab-nav-group");
        tabnavScroll = "tab-nav-scroll";
        pagehero = $(".page-hero").height();
        stackedwrapper = $(".stacked-wrapper").height();
        footer = $('footer').height();

  // window.onload = function() {
  //   if (fadCheck > -1) {

    $(window).scroll( function() {
      if( $(this).scrollTop() > pagehero ) {
        tabnav.addClass(tabnavScroll);
      }
      else {
        tabnav.removeClass(tabnavScroll);
      }
    })
  // }
// } //end Food and Drinks

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


  // Animated Number Counter
  var a = 0;
  var aboutCheck = window.location.href.indexOf('about.php');

  window.onload = function() {
    if (aboutCheck > -1) {
      $(window).scroll(function() {
        var oTop = $('.counter-items-container').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-number').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
              {
                duration: 3000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
                }
              });
          });
          a = 1;
        }
      });
    }
  }

}); //end document.ready
