const csvtojson = require('csvtojson');
const csvfilepath = "/Users/Mohammed.Shoeb/Documents/shoeb/data-project/archive/matches.csv";
csvtojson()
.fromFile(csvfilepath)
.then((json) =>{
    // console.log(json)
    console.log(myFunction(json));
})
function myFunction(json) {
    let map = {};
    for(let i = 0; i<json.length; i++) {
        if (map[json[i].season] != undefined) {
            var count = map[json[i].season];
            count++;    
            map[json[i].season] = count;
        } else {
            map[json[i].season] = 1;
        }
    }
    
    return map;
}


