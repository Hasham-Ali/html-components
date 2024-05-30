
$('.hero-section').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.services-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

$('.testi-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
// container-fluid sticky
$(document).ready(function () {

    $(".js--home-sec-1").waypoint(function (direction) {

        if (direction == "down") {
            $(".js--sticky-nav").addClass("sticky");
            $(".js--sticky-nav").addClass("animate__animated animate__zoomIn");
            $(".js--sticky-nav").addClass("container-fluid");
            $(".js--sticky-nav").removeClass("container");
        }
        else {
            $(".js--sticky-nav").removeClass("sticky");
            $(".js--sticky-nav").removeClass("container-fluid");
            $(".js--sticky-nav").addClass("container");
        }
    }, {
        offset: '50%'
    });

    // Inner Pages

    $(".breadcrumbs").waypoint(function (direction) {

        if (direction == "down") {
            $(".js--sticky-nav").addClass("sticky");
            $(".js--sticky-nav").addClass("animate__animated animate__zoomIn");
            $(".js--sticky-nav").addClass("container-fluid");
            $(".js--sticky-nav").removeClass("container");
        }
        else {
            $(".js--sticky-nav").removeClass("sticky");
            $(".js--sticky-nav").removeClass("container-fluid");
            $(".js--sticky-nav").addClass("container");
        }
    }, {
        offset: '10%'
    });

    // Inner Pages end

    $(".js--home-sec-1").waypoint(function (direction) {
        $(".js--home-sec-1").addClass("animate__animated animate__flipInX")
    }, { offset: "910px" });



    $(".js--home-sec-2").waypoint(function (direction) {
        $(".home2-col1-ani").addClass("animate__animated animate__slideInLeft")
        $(".home2-col2-ani").addClass("animate__animated animate__fadeInRight")
    }, { offset: "865px" });


    $(".js--home-sec-3").waypoint(function (direction) {
        $(".js--home-sec-3").addClass("animate__animated animate__slideInUp")
    }, { offset: "900px" });


    $(".js--home-sec-4").waypoint(function (direction) {
        $(".js--home-sec-4").addClass("animate__animated animate__slideInUp")
    }, { offset: "900px" });


    $(".js--home-sec-5").waypoint(function (direction) {
        $(".js--home-sec-5").addClass("animate__animated animate__slideInUp")
    }, { offset: "900px" });


    $(".js--home-sec-6").waypoint(function (direction) {
        $(".js--home-sec-6").addClass("animate__animated animate__zoomIn")
    }, { offset: "900px" });


    $(".js--home-sec-7").waypoint(function (direction) {
        $(".js--home-sec-7").addClass("animate__animated animate__flipInX")
    }, { offset: "900px" });


    $(".js--home-sec-8").waypoint(function (direction) {
        $(".js--home-sec-8").addClass("animate__animated animate__slideInUp")
    }, { offset: "900px" });

});


// ===============cursor

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});



// counter js

$(document).ready(function () {

    $(".js--home-sec-2").waypoint(function (direction) {

        var counters = $(".counter-start");
        var countersQuantity = counters.length;
        var counter = [];

        for (i = 0; i < countersQuantity; i++) {
            counter[i] = parseInt(counters[i].innerHTML);
        }

        var count = function (start, value, id) {
            var localStart = start;
            setInterval(function () {
                if (localStart < value) {
                    localStart++;
                    counters[id].innerHTML = localStart;
                }
            }, 40);
        }

        for (j = 0; j < countersQuantity; j++) {
            count(0, counter[j], j);
        }

    }, { offset: "500px" });

});


$(document).ready(function () {

    // Preloader
    var animated = $(".introAnim");

    function beginAnim() {
        $("#animLogo").fadeOut();
        introAnimation();
    }

    function introAnimation() {
        $(".introAnim:eq(0)").animate({ width: 0 }, 800);
        $(".introAnim:eq(1)").animate({ width: 0 }, 1400);
        $(".introAnim:eq(2)").animate({ width: 0 }, 1000);
        $(".introAnim:eq(3)").animate({ width: 0 }, 1200);
        setTimeout(endAnim, 1500);
    }

    function endAnim() {
        $(".screenloader").remove();
    }

    setTimeout(beginAnim, 1500);

});

// Locomotive
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });




