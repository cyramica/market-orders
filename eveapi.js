function getItemName(name) {

    var xhrItemName = new XMLHttpRequest();
    xhrItemName.open("GET", "https://api.eveonline.com/eve/TypeName.xml.aspx?ids=" + name , false);
    xhrItemName.send();
   
 //   xmlItemName = xhrItemName.responseXML;
 //   var itemData = xmlItemName.getElementsByTagName("row");
 //   return itemData[0].getAttribute('typeName');
}