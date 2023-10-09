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
    }),
});

export const collections = {
    blog: blogCollection
}