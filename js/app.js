( function($) {
  jQuery(document).foundation()

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
    var tabnav = $('.tab-nav-group');
    var tabnavScroll = "tab-nav-scroll";

    $(window).scroll( function() {
      var pagehero = $(".page-hero").height();

      if( $(this).scrollTop() > pagehero ) {
        tabnav.addClass(tabnavScroll);
      }
      else {
        tabnav.removeClass(tabnavScroll);
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


// Animated Number Counter
  var a = 0;
  var countItems = document.querySelector('.counter-items-container');

  if (countItems) {
    function counterAnimate() {
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
    document.addEventListener('scroll', counterAnimate);
  }

})(jQuery); //end document.ready
