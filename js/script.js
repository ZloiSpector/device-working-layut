"use strict"

$(".catalog").click((event) => {
    event.preventDefault();
    if ($(".yellow-block").css("z-index") == 9) {
        $(".yellow-block").css("z-index", "11");
        $(".intro").css("z-index", "9");
        $(".catalog-menu-box").fadeIn(200);
        $(".intro-num-block").css("opacity", "0");
    } else if ($(".yellow-block").css("z-index") == 11) {
        $(".yellow-block").css("z-index", "9");
        $(".intro").css("z-index", "11");
        $(".catalog-menu-box").css("display", "none");
        $(".intro-num-block").css("opacity", "1");
        console.log(11)
    }
});

function oneSlide() {
    $(`.slide-btn:eq(0)>.slide-active`).css("display", "block");
}
oneSlide();

$(".slide-btn").click((event) => {
    const index = $(".slide-btn").index(event.target);

    //slideHiden

    $(".intro-slide").fadeOut(200);
    setTimeout(() => {
        $(`.intro-slide:eq(${index})`).fadeIn(200);
    }, 200);

    //slideSwitch

    setTimeout(() => {
        $(`.intro${index}`).css("display", "flex");
    }, 200)
    $(".intro-num").html(`0${index + 1}`);

    for (let i = 0; i <= 3; i++) {
        if (i != index) {
            $(`.slide-btn:eq(${i})>.slide-active`).css("display", "none");
            $(`.intro${i}`).css("display", "none");
            $(`.slide-btn:eq(${i})`).removeAttr("disabled");
        } else if (i == index) {
            $(`.slide-btn:eq(${i})`).attr("disabled", "disabled");
            $(`.slide-btn:eq(${i})>.slide-active`).css("display", "block");
        }
    }
});


$(".service-btn").click((event) => {
    event.preventDefault();
    const index = $(".service-btn").index(event.target);
    console.log(index);
    //slideHiden

    $(".service-slide").fadeOut(200);
    setTimeout(() => {
        $(`.service-slide:eq(${index})`).fadeIn(200);
    }, 200);
    for (let i = 0; i <= 3; i++) {
        if(i != index) {
            $(`.service-btn:eq(${i})`).addClass("btn");
            $(`.service-btn:eq(${i})`).removeClass("service-btn-active");
        } else if (i == index) {
            $(`.service-btn:eq(${i})`).removeClass("btn");
            $(`.service-btn:eq(${i})`).addClass("service-btn-active");
        }
    }
});

//Modal

function modalIn (wrapper, box) {
    wrapper.css("display", "flex");
    box.fadeIn(400);
    $("body").css("overflow-y", "hidden");
}

function modalOut (wrapper, box) {
    wrapper.css("display", "none");
    box.css("display", "none");
    $("body").css("overflow-y", "auto");
}

$(".feedback-btn").click((event)=> {
    event.preventDefault();
    modalIn ($(".feedback-wrapper"), $(".modal-feedback-box"));
});

$(".feedback-exit").click((event)=>{
    event.preventDefault();
    modalOut ($(".feedback-wrapper"), $(".modal-feedback-box"));
});

$(".map").click((event)=> {
    event.preventDefault();
    modalIn ($(".map-wrapper"), $(".map-big"));
});

$(".map-exit").click((event)=>{
    event.preventDefault();
    modalOut ($(".map-wrapper"), $(".map-big"));
});

$(document).mouseup((e) => {
    if (!$(".catalog-menu-box").is(e.target) &&
        $(".catalog-menu-box").has(e.target).length === 0 &&
        $(".catalog-menu-box").css("display") === "block") {
        $(".yellow-block").css("z-index", "9");
        $(".intro").css("z-index", "11");
        $(".catalog-menu-box").css("display", "none");
        $(".intro-num-block").css("opacity", "1");
    }
});