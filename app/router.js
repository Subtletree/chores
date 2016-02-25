import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');

  this.route('jobs', function() {
    this.route('show', {
      path: ':job_id'
    }, function() {
      this.route('tasks', {resetNamespace: true}, function() {

      });
    });
  });
});

export default Router;
