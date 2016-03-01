import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  task: null, // passed-in
  isLoading: false,
  saved: false,
  actions: {
    changeTask: function(task) {
      var _this = this;
    //  this.set('isLoading', true);
      task.save().then(function(model){
        task.set('complete', !task.get('complete'));
        _this.set('saved', true);
        window.setTimeout(function() {
          _this.set('saved', false);
        }, 500);
      })
    }
  }
});
