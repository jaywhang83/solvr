import Model from 'ember-data/model';


export default Model.extend({
  user: DS.belongsTo('user',{ async : true }),
  title: DS.attr(),
  description: DS.attr(),
  location: DS.attr(),
  reward: DS.attr(),
  date: DS.attr(),
  isOpen: DS.attr(),
  latlng: DS.attr(),
  distance: 0
  // solvr: DS.attr()
});
