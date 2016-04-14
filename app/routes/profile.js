import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    var session = this.get('session');
    return Ember.RSVP.hash({
      user: this.store.findAll('user').then(function(results){
        return results.filter(function(user){
          return user.get('email') === session.get('currentUser').email;
        })
      })
    });
  },
  actions: {
    savePost(params){
      var newPost = this.store.createRecord('post', params);
      var user = params.user;
      user.get('posts').addObject(newPost);
      newPost.save().then(function(){
        return user.save();
      });
      this.transitionTo('postboard');
    },
    update(user, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          user.set(key,params[key]);
        }
      });
      user.save();
      this.transitionTo('index');
    },
  }
});
