import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import mdx from '@astrojs/mdx';

import react from '@astrojs/react';

import remarkHint from 'remark-hint';

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind(),
        mdx({
            remarkPlugins: [remarkHint],
        }),
        react(),
    ],
    output: 'server',
    adapter: vercel(),
});
