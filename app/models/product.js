import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	name: attr('string'),
	shortDescription: attr('string'),
	longDescription: attr('string'),
	tags: hasMany('tag'),
	imagePaths: hasMany('image-path'),
	shop: belongsTo('shop')
});
