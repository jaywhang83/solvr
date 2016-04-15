import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    sendSolvr(){
      var params = {
        solvr: this.get('solvr')
      }
      this.sendAction('sendSolvr', params);
    }
  }
});
