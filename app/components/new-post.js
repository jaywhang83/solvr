import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: false,
  actions: {
    showForm(){
      this.get('isSelected')? this.set('isSelected', false): this.set('isSelected', true);
    },
    submitForm(){
      var params = {
        title: this.get('title'),
        location: this.get('location'),
        reward: this.get('reward'),
        description: this.get('description'),
        isOpen: true,
        date: new Date()
      };
      console.log(params);
      this.sendAction('sendPost', params);
    }
  }
});
