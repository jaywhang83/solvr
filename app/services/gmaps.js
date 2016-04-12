import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  createMap(container, options){
    return new this.googleMaps.Map(container, options);
  },
  getCenter(lat, lng){
    return new this.googleMaps.LatLng(lat, lng);
  }
});
