// ==UserScript==
// @name            Reddit Retina Thumbnails
// @author          Vartan
// @namespace       http://www.mvartan.com/
// @description     Creates retina thumbnails for single-image imgur posts
// @license         Creative Commons Attribution License
// @version	        0.1
// @include         http://*.reddit.com/*
// @include         http://*.reddit.com/
// @include         http://reddit.com/*
// @include         http://reddit.com/
// @compatible      Greasemonkey
// @grant           none
// ==/UserScript==
 
(function(){
  $('.thumbnail') .each(function () {
    var link = this.href;
    if (link.indexOf('imgur.com') > 0 && link.indexOf('/a/') == - 1) {
      var image = $(this) .find('img');
      var lastDotIndex = link.lastIndexOf('.');
      var snipPoint = lastDotIndex > 20 ? lastDotIndex : link.length;
      image.attr('src', link.substring(0, snipPoint) + 'b.jpg');
      console.log(snipPoint)
    }
  });
})();
