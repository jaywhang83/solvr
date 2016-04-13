import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendFilter(value){
      this.sendAction('sendFilter', value);
    },
    sendRadius(value){
      this.sendAction('sendRadius', value);
    }
  }
});
