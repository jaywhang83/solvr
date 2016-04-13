import Ember from 'ember';

export default Ember.Component.extend({
  updateProfileForm: false;
  actions: {
    updateProfileForm() {
      this.set('updateProfileForm', true);
    },
    update(profile) {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        address: this.get('address'),
        phoneNumber: this.get('phoneNumber'),
        skills: this.get('skills'),
      };
      this.set('updateProfileForm', false);
      this.sendAction('update', profile, params);
    }
  }
});
