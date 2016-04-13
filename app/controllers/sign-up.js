import Ember from 'ember';

export default Ember.Controller.extend({
  signUp: false, 
  firebase: Ember.inject.service(),
  actions: {
    signUp(){
      let controller = this;
      var params = {
        email: this.get('email') || '',
        firstName: this.get('firstName') || '',
        lastName: this.get('lastName') || '',
        address: this.get('address') || '',
        phoneNumber: this.get('phoneNumber') || '',
        skills: this.get('skills') || ''
      }
      var newUser = this.store.createRecord('user', params);
      params.password = this.get('password' || '');
      newUser.save();
      this.get('firebase').createUser(params, (error, data) => {
        if(error) {
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
