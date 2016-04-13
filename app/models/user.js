import Model from 'ember-data/model';

export default Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  posts: DS.hasMany('post', {async: true}),
  email: DS.attr(),
  address: DS.attr(),
  phoneNumber: DS.attr(),
  skills: DS.attr(),
  // feedBack: DS.()
});
