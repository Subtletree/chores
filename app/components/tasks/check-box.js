import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  task: null, // passed-in
  actions: {
    changeTask: function(task) {
      task.set('complete', !task.get('complete'));
      task.save();
    }
  }
});
