import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendOption(value){
      this.sendAction('sendOption', value);
    },
    sendFilter(value){
      this.sendAction('sendFilter', value);
    }
  }
});
