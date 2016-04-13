import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      user: this.store.query('profile', {
        orderBy: 'email',
        equalTo: params.email
      }).then(function(results){
   return results.get('firstObject');
 })
    });
  }
});
