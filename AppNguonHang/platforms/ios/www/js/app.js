var app = new Framework7({
    smartSelectBackOnSelect: true,
    smartSelectBackTemplate: '<div class="left sliding"><a href="#" class="back link"><i class="icon ion-ios-arrow-thin-left"></i><span>Trở lại</span></a></div>'
});

var $$ = Dom7;

var mainView = app.addView('.view-main', {
    dynamicNavbar: true
});

//app.onPageInit('about',
//    function (page) {

//    });

$$(document).on('pageInit',
    function (e) {
        var page = e.detail.page;

        if (page.name === 'about') {
            $$('.open-about').on('click',
                function () {
                    app.popup('.popup-about');
                });

            $$('.open-services').on('click',
                function () {
                    app.popup('.popup-services');
                });

            var popupView = app.addView('.popup .view',
                {
                });
        }

        if (page.name === 'electricwallet') {
            $$('.open-search-popup').on('click',
                function () {
                    app.popup('.popup-search-electricwallet');
                });


            var popupView = app.addView('.popup .view',
                {
                });
        }
    });

//$$(document).on('pageInit',
//    '.page[data-page="about"]',
//    function (e) {
//    });
