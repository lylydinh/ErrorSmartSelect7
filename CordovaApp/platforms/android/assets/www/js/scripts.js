document.addEventListener("touchstart", function () { }, true);
$(function () {
    var c = $(".page-content").attr("data-splash");
    var b = $(".page-content").attr("data-redirect");
    if (c > 0) {
        $(".loading-mask").addClass("stop-loading");
        setTimeout(function () {
            a(b)
        }, c)

    }
    //$("#submit-form").submit(function (e) {
    //    var d = $(this).attr("data-redirect");
    //    a(d);
    //    e.preventDefault();
    //    return false
    //});
    //if (navigator.userAgent.match(/Mobi/)) {
    //    $(".mobile-wrapper").width("100%")
    //}
    //$("#grid-1-column").click(function () {
    //    $(".portfolio-gallery").find(".portfolio-item").removeClass("grid-1-column grid-2-columns grid-3-columns").addClass("grid-1-column");
    //    $(".options-new .small-button").removeClass("selected");
    //    $(this).addClass("selected")
    //});
    //$("#grid-2-columns").click(function () {
    //    $(".portfolio-gallery").find(".portfolio-item").removeClass("grid-1-column grid-2-columns grid-3-columns").addClass("grid-2-columns");
    //    $(".options-new .small-button").removeClass("selected");
    //    $(this).addClass("selected")
    //});
    //$("#grid-3-columns").click(function () {
    //    $(".portfolio-gallery").find(".portfolio-item").removeClass("grid-1-column grid-2-columns grid-3-columns").addClass("grid-3-columns");
    //    $(".options-new .small-button").removeClass("selected");
    //    $(this).addClass("selected")
    //});
    //$("input:radio.radio-bullet").change(function () {
    //    var d = $(this).attr("name");
    //    $('input:radio[name="' + d + '"]').each(function (e) {
    //        $(this).prev(".radio-bullet-replacement").removeClass("checked")
    //    });
    //    if ($(this).is(":checked")) {
    //        $(this).prev(".radio-bullet-replacement").addClass("checked")
    //    } else {
    //        $(this).prev(".radio-bullet-replacement").removeClass("checked")
    //    }
    //});
    //$("input:checkbox.checkbox-input").change(function () {
    //    if ($(this).is(":checked")) {
    //        $(this).prev(".checkbox-handle").addClass("checked");
    //        $(this).next(".checkbox-label").addClass("checked")
    //    } else {
    //        $(this).prev(".checkbox-handle").removeClass("checked");
    //        $(this).next(".checkbox-label").removeClass("checked")
    //    }
    //});
    //$(".loading-mask").addClass("stop-loading");
    //$('[data-load="1"]').click(function (d) { });
    //$('[data-load="1"]').click(function (f) {
    //    f.preventDefault();
    //    $(".loading-mask").removeClass("stop-loading");
    //    var d = $(this).attr("href");
    //    setTimeout(function () {
    //        a(d)
    //    }, 10);
    //    return false
    //});
    var a = function (d) {
        document.location = d
    };
    window.onpopstate = function (d) {
        $(".loading-mask").addClass("stop-loading")
    }
});