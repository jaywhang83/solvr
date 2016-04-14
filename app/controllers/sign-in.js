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
        controller.set('email', null);
        controller.set('password', null);
        controller.transitionToRoute('postboard');
      }, (error) => {
        console.log('error');
      });
    }
  }
});
