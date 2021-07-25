const xlsx = require('xlsx');
const playerModel = require('../model/employee');
var cron = require('cron');

function excelReader(req, res) {
    var cronJob = cron.job("*/10 * * * * *", function() {
        let file = xlsx.readFile('./assests/test.xlsx');
        let data = [];
        const sheets = file.SheetNames
        for(let i = 0; i < sheets.length; i++) {
            const temp = xlsx.utils.sheet_to_json(
                    file.Sheets[file.SheetNames[i]])
            temp.forEach((res) => {
                data.push(res)
            })
        }
        console.log(data)
        /*playerModel.deleteMany({}, function() {
            console.log("removed")
        })
        playerModel.create(data, function(err, db) {
            if(err) throw err;
            console.log("success....")
        })*/
    });
    
    cronJob.start();
}

module.exports = { excelReader };