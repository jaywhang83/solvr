import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super();
    var userAddress = JSON.parse(this.get('user').get('latlng'));
    var self = this;
    this.get('posts').forEach(function(post){
      var address = JSON.parse(post.get('latlng'));
      var distance = parseInt(self.get('gmaps').getDistance(address, userAddress).toFixed(1));
      post.set('distance', distance);
    })
  },
  radius: 10000,
  gmaps: Ember.inject.service('gmaps'),
  sortedList: Ember.computed.sort('posts', 'filter'),
  filter: ['distance:asc'],
  filteredList: Ember.computed('sortedList','radius', function(){
    var user = this.get('user');
    var radius = this.get('radius');
    var self = this;
    return this.get('sortedList').filter(function(post){
      console.log(post.get('isOpen'));
      return post.get('distance') <= radius && user.get('email') !== post.get('user').get('email') && post.get('isOpen');
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
