$(function() {
    // 向右移動按鈕
    $("#RRR").click(function() {
        $("#KIDS").animate({
            left: 1000
        }, 800, 'easeOutElastic');
    });

    // 向左移動按鈕
    $("#LLL").click(function() {
        $("#KIDS").animate({
            left: 0
        }, 800, 'easeOutBounce');
    });
});
