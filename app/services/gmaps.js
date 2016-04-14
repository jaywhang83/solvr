import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  geocoder: new google.maps.Geocoder(),
  infoWindow: new google.maps.InfoWindow(),
  createMap(container, options){
    return new this.googleMaps.Map(container, options);
  },
  getCenter(lat, lng){
    return new this.googleMaps.LatLng(lat, lng);
  },
  geocodeAddress(address){
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject){
      self.geocoder.geocode({'address': address}, function(results, status) {
        if(status === google.maps.GeocoderStatus.OK){
          resolve(results[0].geometry.location);
        }
        else {
          reject(alert('Geocode was not successful for the following reason: ' + status));
        }
      });
    });
  },
  createMarker(map, position, post){
    var marker = new google.maps.Marker({
      map: map,
      position: position
    });
    var self = this;
    marker.addListener('click', function() {
    self.get('infoWindow').setContent(post.get('location'));
    this.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function() {
      marker.setAnimation(false);
    }, 2050);
    self.get('infoWindow').open(map, marker);
  });
    return marker;
  },
  clearMarkers(){
   this.get('postboard-markers').forEach(function(marker){
     marker.setMap(null);
   })
 },
 reloadMarkers(posts){
   var self = this;
   var map = this.get('postboard-map');
   var markers = [];
   posts.forEach(function(post){
     var address = JSON.parse(post.get('latlng'));
       var newMarker = self.createMarker(map, address, post);
       markers.push(newMarker);
     });
   self.set('postboard-markers', markers);
 },
 getDistance(address1, address2){
   function toRad(x) {
     return x * Math.PI / 180;
  }

    var lat2 = address2.lat;
    var lon2 = address2.lng;
    var lat1 = address1.lat;
    var lon1 = address1.lng;

    var R = 3961;
    var x1 = lat2-lat1;
    var dLat = toRad(x1);
    var x2 = lon2-lon1;
    var dLon = toRad(x2);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d;
 }
});
