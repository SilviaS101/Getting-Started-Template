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


});
