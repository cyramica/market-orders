function item_price_list(items, prices) {

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