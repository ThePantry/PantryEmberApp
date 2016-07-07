import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('product');
  },
  model(params) {
    return this.get('store').findAll('product');
  }
});
