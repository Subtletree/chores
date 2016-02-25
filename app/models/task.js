import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  complete: DS.attr('boolean'),
  job: DS.belongsTo('job')
});
