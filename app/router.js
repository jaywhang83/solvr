import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('profile', {path: '/user/:user_email'});
  this.route('sign-up');
  this.route('sign-in');
  this.route('new-profile');
});

export default Router;
