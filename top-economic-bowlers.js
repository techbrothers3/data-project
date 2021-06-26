const csvtojson = require('csvtojson');
const csvfilepath = "/Users/Mohammed.Shoeb/Documents/shoeb/data-project/archive/deliveries.csv";
csvtojson()
.fromFile(csvfilepath)
.then((json) =>{
    // console.log(json)
    console.log(myFunction(json));
})
function myFunction(json) {
    let map = {};
    let overMap = {}
    for(let i = 122714; i<136364; i++) {
        if (map[json[i].bowler] != undefined) {
            var count = map[json[i].bowler];
            count += parseInt(json[i].total_runs);
            count -= parseInt(json[i].extra_runs);
            count += parseInt(json[i].legbye_runs);
            map[json[i].bowler] = count;
        } else {
            map[json[i].bowler] = parseInt(json[i].total_runs);
        }
        if (overMap[json[i].bowler] != undefined) {
            var ballsCount = overMap[json[i].bowler];
            if (json[i].noball_runs == 0 && json[i].wide_runs == 0) {
                ballsCount++;
            }
            overMap[json[i].bowler] = ballsCount;
        } else {
            if (json[i].noball_runs == 0 && json[i].wide_runs == 0) {
                overMap[json[i].bowler] = 1;
            }
        }
    }
    let economyMap = {};
    for(const item in overMap) {
        var runs = map[item];
        var overs = overMap[item];
        overs /= 6;
        economyMap[item] = runs/overs;
    }
    return economyMap;
    
    
}