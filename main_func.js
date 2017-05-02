function main_func(keyID, vCode) {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.eveonline.com/char/MarketOrders.xml.aspx?keyID=" + keyID + "&vCode=" + vCode, false);

    xhr.send();

    var xmlDocument = xhr.responseXML;
    var data = xmlDocument.getElementsByTagName("row");

    document.getElementById('mainContent').innerHTML = "";

    var stations = [];
    var items = [];
    var prices = [];
    var names = [];
    var myPrice = {};
    var orderType = [];  // Buy or sell order
   
        for (i = 0; i < data.length; i++) {

            // orderState:  0 = open/active 1 = closed, 2 = expired, 3 = cancelled, 4 = pending, 5 = character deleted

            if (data[i].getAttribute('orderState') == "2") {
                var orderID = data[i].getAttribute('orderID');

                stations[i] = data[i].getAttribute('stationID');
                console.log('item: ' + i + ' debug: 1 - stationID: ' + stations[i] + '<br>');

                items[i] = data[i].getAttribute('typeID');
                
                console.log('item: ' + i + ' debug: 2 - typeID: ' + items[i] + '<br>');

                orderType[i] = data[i].getAttribute('bid');
                if (orderType[i] != 1) {
                    console.log('item: ' + i + ' debug 5 - buy or sell: Buy');
                    orderType[i] = 'Buy';
                } else {
                    console.log('item: ' + i + ' debug 5 - buy or sell: Sell')
                    orderType[i] = 'Sell';
                }

                myPrice[items[i]] = data[i].getAttribute('price');
                

            }
            
        
        }

        items.sort();
        if (items.length > 0) {
            console.log('Preparing to get item names. items array: ' + items);
            names = get_item_name(items);
            console.log('Got these names into the names array: ' + names);
            console.log('Preparing to get prices: items array: ' + items);
            prices = get_max_price(items);
            console.log('Got these prices from the prices array: ' + prices);
        } else {
            console.log('No items found');
        }

        // Iterate through our item array and fill the prices array accordingly since eve-central
        // doesn't list multiple items more than once.
        for (i = 0; i < items.length; i++) {

            if (items[i] === items[i-1]) {
                prices.splice(i, 0, prices[i-1]);
            }
            
            
        }

        var priceList = item_price_list(items, prices);
        // console.log(priceList);

        for (i = 0; i < items.length; i++) {
            var item = items[i];
            var lowOrHigh = '';
            if (myPrice[item] > priceList[item]) {
                lowOrHigh = '<div style="background-color:#00aa00; color:#ffffff; width:500px">';
            } else {
                lowOrHigh = '<div style="background-color:#aa0000; color:#ffffff; width:500px">';
            }
            
            $('#mainContent').append(lowOrHigh + '<b>' + orderType[i] + ' order<br><hr><br>');
            $('#mainContent').append(lowOrHigh + '<b>' +  'stationID: ' + '</b>' +  stations[i] + '<br>');
            $('#mainContent').append(lowOrHigh + '<b>' +  'typeID: ' + '</b>' +  items[i] + '<br>');
            $('#mainContent').append(lowOrHigh + '<b>' +  'Item name: ' + '</b>' +  names[i] + '<br>');
            $('#mainContent').append(lowOrHigh + '<b>' +  'Market price: ' + '</b>' +  priceList[item] + '<br>');
            $('#mainContent').append(lowOrHigh + '<b>' +  'My price: ' + '</b>' +  myPrice[item] + '</div><br><br>');
        }
}