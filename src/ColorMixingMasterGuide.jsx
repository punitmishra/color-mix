import React, { useState } from 'react';

// Comprehensive color mixing database
const mixingDatabase = {
  "Primary → Secondary": {
    description: "Mix two primary colors to get secondary colors",
    mixes: [
      { ingredients: ["Red", "Yellow"], result: "Orange", hex1: "#E30022", hex2: "#FFD300", hexResult: "#FF7F00" },
      { ingredients: ["Yellow", "Blue"], result: "Green", hex1: "#FFD300", hex2: "#0047AB", hexResult: "#32CD32" },
      { ingredients: ["Blue", "Red"], result: "Purple", hex1: "#0047AB", hex2: "#E30022", hexResult: "#8B008B" },
    ]
  },
  "Primary + Secondary → Tertiary": {
    description: "Mix a primary with its neighboring secondary",
    mixes: [
      { ingredients: ["Red", "Orange"], result: "Red-Orange", hex1: "#E30022", hex2: "#FF7F00", hexResult: "#FF4500" },
      { ingredients: ["Yellow", "Orange"], result: "Yellow-Orange", hex1: "#FFD300", hex2: "#FF7F00", hexResult: "#FFAE42" },
      { ingredients: ["Yellow", "Green"], result: "Yellow-Green", hex1: "#FFD300", hex2: "#32CD32", hexResult: "#9ACD32" },
      { ingredients: ["Blue", "Green"], result: "Blue-Green (Teal)", hex1: "#0047AB", hex2: "#32CD32", hexResult: "#008B8B" },
      { ingredients: ["Blue", "Purple"], result: "Blue-Purple", hex1: "#0047AB", hex2: "#8B008B", hexResult: "#4B0082" },
      { ingredients: ["Red", "Purple"], result: "Red-Purple (Magenta)", hex1: "#E30022", hex2: "#8B008B", hexResult: "#C71585" },
    ]
  },
  "Greens (Yellow + Blue variations)": {
    description: "Different yellows and blues make different greens",
    mixes: [
      { ingredients: ["Lemon Yellow", "Phthalo Blue"], result: "Bright Green", hex1: "#FFF44F", hex2: "#000F89", hexResult: "#32CD32" },
      { ingredients: ["Cadmium Yellow", "Cerulean Blue"], result: "Spring Green", hex1: "#FFD300", hex2: "#007BA7", hexResult: "#00FF7F" },
      { ingredients: ["Cadmium Yellow", "Ultramarine Blue"], result: "Leaf Green", hex1: "#FFD300", hex2: "#4166F5", hexResult: "#228B22" },
      { ingredients: ["Yellow Ochre", "Ultramarine Blue"], result: "Olive Green", hex1: "#CB9D06", hex2: "#4166F5", hexResult: "#556B2F" },
      { ingredients: ["Yellow Ochre", "Phthalo Blue"], result: "Dark Olive", hex1: "#CB9D06", hex2: "#000F89", hexResult: "#4B5320" },
      { ingredients: ["Naples Yellow", "Prussian Blue"], result: "Forest Green", hex1: "#FADA5E", hex2: "#003153", hexResult: "#228B22" },
      { ingredients: ["Raw Sienna", "Phthalo Blue"], result: "Deep Forest", hex1: "#D68A59", hex2: "#000F89", hexResult: "#2F4F4F" },
      { ingredients: ["Cadmium Yellow", "Phthalo Green"], result: "Lime Green", hex1: "#FFD300", hex2: "#123524", hexResult: "#32CD32" },
      { ingredients: ["Lemon Yellow", "Viridian"], result: "Mint Green", hex1: "#FFF44F", hex2: "#40826D", hexResult: "#98FF98" },
      { ingredients: ["Yellow Ochre", "Viridian"], result: "Sage Green", hex1: "#CB9D06", hex2: "#40826D", hexResult: "#9DC183" },
      { ingredients: ["Indian Yellow", "Cobalt Blue"], result: "Moss Green", hex1: "#E3A857", hex2: "#0047AB", hexResult: "#8A9A5B" },
      { ingredients: ["Cadmium Yellow Deep", "Cerulean Blue"], result: "Chartreuse", hex1: "#FFA500", hex2: "#007BA7", hexResult: "#7FFF00" },
    ]
  },
  "Oranges (Red + Yellow variations)": {
    description: "Different reds and yellows make different oranges",
    mixes: [
      { ingredients: ["Cadmium Red", "Cadmium Yellow"], result: "Bright Orange", hex1: "#E30022", hex2: "#FFD300", hexResult: "#FF7F00" },
      { ingredients: ["Cadmium Red Light", "Lemon Yellow"], result: "Light Orange", hex1: "#E30022", hex2: "#FFF44F", hexResult: "#FFA500" },
      { ingredients: ["Pyrrole Red", "Hansa Yellow"], result: "Tangerine", hex1: "#E32636", hex2: "#FFEB3B", hexResult: "#FF9966" },
      { ingredients: ["Vermilion", "Cadmium Yellow Deep"], result: "Deep Orange", hex1: "#E34234", hex2: "#FFA500", hexResult: "#FF6600" },
      { ingredients: ["Quinacridone Red", "Indian Yellow"], result: "Coral", hex1: "#E8173F", hex2: "#E3A857", hexResult: "#FF7F50" },
      { ingredients: ["Cadmium Red Deep", "Yellow Ochre"], result: "Burnt Orange", hex1: "#A91B0D", hex2: "#CB9D06", hexResult: "#CC5500" },
      { ingredients: ["Alizarin Crimson", "Cadmium Yellow"], result: "Rusty Orange", hex1: "#E32636", hex2: "#FFD300", hexResult: "#E25822" },
      { ingredients: ["Vermilion", "Naples Yellow"], result: "Peach", hex1: "#E34234", hex2: "#FADA5E", hexResult: "#FFCBA4" },
      { ingredients: ["Cadmium Red", "Raw Sienna"], result: "Terra Cotta", hex1: "#E30022", hex2: "#D68A59", hexResult: "#E2725B" },
      { ingredients: ["Naphthol Red", "Gamboge"], result: "Mango", hex1: "#D10047", hex2: "#E49B0F", hexResult: "#FF8243" },
    ]
  },
  "Purples & Violets (Blue + Red variations)": {
    description: "Different blues and reds make different purples",
    mixes: [
      { ingredients: ["Ultramarine Blue", "Alizarin Crimson"], result: "Royal Purple", hex1: "#4166F5", hex2: "#E32636", hexResult: "#7851A9" },
      { ingredients: ["Ultramarine Blue", "Quinacridone Magenta"], result: "Deep Violet", hex1: "#4166F5", hex2: "#A50B5E", hexResult: "#8B008B" },
      { ingredients: ["Cobalt Blue", "Permanent Rose"], result: "Medium Purple", hex1: "#0047AB", hex2: "#FF007F", hexResult: "#9370DB" },
      { ingredients: ["Phthalo Blue", "Alizarin Crimson"], result: "Indigo", hex1: "#000F89", hex2: "#E32636", hexResult: "#4B0082" },
      { ingredients: ["Cerulean Blue", "Quinacridone Red"], result: "Lavender", hex1: "#007BA7", hex2: "#E8173F", hexResult: "#E6E6FA" },
      { ingredients: ["Ultramarine Blue", "Cadmium Red"], result: "Plum", hex1: "#4166F5", hex2: "#E30022", hexResult: "#8E4585" },
      { ingredients: ["Phthalo Blue", "Quinacridone Magenta"], result: "Blue-Violet", hex1: "#000F89", hex2: "#A50B5E", hexResult: "#8A2BE2" },
      { ingredients: ["Cobalt Blue", "Cadmium Red Deep"], result: "Burgundy Purple", hex1: "#0047AB", hex2: "#A91B0D", hexResult: "#702963" },
      { ingredients: ["Cerulean Blue", "Opera Pink"], result: "Orchid", hex1: "#007BA7", hex2: "#FF1493", hexResult: "#DA70D6" },
      { ingredients: ["Ultramarine Blue", "Permanent Rose"], result: "Mauve", hex1: "#4166F5", hex2: "#FF007F", hexResult: "#E0B0FF" },
    ]
  },
  "Browns (Complementary Mixes)": {
    description: "Mix opposite colors on the color wheel",
    mixes: [
      { ingredients: ["Orange", "Blue"], result: "Brown", hex1: "#FF7F00", hex2: "#0047AB", hexResult: "#8B4513" },
      { ingredients: ["Red", "Green"], result: "Dark Brown", hex1: "#E30022", hex2: "#32CD32", hexResult: "#654321" },
      { ingredients: ["Purple", "Yellow"], result: "Olive Brown", hex1: "#8B008B", hex2: "#FFD300", hexResult: "#6B4423" },
      { ingredients: ["Cadmium Orange", "Ultramarine Blue"], result: "Burnt Umber", hex1: "#ED872D", hex2: "#4166F5", hexResult: "#8A3324" },
      { ingredients: ["Cadmium Red", "Phthalo Green"], result: "Van Dyke Brown", hex1: "#E30022", hex2: "#123524", hexResult: "#664228" },
      { ingredients: ["Yellow Ochre", "Dioxazine Violet"], result: "Raw Umber", hex1: "#CB9D06", hex2: "#5C2D91", hexResult: "#826644" },
      { ingredients: ["Vermilion", "Viridian"], result: "Sepia", hex1: "#E34234", hex2: "#40826D", hexResult: "#704214" },
      { ingredients: ["Burnt Sienna", "Ultramarine Blue"], result: "Dark Sepia", hex1: "#E97451", hex2: "#4166F5", hexResult: "#3B3131" },
      { ingredients: ["Indian Yellow", "Cobalt Violet"], result: "Golden Brown", hex1: "#E3A857", hex2: "#914E75", hexResult: "#996515" },
      { ingredients: ["Cadmium Yellow", "Permanent Violet"], result: "Khaki", hex1: "#FFD300", hex2: "#7851A9", hexResult: "#C3B091" },
    ]
  },
  "Chromatic Blacks (No Black Paint!)": {
    description: "Mix complementary colors for rich blacks",
    mixes: [
      { ingredients: ["Ultramarine Blue", "Burnt Sienna"], result: "Warm Black", hex1: "#4166F5", hex2: "#E97451", hexResult: "#2F2F2F" },
      { ingredients: ["Phthalo Blue", "Burnt Umber"], result: "Cool Black", hex1: "#000F89", hex2: "#8A3324", hexResult: "#1A1A1A" },
      { ingredients: ["Phthalo Green", "Alizarin Crimson"], result: "Rich Black", hex1: "#123524", hex2: "#E32636", hexResult: "#141414" },
      { ingredients: ["Phthalo Green", "Quinacridone Red"], result: "Neutral Black", hex1: "#123524", hex2: "#E8173F", hexResult: "#1C1C1C" },
      { ingredients: ["Ultramarine Blue", "Burnt Umber"], result: "Blue-Black", hex1: "#4166F5", hex2: "#8A3324", hexResult: "#1F1F2E" },
      { ingredients: ["Prussian Blue", "Burnt Sienna"], result: "Indigo Black", hex1: "#003153", hex2: "#E97451", hexResult: "#1B1811" },
      { ingredients: ["Viridian", "Alizarin Crimson"], result: "Green-Black", hex1: "#40826D", hex2: "#E32636", hexResult: "#1E1E1E" },
      { ingredients: ["Dioxazine Violet", "Yellow Ochre", "Phthalo Green"], result: "Chromatic Black", hex1: "#5C2D91", hex2: "#CB9D06", hexResult: "#0D0D0D", hex3: "#123524" },
    ]
  },
  "Grays (Multiple Methods)": {
    description: "Several ways to mix beautiful grays",
    mixes: [
      { ingredients: ["Black", "White"], result: "Neutral Gray", hex1: "#1C1C1C", hex2: "#FFFFFF", hexResult: "#808080" },
      { ingredients: ["Ultramarine Blue", "Burnt Sienna", "White"], result: "Blue-Gray", hex1: "#4166F5", hex2: "#E97451", hexResult: "#536878", hex3: "#FFFFFF" },
      { ingredients: ["Raw Umber", "White"], result: "Warm Gray", hex1: "#826644", hex2: "#FFFFFF", hexResult: "#A89F91" },
      { ingredients: ["Payne's Gray", "Yellow Ochre"], result: "Greenish Gray", hex1: "#536878", hex2: "#CB9D06", hexResult: "#8F8F7A" },
      { ingredients: ["Ultramarine Blue", "Orange", "White"], result: "Lavender Gray", hex1: "#4166F5", hex2: "#FF7F00", hexResult: "#9090A0", hex3: "#FFFFFF" },
      { ingredients: ["Viridian", "Cadmium Red", "White"], result: "Taupe", hex1: "#40826D", hex2: "#E30022", hexResult: "#8B8589", hex3: "#FFFFFF" },
      { ingredients: ["Phthalo Blue", "Burnt Umber", "White"], result: "Slate Gray", hex1: "#000F89", hex2: "#8A3324", hexResult: "#708090", hex3: "#FFFFFF" },
      { ingredients: ["Cobalt Blue", "Raw Sienna"], result: "Pewter", hex1: "#0047AB", hex2: "#D68A59", hexResult: "#8E8E8E" },
    ]
  },
  "Skin Tones (Light to Dark)": {
    description: "Formulas for painting realistic skin",
    mixes: [
      { ingredients: ["White", "Yellow Ochre", "Cadmium Red (tiny)"], result: "Pale Skin", hex1: "#FFFFFF", hex2: "#CB9D06", hexResult: "#FFEFD5", hex3: "#E30022" },
      { ingredients: ["White", "Yellow Ochre", "Cadmium Red", "Ultramarine (tiny)"], result: "Fair Skin", hex1: "#FFFFFF", hex2: "#CB9D06", hexResult: "#FFE4C4", hex3: "#E30022" },
      { ingredients: ["Yellow Ochre", "Cadmium Red", "White"], result: "Light Skin", hex1: "#CB9D06", hex2: "#E30022", hexResult: "#FFDAB9", hex3: "#FFFFFF" },
      { ingredients: ["Yellow Ochre", "Burnt Sienna", "White"], result: "Medium Light Skin", hex1: "#CB9D06", hex2: "#E97451", hexResult: "#DEB887", hex3: "#FFFFFF" },
      { ingredients: ["Burnt Sienna", "Yellow Ochre", "Cadmium Red"], result: "Medium Skin", hex1: "#E97451", hex2: "#CB9D06", hexResult: "#D2B48C", hex3: "#E30022" },
      { ingredients: ["Burnt Sienna", "Raw Umber", "Cadmium Red"], result: "Tan Skin", hex1: "#E97451", hex2: "#826644", hexResult: "#C19A6B", hex3: "#E30022" },
      { ingredients: ["Burnt Umber", "Cadmium Red", "Yellow Ochre"], result: "Olive Skin", hex1: "#8A3324", hex2: "#E30022", hexResult: "#A67B5B", hex3: "#CB9D06" },
      { ingredients: ["Burnt Sienna", "Ultramarine Blue (tiny)"], result: "Dark Tan", hex1: "#E97451", hex2: "#4166F5", hexResult: "#8B7355" },
      { ingredients: ["Burnt Umber", "Ultramarine Blue", "Cadmium Red"], result: "Dark Skin", hex1: "#8A3324", hex2: "#4166F5", hexResult: "#6B4423", hex3: "#E30022" },
      { ingredients: ["Burnt Umber", "Phthalo Blue", "Cadmium Red Deep"], result: "Deep Dark Skin", hex1: "#8A3324", hex2: "#000F89", hexResult: "#3D2B1F", hex3: "#A91B0D" },
    ]
  },
  "Tints (Adding White)": {
    description: "Make any color lighter by adding white",
    mixes: [
      { ingredients: ["Cadmium Red", "White"], result: "Pink", hex1: "#E30022", hex2: "#FFFFFF", hexResult: "#FF6B6B" },
      { ingredients: ["Cadmium Red", "More White"], result: "Light Pink", hex1: "#E30022", hex2: "#FFFFFF", hexResult: "#FFB6C1" },
      { ingredients: ["Ultramarine Blue", "White"], result: "Sky Blue", hex1: "#4166F5", hex2: "#FFFFFF", hexResult: "#87CEEB" },
      { ingredients: ["Ultramarine Blue", "More White"], result: "Baby Blue", hex1: "#4166F5", hex2: "#FFFFFF", hexResult: "#89CFF0" },
      { ingredients: ["Cadmium Yellow", "White"], result: "Cream", hex1: "#FFD300", hex2: "#FFFFFF", hexResult: "#FFFDD0" },
      { ingredients: ["Phthalo Green", "White"], result: "Mint", hex1: "#123524", hex2: "#FFFFFF", hexResult: "#98FF98" },
      { ingredients: ["Dioxazine Violet", "White"], result: "Lavender", hex1: "#5C2D91", hex2: "#FFFFFF", hexResult: "#E6E6FA" },
      { ingredients: ["Burnt Sienna", "White"], result: "Salmon", hex1: "#E97451", hex2: "#FFFFFF", hexResult: "#FA8072" },
      { ingredients: ["Cadmium Orange", "White"], result: "Peach", hex1: "#ED872D", hex2: "#FFFFFF", hexResult: "#FFDAB9" },
      { ingredients: ["Viridian", "White"], result: "Seafoam", hex1: "#40826D", hex2: "#FFFFFF", hexResult: "#98FF98" },
    ]
  },
  "Shades (Adding Black)": {
    description: "Make any color darker by adding black",
    mixes: [
      { ingredients: ["Cadmium Red", "Black"], result: "Maroon", hex1: "#E30022", hex2: "#1C1C1C", hexResult: "#800000" },
      { ingredients: ["Cadmium Red", "More Black"], result: "Burgundy", hex1: "#E30022", hex2: "#1C1C1C", hexResult: "#4A0000" },
      { ingredients: ["Ultramarine Blue", "Black"], result: "Navy Blue", hex1: "#4166F5", hex2: "#1C1C1C", hexResult: "#000080" },
      { ingredients: ["Ultramarine Blue", "More Black"], result: "Midnight Blue", hex1: "#4166F5", hex2: "#1C1C1C", hexResult: "#191970" },
      { ingredients: ["Cadmium Yellow", "Black"], result: "Olive", hex1: "#FFD300", hex2: "#1C1C1C", hexResult: "#808000" },
      { ingredients: ["Green", "Black"], result: "Forest Green", hex1: "#32CD32", hex2: "#1C1C1C", hexResult: "#228B22" },
      { ingredients: ["Green", "More Black"], result: "Hunter Green", hex1: "#32CD32", hex2: "#1C1C1C", hexResult: "#355E3B" },
      { ingredients: ["Purple", "Black"], result: "Eggplant", hex1: "#8B008B", hex2: "#1C1C1C", hexResult: "#614051" },
      { ingredients: ["Orange", "Black"], result: "Brown", hex1: "#FF7F00", hex2: "#1C1C1C", hexResult: "#8B4513" },
      { ingredients: ["Pink", "Black"], result: "Mauve", hex1: "#FF69B4", hex2: "#1C1C1C", hexResult: "#915F6D" },
    ]
  },
  "Muted Colors (Adding Complement)": {
    description: "Tone down bright colors with their complement",
    mixes: [
      { ingredients: ["Cadmium Red", "Green (tiny)"], result: "Muted Red", hex1: "#E30022", hex2: "#32CD32", hexResult: "#B33636" },
      { ingredients: ["Cadmium Yellow", "Purple (tiny)"], result: "Muted Yellow", hex1: "#FFD300", hex2: "#8B008B", hexResult: "#D4B830" },
      { ingredients: ["Ultramarine Blue", "Orange (tiny)"], result: "Muted Blue", hex1: "#4166F5", hex2: "#FF7F00", hexResult: "#4A6FA5" },
      { ingredients: ["Bright Green", "Red (tiny)"], result: "Sage", hex1: "#32CD32", hex2: "#E30022", hexResult: "#9DC183" },
      { ingredients: ["Purple", "Yellow (tiny)"], result: "Dusty Purple", hex1: "#8B008B", hex2: "#FFD300", hexResult: "#7A5C7A" },
      { ingredients: ["Orange", "Blue (tiny)"], result: "Terracotta", hex1: "#FF7F00", hex2: "#0047AB", hexResult: "#E2725B" },
      { ingredients: ["Pink", "Green (tiny)"], result: "Dusty Rose", hex1: "#FF69B4", hex2: "#32CD32", hexResult: "#D4A5A5" },
      { ingredients: ["Turquoise", "Red-Orange (tiny)"], result: "Teal Gray", hex1: "#40E0D0", hex2: "#FF4500", hexResult: "#5F9EA0" },
    ]
  },
  "Special Effects": {
    description: "Unique color combinations for special effects",
    mixes: [
      { ingredients: ["Phthalo Blue", "Quinacridone Magenta"], result: "Electric Purple", hex1: "#000F89", hex2: "#A50B5E", hexResult: "#BF00FF" },
      { ingredients: ["Cadmium Yellow", "Quinacridone Magenta"], result: "Hot Pink", hex1: "#FFD300", hex2: "#A50B5E", hexResult: "#FF1493" },
      { ingredients: ["Phthalo Green", "Cadmium Yellow"], result: "Neon Green", hex1: "#123524", hex2: "#FFD300", hexResult: "#39FF14" },
      { ingredients: ["White", "Ultramarine Blue (touch)"], result: "Ice Blue", hex1: "#FFFFFF", hex2: "#4166F5", hexResult: "#B0E0E6" },
      { ingredients: ["Naples Yellow", "Quinacridone Magenta"], result: "Coral Pink", hex1: "#FADA5E", hex2: "#A50B5E", hexResult: "#FF7F50" },
      { ingredients: ["Cerulean Blue", "Phthalo Green"], result: "Aqua", hex1: "#007BA7", hex2: "#123524", hexResult: "#00FFFF" },
      { ingredients: ["Cadmium Orange", "Quinacridone Magenta"], result: "Scarlet", hex1: "#ED872D", hex2: "#A50B5E", hexResult: "#FF2400" },
      { ingredients: ["Yellow Ochre", "Dioxazine Violet"], result: "Bronze", hex1: "#CB9D06", hex2: "#5C2D91", hexResult: "#CD7F32" },
    ]
  },
};

// Warm/Cool color relationships
const warmCoolGuide = {
  warm: [
    { name: "Cadmium Red", hex: "#E30022" },
    { name: "Cadmium Orange", hex: "#ED872D" },
    { name: "Cadmium Yellow", hex: "#FFD300" },
    { name: "Yellow Ochre", hex: "#CB9D06" },
    { name: "Burnt Sienna", hex: "#E97451" },
    { name: "Burnt Umber", hex: "#8A3324" },
  ],
  cool: [
    { name: "Alizarin Crimson", hex: "#E32636" },
    { name: "Quinacridone Magenta", hex: "#A50B5E" },
    { name: "Ultramarine Blue", hex: "#4166F5" },
    { name: "Phthalo Blue", hex: "#000F89" },
    { name: "Viridian", hex: "#40826D" },
    { name: "Phthalo Green", hex: "#123524" },
  ]
};

function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1a1a1a' : '#ffffff';
}

// Single Mix Row Component
function MixRow({ mix, compact = false }) {
  const hasThird = mix.hex3;
  
  if (compact) {
    return (
      <div className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-gray-100">
        <div className="w-8 h-8 rounded shadow-sm flex-shrink-0" style={{ backgroundColor: mix.hex1 }} 
          title={mix.ingredients[0]} />
        <span className="text-gray-400 text-xs">+</span>
        <div className="w-8 h-8 rounded shadow-sm flex-shrink-0" style={{ backgroundColor: mix.hex2 }} 
          title={mix.ingredients[1]} />
        {hasThird && (
          <>
            <span className="text-gray-400 text-xs">+</span>
            <div className="w-8 h-8 rounded shadow-sm flex-shrink-0" style={{ backgroundColor: mix.hex3 }} 
              title={mix.ingredients[2]} />
          </>
        )}
        <span className="text-gray-400 text-xs">=</span>
        <div className="w-10 h-10 rounded-lg shadow flex-shrink-0 ring-2 ring-gray-200" 
          style={{ backgroundColor: mix.hexResult }} />
        <div className="ml-2 min-w-0">
          <p className="text-xs font-medium text-gray-800 truncate">{mix.result}</p>
          <p className="text-[9px] text-gray-400 truncate">{mix.ingredients.join(' + ')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-lg shadow" style={{ backgroundColor: mix.hex1 }} />
        <span className="text-[9px] mt-1 text-center max-w-14 leading-tight text-gray-600">{mix.ingredients[0]}</span>
      </div>
      <span className="text-xl text-gray-300 font-light">+</span>
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-lg shadow" style={{ backgroundColor: mix.hex2 }} />
        <span className="text-[9px] mt-1 text-center max-w-14 leading-tight text-gray-600">{mix.ingredients[1]}</span>
      </div>
      {hasThird && (
        <>
          <span className="text-xl text-gray-300 font-light">+</span>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-lg shadow" style={{ backgroundColor: mix.hex3 }} />
            <span className="text-[9px] mt-1 text-center max-w-14 leading-tight text-gray-600">{mix.ingredients[2]}</span>
          </div>
        </>
      )}
      <span className="text-xl text-gray-300 font-light">=</span>
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-xl shadow-lg ring-2 ring-gray-200" style={{ backgroundColor: mix.hexResult }} />
        <span className="text-[10px] mt-1 font-semibold text-center max-w-16 leading-tight text-gray-800">{mix.result}</span>
        <span className="text-[8px] font-mono text-gray-400">{mix.hexResult}</span>
      </div>
    </div>
  );
}

// Category Section Component
function MixingCategory({ category, data, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-6 print-card">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all no-print-toggle"
      >
        <div className="text-left">
          <h3 className="text-lg font-bold text-gray-800">{category}</h3>
          <p className="text-sm text-gray-500">{data.description}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
            {data.mixes.length} mixes
          </span>
          <span className="text-xl text-gray-400 no-print">{isOpen ? '−' : '+'}</span>
        </div>
      </button>
      
      <div className={`mt-3 grid gap-3 ${isOpen ? 'block' : 'hidden'} print-always-show`} 
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
        {data.mixes.map((mix, i) => (
          <MixRow key={i} mix={mix} />
        ))}
      </div>
    </div>
  );
}

// Printable Grid View
function PrintableGrid() {
  return (
    <div className="space-y-8">
      {Object.entries(mixingDatabase).map(([category, data]) => (
        <div key={category} className="print-card page-break-inside-avoid">
          <div className="bg-gray-800 text-white p-3 rounded-t-xl">
            <h3 className="font-bold">{category}</h3>
            <p className="text-xs text-gray-300">{data.description}</p>
          </div>
          <div className="bg-white border border-gray-200 border-t-0 rounded-b-xl p-4">
            <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
              {data.mixes.map((mix, i) => (
                <MixRow key={i} mix={mix} compact />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Color Wheel Interactive
function ColorWheelSection() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 print-card">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🎨 The Color Wheel - Your Mixing Guide</h3>
      
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Visual Wheel */}
        <svg viewBox="0 0 300 300" className="w-64 h-64">
          {/* Outer ring segments */}
          {[
            { color: "#E30022", angle: 0, label: "Red" },
            { color: "#FF4500", angle: 30, label: "R-O" },
            { color: "#FF7F00", angle: 60, label: "Orange" },
            { color: "#FFAE42", angle: 90, label: "Y-O" },
            { color: "#FFD300", angle: 120, label: "Yellow" },
            { color: "#9ACD32", angle: 150, label: "Y-G" },
            { color: "#32CD32", angle: 180, label: "Green" },
            { color: "#008B8B", angle: 210, label: "B-G" },
            { color: "#0047AB", angle: 240, label: "Blue" },
            { color: "#4B0082", angle: 270, label: "B-V" },
            { color: "#8B008B", angle: 300, label: "Violet" },
            { color: "#C71585", angle: 330, label: "R-V" },
          ].map((segment, i) => {
            const startAngle = (segment.angle - 15) * Math.PI / 180;
            const endAngle = (segment.angle + 15) * Math.PI / 180;
            const x1 = 150 + 120 * Math.cos(startAngle);
            const y1 = 150 + 120 * Math.sin(startAngle);
            const x2 = 150 + 120 * Math.cos(endAngle);
            const y2 = 150 + 120 * Math.sin(endAngle);
            const x3 = 150 + 60 * Math.cos(endAngle);
            const y3 = 150 + 60 * Math.sin(endAngle);
            const x4 = 150 + 60 * Math.cos(startAngle);
            const y4 = 150 + 60 * Math.sin(startAngle);
            
            return (
              <path key={i}
                d={`M ${x1} ${y1} A 120 120 0 0 1 ${x2} ${y2} L ${x3} ${y3} A 60 60 0 0 0 ${x4} ${y4} Z`}
                fill={segment.color}
                stroke="white"
                strokeWidth="2"
              />
            );
          })}
          
          {/* Center */}
          <circle cx="150" cy="150" r="55" fill="white" stroke="#e5e7eb" strokeWidth="2" />
          <text x="150" y="145" textAnchor="middle" fontSize="11" fill="#666" fontWeight="bold">COLOR</text>
          <text x="150" y="160" textAnchor="middle" fontSize="11" fill="#666" fontWeight="bold">WHEEL</text>
        </svg>

        {/* Legend */}
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">Primary Colors</h4>
            <div className="flex gap-2">
              {[{ name: "Red", hex: "#E30022" }, { name: "Yellow", hex: "#FFD300" }, { name: "Blue", hex: "#0047AB" }].map(c => (
                <div key={c.name} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg shadow" style={{ backgroundColor: c.hex }} />
                  <span className="text-xs mt-1">{c.name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-red-600 mt-2">Cannot be mixed - must buy these!</p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-800 mb-2">Secondary Colors</h4>
            <div className="flex gap-2">
              {[{ name: "Orange", hex: "#FF7F00" }, { name: "Green", hex: "#32CD32" }, { name: "Violet", hex: "#8B008B" }].map(c => (
                <div key={c.name} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-lg shadow" style={{ backgroundColor: c.hex }} />
                  <span className="text-xs mt-1">{c.name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-green-600 mt-2">Mix 2 primaries!</p>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-2">Complementary = Opposites</h4>
            <p className="text-xs text-purple-600">Colors across from each other make brown/black when mixed!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Warm vs Cool Section
function WarmCoolSection() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 print-card">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🔥 Warm vs ❄️ Cool Colors</h3>
      <p className="text-center text-gray-500 mb-6">Warm colors advance (come forward), cool colors recede (go back)</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE0CC 100%)' }}>
          <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">🔥 Warm Colors</h4>
          <div className="grid grid-cols-3 gap-3">
            {warmCoolGuide.warm.map((c, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg shadow" style={{ backgroundColor: c.hex }} />
                <span className="text-[10px] mt-1 text-center">{c.name}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-orange-700 mt-3">Use for: sunlight, fire, skin, foreground objects</p>
        </div>
        
        <div className="p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, #E6F3FF 0%, #CCE5FF 100%)' }}>
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">❄️ Cool Colors</h4>
          <div className="grid grid-cols-3 gap-3">
            {warmCoolGuide.cool.map((c, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg shadow" style={{ backgroundColor: c.hex }} />
                <span className="text-[10px] mt-1 text-center">{c.name}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-blue-700 mt-3">Use for: shadows, water, sky, background/distance</p>
        </div>
      </div>
    </div>
  );
}

// Quick Reference Card
function QuickReferenceCard() {
  const quickMixes = [
    { need: "Green", mix: "Yellow + Blue", hex: "#32CD32" },
    { need: "Orange", mix: "Red + Yellow", hex: "#FF7F00" },
    { need: "Purple", mix: "Blue + Red", hex: "#8B008B" },
    { need: "Brown", mix: "Orange + Blue", hex: "#8B4513" },
    { need: "Pink", mix: "Red + White", hex: "#FF69B4" },
    { need: "Gray", mix: "Black + White", hex: "#808080" },
    { need: "Teal", mix: "Blue + Green", hex: "#008B8B" },
    { need: "Maroon", mix: "Red + Black", hex: "#800000" },
    { need: "Olive", mix: "Yellow + Black", hex: "#808000" },
    { need: "Navy", mix: "Blue + Black", hex: "#000080" },
    { need: "Coral", mix: "Red + Orange + White", hex: "#FF7F50" },
    { need: "Lavender", mix: "Purple + White", hex: "#E6E6FA" },
  ];

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-300 p-6 print-card">
      <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">⚡ Quick Reference - Common Mixes</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {quickMixes.map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-3 shadow-sm border border-yellow-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded shadow" style={{ backgroundColor: item.hex }} />
              <span className="font-semibold text-sm text-gray-800">{item.need}</span>
            </div>
            <p className="text-xs text-gray-500">{item.mix}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Component
export default function ColorMixingMasterGuide() {
  const [viewMode, setViewMode] = useState('interactive');
  const [expandAll, setExpandAll] = useState(false);
  
  const totalMixes = Object.values(mixingDatabase).reduce((sum, cat) => sum + cat.mixes.length, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
        
        @media print {
          body { 
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .no-print { display: none !important; }
          .print-card { break-inside: avoid; page-break-inside: avoid; margin-bottom: 16px; }
          .page-break-inside-avoid { break-inside: avoid; }
          .print-always-show { display: grid !important; }
          .no-print-toggle { pointer-events: none; }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-800">
                🎨 Complete Color Mixing Guide
              </h1>
              <p className="text-sm text-gray-500">
                {totalMixes} mixing recipes • All combinations • Printable charts
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setExpandAll(!expandAll)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                {expandAll ? '📁 Collapse All' : '📂 Expand All'}
              </button>
              <button
                onClick={handlePrint}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                🖨️ Print Guide
              </button>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex gap-1 p-1 rounded-xl bg-gray-100 w-fit">
            {[
              { id: 'interactive', label: '📋 Interactive View' },
              { id: 'grid', label: '📊 Compact Grid' },
              { id: 'reference', label: '📖 Reference Cards' },
            ].map(view => (
              <button key={view.id} onClick={() => setViewMode(view.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  backgroundColor: viewMode === view.id ? 'white' : 'transparent',
                  color: viewMode === view.id ? '#1a1a1a' : '#666',
                  boxShadow: viewMode === view.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                }}>
                {view.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Color Wheel - Always Show */}
        <div className="mb-8">
          <ColorWheelSection />
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <QuickReferenceCard />
        </div>

        {/* Warm vs Cool */}
        <div className="mb-8">
          <WarmCoolSection />
        </div>

        {/* Main Content Based on View Mode */}
        {viewMode === 'interactive' && (
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800 mb-4">📚 All Mixing Recipes by Category</h2>
            {Object.entries(mixingDatabase).map(([category, data], index) => (
              <MixingCategory 
                key={category} 
                category={category} 
                data={data} 
                defaultOpen={expandAll || index < 3}
              />
            ))}
          </div>
        )}

        {viewMode === 'grid' && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">📊 Compact Mixing Grid (Print-Friendly)</h2>
            <PrintableGrid />
          </div>
        )}

        {viewMode === 'reference' && (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">📖 Reference Cards</h2>
            
            {/* Primary/Secondary Quick Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 print-card">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🔴🟡🔵 Primary → Secondary</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <div className="w-12 h-12 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
                    <span className="text-2xl">+</span>
                    <div className="w-12 h-12 rounded-full shadow" style={{ backgroundColor: '#FFD300' }} />
                    <span className="text-2xl">=</span>
                    <div className="w-14 h-14 rounded-full shadow-lg ring-4 ring-orange-200" style={{ backgroundColor: '#FF7F00' }} />
                  </div>
                  <p className="font-bold text-orange-800">RED + YELLOW = ORANGE</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <div className="w-12 h-12 rounded-full shadow" style={{ backgroundColor: '#FFD300' }} />
                    <span className="text-2xl">+</span>
                    <div className="w-12 h-12 rounded-full shadow" style={{ backgroundColor: '#0047AB' }} />
                    <span className="text-2xl">=</span>
                    <div className="w-14 h-14 rounded-full shadow-lg ring-4 ring-green-200" style={{ backgroundColor: '#32CD32' }} />
                  </div>
                  <p className="font-bold text-green-800">YELLOW + BLUE = GREEN</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <div className="w-12 h-12 rounded-full shadow" style={{ backgroundColor: '#0047AB' }} />
                    <span className="text-2xl">+</span>
                    <div className="w-12 h-12 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
                    <span className="text-2xl">=</span>
                    <div className="w-14 h-14 rounded-full shadow-lg ring-4 ring-purple-200" style={{ backgroundColor: '#8B008B' }} />
                  </div>
                  <p className="font-bold text-purple-800">BLUE + RED = PURPLE</p>
                </div>
              </div>
            </div>

            {/* Tints & Shades Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 print-card">
              <h3 className="text-lg font-bold text-gray-800 mb-4">☀️ Tints (+ White) & 🌙 Shades (+ Black)</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <h4 className="font-bold text-gray-700 mb-3">Add WHITE to make TINTS (lighter)</h4>
                  <div className="space-y-2">
                    {[
                      { base: "#E30022", tint: "#FF6B6B", tint2: "#FFB6C1", name: "Red → Pink" },
                      { base: "#0047AB", tint: "#6495ED", tint2: "#B0E0E6", name: "Blue → Sky Blue" },
                      { base: "#8B008B", tint: "#9370DB", tint2: "#E6E6FA", name: "Purple → Lavender" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded shadow" style={{ backgroundColor: item.base }} />
                        <span className="text-gray-400">→</span>
                        <div className="w-8 h-8 rounded shadow" style={{ backgroundColor: item.tint }} />
                        <span className="text-gray-400">→</span>
                        <div className="w-8 h-8 rounded shadow" style={{ backgroundColor: item.tint2 }} />
                        <span className="text-xs text-gray-600 ml-2">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-100 rounded-xl">
                  <h4 className="font-bold text-gray-700 mb-3">Add BLACK to make SHADES (darker)</h4>
                  <div className="space-y-2">
                    {[
                      { base: "#E30022", shade: "#8B0000", shade2: "#4A0000", name: "Red → Maroon" },
                      { base: "#0047AB", shade: "#000080", shade2: "#191970", name: "Blue → Navy" },
                      { base: "#32CD32", shade: "#228B22", shade2: "#006400", name: "Green → Forest" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded shadow" style={{ backgroundColor: item.base }} />
                        <span className="text-gray-400">→</span>
                        <div className="w-8 h-8 rounded shadow" style={{ backgroundColor: item.shade }} />
                        <span className="text-gray-400">→</span>
                        <div className="w-8 h-8 rounded shadow" style={{ backgroundColor: item.shade2 }} />
                        <span className="text-xs text-gray-600 ml-2">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Complementary Mixes Card */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 print-card">
              <h3 className="text-lg font-bold text-gray-800 mb-2">⚔️ Complementary Colors (Opposites)</h3>
              <p className="text-sm text-gray-500 mb-4">Mix opposite colors to get browns, grays, and blacks!</p>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { c1: "#E30022", c2: "#32CD32", name1: "Red", name2: "Green", result: "#654321", resultName: "Brown" },
                  { c1: "#FF7F00", c2: "#0047AB", name1: "Orange", name2: "Blue", result: "#8B4513", resultName: "Brown" },
                  { c1: "#FFD300", c2: "#8B008B", name1: "Yellow", name2: "Purple", result: "#6B4423", resultName: "Brown" },
                ].map((pair, i) => (
                  <div key={i} className="text-center p-3 bg-gray-50 rounded-xl">
                    <div className="flex justify-center items-center gap-1 mb-2">
                      <div className="w-10 h-10 rounded-full shadow" style={{ backgroundColor: pair.c1 }} />
                      <span className="text-lg text-gray-400">+</span>
                      <div className="w-10 h-10 rounded-full shadow" style={{ backgroundColor: pair.c2 }} />
                      <span className="text-lg text-gray-400">=</span>
                      <div className="w-12 h-12 rounded-full shadow-lg" style={{ backgroundColor: pair.result }} />
                    </div>
                    <p className="text-xs font-medium">{pair.name1} + {pair.name2} = {pair.resultName}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* All Categories in Grid */}
            <PrintableGrid />
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 print-card">
          <h3 className="text-xl font-bold text-blue-800 mb-4">💡 Pro Mixing Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-700 mb-2">For Clean Colors:</h4>
              <ul className="text-sm text-blue-900 space-y-1">
                <li>• Add dark colors to light (not light to dark)</li>
                <li>• Clean brush between colors</li>
                <li>• Mix on a white palette to see true color</li>
                <li>• Test on scrap paper before painting</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-purple-700 mb-2">For Better Results:</h4>
              <ul className="text-sm text-purple-900 space-y-1">
                <li>• Warm yellow + Warm blue = Bright green</li>
                <li>• Cool yellow + Cool blue = Muted green</li>
                <li>• Use complement to dull a color (not black!)</li>
                <li>• Keep a mixing journal of your favorites</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-8 bg-white no-print">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Print any section as a reference chart for your studio! 🎨</p>
        </div>
      </footer>
    </div>
  );
}
