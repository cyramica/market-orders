function get_item_name(items) {

    var xhrItemName = new XMLHttpRequest();
    var typeIDs = "";
    for (i = 0; i < items.length; i++) {
        typeIDs += "&ids=" + items[i]
        console.log('get_item_name typeIDs: ' + typeIDs);
    }
    xhrItemName.open("GET", "https://api.eveonline.com/eve/TypeName.xml.aspx?" + typeIDs , false);
    xhrItemName.send();
   
    var xmlItemName = xhrItemName.responseXML;
    var itemData = xmlItemName.getElementsByTagName("row");
    var names = [];
    for (i = 0; i < itemData.length; i++) {
        names[i] = itemData[i].getAttribute('typeName');
    }
    return names;
}