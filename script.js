$("#pwCheck").click(function() {
    
    var password = $("#pwInput").val();
    
    if (password === "Qw3an") {
        
        $("#yes").show();
        $("#denied").hide();
        
    } else {
        
        $("#denied").show();
        $("#yes").hide();
        
    }
});