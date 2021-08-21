const csvtojson = require('csvtojson');
// function init() {

    const csvfilepath =  "/home/mohammed/Documents/muaaz/data-project/archive/matches.csv";
    csvtojson()
    .fromFile(csvfilepath)
    .then((json) => {
        // console.log(json);
        console.log(myFunction(json));
    })
// }

// let resJson = {}

function myFunction(json) {
    let m= {};
    
    for(let i = 0; i<json.length; i++) {
        if (m[json[i].winner] != undefined) {
            var count = m[json[i].winner];
            count++;
            m[json[i].winner] = count;
        } else {
            if (json[i].winner != '') {
                m[json[i].winner] = 1;
            }
        }
        
    }
    // resJson = m;
    return m;
}

// init()