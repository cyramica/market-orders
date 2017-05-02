function item_price_list(items, prices) {
    
    // var buildJson = '{"market" : [';

    // for (i = 0; i < items.length; i++) {
        
    //     if (buildJson.length === 13) {
    //         buildJson += '{"' + items[i] + '":"' +  prices[i] + '"}'
    //     } else {
    //         buildJson += ', {"' + items[i] + '":"' +  prices[i] + '"}'
    //     }
    // }

    // buildJson += ' ]}';
    
    // return JSON.parse(buildJson);

    var priceList = {};

    for (i = 0; i < items.length; i++) {
        item = items[i];
        price = prices[i]
        if (priceList[item] === undefined) {
            priceList[item] = price;
            console.log('debugger: ' + priceList[item]);
        }
    }
    console.log('DEBUGGER: ' + priceList)
    return priceList;
}