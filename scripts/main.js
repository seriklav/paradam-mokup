(function() {
    var h, a, f;
    a = document.getElementsByTagName('link');
    for (h = 0; h < a.length; h++) {
        f = a[h];
        if (f.rel.toLowerCase().match(/stylesheet/) && f.href) {
            var g = f.href.replace(/(&|\?)rnd=\d+/, '');
            f.href = g + (g.match(/\?/) ? '&' : '?');
            f.href += 'rnd=' + (new Date().valueOf());
        }
    } // for
})();
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
})