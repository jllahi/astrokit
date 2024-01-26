# AstroKit Tailwind Indicator

Astro Tailwind Indicator is an [Astro Dev Toolbar App](https://docs.astro.build/en/reference/dev-toolbar-app-reference/) that enables your local Astro server to display outlines for debugging your CSS, no additional configuration is required.

## Installation

To install Astro Tailwind Indicator run the following command with your preferred package manager:

```sh
pnpm install github:jllahi/@astrokit/tailwind-indicator
```

## Usage

```ts
import { defineConfig } from 'astro/config'
import debugcss from 'astro-debugcss'

export default defineConfig({
	integrations: [debugcss()],
})
```
