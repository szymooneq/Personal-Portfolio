import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'technologies',
	title: 'Technologies',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),

		defineField({
			name: 'icon',
			title: 'Icon',
			type: 'image'
		})
	],
	preview: {
		select: {
			title: 'title',
			media: 'icon'
		}
	}
})
