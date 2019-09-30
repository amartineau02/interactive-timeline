$(document).foundation();

// when the page loads, hide every panel
$('.panel').hide();

// handle clicks on the main navigation
$('.mainmenu a').click(function(e){
  // don't do the default action (jump to a linked section of the page)
  e.preventDefault();
  // hide the intro
  $('.intro').hide();
  // save the destination of the selected link (the one that was just clicked)
  var curr = $(this).attr('href');
  // hide every panel
  $('.panel').hide();
  // show the selected panel
  $(curr).show();
  console.log(curr);
});


// handle click on the logo
$('.logo').click(function(){
  $('.intro').show();
});
