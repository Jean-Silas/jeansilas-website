import { z, defineCollection, reference } from 'astro:content';

const contentBase = {
    title: z.string(),
    status: z.enum(['draft', 'published', 'deprecated']),
    tags: z.string().array(),
    related: z
        .array(
            z.record(
                z.string(), // Turn into enum?
                z.union([reference('blog'), reference('knb'), reference('scratch')]),
            ),
        )
        .optional(),
};

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        ...contentBase,
        image: z.string().optional(),
        description: z.string().optional(),
        subtitle: z.string().optional(),
    }),
});

const blockCollection = defineCollection({
    type: 'content',
    schema: z.object({
        ...contentBase,
        image: z.string().optional(),
    }),
});

const serviceCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        detail: z.string(),
        status: z.enum(['open', 'closed', 'waitlist']),
        tags: z.string().array().optional(),
        image: z.string().optional(),
    }),
});

const archiveBase = z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    role: z.enum(['root', 'section', 'page']),
    kind: z.enum(['tutorial', 'how-to', 'explanation', 'reference']),
    status: z.enum(['draft', 'published', 'deprecated']),
    coverImage: z.string().optional(),

    // TODO: Setup some sort of pre-commit hook to make sure these are updated
    pubDate: z.date(),
    editDate: z.date(),
    
    // To keep 001, 002, etc, out of the file names themselves.
    sort: z.number().optional(),

    // Basic namespacing setup for tags
    tags: 
        z.record(
            z.string(), 
            z.string().array()
        )
        .array()
        .optional(),

    // Hoistable term definitions
    glossary: 
        z.record(
            z.string(),
            z.object({
                desc: z.string(),
                tags: z.string().array().optional(),
                local: z.boolean().optional()
        }))
        .array()
        .optional(),

    related: 
        z.record(
            z.string(),
            z.union([
                reference('blog'),
                reference('knb'), 
                reference('scratch'), 
                reference('archive')
            ]),
        )
        .array()
        .optional(),
})

const archiveCollection = defineCollection({
    type: 'content',
    schema: archiveBase
})

export const collections = {
    blog: blogCollection,
    blocks: blockCollection,
    services: serviceCollection,
    archive: archiveCollection
};
