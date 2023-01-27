export default {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Type',
      name: 'type',
      type: 'reference',
      to: [{type: 'types'}],
    },
    {
      title: 'Theme',
      name: 'theme',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      of: [
        {
          title: 'Image',
          name: 'image',
          type: 'image',
          fields: [
            {
              title: 'Alt',
              name: 'alt',
              type: 'string',
              /* options: {
              isHighlighted: true // <-- make this field easily accessible
            } */
            },
          ],
        },
      ],
    },
    {
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'technologies'}}],
    },
    {
      title: 'Stack',
      name: 'stack',
      type: 'array',
      of: [{type: 'reference', to: {type: 'stacks'}}],
    },
    {
      title: 'Details',
      name: 'details',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'To-Do',
      name: 'todo',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        {
          title: 'Link',
          name: 'link',
          type: 'document',
          fields: [
            {
              title: 'Link',
              name: 'link',
              type: 'reference',
              to: [{type: 'links'}],
            },
            {
              title: 'URL',
              name: 'url',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],
}
