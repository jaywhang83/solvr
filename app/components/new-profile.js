import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    addProfile() {
      var params = {
        firstName: this.get('firstName'),
        lastName: this.get('lastName'),
        address: this.get('address'),
        email: this.get('email'),
        phoneNumber: this.get('phoneNumber'),
        skills: this.get('skills'),
        feedBack: ""
      }
      this.sendAction('saveProfile', params);
      this.set('firstName', "");
      this.set('lastName', "");
      this.set('address', "");
      this.set('email', "");
      this.set('phoneNumber', "");
      this.set('skills', "");
    }
  }
});
