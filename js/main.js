$(document).ready(function(){
    $(document).on('click', '#mobile-menu', function(){
        $('.left-navigation').toggleClass('active');
    });
    $(document).on('click', '.left-navigation', function(e){
        e.stopPropagation();
    });
    $(document).click(function(){
        $('.left-navigation').removeClass('active');
    });

    // Close menu by swipe
    let el = document.getElementById('mask-content');

    swipedetect(el, function(position){
        // swipedir contains either "none", "left", "right", "top", or "down"
        if (position === 'left') {
            $('.left-navigation').toggleClass('active');
        }
    })
})