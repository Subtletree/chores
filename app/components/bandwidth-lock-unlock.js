import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['bandwidth-unlock'],
  actions: {
    unlock() {
      this.set('errorText', false);
      var _this = this;
      $.ajax({
        data: { lock_key: this.lock_key},
        method: 'POST',
        url: 'api/bandwidth_unlock/' + this.bl.id
      }).done(function() {
        console.log( "success" );
        _this.sendAction('showUnlockSuccess', (_this.get('bl.user.name') + "'s bandwidth has been unlocked!"));
        _this.bl.unloadRecord();
      })
      .fail(function(e) {
        _this.set('errorText', e.responseText)
      });
    }
  }
});
