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

$(function(){

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

  /*------------------------Header Stickiness-------------------------- */

  var vh = $('.intro').height();
  $(window).on('scroll', function(){
    var fromTop = $('body').scrollTop();
    $('.about-me .header').toggleClass('top', (fromTop > vh));
  });

  /*-----------------------/Header Stickiness-------------------------- */

});


