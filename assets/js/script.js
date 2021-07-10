const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);
window.addEventListener("scroll", () => {
    if (window.pageYOffset > $(".header__body-navbar").offsetTop) {
        $(".header__body-navbar").classList.add("header__body-navbar--fixed");
        $('.header__body-filter').style.display = 'none';
    } else {
        $(".header__body-navbar").classList.remove("header__body-navbar--fixed");
        $('.header__body-filter').style.display = 'flex';
    }
});

// Accout menu
var isClosed = true;
$('.header__body-navbar-general-account').onclick = function () {
    isClosed = !isClosed;
    if (!isClosed) {
        $('.header__body-navbar-general-account-user-list').style.display = 'block';
    } else {
        $('.header__body-navbar-general-account-user-list').style.display = 'none';
    }
}