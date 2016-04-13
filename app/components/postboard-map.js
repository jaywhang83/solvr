import Ember from 'ember';

export default Ember.Component.extend({
  gmaps: Ember.inject.service('gmaps'),
  didInsertElement(){
    var self = this;
    var posts = this.get('posts');
    var container = document.getElementById('postboard-map');
    var options = {
      center: this.get('gmaps').getCenter(45.523, -122.67),
      zoom: 12
    };
    var map = this.get('gmaps').createMap(container, options);
    self.get('gmaps').set('postboard-map', map);
    self.get('gmaps').reloadMarkers(posts);
  }
});
