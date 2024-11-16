// infoPage
$('.hg-btn').on('click', function() {
    $('.welcomeBlock').addClass('welcomeBlockA');
    $('.welcomeContentBottom').addClass('welcomeContentBottomA');
    $('.hg-btn').css('display', 'none');
    $('.clockBlock').addClass('clockBlockA');
    $('.welcomeContentTop').addClass('welcomeContentTopA');
    setTimeout(function (){
        $('.infoBlock').addClass('infoBlockA');
    }, 500);
    setTimeout(function (){
        $('.infoPage1').addClass('infoPage1A');
    }, 500);

})

