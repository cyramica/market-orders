function get_max_price(items) {

    var xhr2 = new XMLHttpRequest();
    var typeIDs = "";
    var maxItemPrice = [];
    for (i = 0; i < items.length; i++) {
        typeIDs += "&typeid=" + items[i];
        console.log('get_max_price typeIDs: ' + typeIDs);
    }

    xhr2.open("GET", "http://api.eve-central.com/api/marketstat/json?" + typeIDs, false);
    console.log('maxPrice opening: http://api.eve-central.com/api/marketstat/json?' + typeIDs )
    xhr2.setRequestHeader('Content-Type', 'text/plain');
    xhr2.send();

    var data = JSON.parse(xhr2.response);
    for (i = 0; i < data.length; i++) {
        maxItemPrice[i] = data[i].buy.max;
    }
    return maxItemPrice;

}