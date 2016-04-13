import Model from 'ember-data/model';


export default Model.extend({
  user: DS.attr(),
  title: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  reward: DS.attr(),
  date: DS.attr(),
  isOpen: DS.attr(),
  latlng: DS.attr()
  // solvr: DS.attr()
});
