import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bandwidth-lock-unlock', 'Integration | Component | bandwidth lock unlock', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bandwidth-lock-unlock}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bandwidth-lock-unlock}}
      template block text
    {{/bandwidth-lock-unlock}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
