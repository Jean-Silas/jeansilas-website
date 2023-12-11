import { getCollection } from 'astro:content';

const blogEntries = await getCollection('blog');


export const blogTitles = blogEntries
    .filter( (entry) => (entry.data.status === "published"))
    .map( (entry) => ({
        slug: entry.slug,
        title: entry.data.title
    }))