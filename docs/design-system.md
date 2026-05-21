# Twynex Design System

This document defines the working visual system for the Twynex website. The goal is a calm, professional fintech infrastructure presence for banks, issuers, regulated partners, and investors.

## Design Positioning

Twynex should feel like regulated payment infrastructure, not a generic SaaS landing page.

Principles:

- Prioritize clarity, credibility, and scannable information.
- Use product diagrams, transaction flows, timelines, and tables before decorative visuals.
- Keep layouts dense enough for enterprise readers while leaving enough whitespace for confidence.
- Use conservative regulatory language such as "designed to support" and "aligned with" until legal review.
- Avoid flashy gradients, oversized decorative shapes, generic stock imagery, and crypto-style visual language.

## Visual Tokens

Current palette:

- Ink: `#171411`
- Cream background: `#fffaf2`
- Sand background: `#f7f4ee`
- Border: `#ded5c7`
- Muted text: `#5f574d`
- Secondary muted text: `#82776b`
- Primary accent green: `#0d7c66`
- Accent red: `#b24a3b`
- Accent amber: `#d69b2d`
- Dark-section muted text: `#d9d0c5`

Theme behavior:

- Theme support uses `next-themes`.
- The default theme is `system`.
- Manual theme selection is available through a fixed bottom-right toggle with `z-index: 100`.
- Dark mode should preserve the same enterprise/infrastructure tone rather than becoming a high-contrast novelty skin.

Shape and spacing:

- Border radius: mostly `8px`
- Cards: use only for repeated information units, diagrams, metrics, and profile-like blocks
- Shadows: subtle and reserved for the primary product visual
- Section rhythm: `py-16` on mobile, `lg:py-20` for standard sections, `lg:py-24` for the hero

Typography:

- Hero: large, tight, direct
- Section titles: `text-4xl`, semibold, tight leading
- Component titles: `text-2xl`, semibold
- Body copy: `text-base` to `text-lg`, generous line height
- Eyebrows: uppercase, small, semibold

## Component Layers

Layout components:

- `SiteHeader`
- `SiteFooter`
- `Section`

Generic UI components:

- `Button`
- `Eyebrow`
- `InfoCard`
- `Metric`

Twynex-specific components:

- `CorridorConsole`
- `ProcessSteps`
- `Roadmap`

Content source:

- `src/lib/site-content.ts`

## Page Template Pattern

Each future page should follow the same structure:

1. Page-specific hero or title band
2. One sharp explanatory section
3. Reusable proof or process component
4. Audience-specific CTA

Recommended page types:

- Platform: architecture, orchestration steps, integration model
- Use Cases: scenario cards and stakeholder benefits
- Banks & Issuers: partner conversion narrative
- Investors: market thesis, wedge, economics, roadmap
- Compliance & Trust: regulated partner model, data posture, standards
- Team: leadership/advisors grid
- Contact: inquiry routing
