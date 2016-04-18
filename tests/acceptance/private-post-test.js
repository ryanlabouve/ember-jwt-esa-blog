import { test } from 'qunit';
import moduleForAcceptance from 'ember-jwt-esa-blog/tests/helpers/module-for-acceptance';

import {
  invalidateSession
} from 'ember-jwt-esa-blog/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | private post');

test('see private posts when authed', function(assert) {
  server.createList('private-post', 5);
  invalidateSession(this.application);
  // const c = currentSession(this.application);
  // c.set('data.testToken', 'hotdog')
  // debugger;

  visit('/');
  fillIn('.username-field', 'lester@test.com');
  fillIn('.password-field', 'test1234');
  click('.login-btn');

  andThen(() => {
    assert.equal(
      find('.private-post').length,
      5,
      'we can see the right number of private posts when we are logged in'
    );
  });
});

test('see no private posts not authed', function(assert) {
  server.createList('private-post', 5);
  invalidateSession(this.application);
  andThen(() => {
    assert.equal(
      find('.private-post').length,
      0,
      'we can\'t see any private posts when we are not logged in'
    );
  });
});
