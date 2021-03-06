function clearPanel(){
    // You can put some code in here to do fancy DOM transitions, such as fade-out or slide-in.
}

/*--------------------------Set Router Paths--------------------------- */
Path.map("#/users").to(function(){
    alert("Users!");
});

Path.map("#/comments").to(function(){
    alert("Comments!");
}).enter(clearPanel);

Path.map("#/posts").to(function(){
    alert("Posts!");
}).enter(clearPanel);

Path.rescue(function(){
    alert("404: Route Not Found");
});
/*--------------------------/Set Router Paths-------------------------- */

$(window).load(function(){

/*--------------------Calculate First Div Height--------------------- */
  $('.intro').height($(window).height());
  $('.intro .personal-info').css('top', $(window).height()/2);
/*-------------------/Calculate First Div Height--------------------- */

/*-----------------------Start PathJS Router------------------------- */
  Path.listen();
/*----------------------/Start PathJS Router------------------------- */

/*------------------------Mobile Navigation-------------------------- */
  $('#mob-nav').on('click', function(){
    $('nav').toggleClass('show');
    $('.header h1').toggleClass('menu-open');
    var that = this;
    setTimeout(function(){
      $(that).children('i').toggleClass('fa-bars fa-arrow-right');
    }, 250);
  });
/*-----------------------/Mobile Navigation-------------------------- */

/*-----------------------Scroll Functionality------------------------ */

  
  var ih    = $('.intro').outerHeight();
  var amh   = $('.about-me').outerHeight();
  var mwh   = $('.my-work').outerHeight();
  var cmh   = $('.contact-me').outerHeight();

  $(window).on('scroll', function(){
    var fromTop = $('body').scrollTop();

    /*------------------------Header Stickiness-------------------------- */
    $('.about-me .header').toggleClass('top', (fromTop > ih));
    $('.my-work .header').toggleClass('top', (fromTop > ih + amh));
    $('.contact-me .header').toggleClass('top', (fromTop > ih + amh + mwh));
    /*-----------------------/Header Stickiness-------------------------- */

    /*-----------------------Active Navigation--------------------------- */
    $('nav .links ul .home').toggleClass('active', (fromTop < ih - 1));
    $('nav .links ul #about-me-nav').toggleClass('active', (fromTop > ih - 1) && (fromTop < ih + amh));
    $('nav .links ul #my-work-nav').toggleClass('active', (fromTop > ih + amh - 1) && (fromTop < ih + amh + mwh));
    $('nav .links ul #contact-me-nav').toggleClass('active', (fromTop > ih + amh + mwh - 1));
    /*-----------------------/Active Navigation-------------------------- */

    /*-----------------------Graph Animation------------------------------*/
    if (fromTop > ih + amh - 1){
      $('.skill .level').removeClass('inactive');
    }
    /*-----------------------/Graph Animation-----------------------------*/

  });

  /*------------------------Scroll to Header--------------------------- */
  $('a[href^="#"').on('click', function(e){
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 750, 'swing');
  });
  /*-----------------------/Scroll to Header--------------------------- */

/*-----------------------/Scroll Functionality----------------------- */

});


