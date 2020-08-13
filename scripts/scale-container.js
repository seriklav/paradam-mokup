(() => {
    'use strict';

    //Mobile container constants
    const baseMobileWidth = 375;
    const baseMobileFontsize = 8.8;

//Tablet container constants
    const baseTabletWidth = 768;
    const baseTabletFontsize = 10;

//Desktop container constants
    const baseDesktopFontsize = 10;

//Breakpoints
    const maxMobileWidth = 500;
    const maxTabletWidth = 1024;

//Variables
    let $container = null;

//Small screen fix vars
    let smallScreenFix = 1.2;
    let fixMaxWidth = 420;
    let fixAspectRatio = 1.9;

//On document ready
    $(() => {
        $container = $('.scale-container');

        //Change container fontsize on resize
        $(window).on('resize', _resizeElement);

        //Set base fontsize for current resolution
        _resizeElement();
    });

    function _resizeElement() {
        let boundingRect = $('body').get(0).getBoundingClientRect();
        let currentWidth = boundingRect.width;
        let currentHeight = boundingRect.height;
        let currentScale, currentFontSize, currentState;
        let isDesktop = false;
        let smallScreen = false;
        let aspectRatio = currentHeight / currentWidth;

        if(currentWidth <= maxMobileWidth) {
            currentState = 'mobile';

        } else if(currentWidth > maxMobileWidth && currentWidth <= maxTabletWidth) {
            currentState = 'tablet'
        } else {
            currentState = 'desktop'
        }

        switch (currentState) {
            case 'mobile':
                currentScale = currentWidth / baseMobileWidth;
                currentFontSize = ((smallScreen ? baseMobileFontsize - smallScreenFix : baseMobileFontsize) * currentScale).toFixed(2);
                break;
            case 'tablet':
                currentScale = currentWidth / baseTabletWidth;
                currentFontSize = (baseTabletFontsize * currentScale).toFixed(2);
                break;
            case 'desktop':
                isDesktop = true;
                break;
        }

        if(isDesktop) {
            $($container).css({'font-size': `${baseDesktopFontsize}px`});
        } else {
            $($container).css({'font-size': `${currentFontSize}px`});
        }
    }
})();