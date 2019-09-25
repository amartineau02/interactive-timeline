$(document).foundation();

$('.panel').not('#rehobothvillage').hide();
$('.intro').hide();


$('.mainmenu').on('click','a',function(e){
  e.preventDefault();
  var curr = $(this).attr('href');
  $('.panel').hide();
  $(curr).show();
});



$('.auxmenu').on('click','a',function(e){
  e.preventDefault();
  $('.intro').toggle();
});