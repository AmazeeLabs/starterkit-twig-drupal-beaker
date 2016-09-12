(function ($) {

  var behaviors = Drupal.behaviors;
  // Execute all of them.
  for (var i in behaviors) {
    if (behaviors.hasOwnProperty(i) && typeof behaviors[i].attach === 'function') {
      behaviors[i].attach(document, {});
    }
  }

})(jQuery);
