import Ember from 'ember';

const { computed, get } = Ember;

export default Ember.Component.extend({
  session: Ember.inject.service(),
  store: Ember.inject.service(),

  classNames: ['list-group', 'private-posts-component'],

  posts: computed('session.isAuthenticated', function() {
    const authed = get(this, 'session.isAuthenticated');
    const store = get(this, 'store');
    if ( authed ) {
      return store.findAll('privatePost');
    } else {
      return undefined;
    }
  })
});
