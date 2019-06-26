$(document).ready(function() {
    var navBtn = $('#nav-btn');
    var contactsBtn = $('#contacts-btn');

    var menuBtnElem = $('.main-nav ul');
    var contactsBtnElem = $('.contacts-nav');

    navBtn.click(function(){
        contactsBtnElem.hide();
        menuBtnElem.slideToggle(700);
        navBtn.addClass('is-active').removeClass('not-active');
        contactsBtn.addClass('not-active').removeClass('is-active');
    });

    contactsBtn.click(function(){
        menuBtnElem.hide();
        contactsBtnElem.slideToggle(700);
        contactsBtn.addClass('is-active').removeClass('not-active');
        navBtn.addClass('not-active').removeClass('is-active');
    });

    $('[data-mask]').inputmask();
});

