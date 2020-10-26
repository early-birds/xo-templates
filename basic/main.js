// MAIN JS / TRACKER + WIDGETS FILE

(function (w) {
    w._ebq = w._ebq || [];
  
    /* INSERT HERE YOUR TRACKING */

    w.eb.initSlider = function (selector) {  
        var slickvars = {
            breakpoint: 3000,
            dots: false,
            arrows: true,
            // prevArrow: "<i class='fa fa-chevron-left' aria-hidden='true'></i>" (example, to replace),
            // nextArrow: "<i class='fa fa-chevron-right' aria-hidden='true'></i>" (example, to replace),
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 500,
            variableWidth: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                infinite: true,
                slidesToShow: 3.4,
                slidesToScroll: 3,
                arrows: false,
                }
            }, {
                breakpoint: 640,
                settings: {
                arrows: true,
                // prevArrow: "<i class='fa fa-chevron-left' aria-hidden='true'></i>" (example, to replace),
                // nextArrow: "<i class='fa fa-chevron-right' aria-hidden='true'></i>" (example, to replace),
                infinite: true,
                swipeToSlide: true,
                slidesToShow: 2.4,
                slidesToScroll: 2
                }
            }]
        };
    var slickslider = ('https:' === document.location.protocol ? 'https://' : 'http://') +
    '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
    eb.ebUtils.loadScript(slickslider, function () {
    // Try to load until it's ready
    w.eb.ebUtils.fireWhenConditionTrue(function () {
        try {
        jQuery(selector).slick(slickvars) ? true : false;
        } catch (err) {
        eb.ebUtils.log(err)
        }
        return jQuery(selector).hasClass('slick-initialized');
    }, 100, function () {
        jQuery(selector).slick('refresh');
    });
    });
  }
  })(window);
  
  
  