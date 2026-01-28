# Color Mixing Master Guide

A comprehensive, interactive color mixing reference guide for artists. Built with React, Vite, and Tailwind CSS.

**Live Demo:** https://color-mix-three.vercel.app

## Features

- **250+ Color Pigments** - Professional artist pigments with Color Index codes (PY, PR, PB, etc.)
- **80+ Mixing Recipes** - Learn how to mix greens, oranges, purples, browns, blacks, grays, and skin tones
- **8 Famous Artist Palettes** - Bob Ross, Van Gogh, Monet, Vermeer, Rembrandt, O'Keeffe, Zorn, Split Primary
- **Interactive Color Wheel** - Visual guide to primary, secondary, and tertiary colors
- **Brush Types Guide** - 8 brush types with stroke previews and paper effects
- **Paper Types Guide** - 6 paper types with texture samples and usage tips
- **Painting References** - Links to Wikimedia Commons masterpiece images
- **Warm vs Cool Colors** - Understand color temperature for better paintings
- **Theme Palettes** - Pre-made palettes (Rainbow, Sunset, Ocean, Autumn, etc.)
- **6 Paint Brand Databases** - Winsor & Newton, Golden, Liquitex, Daniel Smith, Gamblin, Holbein
- **Activity Worksheets** - Printable worksheets for learning color mixing
- **Color Detail Modal** - Click any color to see HEX, RGB, and HSL values
- **Search & Filter** - Find colors by name, hex code, or pigment code
- **Mobile Responsive** - Fully optimized for phones and tablets
- **Print-Friendly** - All views are optimized for printing

## Views

1. **Mixing Recipes** - Color wheel, quick reference, warm/cool guide, and all mixing recipes
2. **Artist Palettes** - Famous artist palettes with painting tips and references
3. **All Colors** - Browse 250+ colors organized by category (Yellows, Reds, Blues, etc.)
4. **By Brand** - Find colors with exact product codes for major paint brands
5. **Theme Palettes** - Pre-made color palettes for different themes and styles
6. **Activity Sheet** - Interactive worksheets for kids and beginners
7. **Brushes & Paper** - Guide to brush types, paper types, and how they work together

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

## Brush Types

- Round - Fine lines, details, lettering
- Flat - Washes, bold strokes, sharp edges
- Filbert - Blending, petals, organic shapes
- Fan - Trees, grass, texture effects
- Liner/Rigger - Fine lines, branches, signatures
- Mop - Large washes, wet-on-wet
- Angle/Shader - Sharp edges, shading
- Dagger/Striper - Varied strokes, leaves

## Paper Types

- Hot Press Watercolor - Smooth, for detailed work
- Cold Press Watercolor - Medium texture, most versatile
- Rough Watercolor - Heavy texture, dramatic effects
- Canvas - Oil and acrylic painting
- Bristol Board - Illustration and markers
- Mixed Media - Versatile for experimentation

## Famous Artist Palettes

- Bob Ross - Wet-on-wet oil landscapes
- Vincent van Gogh - Bold Post-Impressionist colors
- Claude Monet - Impressionist atmosphere
- Johannes Vermeer - Dutch Golden Age luminosity
- Rembrandt - Dramatic chiaroscuro
- Georgia O'Keeffe - Bold Southwestern colors
- Zorn Palette - Limited 4-color palette
- Split Primary - Maximum color range

## Deployment

The project is connected to GitHub and auto-deploys to Vercel on push to `main`.

```bash
# Deploy manually
vercel --prod
```

## License

ISC
