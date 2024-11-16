$('.toggleBlock').on('click', function theme() {
    $('.toggleBlock').toggleClass('toggleBlock2');
    if ($(this).hasClass('toggleBlock2')) {
        $('.toggleTheme').addClass('toggleTheme2');
        $('.body').addClass('body2');
        $('.hg-btn').addClass('hg-btn2');
        $('.welcomeBlock').addClass('welcomeBlock2');
        $('.hg-time1').addClass('time2');
        $('.hg-time2').addClass('time2');
        $('.hg-time3').addClass('time2');
        $('.hg-time4').addClass('time2');
        $('.clockBlock').addClass('clockBlock2');
        $('.welcomeContentTop').addClass('welcomeContentTop2');
        $('.welcomeContentBottom').addClass('welcomeContentBottom2');
        $('.infoBlock').addClass('infoBlock2');
        $('.party').removeClass('partyList').addClass('partyList2');
        $('.userCard').addClass('userCard2');
        $('.fa-user').addClass('fa-user2');
        $('.infoInput').addClass('infoInput2');
        $('.infoPage1').addClass('infoPage1-2');
        $('.infoPage1 span').addClass('color6');
        $('.infoPage2').addClass('infoPage2-2');
        $('.line').addClass('line2');
    } else {
        $('.party').removeClass('partyList2').addClass('partyList');
        $('.toggleTheme').removeClass('toggleTheme2');
        $('.body').removeClass('body2');
        $('.hg-btn').removeClass('hg-btn2');
        $('.welcomeBlock').removeClass('welcomeBlock2');
        $('.hg-time1').removeClass('time2');
        $('.hg-time2').removeClass('time2');
        $('.hg-time3').removeClass('time2');
        $('.hg-time4').removeClass('time2');
        $('.clockBlock').removeClass('clockBlock2');
        $('.welcomeContentTop').removeClass('welcomeContentTop2');
        $('.welcomeContentBottom').removeClass('welcomeContentBottom2');
        $('.infoBlock').removeClass('infoBlock2');
        $('.userCard').removeClass('userCard2');
        $('.fa-user').removeClass('fa-user2');
        $('.infoInput').removeClass('infoInput2');
        $('.infoPage1').removeClass('infoPage1-2');
        $('.infoPage1 span').removeClass('color6');
        $('.infoPage2').removeClass('infoPage2-2');
        $('.line').removeClass('line2');
    }
})