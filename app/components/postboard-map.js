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
    posts.forEach(function(post){
      var address = JSON.parse(post.get('latlng'));
        self.get('gmaps').createMarker(map, address);
      });
  }
});
