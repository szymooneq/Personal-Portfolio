import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'post',
	title: 'Post',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96
			}
		}),
		defineField({
			name: 'description',
			description: 'Enter a shor snipper for the blog...',
			title: 'Description',
			type: 'string'
		}),
		defineField({
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true
			}
		}),
		defineField({
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'technologies' } }]
		}),
		defineField({
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime'
		}),
		defineField({
			name: 'editedAt',
			title: 'Edited at',
			type: 'datetime'
		}),
		defineField({
			name: 'body',
			title: 'Body',
			type: 'blockContent'
		})
	],

	preview: {
		select: {
			title: 'title',
			publishedAt: 'publishedAt',
			media: 'mainImage'
		},
		prepare(selection) {
			const { publishedAt } = selection
			return { ...selection, subtitle: publishedAt && `${publishedAt}` }
		}
	}
})
