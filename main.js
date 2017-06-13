$('a').smoothScroll({
    duration: 2000, // animation speed
    easing: 'linear', // find more easing options on http://api.jqueryui.com/easings/
    offset: 10 // custom offset
});

$(document).ready(function () {
    $('.nav li a').click(function (e) {

        $('.nav li').removeClass('active');

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        e.preventDefault();
    });
});


var waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function () {

    }
});
