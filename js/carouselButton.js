const mediaQuery = window.matchMedia('(min-width: 768px)');

if (mediaQuery.matches) {
    $('.carouselInfoButtonNext').on('click', function(){
        setTimeout(function(){
            $('.carouselInfoButtonNext').attr('disabled', '').addClass('hidden');
            $('.carouselInfoButtonPrev').removeAttr('disabled', '').removeClass('hidden');
        },700)
    })
    $('.carouselInfoButtonPrev').on('click', function(){
        setTimeout(function () {
            $('.carouselInfoButtonPrev').attr('disabled', '').addClass('hidden');
            $('.carouselInfoButtonNext').removeAttr('disabled', '').removeClass('hidden')
        },700)
    })
} else {
    $('.carouselInfoButtonNext').removeAttr('disabled', '');
    $('.carouselInfoButtonPrev').removeAttr('disabled', '').removeClass('hidden');
}