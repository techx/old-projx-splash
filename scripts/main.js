  // Navbar
  var $bodytag = $('html, body');
  var $gotoTags = $('#goto-explore, #goto-faq');
  $gotoTags.click(function(e) {
    var elementName = e.target.id.substr(5);
    $bodytag.animate({
      scrollTop: $('#'+elementName).offset().top
    }, 400);
  });