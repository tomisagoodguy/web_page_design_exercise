$(function () {
    

    $("#BBB").click(function () {
        // N+=1

        $("#CON_BOX").css("font-size",N+"px").css("color","red")
        
    })


    $("#MMM").click(function () {
          N=16

        $("#CON_BOX").css("font-size",N+"px").css("color","blue")
        
     })
    
    
    $("#SSS").click(function () {
        N-=1

        $("#CON_BOX").css("font-size",N+"px").css("color","")
        
    })






})