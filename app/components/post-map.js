import Ember from 'ember';

export default Ember.Component.extend({
  gmaps: Ember.inject.service('gmaps'),
  didInsertElement(){
    var address = this.get('post').get('location');
    var container = document.getElementById('post-map');
    this.get('gmaps').geocodeAddress(address, container);
  }
});
