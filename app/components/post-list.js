import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super();
    var userAddress = JSON.parse(this.get('user').get('latlng'));
    var self = this;
    this.get('posts').forEach(function(post){
      var address = JSON.parse(post.get('latlng'));
      var distance = parseInt(self.get('gmaps').getDistance(address, userAddress).toFixed(1));
      console.log(typeof distance);
      post.set('distance', distance);
    })
  },
  radius: 50,
  gmaps: Ember.inject.service('gmaps'),
  sortedList: Ember.computed.sort('posts', 'filter'),
  filter: ['date:desc'],
  filteredList: Ember.computed('sortedList','radius', function(){
    var radius = this.get('radius');
    var self = this;
    return this.get('sortedList').filter(function(post){
      return post.get('distance') <= radius;
    });
  }),
  actions: {
    changeFilter(value){
      if(value === 'date'){
        this.set('filter', ['date:desc']);
          console.log(this.get('sortedList'));
      }
      if(value === 'reward'){
        this.set('filter', ['reward:desc']);
          console.log(this.get('sortedList'));
      }
      if(value === 'distance'){
        this.set('filter', ['distance:asc']);
      }
    },
    changeRadius(value){
      this.set('radius', value);
      this.get('gmaps').clearMarkers();
      this.get('gmaps').reloadMarkers(this.get('filteredList'));
    }
  }
});
