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
    this.geocoder.geocode({'address': address}, function(results, status) {
      if(status === google.maps.GeocoderStatus.OK){
        var options = {
          center: results[0].geometry.location,
          zoom: 14
        };
        self.createMap(container, options);
      }
      else {
         alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
});
