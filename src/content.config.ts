import { defineCollection } from "astro:content";
import { z } from "zod";
import { glob } from "astro/loaders";

const posts = defineCollection({
    loader: glob({
        pattern: "**/*.{md,mdx}",
        base: "./src/content/posts",
    }),

    schema: ({ image }) => 
        z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string(),
    }),
});

export const collections = {
    posts,
};