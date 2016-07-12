import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render('products');
  },
  model() {
    return this.get('store').findAll('product');
  }
});
