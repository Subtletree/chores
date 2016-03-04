import Ember from 'ember';

export default Ember.Service.extend({
  init() {
    this._super;
    var _this = this;
    const WHITELIST = ['203.97.99.8'];
    $.get("http://ipinfo.io", function(response) {
      console.log(response.ip);
      if ($.inArray(response.ip, WHITELIST) == -1) {
        _this.set('blocked', true)
      }
    }, "jsonp")
  },
  blocked: false
});
