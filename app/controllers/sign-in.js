import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signIn(provider) {
      let controller = this;
      this.get('session').open('firebase', {
        provider: provider,
        email: this.get('email') || '',
        password: this.get('password') || '',
      }).then(() => {
        debugger;
        controller.set('email', null);
        controller.set('password', null);
        var session = this.get('session')
        controller.transitionToRoute('profile');
      }, (error) => {
        console.log(error);
      });
    }
  }
});
