/*==========================================
Author: Kevin Rosario Rodrigues
Requires: jQuery v1.3.2 or later
e: kevrodrigues116@gmail.com
*==========================================*/

(function ($, window, document, undefined) {
    $.fn.extend({
        flexiaccordion: function (o) {
            
            // overwrite defaults below in your .js file
            var defaults = {
                speed:  400,                 // set your speed in m-seconds
                isVertical: true      // change to vertical if required
            };
             
            o = $.extend(defaults, o);
            
            return this.each(function () {

                var $accordion = $(this).find('h3'),
                    $accordionOpen = $accordion.next().filter(':first'),
                    $accordionHeight = $accordionOpen.innerHeight(),
                    $accordionWidth = $accordionOpen.innerWidth();

                function animateAccordion(el, animSize, isVertical) {
                    
                    var animStart,
                        animEnd;
                    if (isVertical) {
                        animStart = {width: 0};
                        animEnd = {width: animSize};
                    } else {
                        animStart = {height: 0};
                        animEnd = {height: animSize};
                    }

                    $accordionOpen.animate(animStart, {duration : o.speed});
                    $accordionOpen = $(el).next().css({'display' : 'block'}).animate(animEnd, { duration : o.speed});
                    /*if (!isVertical) {
                        $accordionOpen.animate({height : 0}, {duration : o.speed});
                        $accordionOpen = $(el).next().css({'display' : 'block'}).animate({ height : animSize}, { duration : o.speed});

                    } else {
                        $accordionOpen.animate({width : 0}, {duration : o.speed});
                        $accordionOpen = $(el).next().css({'display' : 'block'}).animate({ width : animSize}, { duration : o.speed});
                    }*/

                }

                if  ($(this).length && o.orientation === false) {
                    $accordion.next().filter(':not(:first)').css({'display' : 'none', height : 0});

                    $accordion.click(function () {
                        if ($accordionOpen.prev().get(0) == this) {
                            return;
                        }
                        animateAccordion(this, $accordionHeight);
                    
                    });

                } else if ($(this).length && o.isVertical === true) {

                    $accordion.next().filter(':not(:first)').css({'display' : 'none', width : 0});
                    $(this).parent().addClass('vertical-headers');

                    $accordion.click(function () {
                        if ($accordionOpen.prev().get(0) == this) {
                            return;
                        }

                        animateAccordion(this, $accordionWidth, o.isVertical);
                        //$accordionOpen.animate({width : 0}, {duration : o.speed});
                    });

                } else {
                    return;
                }
            });
        }
    });

})(jQuery, window, document);