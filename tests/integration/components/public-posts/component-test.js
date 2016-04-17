import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('public-posts', 'Integration | Component | public posts', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{public-posts}}`);
  assert.equal(this.$('.public-posts-component').length, 1);
});
