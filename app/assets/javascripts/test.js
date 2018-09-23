

  (document).ready(function1());
    function function1(){
  var colOne = $('.col-1').nextUntil('.col-2').addBack();
  var colTwo = $('.col-2').nextAll().addBack();

// Append new divs that will take the column content
  $('.wrap').append('<div class="column-first group" /><div class="column-second ground" />');

// Append column content to new divs
  $(colOne).appendTo('.column-first');
  $(colTwo).appendTo('.column-second');

// Get the .wrap height after all this is done
  var wrapHeight = $('.wrap').outerHeight();
  var colHeight;

// Calc height of each col
  for (var i = 0; i < $('.col-1').length; i++) {
    var eachCol = $('.col-1').outerHeight();
    colHeight = eachCol*i;
  }  

// Add the heights
$('.wrap').height(colHeight+wrapHeight);

    }
    