$(document).ready(function(){
  // Enable sticky tab nav on Food and Drinks Page
    var fpr = $(".fast-points-reminder");
    var fprShow = "fpr-show";
    var careers = $(".careers-home").height();

    $(window).scroll( function() {
      if( $(this).scrollTop() > careers) {
        fpr.addClass(fprShow);
      }
      else {
        fpr.removeClass(fprShow);
      }
    });

});
