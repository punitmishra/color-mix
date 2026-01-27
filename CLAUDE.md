# Claude Code Context - Color Mixing Master Guide

## Project Overview

This is a React + Vite + Tailwind CSS web application for artists to reference color mixing recipes and color theory. The main component is `src/ColorMixingMasterGuide.jsx`.

## Key Files

- `src/ColorMixingMasterGuide.jsx` - Main component containing all features (~1300 lines)
- `src/App.jsx` - Simple wrapper that renders the main component
- `src/main.jsx` - React entry point
- `src/index.css` - Tailwind CSS import

## Current State

### Completed Features
- [x] 250+ color pigments with Color Index codes
- [x] 80+ mixing recipes across 11 categories
- [x] Interactive color wheel with primary/secondary/tertiary
- [x] Warm vs Cool color guide
- [x] 8 theme palettes (Rainbow, Sunset, Ocean, etc.)
- [x] Color detail modal with HEX/RGB/HSL
- [x] Search and filter by name/hex/pigment code
- [x] 5 view modes (Mixing Recipes, All Colors, Palettes, Compact Grid, Activity Sheet)
- [x] Print-friendly styles
- [x] Activity worksheet for kids
- [x] Color names displayed below all swatches
- [x] Deployed to Vercel

### Data Structures

**pigmentData** - Object with color categories:
- Keys: "Yellows", "Oranges", "Reds", "Pinks & Magentas", "Violets & Purples", "Blues", "Greens", "Earth Tones", "Blacks & Grays", "Whites"
- Values: Arrays of `{ name, hex, code? }`

**mixingDatabase** - Object with mixing recipe categories:
- Keys: Recipe category names
- Values: `{ description, mixes: [{ ingredients, result, hex1, hex2, hexResult, hex3? }] }`

**themePalettes** - Array of palette objects:
- `{ name, colors: [{ name, hex }] }`

**warmCoolGuide** - Object with warm/cool arrays:
- `{ warm: [...], cool: [...] }`

### Key Components

1. **ColorSwatch** - Displays a color with name always visible below
2. **ColorDetailModal** - Full-screen modal with HEX/RGB/HSL info
3. **MixRow** - Shows a mixing recipe (color1 + color2 = result)
4. **MixingCategory** - Collapsible category section
5. **ColorWheelSection** - SVG color wheel with explanations
6. **WarmCoolSection** - Warm vs cool color comparison
7. **QuickReferenceCard** - Quick lookup for common mixes
8. **PaletteCard** - Displays a theme palette
9. **ActivityWorksheet** - Interactive worksheet for kids
10. **PrintableGrid** - Compact grid view for printing

### Helper Functions

- `getContrastColor(hex)` - Returns black or white for text readability
- `hexToRgb(hex)` - Converts hex to RGB object
- `rgbToHsl(r, g, b)` - Converts RGB to HSL object

## Potential Future Enhancements

- [ ] Add visual examples (landscape/still life paintings with color callouts)
- [ ] Add color blindness simulation
- [ ] Add color harmony calculator (complementary, triadic, etc.)
- [ ] Add favorite colors feature (localStorage)
- [ ] Add export palette as image/CSS/JSON
- [ ] Add more professional pigment info (opacity, lightfastness, temperature)
- [ ] Add color picker tool
- [ ] Add comparison view for similar colors

## URLs

- **GitHub:** https://github.com/punitmishra/color-mix
- **Vercel:** https://color-mix-three.vercel.app

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
vercel --prod    # Deploy to Vercel
```

## Notes

- Tailwind CSS v4 uses `@import "tailwindcss"` in CSS
- PostCSS config uses `@tailwindcss/postcss` plugin
- Print styles hide `.no-print` elements and prevent page breaks inside `.print-card`
- Color names are always visible below swatches (not just on hover)
