# Turborepo with Tailwind CSS

This is based on an official starter Turborepo, but was modified to meet certain criteria.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `design-system`: a collection of basic React ui components with [Tailwind CSS](https://tailwindcss.com/) shared by `web` application
- `ui`: a set of more specific React ui components with [Tailwind CSS](https://tailwindcss.com/) shared by `web` application
- `@turbo-with-tailwind/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@turbo-with-tailwind/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@turbo-with-tailwind/tailwind-config`: `tailwind.config.ts` includes all custom tailwind configurations

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages

This example is set up to produce compiled styles for `design-system` and `ui` components into the `dist` directories. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.js`. This was chosen for several reasons:

- Make sharing one `tailwind.config.ts` to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Ensure Tailwind classes do not overwrite each other. The packages use a `ds-` and `ui-` prefix for their classes.
- Maintain clear package export boundaries.

Another option is to consume `packages/design-system` or `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.js` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.ts](packages/config-tailwind/tailwind.config.ts):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `design-system`/ `ui` package.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
