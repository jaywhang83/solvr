import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      var user_id = this.get('session').get('uid');
      this.transitionTo('profile', user_id);
    }
  }
});
