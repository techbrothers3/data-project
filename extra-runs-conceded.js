const csvtojson = require('csvtojson');
const csvfilepath = "/home/mohammed/Documents/muaaz/data-project/archive/deliveries.csv";
csvtojson()
.fromFile(csvfilepath)
.then((json) =>{
    // console.log(json)
    console.log(myFunction(json));
})
function myFunction(json) {
    let map = {};
    for(var i = 136366; i<json.length; i++) {
        
        if(map[json[i].bowling_team] != undefined) {
            var count = map[json[i].bowling_team];
            count += parseInt(json[i].extra_runs);
            map[json[i].bowling_team] = count;
        } else {
            map[json[i].bowling_team] = parseInt(json[i].extra_runs);
            
        }
        
        
    }
    return map;
}