import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas'

export default defineConfig({
  name: 'default',
  title: 'personal-portfolio-sd',
  projectId: '539pofpk',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemas,
  },
})
