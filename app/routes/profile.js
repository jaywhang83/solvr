import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      user: this.store.findAll('user').then(function(results){
        return results.filter(function(user){
          return user.get('email') === params.email;
        })
      })
    });
  },
  actions: {
    savePost(params){
      console.log(params);
      var newPost = this.store.createRecord('post', params);
      var user = params.user;
      console.log(user);
      user.get('posts').addObject(newPost);
      newPost.save().then(function(){
        console.log(user.get('posts'));
        return user.save();
      });
      this.transitionTo('postboard');
    }
  }
});
