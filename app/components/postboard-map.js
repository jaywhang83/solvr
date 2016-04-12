import Ember from 'ember';

export default Ember.Component.extend({
  gmaps: Ember.inject.service('gmaps'),
  didInsertElement(){
    var container = document.getElementById('postboard-map');
    var options = {
      center: this.get('gmaps').getCenter(45.523, -122.67),
      zoom: 12
    };
    this.get('gmaps').createMap(container, options);
  }
});
