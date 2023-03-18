const Stock = require("../models/stocks")

module.exports = {
    home : async (req , res) => {
        const data = {}
        data['stocks'] = await Stock.find({},{},{sort:{createdAt:-1},limit:10})
        return res.render('home',data)
    } , 

    addData : async (req , res) => {
        const response = await fetch('https://api.wazirx.com/api/v2/tickers')
        const json_res = await response.json()
        let counter = 1
        let data = []
        for (idx in json_res) {
            if ( counter > 10 ) break
            delete json_res[idx]['quote_unit']
            delete json_res[idx]['high']
            delete json_res[idx]['low']
            delete json_res[idx]['type']
            delete json_res[idx]['open']
            delete json_res[idx]['at']
            data.push(json_res[idx])
            counter ++
        }
        const stocks = await Stock.insertMany(data)
        console.log(stocks)
        
        console.log(data)
        return res.redirect('/')
    }
}