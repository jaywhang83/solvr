import Ember from 'ember';

export default Ember.Component.extend({
  updateProfileForm: false,
  actions: {
    updateProfileForm() {
      this.set('updateProfileForm', true);
    },
    update(user) {
      var params = {
        email: this.get('email'),
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        address: this.get('address'),
        phoneNumber: this.get('phoneNumber'),
        skills: this.get('skills'),

      };
      this.set('updateProfileForm', false);
      this.sendAction('update', user, params);
    }
  }
});
