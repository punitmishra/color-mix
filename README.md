# Color Mixing Master Guide

A comprehensive, interactive color mixing reference guide for artists. Built with React, Vite, and Tailwind CSS.

**Live Demo:** https://color-mix-three.vercel.app

## Features

- **250+ Color Pigments** - Professional artist pigments with Color Index codes (PY, PR, PB, etc.)
- **80+ Mixing Recipes** - Learn how to mix greens, oranges, purples, browns, blacks, grays, and skin tones
- **Interactive Color Wheel** - Visual guide to primary, secondary, and tertiary colors
- **Warm vs Cool Colors** - Understand color temperature for better paintings
- **Theme Palettes** - Pre-made palettes (Rainbow, Sunset, Ocean, Autumn, etc.)
- **Activity Worksheets** - Printable worksheets for learning color mixing
- **Color Detail Modal** - Click any color to see HEX, RGB, and HSL values
- **Search & Filter** - Find colors by name, hex code, or pigment code
- **Print-Friendly** - All views are optimized for printing

## Views

1. **Mixing Recipes** - Color wheel, quick reference, warm/cool guide, and all mixing recipes
2. **All Colors** - Browse 250+ colors organized by category (Yellows, Reds, Blues, etc.)
3. **Palettes** - Pre-made color palettes for different themes and styles
4. **Compact Grid** - Print-friendly compact view of all mixing recipes
5. **Activity Sheet** - Interactive worksheets for kids and beginners

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **Tailwind CSS v4** - Styling
- **Vercel** - Deployment

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
color-mix/
├── src/
│   ├── App.jsx                    # Main app entry
│   ├── ColorMixingMasterGuide.jsx # Main component with all features
│   ├── index.css                  # Tailwind imports
│   └── main.jsx                   # React entry point
├── public/
│   └── vite.svg                   # Favicon
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
├── postcss.config.js              # PostCSS configuration
├── CLAUDE.md                      # AI assistant context
└── README.md                      # This file
```

## Color Categories

- Yellows (25 colors)
- Oranges (18 colors)
- Reds (28 colors)
- Pinks & Magentas (19 colors)
- Violets & Purples (21 colors)
- Blues (30 colors)
- Greens (28 colors)
- Earth Tones (24 colors)
- Blacks & Grays (19 colors)
- Whites (13 colors)

## Mixing Recipe Categories

- Primary to Secondary
- Primary + Secondary to Tertiary
- Greens (Yellow + Blue variations)
- Oranges (Red + Yellow variations)
- Purples & Violets (Blue + Red variations)
- Browns (Complementary Mixes)
- Chromatic Blacks (No Black Paint!)
- Grays (Multiple Methods)
- Skin Tones (Light to Dark)
- Tints (Adding White)
- Shades (Adding Black)

## Deployment

The project is connected to GitHub and auto-deploys to Vercel on push to `main`.

```bash
# Deploy manually
vercel --prod
```

## License

ISC
