import Ember from 'ember';

export function dateFormat(params) {
  return moment(params[0]).format('lll');
}

export default Ember.Helper.helper(dateFormat);
