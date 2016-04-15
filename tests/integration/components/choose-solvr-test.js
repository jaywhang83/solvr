import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('choose-solvr', 'Integration | Component | choose solvr', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{choose-solvr}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#choose-solvr}}
      template block text
    {{/choose-solvr}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
