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
                speed:  400,                     // set your speed in m-seconds
                orientation: 'horizontal'       // change to vertical if require

            };
             
            o = $.extend(defaults, o);
            
            return this.each(function () {

                var $accordion = $(this).find('h3'),
                    $accordionOpen = $accordion.next().filter(':first'),
                    $accordionHeight = $accordionOpen.innerHeight(),
                    $accordionWidth = $accordionOpen.innerWidth();

                if  ($(this).length && o.orientation === 'horizontal') {
                    $accordion.next().filter(':not(:first)').css({'display' : 'none', height : 0});
                    $accordion.click(function () {
                        if ($accordionOpen.prev().get(0) == this) {
                            return;
                        }
                        
                        $accordionOpen.animate({height : 0}, {duration : o.speed});
                        $accordionOpen = $(this).next().css({'display' : 'block'}).animate({ height : $accordionHeight}, { duration : o.speed});
                    });

                } else if ($(this).length && o.orientation === 'vertical') {
                    $accordion.next().filter(':not(:first)').css({'display' : 'none', width : 0});
                    $(this).parent().addClass('vertical-headers');

                    $accordion.click(function () {
                        if ($accordionOpen.prev().get(0) == this) {
                            return;
                        }
                        
                        $accordionOpen.animate({width : 0}, {duration : o.speed});
                        $accordionOpen = $(this).next().css({'display' : 'block'}).animate({ width : $accordionWidth}, { duration : o.speed});
                    });

                } else {
                    return;
                }
            });
        }
    });

})(jQuery, window, document);