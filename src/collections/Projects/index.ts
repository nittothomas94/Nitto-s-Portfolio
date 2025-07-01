import { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const ProjectsSlug = 'projects' as const

const Projects: CollectionConfig = {
  slug: ProjectsSlug,
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'categories', 'createdAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Project Details',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'liveLink',
              type: 'text',
            },
            {
              name: 'sourceLink',
              type: 'text',
            },
            {
              name: 'videoLink',
              type: 'text',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor(),
              required: true,
            },
          ],
        },
        {
          label: 'Meta',
          fields: [
            {
              name: 'categories',
              type: 'relationship',
              relationTo: 'categories',
              hasMany: true,
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'relatedProjects',
              type: 'relationship',
              relationTo: ProjectsSlug,
              hasMany: true,
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ siblingData }) => {
                const currentId = (siblingData as { id?: string })?.id
                return {
                  id: {
                    not_in: currentId ? [currentId] : [],
                  },
                }
              },
            },
          ],
        },
      ],
    },
  ],
}

export default Projects
