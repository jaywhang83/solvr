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
      }),
      applications: this.store.findAll('application')
    });
  },
  actions: {
    saveApplication(params){
      var newApplication = this.store.createRecord('application', params);
      var user = params.user;
      var post = params.post;
      newApplication.save().then(function(){
        user.get('applications').addObject(newApplication);
        user.save();
        post.get('applications').addObject(newApplication);
        post.save();
      });
    },
    deleteApplication(application){
      application.destroyRecord();
    },
    saveSolvr(params){
      var solvr = params.solvr;
      var post = params.post;
      post.get('applications').forEach(function(application){
          post.get('applications').removeObject(application);
          console.log(application.get('user').get('applications'));
          application.get('user').get('applications').removeObject(application);
          application.destroyRecord();
      });
      post.set('isOpen', false);
      post.set('solvr', solvr);
      post.save();
    }
  }
});
