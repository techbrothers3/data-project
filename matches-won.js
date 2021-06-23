const csvtojson = require('csvtojson');
const csvfilepath =  "/home/mohammed/Documents/muaaz/data-project/archive/matches.csv";
csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    // console.log(json);
    console.log(myFunction(json));
})
function myFunction(json) {
    let map = {};
    
    for(let i = 0; i<json.length; i++) {
        if (map[json[i].winner] != undefined) {
            var count = map[json[i].winner];
            count++;
            map[json[i].winner] = count;
        } else {
            if (json[i].winner != '') {
                map[json[i].winner] = 1;
            }
        }
        
    }
    return map;
}