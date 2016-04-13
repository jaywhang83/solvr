import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {
    signUp() {
      let controller = this;
      var params = {
        email: this.get('email') || '',
        firstName: this.get('firstName') || '',
        lastName: this.get('lastName') || '',
        address: this.get('address') || '',
        phoneNumber: this.get('phoneNumber') || '',
        skills: this.get('skills') || ''
      }
      var newProfile = this.store.createRecord('user', params);
      console.log(params.firstName);
      newProfile.save();
      var signUpParams = {
        email: this.get('email') || '',
        password: this.get('password') || ''
      }
      this.get('firebase').createUser(signUpParams, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          controller.set('email', null);
          controller.set('password', null);
          controller.transitionToRoute('sign-in');
        }
      });
    }
  }
});


// saveProfile(params) {
//   var newProfile = this.store.createRecord('user', params);
//   newProfile.save();
//   this.transitionTo('profile');
// }
