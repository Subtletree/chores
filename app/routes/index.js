import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model() {
    var host = config.host || '';
    return this.store.findAll('job');
  }
});
