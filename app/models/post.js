import Model from 'ember-data/model';

export default Model.extend({
  user: DS.belongsTo('user', {async: true}),
  title: DS.attr(),
  location: DS.attr(),
  reward: DS.attr(),
  date: DS.attr(),
  isOpen: DS.attr(),
  solvr: DS.attr()
});
