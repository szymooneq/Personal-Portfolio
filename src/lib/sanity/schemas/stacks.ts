import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'stacks',
	title: 'Stacks',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'string'
		}),
		defineField({
			name: 'url',
			title: 'URL',
			type: 'url'
		})
	]
});
