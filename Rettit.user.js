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
(function () {
    $('.thumbnail') .each(function () {
        var link = this.href;
        var image = $(this) .find('img');
        if (link.indexOf('imgur.com') > 0 && link.indexOf('/a/') == - 1) {
            var lastDotIndex = link.lastIndexOf('.');
            var snipPoint = lastDotIndex > 20 ? lastDotIndex : link.length;
            image.removeAttr('width');
            image.removeAttr('height');
            image.css({
                'display': 'block',
                'max-width': '70px',
                'max-height': '70px',
                'width': 'auto',
                'height': 'auto'
            })
            image.attr('src', link.substring(0, snipPoint) + 'b.jpg');
            //console.log(snipPoint)
        } else if (link.indexOf('livememe.com') > 0) {
            var importantPart = link.substring(link.lastIndexOf('/'));
            image.removeAttr('width');
            image.removeAttr('height');
            image.css({
                'display': 'block',
                'max-width': '70px',
                'max-height': '70px',
                'width': 'auto',
                'height': 'auto'
            });
            image.attr('src', 'http://i.lvme.me' + importantPart);
            //console.log(importantPart);
        }
    });
}) ();
