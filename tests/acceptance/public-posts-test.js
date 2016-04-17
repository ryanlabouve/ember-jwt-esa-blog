import { test } from 'qunit';
import moduleForAcceptance from 'ember-jwt-esa-blog/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | public posts');

test('public posts on /', function(assert) {
  visit('/');

  // Here is where we are telling mirage
  // to stick 5 public posts, generated from
  // our blueprint, into the public-post table
  // availible from our api
  server.createList('public-post', 5);

  // the server variable is something that
  // mirage gives us.

  andThen(function() {
    // We're saying that the css class
    // `.public-post` woudl be used on a
    // display contianer for any public posts,
    // and based on our `server.createList`,
    // we exepct there should be 5
    assert.equal(
      find('.public-post').length,
      5,
      'We can see all the public posts on /'
    );
  });
});
