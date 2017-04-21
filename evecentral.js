function eveCentral(typeID, stationID) {
    var xhrEC = new XMLHttpRequest();
    if ('withCredentials' in xhrEC) {
        xhrEC.open("GET", "http://api.eve-central.com/api/marketstat/json?typeid=" + typeID + "&stationid=" + stationID, true);
        if (xhrEC.status >= 200 && xhr.status < 400) {
            

            document.write("http://api.eve-central.com/api/marketstat/json?typeid=" + typeID + "&stationid=" + stationID);
            xhrEC.onreadystatechange = function() {
                if (xhrEC.readyState == 4) {
                    document.write("response: " + xhrEC.reponseXML + "<br>");
                    var ecJson = JSON.parse(xhrEC.responseXML);
                    return ecJson;
                    // return(ecJson);
                }
            }
        }
    }
    xhrEC.send(); 
}