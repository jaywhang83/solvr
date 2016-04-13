import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),
  actions: {
    signUp(){
      let controller = this;
      var params = {
        email: this.get('email') || ''
      }
      var newUser = this.store.createRecord('profile', params);
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