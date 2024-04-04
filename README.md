# The Readme For The Website of Jean-Silas Moor

There isn't much here for external audiences. This is mostly for my own sanity.

## 🚀 Project Structure


```text
/
├── 📁 public
│    └── favicon.svg
│
├── 📁 src
│    ├── 📁 components
│    │    ├── 📁 cards
│    │    ├── 📁 elements
│    │    ├── 📁 md           ← Components for Markdown Content
│    │    └── 📁 meta         ← Components for Structured Data
│    │ 
│    ├── 📁 content      ← Markdown Stuff
│    │    ├── 📁 archive      ← Longform, hierarchically structured, content
│    │    ├── 📁 blocks       ← One-off text segments for standalone pages
│    │    ├── 📁 blog         ← Blog posts
│    │    ├── 📁 services     ← Service descriptions for Mentoring page
│    │    └──  🗎 config.ts    ← Zod Schemas for the above
│    │ 
│    ├── 📁 layouts      ← Templates
│    │    ├── 📁 blocks       ← Template Components
│    │    └──  🗎 Wide.astro
│    │ 
│    ├── 📁 pages         
│    │    ├── 📁 archive      ← Dynamic route for content type
│    │    │    ├──  🗎 [...slug].astro   
│    │    │    └──  🗎 index.astro
│    │    ├── 📁 blog
│    │    ├── 📁 mentoring    ← Prefer colocating for one-offs
│    │    │    ├──  🗎 _MentorshipAutoCard.astro   
│    │    │    └──  🗎 index.astro
│    │    ├──  🗎 index.astro
│    │    └──  🗎 𝓢𝓮𝓬𝓻𝓮𝓽𝓟𝓪𝓰𝓮.astro
│    │ 
│    └── 📁 utils        ← Mostly for content wrangling
│         ├──  🗎 ContentMap.ts
│         └──  🗎 Tags.ts
│
├── 📁 tailwind          ← EXTENSIVE tailwind nonsense.
│    ├──  🗎 colors.ts
│    ├──  🗎 device.ts
│    ├──  🗎 fluid.ts
│    └──  🗎 prose.ts
│
├──  🗎 package.json
├──  🗎 tailwind.config.cjs ← EXTENSIVE tailwind nonsense.
├──  🗎 tsconfig.json       ← Lots of manual path alias wrangling
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory.
Each page is exposed as a route based on its file name.
You can collocate components with paged by prepending `_` to the file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Content Wrangling

I've gone completely overboard with content types and schemas.

### Rules For Writing Markdown

1. One sentence per line.
2. Consistently use callouts and asides.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
| `pnpm lint`            | Run Prettier                                     |
| `pnpm lint-check`      | Dry-run Prettier                                 |


