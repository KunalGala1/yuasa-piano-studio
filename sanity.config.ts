import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'yuasa-piano-studio',
  title: `Yuasa Piano Studio`,
  projectId: 'bphvqs9o',
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});
