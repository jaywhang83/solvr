import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('user');
  // }
  model: function() {
    return this.store.query('user', {
      orderBy: 'email',
      equalTo: 'session.currentUser.email'
    });
  }
});
