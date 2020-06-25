// Para sa Smooth Scrolling
$('header a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top -90
      },
      800
    );
  }
});

// Navbar Toggle
$(document).ready(function(){
  $('.menu-toggle').click(function(){
      $('.menu-toggle').toggleClass('active')
      $('nav').toggleClass('active')
  })
})

