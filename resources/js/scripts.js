$(document).ready(function() {


	/* Sticky Navigation */
	$('.js--section-aboutme').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky')
		} 
		else {
		$('nav').removeClass('sticky')
		}
		}, {
		
		offset: '20px;'
    });



    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });


// $('.js-nav-icon').click(function() {
//   var nav = $('.js-main-nav');

//   nav.slideToggle(200);


// })

/* Mobile navigation */
$('.js-nav-icon').click(function() {
  var nav = $('.js-main-nav');
  // var icon = $('.js--nav-icon ion-icon');
        
  nav.slideToggle(200);
    
  if ($('#nav-mobile').attr('name','reorder-three')) {
    $('#nav-mobile').attr('name','close');
  } 
  if ($('#nav-mobile').attr('name','close')) {
    $('#nav-mobile').attr('name', 'reorder-three');
  }        
  });

});