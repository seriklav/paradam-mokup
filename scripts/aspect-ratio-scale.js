(() => {
    'use strict';

    $(() => {
        $(window).on('resize', _resizeElement);
        _resizeElement();
    });


    function _resizeElement() {
        $('.scale-aspect-ratio').each(function () {
            let $element = $(this);
            let aspectRatio = $element.attr('data-aspect-ratio');
            let elWidth = $element.outerWidth();

            $element.height(elWidth * aspectRatio);
        });
    }
})();
