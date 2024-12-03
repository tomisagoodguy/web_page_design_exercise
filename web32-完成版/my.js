$(function () {

    $(".header h3").on("touchend click", AAA);
    function AAA() {
        $(".header ul").toggle();
    }


    $(window).on("resize", CCC);
    function CCC() {
        var N = $(window).width();
        if (N >= 768) {
            $(".header ul").show();
        } else { $(".header ul").hide(); }
    }


    /*===原始寫法===== */

    // $(".header h3").click(function () {
    //     $(".header ul").toggle();
    // })

    // $(window).resize(function () {
    //     var N = $(window).width();
    //     if (N >= 768) {
    //         $(".header ul").show();
    //     } else { $(".header ul").hide(); }
    // })












})


