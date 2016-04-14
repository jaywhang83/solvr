import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var session = this.get('session');
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
      user: this.store.findAll('user').then(function(results){
        return results.filter(function(user){
          return user.get('email') === session.get('currentUser').email;
        })
      })
    });
  },
  actions: {
    accessDenied() {
      this.transitionTo('/');
    }
  }
});
