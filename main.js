function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 39.75,
            lng: -105.00
        },
        zoom: 15,
        // Map Type:
        // mapTypeId: google.maps.MapTypeId.SATELLITE
    });

}

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }
//
// function showPosition(position) {
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
//     map.setCenter(new google.maps.LatLng(lat, lng));
// }
//
//
// var options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0
// };
//
// function success(pos) {
//     var crd = pos.coords;
//
//     console.log('Your current position is:');
//     console.log('Latitude : ' + crd.latitude);
//     console.log('Longitude: ' + crd.longitude);
//     console.log('More or less ' + crd.accuracy + ' meters.');
// };
//
// function error(err) {
//     console.warn('ERROR(' + err.code + '): ' + err.message);
// };
//
// navigator.geolocation.getCurrentPosition(success, error, options);
