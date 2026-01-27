import React, { useState, useMemo } from 'react';

const colorData = {
  Yellows: [
    { name: "Lemon Yellow", hex: "#FFF44F" },
    { name: "Cadmium Lemon", hex: "#F8E71C" },
    { name: "Hansa Yellow Light", hex: "#FFEB3B" },
    { name: "Aureolin", hex: "#FDEE00" },
    { name: "Canary Yellow", hex: "#FFEF00" },
    { name: "Chrome Yellow", hex: "#FFC200" },
    { name: "Cadmium Yellow Light", hex: "#F4D03F" },
    { name: "Gamboge", hex: "#E49B0F" },
    { name: "Indian Yellow", hex: "#E3A857" },
    { name: "Cadmium Yellow Medium", hex: "#FFBF00" },
    { name: "Cadmium Yellow Deep", hex: "#FFA700" },
    { name: "Naples Yellow", hex: "#FADA5E" },
    { name: "Yellow Ochre", hex: "#CB9D06" },
    { name: "Raw Sienna", hex: "#D68A59" },
    { name: "Gold Ochre", hex: "#CC7722" },
    { name: "Saffron", hex: "#F4C430" },
    { name: "Mustard", hex: "#FFDB58" },
    { name: "Straw", hex: "#E4D96F" },
    { name: "Buff", hex: "#F0DC82" },
    { name: "Cream", hex: "#FFFDD0" },
    { name: "Champagne", hex: "#F7E7CE" },
    { name: "Flax", hex: "#EEDC82" },
    { name: "Goldenrod", hex: "#DAA520" },
    { name: "Amber", hex: "#FFBF00" },
    { name: "Maize", hex: "#FBEC5D" },
  ],
  Oranges: [
    { name: "Cadmium Orange", hex: "#ED872D" },
    { name: "Pyrrole Orange", hex: "#FF5800" },
    { name: "Chrome Orange", hex: "#FF7F00" },
    { name: "Vermilion Orange", hex: "#E34234" },
    { name: "Perinone Orange", hex: "#FF6700" },
    { name: "Benzimidazolone Orange", hex: "#FF5F1F" },
    { name: "Tangerine", hex: "#FF9966" },
    { name: "Apricot", hex: "#FBCEB1" },
    { name: "Peach", hex: "#FFCBA4" },
    { name: "Coral", hex: "#FF7F50" },
    { name: "Burnt Orange", hex: "#CC5500" },
    { name: "Pumpkin", hex: "#FF7518" },
    { name: "Mango", hex: "#FF8243" },
    { name: "Papaya", hex: "#FFEFD5" },
    { name: "Persimmon", hex: "#EC5800" },
    { name: "Sunset Orange", hex: "#FA5F55" },
  ],
  Reds: [
    { name: "Cadmium Red Light", hex: "#E30022" },
    { name: "Cadmium Scarlet", hex: "#E52B50" },
    { name: "Vermilion", hex: "#E34234" },
    { name: "Pyrrole Red", hex: "#E32636" },
    { name: "Naphthol Red", hex: "#D10047" },
    { name: "Cadmium Red Medium", hex: "#E21A1A" },
    { name: "Cadmium Red Deep", hex: "#A91B0D" },
    { name: "Quinacridone Red", hex: "#E8173F" },
    { name: "Alizarin Crimson", hex: "#E32636" },
    { name: "Carmine", hex: "#960018" },
    { name: "Crimson", hex: "#DC143C" },
    { name: "Rose Madder", hex: "#E32636" },
    { name: "Madder Lake", hex: "#CC3336" },
    { name: "Scarlet", hex: "#FF2400" },
    { name: "Cardinal", hex: "#C41E3A" },
    { name: "Ruby", hex: "#E0115F" },
    { name: "Cherry", hex: "#DE3163" },
    { name: "Raspberry", hex: "#E30B5C" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Maroon", hex: "#800000" },
    { name: "Wine", hex: "#722F37" },
    { name: "Oxblood", hex: "#4A0000" },
    { name: "Venetian Red", hex: "#C80815" },
    { name: "Indian Red", hex: "#CD5C5C" },
    { name: "Terra Rosa", hex: "#C75B4A" },
    { name: "Brick Red", hex: "#CB4154" },
    { name: "Rust", hex: "#B7410E" },
  ],
  Pinks: [
    { name: "Quinacridone Magenta", hex: "#A50B5E" },
    { name: "Permanent Rose", hex: "#FF007F" },
    { name: "Opera Pink", hex: "#FF1493" },
    { name: "Brilliant Pink", hex: "#FF007F" },
    { name: "Magenta", hex: "#FF00FF" },
    { name: "Hot Pink", hex: "#FF69B4" },
    { name: "Fuchsia", hex: "#FF00FF" },
    { name: "Cerise", hex: "#DE3163" },
    { name: "Rose", hex: "#FF007F" },
    { name: "Blush", hex: "#DE5D83" },
    { name: "Coral Pink", hex: "#F88379" },
    { name: "Salmon", hex: "#FA8072" },
    { name: "Shell Pink", hex: "#FFB4BB" },
    { name: "Baby Pink", hex: "#F4C2C2" },
    { name: "Dusty Rose", hex: "#DCAE96" },
    { name: "Mauve", hex: "#E0B0FF" },
    { name: "Orchid", hex: "#DA70D6" },
    { name: "Lavender Pink", hex: "#FBAED2" },
  ],
  Violets: [
    { name: "Dioxazine Violet", hex: "#5C2D91" },
    { name: "Ultramarine Violet", hex: "#5F4B8B" },
    { name: "Cobalt Violet", hex: "#914E75" },
    { name: "Manganese Violet", hex: "#8B008B" },
    { name: "Quinacridone Violet", hex: "#922B3E" },
    { name: "Permanent Violet", hex: "#7851A9" },
    { name: "Purple", hex: "#800080" },
    { name: "Royal Purple", hex: "#7851A9" },
    { name: "Grape", hex: "#6F2DA8" },
    { name: "Plum", hex: "#8E4585" },
    { name: "Amethyst", hex: "#9966CC" },
    { name: "Wisteria", hex: "#C9A0DC" },
    { name: "Lilac", hex: "#C8A2C8" },
    { name: "Lavender", hex: "#E6E6FA" },
    { name: "Periwinkle", hex: "#CCCCFF" },
    { name: "Heliotrope", hex: "#DF73FF" },
    { name: "Tyrian Purple", hex: "#66023C" },
    { name: "Byzantium", hex: "#702963" },
    { name: "Aubergine", hex: "#614051" },
  ],
  Blues: [
    { name: "Cerulean Blue", hex: "#2A52BE" },
    { name: "Cobalt Blue", hex: "#0047AB" },
    { name: "Ultramarine Blue", hex: "#4166F5" },
    { name: "French Ultramarine", hex: "#2A52BE" },
    { name: "Phthalo Blue", hex: "#000F89" },
    { name: "Prussian Blue", hex: "#003153" },
    { name: "Indanthrone Blue", hex: "#234B6E" },
    { name: "Manganese Blue", hex: "#03A89E" },
    { name: "Cadmium Blue", hex: "#0A1195" },
    { name: "Azure", hex: "#007FFF" },
    { name: "Sky Blue", hex: "#87CEEB" },
    { name: "Baby Blue", hex: "#89CFF0" },
    { name: "Powder Blue", hex: "#B0E0E6" },
    { name: "Robin Egg Blue", hex: "#00CCCC" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Turquoise", hex: "#40E0D0" },
    { name: "Teal", hex: "#008080" },
    { name: "Steel Blue", hex: "#4682B4" },
    { name: "Slate Blue", hex: "#6A5ACD" },
    { name: "Navy Blue", hex: "#000080" },
    { name: "Midnight Blue", hex: "#191970" },
    { name: "Sapphire", hex: "#0F52BA" },
    { name: "Royal Blue", hex: "#4169E1" },
    { name: "Indigo", hex: "#4B0082" },
    { name: "Egyptian Blue", hex: "#1034A6" },
    { name: "Delft Blue", hex: "#1F305E" },
  ],
  Greens: [
    { name: "Phthalo Green", hex: "#123524" },
    { name: "Viridian", hex: "#40826D" },
    { name: "Chromium Oxide Green", hex: "#667C3E" },
    { name: "Cobalt Green", hex: "#3D9140" },
    { name: "Cadmium Green", hex: "#006B3C" },
    { name: "Permanent Green", hex: "#009E60" },
    { name: "Hooker's Green", hex: "#49796B" },
    { name: "Sap Green", hex: "#507D2A" },
    { name: "Terre Verte", hex: "#6C7C59" },
    { name: "Olive Green", hex: "#808000" },
    { name: "Emerald", hex: "#50C878" },
    { name: "Jade", hex: "#00A86B" },
    { name: "Malachite", hex: "#0BDA51" },
    { name: "Forest Green", hex: "#228B22" },
    { name: "Hunter Green", hex: "#355E3B" },
    { name: "Pine Green", hex: "#01796F" },
    { name: "Moss Green", hex: "#8A9A5B" },
    { name: "Sage", hex: "#BCB88A" },
    { name: "Mint", hex: "#98FF98" },
    { name: "Seafoam", hex: "#93E9BE" },
    { name: "Celadon", hex: "#ACE1AF" },
    { name: "Chartreuse", hex: "#7FFF00" },
    { name: "Lime", hex: "#32CD32" },
    { name: "Kelly Green", hex: "#4CBB17" },
    { name: "Verdigris", hex: "#43B3AE" },
  ],
  "Earth Tones": [
    { name: "Burnt Umber", hex: "#8A3324" },
    { name: "Raw Umber", hex: "#826644" },
    { name: "Burnt Sienna", hex: "#E97451" },
    { name: "Raw Sienna", hex: "#D68A59" },
    { name: "Van Dyke Brown", hex: "#664228" },
    { name: "Sepia", hex: "#704214" },
    { name: "Caput Mortuum", hex: "#592720" },
    { name: "Mars Brown", hex: "#AD6F69" },
    { name: "Transparent Brown", hex: "#80461B" },
    { name: "Chocolate", hex: "#7B3F00" },
    { name: "Sienna", hex: "#A0522D" },
    { name: "Umber", hex: "#635147" },
    { name: "Chestnut", hex: "#954535" },
    { name: "Mahogany", hex: "#C04000" },
    { name: "Walnut", hex: "#773F1A" },
    { name: "Saddle Brown", hex: "#8B4513" },
    { name: "Tan", hex: "#D2B48C" },
    { name: "Camel", hex: "#C19A6B" },
    { name: "Khaki", hex: "#F0E68C" },
    { name: "Sand", hex: "#C2B280" },
    { name: "Beige", hex: "#F5F5DC" },
    { name: "Taupe", hex: "#483C32" },
    { name: "Coffee", hex: "#6F4E37" },
    { name: "Espresso", hex: "#3C2415" },
  ],
  "Blacks & Grays": [
    { name: "Ivory Black", hex: "#231F20" },
    { name: "Lamp Black", hex: "#2C2C2C" },
    { name: "Mars Black", hex: "#1C1C1C" },
    { name: "Carbon Black", hex: "#1A1A1A" },
    { name: "Vine Black", hex: "#1B1811" },
    { name: "Bone Black", hex: "#2D2D2D" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Jet Black", hex: "#0A0A0A" },
    { name: "Onyx", hex: "#353839" },
    { name: "Ebony", hex: "#555D50" },
    { name: "Graphite", hex: "#383838" },
    { name: "Payne's Gray", hex: "#536878" },
    { name: "Davy's Gray", hex: "#555555" },
    { name: "Slate Gray", hex: "#708090" },
    { name: "Battleship Gray", hex: "#848482" },
    { name: "Gunmetal", hex: "#2a3439" },
    { name: "Pewter", hex: "#8E8E8E" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Ash Gray", hex: "#B2BEB5" },
    { name: "Platinum", hex: "#E5E4E2" },
  ],
  Whites: [
    { name: "Titanium White", hex: "#FFFFFF" },
    { name: "Zinc White", hex: "#FDFFF5" },
    { name: "Flake White", hex: "#FFFAFA" },
    { name: "Lead White", hex: "#F5F5F5" },
    { name: "Chinese White", hex: "#F8F8FF" },
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Pearl White", hex: "#F0EAD6" },
    { name: "Antique White", hex: "#FAEBD7" },
    { name: "Eggshell", hex: "#F0EAD6" },
    { name: "Bone White", hex: "#E3DAC9" },
    { name: "Alabaster", hex: "#EDEAE0" },
    { name: "Porcelain", hex: "#EFF0F1" },
    { name: "Snow", hex: "#FFFAFA" },
    { name: "Ghost White", hex: "#F8F8FF" },
    { name: "Linen", hex: "#FAF0E6" },
    { name: "Seashell", hex: "#FFF5EE" },
  ],
};

function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1a1a1a' : '#ffffff';
}

function ColorSwatch({ color, onClick, isSelected }) {
  const textColor = getContrastColor(color.hex);
  return (
    <div
      onClick={() => onClick(color)}
      className="group relative cursor-pointer transition-all duration-300 ease-out"
      style={{
        backgroundColor: color.hex,
        aspectRatio: '1',
        borderRadius: '8px',
        transform: isSelected ? 'scale(1.1)' : 'scale(1)',
        boxShadow: isSelected 
          ? `0 20px 40px ${color.hex}66, 0 0 0 3px ${textColor}` 
          : '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: isSelected ? 10 : 1,
      }}
    >
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ 
          backgroundColor: `${color.hex}ee`,
          borderRadius: '8px',
        }}
      >
        <span 
          className="text-xs font-medium text-center leading-tight"
          style={{ color: textColor }}
        >
          {color.name}
        </span>
        <span 
          className="text-xs mt-1 font-mono opacity-80"
          style={{ color: textColor }}
        >
          {color.hex}
        </span>
      </div>
    </div>
  );
}

function ColorDetail({ color, onClose }) {
  if (!color) return null;
  const textColor = getContrastColor(color.hex);
  const r = parseInt(color.hex.slice(1, 3), 16);
  const g = parseInt(color.hex.slice(3, 5), 16);
  const b = parseInt(color.hex.slice(5, 7), 16);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl overflow-hidden"
        style={{ 
          backgroundColor: color.hex,
          boxShadow: `0 40px 80px ${color.hex}88`
        }}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{ backgroundColor: `${textColor}22`, color: textColor }}
        >
          ✕
        </button>
        <div className="aspect-square w-full" />
        <div className="p-8" style={{ color: textColor }}>
          <h2 className="text-3xl font-light mb-6">{color.name}</h2>
          <div className="space-y-3 text-sm font-mono">
            <div className="flex justify-between py-2 border-b" style={{ borderColor: `${textColor}22` }}>
              <span className="opacity-60">HEX</span>
              <span>{color.hex}</span>
            </div>
            <div className="flex justify-between py-2 border-b" style={{ borderColor: `${textColor}22` }}>
              <span className="opacity-60">RGB</span>
              <span>{r}, {g}, {b}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="opacity-60">HSL</span>
              <span>
                {(() => {
                  const rr = r / 255, gg = g / 255, bb = b / 255;
                  const max = Math.max(rr, gg, bb), min = Math.min(rr, gg, bb);
                  let h, s, l = (max + min) / 2;
                  if (max === min) { h = s = 0; }
                  else {
                    const d = max - min;
                    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                    switch (max) {
                      case rr: h = ((gg - bb) / d + (gg < bb ? 6 : 0)) / 6; break;
                      case gg: h = ((bb - rr) / d + 2) / 6; break;
                      case bb: h = ((rr - gg) / d + 4) / 6; break;
                    }
                  }
                  return `${Math.round(h * 360)}°, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%`;
                })()}
              </span>
            </div>
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(color.hex)}
            className="mt-6 w-full py-3 rounded-xl font-medium transition-transform hover:scale-105"
            style={{ backgroundColor: `${textColor}15`, color: textColor }}
          >
            Copy HEX
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ArtColorChart() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Object.keys(colorData)];

  const filteredColors = useMemo(() => {
    let result = {};
    const search = searchTerm.toLowerCase();
    
    Object.entries(colorData).forEach(([category, colors]) => {
      if (activeCategory !== 'All' && activeCategory !== category) return;
      
      const filtered = colors.filter(c => 
        c.name.toLowerCase().includes(search) || 
        c.hex.toLowerCase().includes(search)
      );
      
      if (filtered.length > 0) {
        result[category] = filtered;
      }
    });
    
    return result;
  }, [searchTerm, activeCategory]);

  const totalColors = Object.values(colorData).flat().length;

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
      fontFamily: "'DM Sans', system-ui, sans-serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Space+Mono&display=swap');
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>

      <header className="sticky top-0 z-40 backdrop-blur-xl" style={{ backgroundColor: 'rgba(15,15,15,0.8)' }}>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-light text-white tracking-tight">
                  Artist's Color Reference
                </h1>
                <p className="text-sm text-gray-400 mt-1 font-mono">
                  {totalColors} pigments & colors
                </p>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search colors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 px-5 py-3 rounded-2xl text-white placeholder-gray-500 outline-none transition-all focus:ring-2 focus:ring-white/20"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">⌘K</span>
              </div>
            </div>
            
            <nav className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 -mb-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
                  style={{
                    backgroundColor: activeCategory === cat ? 'rgba(255,255,255,0.15)' : 'transparent',
                    color: activeCategory === cat ? '#fff' : 'rgba(255,255,255,0.5)',
                    border: activeCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {Object.entries(filteredColors).map(([category, colors], catIndex) => (
          <section key={category} className="mb-12 animate-fade" style={{ animationDelay: `${catIndex * 0.05}s` }}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl font-medium text-white">{category}</h2>
              <span className="text-xs text-gray-500 font-mono px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                {colors.length}
              </span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)' }} />
            </div>
            <div className="grid gap-3" style={{ 
              gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))'
            }}>
              {colors.map((color, i) => (
                <div key={color.name} className="animate-fade" style={{ animationDelay: `${i * 0.02}s` }}>
                  <ColorSwatch 
                    color={color} 
                    onClick={setSelectedColor}
                    isSelected={selectedColor?.hex === color.hex}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}

        {Object.keys(filteredColors).length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No colors found for "{searchTerm}"</p>
          </div>
        )}
      </main>

      <ColorDetail color={selectedColor} onClose={() => setSelectedColor(null)} />
    </div>
  );
}
