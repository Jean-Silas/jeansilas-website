import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

const blogEntries = await getCollection('blog');

export const blogTitles = blogEntries
    .filter((entry) => entry.data.status === 'published' || import.meta.env.DEV)
    .map((entry) => ({
        slug: entry.slug,
        title: entry.data.title,
        // Do this better
        decorator: entry.data.status === 'draft' ? '[DRAFT] ' : '',
    }));


export async function generateArchiveMap() {
    let collectionEntries: CollectionEntry<'archive'>[] = await getCollection('archive');

    const archiveMap: Map<string, {root: CollectionEntry<'archive'>, entries: CollectionEntry<'archive'>[]}> = new Map();

    collectionEntries.forEach((entry) => {
        const slug = entry.slug.split('/').slice(0, -1).join('/');
        console.log(slug);
        let mapEntry = archiveMap.get(slug) ?? {root: {}, entries: []};

        if (entry.data.role === 'root') {
            mapEntry.root = entry;
        } else {
            // @ts-ignore
            mapEntry.entries.push(entry);
        }
        // @ts-ignore
        archiveMap.set(slug, mapEntry);
    });

    return archiveMap
}
