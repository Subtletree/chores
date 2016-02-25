import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  complete: DS.attr('boolean'),
  active: DS.attr('boolean'),
  tasks: DS.hasMany('task'),
  user: DS.belongsTo('user'),
  complete: Ember.computed('this.tasks.@each.complete', function() {
    var tasks = this.get('tasks');
    return tasks.filterBy('complete', false).get('length') === 0;
  })

});
