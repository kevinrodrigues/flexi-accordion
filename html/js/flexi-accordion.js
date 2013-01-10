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
                speed:  400,          // set your speed in m-seconds
                isVertical: true,     // set to false if a horizontal accordion is required
                collapsible: true    // set to true to close all panels
            };
             
            o = $.extend(defaults, o);
            
            return this.each(function () {

                // global variables
                var $accordion = $(this).find('h3'),
                    $accordionOpen = $accordion.next().filter(':first'),
                    $accordionHeight = $accordionOpen.innerHeight(),
                    $accordionWidth = $accordionOpen.innerWidth(),
                    $zeroHeight = 0,
                    $zeroWidth = 0;

                // animates open/close function
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
                }

                // function collapsibleAccordion() {
                //     if (o.collapsible === true) {
                //         $accordion.next().filter('div').css({width: 0}, {'display' : 'none'});

                //     }
                // }

                // setting height/width to first element
                function filterAccordion(dimention, el) {

                    if (o.isVertical) {
                        dimention = {width: 0};
                        $(el).parent().addClass('vertical-headers');

                    } else {
                        dimention = {height : 0};
                    }

                    if (o.collapsible === false) {
                        $accordion.next().filter(':not(:first)').css(dimention, {'display' : 'none'});
                    } else {
                        $accordion.next().filter('div').css({width: 0}, {'display' : 'none'});
                    }
                    
                }

                function accordionClicked(base) {

                    console.log('accordionClicked: ' + base);

                    if ($accordionOpen.prev().get(0) == base) {
                        return;
                    }

                }

                // start main plugin structure
                if ($(this).length) {
                    
                    if (o.isVertical === false) {
                        filterAccordion($zeroHeight);

                        $accordion.click(function () {

                            if ($accordionOpen.prev().get(0) == this) {
                                return;
                            }

                            animateAccordion(this, $accordionHeight);
                        });
                        
                    } else if (o.isVertical === true) {
                        filterAccordion($zeroWidth, this);

                        $accordion.click(function () {

                            console.log('click: ' + this);

                            // accordionClicked(this);
                            if ($accordionOpen.prev().get(0) == this) {
                                return;
                            }
                            collapsibleAccordion();
                            animateAccordion(this, $accordionWidth, o.isVertical);
                        });
                    }

                } else {
                    return;
                }
            });
        }
    });

})(jQuery, window, document);