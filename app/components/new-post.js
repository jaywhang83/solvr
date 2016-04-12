import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false): this.set('isSelected', true);
    },
    submitForm(){
      var random = Math.floor(Math.random() * 100) +1;
      var params = {
        user: 'user' + random,
        title: this.get('title')? this.get('title'): 'title' + random,
        location: this.get('location')? this.get('location'): 'location' + random,
        reward: this.get('reward')? this.get('reward'): random,
        description: this.get('description')? this.get('description'): 'description' + random,
        isOpen: true,
        date: new Date()
      };

      this.sendAction('sendPost', params);
    }
  }
});
