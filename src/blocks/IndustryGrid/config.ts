import { Block } from 'payload'

const IndustryGrid: Block = {
  slug: 'industryGrid',
  labels: {
    singular: 'Industry Grid',
    plural: 'Industry Grids',
  },
  fields: [
    {
      name: 'industries',
      type: 'array',
      required: true,
      label: 'Industries',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        // {
        //   name: 'link',
        //   type: 'text',
        //   label: 'Link (optional)',
        // },

        {
          name: 'links',
          type: 'array',
          label: 'Links',
          maxRows: 3, // limit to 3 links
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default IndustryGrid
