import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service(),
  actions: {
    login() {
      // reset login error on each attempt
      this.set('loginError', false);
      const { identification, password } = this.getProperties( 'identification', 'password');
      const s = this.get('session');
      s.authenticate('authenticator:knockjwt', { identification, password }).catch((error) => {
        // If login fails, just set an error
        this.set('loginError', true);
      });

    },
    signout() {
      this.get('session').invalidate();
    }
  }
});
