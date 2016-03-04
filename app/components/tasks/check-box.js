import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  task: null, // passed-in
  saved: false,
  ip_address: Ember.inject.service(),
  actions: {
    changeTask: function(task) {
      var _this = this;
      task.set('complete', !task.get('complete'));
      task.save().then(function(model){
        _this.set('saved', true);
        window.setTimeout(function() {
          _this.set('saved', false);
        }, 500);
      })
    }
  }
});
