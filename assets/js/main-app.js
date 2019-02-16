$(document).ready(function () {

    $(window).on('scroll', function () {

        $('.full-bar').addClass('fixed');
        if ($(window).scrollTop()) {
            $('.full-bar').addClass('fixed');
        } else {
            $('.full-bar').removeClass('fixed');
        }
    });

    $('.myskillsbar').each(function () {
        $(this).find('.colorskills-bar').animate({
            width: $(this).attr('data-percent')
        }, 6000);
    });


    $(document).on('click', '.nav-icons',function(e){
        if($(e.target).is('a')) {
            $('.navbar-collapse.collapse.show').collapse('hide');
        }
    });

});