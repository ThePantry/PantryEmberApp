import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:oauth2'
});

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:50736',
  namespace: 'api'
});
