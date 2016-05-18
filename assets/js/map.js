$(document).ready(function() {
var marker;
var geocoder = new google.maps.Geocoder();
var myLatLng = new google.maps.LatLng(51.0486, -114.0708);
var mapOptions = {
    center: myLatLng,
    zoom: 10,
    draggable: false,
    zoomControl: false,
    scaleControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false

};
var map = new google.maps.Map($("#map").get(0), mapOptions);
var address = "2500 University Dr NW, Calgary, AB T2N 1N4";
geocoder.geocode({address: address}, function(results, status){
    if (status == google.maps.GeocoderStatus.OK) {
        // Add marker
        marker = new google.maps.Marker({
            position: results [0].geometry.location,
            map: map
        });
        //reset center of map
        map.setCenter(results[0].geometry.location);
        map.setZoom(12);

        //add info window
        var infoWindow = new google.maps.InfoWindow({
            content: "<b>" + address + "</b>"
        });
        //Show Info window
        infoWindow.open(map, marker);
    }else {
        alert(status);
    }
    });

    if (navigator.geolocaton) {
        getCurrentLocation();
    }
    else{
        alert("Geolocation API not available in this browser");
    }

});
    function getCurrentLocation() {
//use HTML 5 Geoloacation API to get Current position
navigator.geolocation.getCurrentLocation(successCallback, errorCallback, { timeout: 10000});
}

    function successCallback(result) {
        var lat = result.coords.latitude;
        var lng = result.coords.longitude;
        var myLatLng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            center: myLatLng,
            zoom: 10,
            draggable: false,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            mapTypeControl: false

        };
        var map = new google.maps.Map($("#map").get(0), mapOptions);
    
    //add marker
    new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "My Current Location"

    })
}

    function errorCallback(error){
        switch(error.code){
        case error.PERMISSION_DENIED:
            alert("User location permission denied");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("User locaiton unavailable.");
            break;
        case error.PERMISSION_DENIED_TIMEOUT:
            alert("User took too long to grant/deny permission.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An Unknow Error Occurred.");
            break;
        default:
            alert("An Unknown Error Occurred.");
            break;
        }
    }
