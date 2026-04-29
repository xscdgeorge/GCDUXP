# GUXP Design System

## Overview
The George UX Portfolio (GUXP) design system is built to convey "Intentionality and Strategic Leadership." It pairs a deep, cinematic dark mode with high-contrast typography and intentional "sparks" of innovation. The aesthetic is premium, minimalist, and high-performance, engineered to showcase complex UX case studies with clarity and impact.

## Colors
- **Primary Accent** (#f97316): The "Spark" — Orange 500. Used for terminals, highlights, and critical CTA hovers.
- **Background** (#000000): Deepest black for maximum contrast and focus.
- **Surface** (#09090b): Zinc 950. Secondary background for sections and surface separation.
- **Surface Muted** (#18181b): Zinc 900. Card backgrounds and interactive surfaces.
- **Text Primary** (#f3f4f6): High-emphasis content, headings, and primary body copy.
- **Text Secondary** (#9ca3af): Medium-emphasis descriptions, metadata, and breadcrumbs.
- **Border** (#ffffff1a): 10% white. Subtle hairlines for card and section separation.
- **Light Surface** (#efe3d0): Warm Beige. Reserved for high-contrast light-mode sections or physical artifact showcases.

## Typography
- **Primary Serif**: Playfair Display — Loaded from Google Fonts.
- **Body/UI Font**: System Sans (Inter, Roboto, or standard system stack).

Playfair Display is used for emotional resonance and authority in headings. Weight 500 is preferred for names/titles, while Italics are used for "Philosophy" statements and pull quotes. System Sans is used for all functional UI elements and long-form project descriptions to ensure maximum legibility and performance.

Type scale:
- Display Hero: 72px / Playfair Display
- H1: 42px / Playfair Display
- H2: 32px / Playfair Display
- UI Title: 20px / Playfair Display
- Body Large: 18px / System Sans (Light/Regular)
- Body: 16px / System Sans
- Metadata: 12px / System Sans (Uppercase, Tracking-widest)

## Elevation & Glassmorphism
GUXP avoids heavy drop shadows, preferring border-based separation and background blurs.
- **Navigation**: `backdrop-blur-xl` with `bg-black/70` and a `1px border-b white/5`.
- **Cards**: Flat `bg-zinc-900/50` with a `1px border-white/10`. Hover state increases border opacity to `white/30` or `orange-500/50`.
- **Modals**: High-blur backdrops with centralized, shadow-less surfaces.

## Components
- **Hero Image**: Max-width 970px, max-height 414px, corner-radius 32px. Always use `object-cover`. No desaturation or grayscale filters should be applied.
- **Buttons**: Rounded-full (pill-shaped). 48px height for primary. Primary: White bg, black text, hover Orange-500. Secondary: Border white/20, hover Orange-500.
- **Case Study Cards**: 32px border-radius, overflow-hidden. No grayscale filters.
- **Progress Bar**: Fixed at `top-0`, 4px height, Orange-500. Synchronized with scroll position via `requestAnimationFrame`.
- **Badges**: Rounded-full, `bg-zinc-900`, `text-zinc-400`, uppercase tracking-widest at 10px.

## Spacing
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 100, 128
- Section padding: 32px to 128px depending on hierarchy.
- Container max-width: 1280px (7xl) or 1024px (5xl) for focused reading.

## Border Radius
- 12px: Small UI elements, icon backgrounds.
- 24px: Standard cards and configurator surfaces.
- 32px: Large section containers and hero images.
- 9999px: Buttons, badges, and the logotype "Spark".

## Do's and Don'ts
- Do use Playfair Display Italics for personal philosophies and strategic quotes.
- Do keep borders subtle (5-10% opacity) to maintain the "cinema" feel.
- Don't use standard blue for links; all interactive highlights must be Orange-500 or White.
- **Do** ensure all "Display Hero" (Playfair Display) typography appears in **pure white** (#ffffff) when the background is dark.
- **Don't** use grayscale or desaturation filters on images anywhere in the site.
- Don't mix more than two font families.
- Do ensure a "definitive end" to every page with the standard inline copyright footer.