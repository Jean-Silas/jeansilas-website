import { getCollection } from 'astro:content';

const blogEntries = await getCollection('blog');

export const blogTitles = blogEntries
    .filter((entry) => entry.data.status === 'published' || import.meta.env.DEV)
    .map((entry) => ({
        slug: entry.slug,
        title: entry.data.title,
        // Do this better
        decorator: entry.data.status === 'draft' ? '[DRAFT] ' : '',
    }));
