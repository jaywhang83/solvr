import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      posts: this.store.findAll('post'),
    });
  },
  actions: {
    savePost(params){
      var newPost = this.store.createRecord('post', params);
      console.log(newPost);
      newPost.save();
      this.transitionTo('postboard');
    }
  }
});
