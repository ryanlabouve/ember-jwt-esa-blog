import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from '../config/environment';

const { host } = config;

export default JSONAPIAdapter.extend({
  host
});
