# WolfpackWash

A Next.js 16 marketing/service website for WolfpackWash, a pressure washing and exterior cleaning company.

## Tech Stack

- **Framework**: Next.js 16.2.3 (App Router, Turbopack)
- **React**: 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Package Manager**: pnpm

## Project Structure

```
src/
  app/         # Next.js App Router pages and layouts
  components/  # Shared React components
    ui/        # UI primitives
    forms/     # Form components
    analytics/ # Analytics components
    hh-backend/
    scout/
    site/
    layoutsections/
  lib/         # Utility functions and helpers
public/        # Static assets
docs/          # Documentation
```

## Running the App

The app runs on port 5000 with host `0.0.0.0` for Replit compatibility.

```bash
pnpm run dev    # Development server (port 5000)
pnpm run build  # Production build
pnpm run start  # Production server (port 5000)
```

## Replit Configuration

- Dev/start scripts use `-p 5000 -H 0.0.0.0` for Replit preview pane compatibility
- `allowedDevOrigins` in `next.config.ts` is set to allow Replit's proxy domains for HMR
- Workflow: "Start application" runs `pnpm run dev`
