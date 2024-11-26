//    function xxx(){
//         document.getElementById('tt').innerHTML='welocme';
// }
    
//     // 時間限制
//     setTimeout(xxx, 3000)


// 起手式$(Function(){})


$(function() {    // 或寫成 $(document).ready(function() {
    
    $("h1").click(function() { 
        alert('我按到文字了')
        $("h1").text("xxx")
    });
    
    $("img").click(function() {
        alert('我按到圖片了');
    });
    
});
