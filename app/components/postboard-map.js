import Ember from 'ember';

export default Ember.Component.extend({
  gmaps: Ember.inject.service('gmaps'),
  didInsertElement(){
    var userAddress = JSON.parse(this.get('user').get('latlng'));
    var center = this.get('gmaps').getCenter(userAddress.lat, userAddress.lng)
    var center1 = this.get('gmaps').getCenter(45.523, -122.67); //get current user map
    var self = this;
    var posts = this.get('posts');
    var container = document.getElementById('postboard-map');
    var options = {
      center: center,
      zoom: 10
    };
    var map = this.get('gmaps').createMap(container, options);
    self.get('gmaps').set('postboard-map', map);
    self.get('gmaps').reloadMarkers(posts);
  }
});
