import Ember from 'ember';

export default Ember.Component.extend({
  isOwner: Ember.computed('user', function(){
    return this.get('user').get('email') === this.get('currentUser').get('email');
  }),
  isSelected: false,
  hasApplied: Ember.computed('currentUser.applications.@each', function(){
    var post_id = this.get('post').id;
    var flag = false;
    this.get('currentUser').get('applications').forEach(function(application){
      if (application.get('post').get('id') === post_id){
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
      var self = this;
      var application = this.get('currentUser').get('applications').filter(function(application){
        return application.get('post').get('id') === self.get('post').id;
      })
      this.sendAction('sendUnapply', application[0]);
    },
    sendSolvr(params){
      params.post = this.get('post');
      this.sendAction('sendSolvr', params);
    }
  }
});
