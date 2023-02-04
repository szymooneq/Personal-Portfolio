import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'types',
	title: 'Types',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		})
	]
});
