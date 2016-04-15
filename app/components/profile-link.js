import Ember from 'ember';

export default Ember.Component.extend({
  isOwner: Ember.computed('user', function(){
    return this.get('user').get('email') === this.get('currentUser').get('email');
  }),
});
