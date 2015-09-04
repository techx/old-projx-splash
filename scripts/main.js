$(document).ready(function() {
  // Navbar
  var $bodytag = $('html, body');
  var $gotoTags = $('#goto-explore, #goto-faq');
  $gotoTags.click(function(e) {
    var elementName = e.target.id.substr(5);
    $bodytag.animate({
      scrollTop: $('#'+elementName).offset().top
    }, 400);
  });
  
  //Elevator
    var elevator = new Elevator({
    mainAudio: '/sound/elevator.mp3',
    endAudio: '/sound/ding.mp3',
    duration: 4000
  });
  
  $('#elevator').click(function(e){
    elevator.elevate();
  });
});