import Ember from 'ember';

export default Ember.Component.extend({
  update(user, params) {
      this.sendAction('update', user, params);
    },
});
