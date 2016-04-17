import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    login() {
      return true;
    },
    signout() {
      return true;
    }
  }
});
