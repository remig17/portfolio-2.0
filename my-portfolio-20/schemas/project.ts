import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      description: 'Upload the video file here',
      options: {
        accept: 'video/*', // Restrict to video files
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
    defineField({
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    }),
  ],
})
