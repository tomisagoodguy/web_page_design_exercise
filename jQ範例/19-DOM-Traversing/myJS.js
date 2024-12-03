$(function(){
    $(".AA").click(function() {
        // $(this).siblings()
        //        .filter(":first, :last")
        //        .css("background-color", "yellow");
        // });
        
        // $(this).next().css({ "background-color": "yellow" });
        // $(this).prev().css({ "background-color": "yellow" });

        // $(this).nextAll().css({ "background-color": "yellow" });
        // $(this).prevAll().css({ "background-color": "yellow" });


        // $(this).parent().css({ "background-color": "yellow" });
        // $(this).parents().css({ "background-color": "yellow" });
        // $(this).parentsUntil("body").css({ "background-color": "yellow" });

        // $(this).parent().siblings().css({ "background-color": "yellow" });
        // $(this).parent().next().css({ "background-color": "yellow" });

        $(this).parent().next().children().css({ "background-color": "yellow" });
        $(this).parent().next().next().find("li").css({ "background-color": "yellow" });


        
    });
});
