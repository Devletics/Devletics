$(document).ready(function(){
  $("#loading").bind('ended', function(){
    location.href="main.html";
  });

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    console.log(wScroll)

  if(wScroll > $('.wrapper2').offset().top - ($(window).height()/ 1.15)){

    $('.wrapper2').each(function(i){
      setTimeout(function(){
        $('.wrapper2').eq(i).addClass('is-showing')
      }, 850 * (i+1));

    })
  }

})


});








