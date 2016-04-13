import Ember from 'ember';

export default Ember.Component.extend({
  gmaps: Ember.inject.service('gmaps'),
  index: 5,
  sortedList: Ember.computed.sort('posts', 'filter'),
  filter: ['date:desc'],
  filteredList: Ember.computed('sortedList', 'index', function(){
    var limit = this.get('index');
    return this.get('sortedList').filter(function(post, index){
      return index < limit;
    });
  }),
  actions: {
    changeSorting(value){
      if(value === 'all'){
      this.set('index', this.get('posts').get('length'));
      }
      else{
        this.set('index', value);
      }
      this.get('gmaps').clearMarkers();
      this.get('gmaps').reloadMarkers(this.get('filteredList'));
    },
    changeFilter(value){
      if(value === 'date'){
        this.set('filter', ['date:desc']);
      }
      if(value === 'reward'){
        this.set('filter', ['reward:desc']);
      }
    }
  }
});
