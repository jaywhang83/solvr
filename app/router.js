import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('postboard');
  this.route('post', {path: 'post/:post_id'});
  this.route('admin');
  this.route('sign-up');
  this.route('sign-in');
});

export default Router;
