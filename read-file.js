$().ready(function(){
    $.ajax({
        type: "GET",
        url: "archive/matches.csv",
        dataType: "text",
        // "Access-Control-Allow-Headers": "*",
        success: function(data) {processData(data)}
    })
})

function processData(data) {
    console.log(data)
}