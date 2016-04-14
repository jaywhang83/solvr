import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    var session = this.get('session');
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      user: this.store.findAll('user').then(function(results){
        return results.filter(function(user){
          return user.get('email') === session.get('currentUser').email;
        });
      })
    });
  },
  actions: {
    saveApplication(params){
      var newApplication = this.store.createRecord('application', params);
      var user = params.user;
      console.log(user.toString());
      var post = params.post;
      newApplication.save().then(function(){
        user.get('applications').addObject(newApplication);
        user.save();
        post.get('applications').addObject(newApplication);
        post.save();
      });
    }
  }
});
