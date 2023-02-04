import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'projects',
	title: 'Projects',
	type: 'document',
	fields: [
		defineField({
			name: 'thumbnail',
			title: 'Thumbnail',
			type: 'image',
			options: {
				hotspot: true
			}
		}),
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string'
		}),
		defineField({
			name: 'type',
			title: 'Type',
			type: 'reference',
			to: { type: 'types' }
		}),
		defineField({
			name: 'theme',
			title: 'Theme',
			type: 'array',
			of: [{ type: 'string' }]
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
			type: 'text'
		}),
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					name: 'image',
					title: 'Image',
					type: 'image',
					fields: [
						defineField({
							name: 'alt',
							title: 'Alt',
							type: 'string'
						})
					]
				}
			]
		}),
		defineField({
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'technologies' } }]
		}),
		defineField({
			name: 'stack',
			title: 'Stack',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'stacks' } }]
		}),
		defineField({
			name: 'details',
			title: 'Details',
			type: 'array',
			of: [{ type: 'string' }]
		}),
		defineField({
			name: 'todo',
			title: 'To-Do',
			type: 'array',
			of: [{ type: 'string' }]
		}),
		defineField({
			name: 'links',
			title: 'Links',
			type: 'array',
			of: [
				defineField({
					name: 'link',
					title: 'Link',
					type: 'document',
					fields: [
						defineField({
							name: 'link',
							title: 'Link',
							type: 'reference',
							to: { type: 'links' }
						}),
						defineField({
							name: 'url',
							title: 'URL',
							type: 'url'
						})
					]
				})
			]
		})
	],

	preview: {
		select: {
			title: 'title',
			type: 'type.title',
			media: 'thumbnail'
		},
		prepare(selection) {
			const { type } = selection;
			return { ...selection, subtitle: type && `${type}` };
		}
	}
});
