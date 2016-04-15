import Ember from 'ember';

export default Ember.Component.extend({
  gmaps: Ember.inject.service('gmaps'),
  didInsertElement(){
    var address = JSON.parse(this.get('post').get('latlng'));
    var container = document.getElementById('post-map');
      var options = {
        center: address,
        zoom: 15
      };
      var map = this.get('gmaps').createMap(container, options);
      this.get('gmaps').createMarker(map, address, this.get('post'));
  }
});
