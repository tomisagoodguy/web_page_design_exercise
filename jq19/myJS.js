$(function () {
    

    $(".AA").click(function () {

        // $(this).siblings().css({ "background-color": "yellow" })
        // $(this).siblings().first().css({ "background-color": "yellow" })
        // $(this).siblings().last().css({ "background-color": "yellow" })

        // $(this).next().css({ "background-color": "yellow" })
        // $(this).prev().css({ "background-color": "yellow" })

        // $(this).nextAll().css({ "background-color": "yellow" })
        // $(this).prevAll().css({ "background-color": "yellow" })

        // $(this).nextUntil("h1").css({ "background-color": "yellow" })


        // $(this).siblings().eq(5).css({ "background-color": "yellow" })

        // $(this).parent().css({ "background-color": "yellow" })
        // $(this).parents().css({ "background-color": "yellow" })
        // $(this).parentsUntil("body").css({ "background-color": "yellow" })

        // $(this).parent().siblings().css({ "background-color": "yellow" })
        // $(this).parent().next().css({ "background-color": "yellow" })
        
        // $(this).parent().next().children().css({ "background-color": "yellow" })
        // $(this).parent().next().find("li").css({ "background-color": "yellow" })
        // $(this).parent().next().children().eq(2).css({ "background-color": "yellow" })

        // $(this).siblings().slice(5).css({ "background-color": "yellow" })

        // $(this).siblings().slice(5).add("h1").not("p").css({ "background-color": "yellow" })

        // $(this).siblings().slice(5).add("h3,h4,.bb p").css({ "background-color": "yellow" })


        $(this).siblings().filter(":even").css({ "background-color": "yellow" })

    })
















})