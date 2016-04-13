import Ember from 'ember';

export default Ember.Component.extend({
  radius: 50,
  gmaps: Ember.inject.service('gmaps'),
  sortedList: Ember.computed.sort('posts', 'filter'),
  filter: ['date:desc'],
  filteredList: Ember.computed('sortedList','radius', function(){
    var radius = this.get('radius');
    var self = this;
    return this.get('sortedList').filter(function(post){
      var address = JSON.parse(post.get('latlng'));
      var distance = self.get('gmaps').getDistance(address, address);
      return distance <= radius;
    });
  }),
  actions: {
    changeFilter(value){
      if(value === 'date'){
        this.set('filter', ['date:desc']);
      }
      if(value === 'reward'){
        this.set('filter', ['reward:desc']);
      }
    },
    changeRadius(value){
      this.set('radius', value);
      this.get('gmaps').clearMarkers();
      this.get('gmaps').reloadMarkers(this.get('filteredList'));
    }
  }
});
