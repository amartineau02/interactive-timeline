$(document).foundation();


$('.panel').hide(); // when the page loads, hide every panel


$('.mainmenu a').click(function(e){ // handle clicks on the main navigation
  $('main h1,main h2').removeClass('flickr'); // remove flickr only to add it again later
  e.preventDefault(); // don't do the default action (jump to a linked section of the page)
  $('.intro').hide(); // hide the intro
  var curr = $(this).attr('href'); // save the destination of the selected link (the one that was just clicked)
  $('.panel').hide(); // hide every panel
  $(curr).show(); // show the selected panel
  $('main h1,main h2').addClass('flickr'); // add class to overlay to flickr transition
  console.log(curr);
});


// handle click on the logo
$('.logo').click(function(){
  $('.intro').show();
});



// z-index
$('.im').hover(function(){
  $('.im').removeClass('top');
  $(this).addClass('top');
});