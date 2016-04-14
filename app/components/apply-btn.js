import Ember from 'ember';

export default Ember.Component.extend({
  isOwner: Ember.computed('user', function(){
    return this.get('user').get('email') === this.get('currentUser').get('email');
  }),
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false) : this.set('isSelected', true);
    },
    sendApplication(){
      var params = {
        msg: this.get('msg'),
        user: this.get('currentUser'),
        post: this.get('post')
      };
      this.sendAction('sendApplication', params);
    }
  }
});
