import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('postboard');
  this.authenticatedRoute('post', {path: 'post/:post_id'});
  this.route('sign-up');
  this.route('sign-in');
  this.authenticatedRoute('profile', {path: 'profile/:user_id'});
});

export default Router;
