const AvatarBG = ['userAvatarBG1',
    'userAvatarBG2',
    'userAvatarBG3',
    'userAvatarBG4',
    'userAvatarBG5',
    'userAvatarBG6',
    'userAvatarBG7',
    'userAvatarBG8',
    'userAvatarBG9',
    'userAvatarBG10',
    'userAvatarBG11',
    'userAvatarBG12',
    'userAvatarBG13',
    'userAvatarBG14',
    'userAvatarBG15'];
$(".btn-test").on("click", function(){
    let randomAvatarBG = AvatarBG[Math.floor(Math.random() * AvatarBG.length)];
    let userCard =  document.createElement('div');
    userCard.classList.add('col-6', 'userCard');
    userCard.innerHTML = '<i class="userAvatar"></i>Иванов Иван Иваныч';
    let userCard2 =  document.createElement('div');
    userCard2.classList.add('col-6', 'userCard', 'userCard2');
    userCard2.innerHTML = '<i class="userAvatar"></i>Иванов Иван Иваныч';
    if ($('.party').hasClass('partyList')) {
        $('.partyList').append(userCard);
    } else {
        $('.partyList2').append(userCard2);
    }
    $('.userAvatar').addClass(randomAvatarBG);
})
