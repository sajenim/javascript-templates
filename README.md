# JavaScript Templates

A family of minimal JavaScript development templates using Nix for reproducible
environments. Choose the right foundation for your project while maintaining
consistent tooling and workflows.

## Available Templates

### Vanilla

Minimal JavaScript template for interactive sites and applications.

**Best for:**

- Interactive tools and utilities
- Client-side games
- Dashboards and data visualizations
- Projects that don't need a framework

**Tech stack:**

- Vite (development server & bundler)
- Vanilla JavaScript (no framework)
- Node.js REPL with custom helpers

### Next.js

TypeScript template with App Router for modern web applications.

**Best for:**

- Full-stack applications (e-commerce, SaaS)
- Static sites with growth potential
- Projects needing API routes
- Server-side rendering or static generation

**Tech stack:**

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS (utility-first styling)
- Optimized for Vercel deployment

## Shared Foundation

All templates include:

- **Nix + Flakes** - reproducible development environments
- **Bun** - fast JavaScript runtime & package manager
- **ESLint + Prettier** - code quality and formatting
- **just** - consistent command-line interface
- **FHS compatibility** - toggle for NixOS edge cases

## Getting Started

### Prerequisites

- [Nix](https://nixos.org/download.html) with flakes enabled
- [direnv](https://direnv.net/) (optional but recommended)

### Initialize a Project

Using [omnix](https://omnix.page):

**Vanilla template:**

```sh
nix run nixpkgs#omnix -- \
  init github:sajenim/javascript-templates -o ./my-project
```

**Next.js template:**

```sh
nix run nixpkgs#omnix -- \
  init github:sajenim/javascript-templates#nextjs -o ./my-nextjs-app
```

### Enter Development Environment

```sh
cd my-project
direnv allow  # Or use: nix develop
just dev
```

### NixOS FHS Compatibility

If bun-installed binaries fail to find system libraries, enable FHS
compatibility:

```nix
# nix/modules/devshell.nix
fhs = true;
```

## Common Commands

Both templates share the same command interface:

```sh
just           # List all available commands
just dev       # Start development server
just build     # Production build
just lint      # Lint code
just format    # Format code
just clean     # Clean build artifacts
just update    # Update Nix flake inputs
just upgrade   # Upgrade package dependencies
```

### Template-Specific Commands

**Vanilla:**

```sh
just repl      # Node.js REPL with custom helpers
just preview   # Preview production build
```

**Next.js:**

```sh
just start     # Start production server
just typecheck # TypeScript type checking
just check     # Run format-check, lint, and typecheck
```

## Next.js Static Export

For pure static sites (no server-side features), enable static export:

```js
// templates/nextjs/next.config.js
const nextConfig = {
  output: 'export',
  // ...
};
```

Note: This disables API routes and server-side rendering.

## Customization

All templates provide minimal, sensible defaults. Customize as needed:

**Vanilla:**

- Modify linting rules in `eslint.config.js`
- Add custom REPL helpers in `.replrc.js`
- Extend Vite config if needed

**Next.js:**

- Configure Next.js in `next.config.js`
- Customize ESLint rules in `eslint.config.mjs`
- Adjust TypeScript settings in `tsconfig.json`

**Both templates:**

- Add Prettier config via `.prettierrc` if needed
- Extend `Justfile` with project-specific commands
- Adjust Nix devshell in `nix/modules/devshell.nix`

## Template Comparison

| Feature            | Vanilla     | Next.js     |
| ------------------ | ----------- | ----------- |
| Framework          | None        | Next.js     |
| Language           | JS          | TS          |
| Bundler            | Vite        | Next.js     |
| Styling            | Vanilla CSS | Tailwind v4 |
| Client-side only   | ✓           | ✗           |
| Server-side API    | ✗           | ✓           |
| Static generation  | ✓           | ✓           |
| Type checking      | ✗           | ✓           |
| React components   | ✗           | ✓           |
| File-based routing | ✗           | ✓           |

## Acknowledgments

- [srid's haskell-template](https://github.com/srid/haskell-template) -
  inspiration for Nix flakes structure
- [Next.js](https://nextjs.org/) - React framework for production
- [Bun](https://bun.sh/) - fast JavaScript runtime

## License

MIT
