import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('blog-post', 'Integration | Component | blog post', {
  integration: true
});

test('it renders', function(assert) {
  const title = 'Blog Post Title';
  this.set('title', title);

  const body = 'Now is the time for all good robots...';
  this.set('body', body);

  this.render(hbs`{{blog-post title=title body=body}}`);

  assert.equal(this.$('.blog-post-title').text().trim(), title);
  assert.equal(this.$('.blog-post-body').text().trim(), body);
});
