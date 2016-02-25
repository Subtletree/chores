import Ember from 'ember';

export default Ember.Component.extend({
  //tagName: 'div', div by default
  classNames: ['job-status'],
  classNameBindings: ['job.complete'],
  job: null // passed-in

});
