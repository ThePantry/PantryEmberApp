import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
	ownerId: attr('string'),
	location: attr('string'),
	id: attr('int'),
	name: attr('string'),
	products: hasMany('product'),
	description: attr('string'),
	email: attr('string')
});
