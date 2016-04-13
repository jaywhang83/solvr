import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveProfile(params) {
      var newProfile = this.store.createRecord('user', params);
      newProfile.save();
      this.transitionTo('profile');
    }
  }
});
