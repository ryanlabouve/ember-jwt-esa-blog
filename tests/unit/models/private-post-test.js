import { moduleForModel, test } from 'ember-qunit';

moduleForModel('private-post', 'Unit | Model | private post', {
  // Specify the other units that are required for this test.
  needs: []
});

test('has correct attributes', function(assert) {
  let model = this.subject();
  const actualAttributes = Object.keys(model.toJSON());

  const correctAttributes = [
    'title',
    'body',
    'createdAt'
  ];

  assert.equal(
    actualAttributes.length,
    correctAttributes.length,
    `We are expecting ${correctAttributes.lenght} attributes, and have found ${actualAttributes.length}`
  );

  actualAttributes.forEach((actualKey) => {
    assert.equal(
      correctAttributes.indexOf(actualKey) > -1,
      true,
      `We are expecting ${actualKey} to be in the list of correctAttributes`
    );
  });
});
