import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  geocoder: new google.maps.Geocoder(),
  createMap(container, options){
    return new this.googleMaps.Map(container, options);
  },
  getCenter(lat, lng){
    return new this.googleMaps.LatLng(lat, lng);
  },
  geocodeAddress(address, container){
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
  createMarker(map, position){
    var marker = new google.maps.Marker({
      map: map,
      position: position
    });
    return marker;
  }
});
