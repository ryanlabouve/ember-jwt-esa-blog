/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-jwt-esa-blog',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-cli-mirage'] = {
    enabled: false
  };

  ENV['simple-auth'] = {
    store: 'simple-auth-session-store:local-storage',
    authorizer: 'authorizer:knockjwt',
    crossOriginWhiteList: ['http://localhost:3000'],
    routeAfterAuthentication: '/'
  }

  if (environment === 'development') {
    ENV.host = 'http://localhost:3000';
  }

  if (environment === 'test') {
    ENV['simple-auth'] = {
      store: 'simple-auth-session-store:ephemeral-storage'
    }
    // remove host address for tests
    // so the paths display omits the url
    ENV.host = '';

    // Turn on mirage only for testing
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
