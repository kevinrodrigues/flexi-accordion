/*==========================================
Author: Kevin Rosario Rodrigues
Requires: jQuery v1.3.2 or later
e: kevrodrigues116@gmail.com
*==========================================*/
(function ($, window, document, undefined) {
    $.flexiaccordion = function (el, o) {
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data('flexiaccordion', base);
        
        base.init = function () {
            base.o = $.extend({}, $.flexiaccordion.defaulto, o);
        };
        
        // Run initializer
        base.init();
    };
    
    $.flexiaccordion.defaulto = {
        speed: 2000
    };
    
    $.fn.flexiaccordion = function (o) {
        return this.each(function () {
            (new $.flexiaccordion(this, o));

			// Plugin start here
			//$(this).click(function () {
			//	console.log(this);
			//});

            // check if accordion exists if not exit
            if (!$(this).length) {
                return;
            }

            var $accordion = $(this).find('h3'),
                $accordionOpen = $accordion.next().filter(':first'),
                $accordionWidth = $accordionOpen.outerWidth();


            $accordion.next().filter(':not(:first)').css({'display' : 'none', height : 0});


            $accordion.click(function () {
                if ($accordionOpen.prev().get(0) == this) {
                    return;
                }

                $accordionOpen.animate({height : 0}, {duration : base.o.speed});
                $accordionOpen = $(this).animate({ height : height}, { duration : base.o.speed});
            });


            //$(this).find('div:first').show().siblings('div').hide();

        });
    };
    
})(jQuery, window, document);