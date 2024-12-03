$(function() {
    $("#menu").hover(
        // 滑鼠移入時的處理函數
        function() {
            $(this).stop(true, false).animate({
                left: 0
            }, 500, 'easeOutBounce');
        },
        // 滑鼠移出時的處理函數
        function() {
            $(this).stop(true, false).animate({
                left: -158
            }, 500, 'easeOutBounce');
        }
    );
});
