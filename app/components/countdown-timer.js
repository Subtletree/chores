import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'h2',
  classNames: ['timer'],
  endtime: moment().endOf('isoweek').toDate(),
  _seconds: 0,
  time_without_seconds: '',
  init() {
    var _this = this;
    this._super();
    this.updateClock();
    setInterval(function() { _this.updateClock() }, 1000);
  },
  updateClock() {
    if (this._seconds < 2) {
      var t = this.endtime - new Date();
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      function pluralise(number,name) {
        if (number === 0) {
          return name == 'second' ? (number + ' ' + name + 's ') : '';
        } else if ( number === 1) {
          return number + ' ' + name + ' ';
        } else {
          return number + ' ' + name + 's ';
        }
      }
      this.time_without_seconds = pluralise(days, 'day') + pluralise(hours, 'hour') + pluralise(minutes, 'minute') + 'and ';
      this.set('timeLeft', this.time_without_seconds + pluralise(seconds, 'second'));
      this._seconds = seconds - 1;
    } else {
      this.set('timeLeft', this.time_without_seconds + this._seconds + ' seconds');
      this._seconds = this._seconds - 1;
    }
    if (t <= 0) {
      this.set('timeLeft', 'Assigning new jobs...');

      // Reload page in 5 seconds after new jobs have been assigned on the server
      window.setTimeout(function() {
        window.location.reload(true);
      }, 5000);
    }
  }
});
