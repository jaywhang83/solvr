import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      var email = this.get('session').get('currentUser').email;
      this.transitionTo('profile', email);
    }
  }
});
