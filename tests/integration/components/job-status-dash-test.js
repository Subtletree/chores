import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('job-status-dash', 'Integration | Component | job status dash', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{job-status-dash}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#job-status-dash}}
      template block text
    {{/job-status-dash}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
