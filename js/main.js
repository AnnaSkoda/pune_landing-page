const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });

    $(".mobile-menu").click(function () {
        $(".mobile-menu span").toggleClass('active');
        $(".nav").toggleClass('open');
        $(".menu").toggleClass('active');
        $("body").toggleClass('owerlay');
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 99) {
            $('.header-top').addClass('header-top__fixed')
        } else {
            $('.header-top').removeClass('header-top__fixed')
        }
    });
};

