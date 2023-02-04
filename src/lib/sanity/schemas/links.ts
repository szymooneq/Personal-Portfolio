import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'links',
	title: 'Links',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'alt',
			title: 'Alt',
			type: 'string'
		}),
		defineField({
			name: 'icon',
			title: 'Icon',
			type: 'image'
		})
	]
});
