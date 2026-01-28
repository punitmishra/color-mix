# Palette Lab

<div align="center">

**The Ultimate Color Mixing Reference for Artists**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge)](https://color-mix-three.vercel.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

*Master color theory, explore famous artist palettes, and discover the perfect paint mixing recipes.*

</div>

---

## What is Palette Lab?

Palette Lab is a comprehensive, interactive color mixing reference guide designed for artists of all skill levels. Whether you're a beginner learning color theory or a professional looking for specific pigment codes, this app has everything you need.

**Live Demo:** https://color-mix-three.vercel.app

## Features

### Color & Mixing
- **250+ Color Pigments** - Professional artist pigments with Color Index codes (PY, PR, PB, etc.)
- **80+ Mixing Recipes** - Learn how to mix greens, oranges, purples, browns, blacks, grays, and skin tones
- **Interactive Color Wheel** - Visual guide to primary, secondary, and tertiary colors
- **Warm vs Cool Colors** - Understand color temperature for better paintings
- **Color Detail Modal** - Click any color to see HEX, RGB, and HSL values

### Artist Resources
- **8 Famous Artist Palettes** - Bob Ross, Van Gogh, Monet, Vermeer, Rembrandt, O'Keeffe, Zorn, Split Primary
- **Reference Paintings** - Public domain masterpiece images from Wikimedia Commons
- **Paint Brand Comparison** - Compare pigment loads, prices, and quality across brands
- **Shop Links** - Quick links to purchase supplies from Amazon, Blick, and brand websites

### Materials Guide
- **Brush Types** - 8 brush shapes with stroke previews and paper effects
- **Brush Hair Types** - Kolinsky Sable, Hog Bristle, Synthetic & more with actual colors
- **Paper Types** - 6 paper types with GSM reference and texture samples
- **Canvas Guide** - Cotton, Linen, Polyester, Jute with weight options
- **Paint Media Brands** - Watercolor, Oil, Acrylic, Gouache brand databases

### Tools & Learning
- **Theme Palettes** - Pre-made palettes (Rainbow, Sunset, Ocean, Autumn, etc.)
- **Activity Worksheets** - Printable worksheets for learning color mixing
- **Search & Filter** - Find colors by name, hex code, or pigment code
- **Mobile Responsive** - Fully optimized for phones and tablets
- **Print-Friendly** - All views are optimized for printing

## Views

| View | Description |
|------|-------------|
| **Mixing Recipes** | Color wheel, quick reference, warm/cool guide, and all mixing recipes |
| **Artist Palettes** | Famous artist palettes with reference paintings and tips |
| **All Colors** | Browse 250+ colors organized by category |
| **By Brand** | Find colors with exact product codes for major paint brands |
| **Theme Palettes** | Pre-made color palettes for different themes |
| **Activity Sheet** | Interactive worksheets for kids and beginners |
| **Brushes & Paper** | Complete guide to brush types, paper, canvas, and materials |

## Tech Stack

- **React 19** - UI framework
- **Vite 7** - Build tool
- **Tailwind CSS v4** - Styling
- **Vercel** - Deployment
- **Vercel Analytics** - Usage tracking

## Quick Start

```bash
# Clone the repository
git clone https://github.com/punitmishra/color-mix.git
cd color-mix

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
palette-lab/
├── src/
│   ├── App.jsx                    # Main app with Analytics
│   ├── ColorMixingMasterGuide.jsx # Main component (all features)
│   ├── index.css                  # Tailwind imports
│   └── main.jsx                   # React entry point
├── public/
│   └── vite.svg                   # Favicon
├── index.html                     # HTML template
├── package.json                   # Dependencies
└── vite.config.js                 # Vite configuration
```

## Color Database

| Category | Count |
|----------|-------|
| Yellows | 25 |
| Oranges | 18 |
| Reds | 28 |
| Pinks & Magentas | 19 |
| Violets & Purples | 21 |
| Blues | 30 |
| Greens | 28 |
| Earth Tones | 24 |
| Blacks & Grays | 19 |
| Whites | 13 |
| **Total** | **250+** |

## Famous Artist Palettes

| Artist | Style | Colors |
|--------|-------|--------|
| Bob Ross | Wet-on-wet landscapes | 12 |
| Vincent van Gogh | Post-Impressionist | 12 |
| Claude Monet | Impressionist | 11 |
| Johannes Vermeer | Dutch Golden Age | 11 |
| Rembrandt | Chiaroscuro | 11 |
| Georgia O'Keeffe | Southwestern Modernist | 12 |
| Anders Zorn | Limited palette | 4 |
| Split Primary | Color theory | 8 |

## Paint Brands Covered

### Professional Grade
- Daniel Smith, Winsor & Newton, Schmincke, Holbein
- Old Holland, Michael Harding, Gamblin
- Golden, Liquitex Professional

### Student Grade
- Cotman, Van Gogh, Winton
- Liquitex Basics, Amsterdam

## Deployment

Auto-deploys to Vercel on push to `main`.

```bash
# Manual deploy
vercel --prod
```

## Contributing

Contributions are welcome! Feel free to:
- Add new color recipes
- Suggest artist palettes
- Report bugs
- Improve documentation

## License

ISC

---

<div align="center">

**Made with paint and pixels**

[View Live Demo](https://color-mix-three.vercel.app)

</div>
