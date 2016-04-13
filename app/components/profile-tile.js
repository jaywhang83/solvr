import Ember from 'ember';

export default Ember.Component.extend({
  updateProfileForm: false;
  actions: {
    update(profile, params) {
      this.sendAction('update', profile, params);
    }
  }
});
