(function ($) {
    "use strict";

    // background image
    $("[data-bg-image]").each(function () {
        var $this = $(this),
            $image = $this.data("bg-image");
        $this.css("background-image", "url(" + $image + ")");
    });

    // Preloader
    function loading() {
        document.querySelectorAll(".bar").forEach(function (current) {
            let startWidth = 0;
            const endWidth = current.dataset.size;
            const interval = setInterval(frame, 20);
            function frame() {
                if (startWidth >= endWidth) {
                    clearInterval(interval);
                } else {
                    startWidth++;
                    current.style.width = `${endWidth}%`;
                    current.firstElementChild.innerText = `${startWidth}%`;
                }
            }
        });
    }
    setTimeout(loading, 1000);

    $(window).on("load", function () {
        // Animate loader off screen
        const preloader = $(".preloader");
        preloader.delay(600).fadeOut();
    });

    $(".preloader .tj-primary-btn").on("click", function(){
        $(".preloader").fadeOut();
    });

    // Header Sticky  Js
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });

    // Mobile Menu
    $("#main-menu").meanmenu({
        meanMenuContainer: "#mobile-navbar-menu",
        meanScreenWidth: "991",
        meanExpand: ["<i class='fa-light fa-plus'></i>"],
    });

    // Header Search
    $(".search-btn").on("click", function () {
        $(".search_popup").addClass("search-opened");
        $(".search-popup-overlay").addClass("search-popup-overlay-open");
    });
    $(".search_close_btn").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(".search-popup-overlay").removeClass("search-popup-overlay-open");
    });
    $(".search-popup-overlay").on("click", function () {
        $(".search_popup").removeClass("search-opened");
        $(this).removeClass("search-popup-overlay-open");
    });

    // Mobile Menu Overlay
    var canva_expander = $(".canva_expander");
    if (canva_expander.length) {
        $(".canva_expander, #canva_close, #tj-overlay-bg2").on("click", function (e) {
            e.preventDefault();
            $("body").toggleClass("canvas_expanded");
        });
    }

    
    // header language
    $(".languages .activated").html($(".lang_lists > li.active a").html());
    var newOptions = $(".lang_lists > li a");
    newOptions.on("click", function(){
        $(".languages .activated").html($(this).html());
        $(".lang_lists > li").removeClass("active");
        $(".lang_lists > li").addClass("active");
    });

    var aeDropdown = $(".languages");
    aeDropdown.on("click", function(){
        $(".lang_lists").slideToggle();
        $(this).toggleClass("open");
    });
    

    // Hero Slider One
    var slider1 = new Swiper(".sc-slider-1", {
        speed: 800,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
    });

    // Hero Thumb Slider 2
    var slider2 = new Swiper(".thumb-slider", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var thumb_slider2 = new Swiper(".thumb-slider2", {
        spaceBetween: 10,
        allowTouchMove: false,
        thumbs: {
            swiper: slider2,
        },
        loop: true,
    });

    // Testimonial Slider One
    var testimonial1 = new Swiper(".tj-testimonial-slider", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 8500,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 2,
            },
        },
    });

    // Testimonial Slider Two
    var testimonial2 = new Swiper(".tj-testimonial-slider2", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 8500,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Project slider
    $(".tj-project-slider").owlCarousel({
        items: 1,
        nav: false,
        thumbs: false,
        loop: true,
        margin: 20,
        autoplayTimeout: 5000,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 1,
            },
            576: {
                items: 2,
            },
            767: {
                items: 2,
            },
            1080: {
                items: 3,
            },
            1200: {
                items: 3,
            },
            1500: {
                items: 4,
            },
        },
    });

    // video js
    var popupvideos = $(".popup-videos-button");
    if (popupvideos.length) {
        $(".popup-videos-button").magnificPopup({
            disableOn: 10,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });
    }

    $(window).on("load resize", function () {
        // grid js
        $(".grid").imagesLoaded(function () {
            var $grid = $(".grid").isotope({
                layoutMode: "fitRows",
                itemSelector: ".grid-item",
                percentPosition: true,
                fitRows: {
                    gutter: ".gutter-sizer",
                },
            });
        });
    });

    // Nice Select
    $("select").niceSelect();

    // Sal Animation
    sal({
        threshold: 0.1,
        once: true,
    });

    // Fun Fact
    $(".odometer").appear(function () {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // range slider
    var $document = $(document),
        $inputRange = $('input[type="range"]');

    // Example functionality to demonstrate a value feedback
    function valueOutput(element) {
        var value = element.value,
            output = element.parentNode.getElementsByTagName("output")[0];
        output.innerHTML = value;
    }
    for (var i = $inputRange.length - 1; i >= 0; i--) {
        valueOutput($inputRange[i]);
    }
    $document.on("input", 'input[type="range"]', function (e) {
        valueOutput(e.target);
    });
    // end Range Slider

    /*-- logiland scroll top scripts start --*/
    var logilandScrollTop = document.querySelector(".logiland-scroll-top");
    if (logilandScrollTop != null) {
        var scrollProgressPatch = document.querySelector(".logiland-scroll-top path");
        var pathLength = scrollProgressPatch.getTotalLength();
        var offset = 50;
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition = "none";
        scrollProgressPatch.style.strokeDasharray = pathLength + " " + pathLength;
        scrollProgressPatch.style.strokeDashoffset = pathLength;
        scrollProgressPatch.getBoundingClientRect();
        scrollProgressPatch.style.transition = scrollProgressPatch.style.WebkitTransition =
            "stroke-dashoffset 10ms linear";
        window.addEventListener("scroll", function (event) {
            var scroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var progress = pathLength - (scroll * pathLength) / height;
            scrollProgressPatch.style.strokeDashoffset = progress;
            var scrollElementPos = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollElementPos >= offset) {
                logilandScrollTop.classList.add("progress-done");
            } else {
                logilandScrollTop.classList.remove("progress-done");
            }
        });
        logilandScrollTop.addEventListener("click", function (e) {
            e.preventDefault();
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
            });
        });
    }
    /*-- logiland scroll top scripts end --*/
})(jQuery);
