import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showUnlockSuccess(message) {
      this.set('unlockedMessage', message);
    }
  }
});
