import Ember from 'ember';

export default Ember.Component.extend({
  isOwner: Ember.computed('user', function(){
    return this.get('user').get('email') === this.get('currentUser').get('email');
  }),
  isSelected: false,
  hasApplied: Ember.computed('user.applications.@each', function(){
    var post_id = this.get('post').id;
    var flag = false;
    console.log(this.get('user').get('applications').get('length'));
    this.get('user').get('applications').forEach(function(application){
      if (application.get('post').get('id') === post_id){
        console.log('hello');
        flag = true;
      }
    });
    return flag;
  }),
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
      this.set('isSelected', false);
    },
    sendUnapply(){
      this.sendAction('sendUnapply');
    }
  }
});
