$(
    function () {
    

    $("#MENU1").hover(function() {
        $("#SUB1").stop(true,true).slideDown();
    }, function() {
        $("#SUB1").stop(true,true).slideUp(); // 修正：slideUp() 的大小寫
    })

    }
)
