import Model from 'ember-data/model';


export default Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  reward: DS.attr(),
  date: DS.attr(),
  isOpen: DS.attr(),
  latlng: DS.attr(),
  distance: Ember.computed('reward', function(){
    console.log('hello');
  })
  // solvr: DS.attr()
});
