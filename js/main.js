$(document).ready(function(){
    $(document).on('click', '#mobile-menu', function(){
        $('.left-navigation').toggleClass('active');
    });
    $(document).on('click touchstart', '#mask-content', function(){
        $('.left-navigation').removeClass('active');
    });

    // Close menu by swipe
    let el = document.getElementById('mask-content');

    swipedetect(el, function(position){
        // swipedir contains either "none", "left", "right", "top", or "down"
        if (position === 'left') {
            $('.left-navigation').removeClass('active');
        }
    })
});

function getSize() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth,
        height: window.innerHeight || document.documentElement.clientHeight ||
            document.body.clientHeight,
    };
}
