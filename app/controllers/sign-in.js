import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn(provider) {
      let controller = this;
      var email = this.get('email');
      this.get('session').open('firebase', {
        provider: provider,
        email: email || '',
        password: this.get('password') || '',
      }).then(() => {
        debugger;
        console.log("email", email);
        controller.set('email', null);
        controller.set('password', null);
        controller.transitionToRoute('profile', email);
      }, (error) => {
        console.log(error);
      });
    }
  }
});
