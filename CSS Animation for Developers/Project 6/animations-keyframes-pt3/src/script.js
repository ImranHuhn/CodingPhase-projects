var stateLocation = 0;
$(document).on('click', '.button', function(){
  
  switch(stateLocation){
    case 0:
      if($('.box').hasClass('three')){
        $('.box').removeClass('three')
      }
      stateLocation = 1;
      break;
    case 1:
      $('.box').addClass('one')
      stateLocation = 2;
      break;
    case 2:
      $('.box').removeClass('one')
      $('.box').addClass('two')
      stateLocation = 3;
      break;
    case 3:
      $('.box').removeClass('two')
      $('.box').addClass('three')
      stateLocation = 0;
      break;
  }
  
  
})