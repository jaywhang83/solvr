import Ember from 'ember';

export default Ember.Component.extend({
  sortedList: Ember.computed.sort('posts', 'filter'),
  filter: ['reward:desc'],
  filteredList: Ember.computed('sortedList', function(){
    return this.get('sortedList').filter(function(post, index){
      return index < 5;
    });
  })
});
