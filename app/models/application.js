import Model from 'ember-data/model';

export default Model.extend({
  user: DS.belongsTo('user', {async: true}),
  msg: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
