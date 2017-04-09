function main(){
  var colorClass = "";

 $(".select-color").on("click", function(){
   var selectedColor = $(this).attr("class");

   switch(selectedColor){
        case 'select-color cyan not-selected':
       colorClass = 'cyan';
    // Set color on box div
    break;
  case 'select-color yellow not-selected':
       colorClass = 'yellow';
    // Set color on box div
    break;
  case 'select-color magenta not-selected':
       colorClass = 'magenta';
    // Set color on box div
    break;
                       }
   $(this).removeClass("not-selected");
   $(this).siblings().addClass('not-selected');

 });

  $('.box').on('click', function() {
	$(this).toggleClass(colorClass);
});


  $('.toggle-blink').on('click', function() {
	if (colorClass) {
  // the rest of the code in here
   $('.toggle-blink').toggleClass('opacity');
    setInterval(function() {
      $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink');
    }, 350);
};
});




}

$(document).ready(main);
