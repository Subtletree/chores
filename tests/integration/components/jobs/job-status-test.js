import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('jobs/job-status', 'Integration | Component | jobs/job status', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{jobs/job-status}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#jobs/job-status}}
      template block text
    {{/jobs/job-status}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
