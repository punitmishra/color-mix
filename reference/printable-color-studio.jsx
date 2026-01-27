import React, { useState, useMemo } from 'react';

// Comprehensive pigment database with real art pigment codes
const pigmentData = {
  "Yellows": [
    { name: "Lemon Yellow", hex: "#FFF44F", code: "PY3" },
    { name: "Hansa Yellow Light", hex: "#FFEB3B", code: "PY3" },
    { name: "Hansa Yellow Medium", hex: "#FFD700", code: "PY97" },
    { name: "Hansa Yellow Deep", hex: "#FFBF00", code: "PY65" },
    { name: "Cadmium Yellow Lemon", hex: "#FFF700", code: "PY37" },
    { name: "Cadmium Yellow Light", hex: "#FDEE00", code: "PY37" },
    { name: "Cadmium Yellow Medium", hex: "#FFD300", code: "PY37" },
    { name: "Cadmium Yellow Deep", hex: "#FFA500", code: "PY37" },
    { name: "Aureolin", hex: "#FDEE00", code: "PY40" },
    { name: "Gamboge", hex: "#E49B0F", code: "NY24" },
    { name: "Indian Yellow", hex: "#E3A857", code: "PY153" },
    { name: "Naples Yellow", hex: "#FADA5E", code: "PY41" },
    { name: "Naples Yellow Deep", hex: "#E4A010", code: "PBr24" },
    { name: "Yellow Ochre", hex: "#CB9D06", code: "PY43" },
    { name: "Gold Ochre", hex: "#CC7722", code: "PY43" },
    { name: "Mars Yellow", hex: "#E4A010", code: "PY42" },
    { name: "Raw Sienna", hex: "#D68A59", code: "PBr7" },
    { name: "Transparent Yellow", hex: "#FFE135", code: "PY150" },
    { name: "Bismuth Yellow", hex: "#F0E130", code: "PY184" },
    { name: "Nickel Titanate", hex: "#E8E4C9", code: "PY53" },
    { name: "Benzimidazolone Yellow", hex: "#FFCC00", code: "PY154" },
    { name: "Arylide Yellow", hex: "#E9D66B", code: "PY1" },
    { name: "Chrome Yellow", hex: "#FFC200", code: "PY34" },
    { name: "Strontium Yellow", hex: "#E4D00A", code: "PY32" },
  ],
  "Oranges": [
    { name: "Cadmium Orange", hex: "#ED872D", code: "PO20" },
    { name: "Cadmium Orange Deep", hex: "#E55B3C", code: "PO20" },
    { name: "Pyrrole Orange", hex: "#FF5800", code: "PO73" },
    { name: "Perinone Orange", hex: "#FF6700", code: "PO43" },
    { name: "Benzimidazolone Orange", hex: "#FF5F1F", code: "PO62" },
    { name: "Quinacridone Orange", hex: "#FF6347", code: "PO48" },
    { name: "Transparent Orange", hex: "#FF7F50", code: "PO71" },
    { name: "Mars Orange", hex: "#E2703A", code: "PR101" },
    { name: "Chrome Orange", hex: "#FF7F00", code: "PO21" },
    { name: "Isoindolinone Orange", hex: "#FF8C00", code: "PO61" },
    { name: "DPP Orange", hex: "#FF6F00", code: "PO73" },
    { name: "Burnt Sienna", hex: "#E97451", code: "PBr7" },
  ],
  "Reds": [
    { name: "Cadmium Red Light", hex: "#E30022", code: "PR108" },
    { name: "Cadmium Red Medium", hex: "#E21A1A", code: "PR108" },
    { name: "Cadmium Red Deep", hex: "#A91B0D", code: "PR108" },
    { name: "Cadmium Scarlet", hex: "#E52B50", code: "PR108" },
    { name: "Vermilion", hex: "#E34234", code: "PR106" },
    { name: "Vermilion Hue", hex: "#D9381E", code: "PR188" },
    { name: "Pyrrole Red", hex: "#E32636", code: "PR254" },
    { name: "Pyrrole Red Light", hex: "#FF2400", code: "PR255" },
    { name: "Pyrrole Red Deep", hex: "#B22222", code: "PR264" },
    { name: "Naphthol Red Light", hex: "#D10047", code: "PR112" },
    { name: "Naphthol Red Medium", hex: "#C41E3A", code: "PR170" },
    { name: "Naphthol Red Deep", hex: "#A52A2A", code: "PR170" },
    { name: "Quinacridone Red", hex: "#E8173F", code: "PR209" },
    { name: "Quinacridone Rose", hex: "#E32636", code: "PV19" },
    { name: "Quinacridone Crimson", hex: "#DC143C", code: "PR206" },
    { name: "Alizarin Crimson", hex: "#E32636", code: "PR83" },
    { name: "Permanent Alizarin", hex: "#E32636", code: "PR177" },
    { name: "Carmine", hex: "#960018", code: "NR4" },
    { name: "Rose Madder", hex: "#E32636", code: "NR9" },
    { name: "Perylene Red", hex: "#B32821", code: "PR178" },
    { name: "Perylene Maroon", hex: "#800000", code: "PR179" },
    { name: "Venetian Red", hex: "#C80815", code: "PR101" },
    { name: "Indian Red", hex: "#CD5C5C", code: "PR101" },
    { name: "English Red", hex: "#AB4E52", code: "PR101" },
    { name: "Mars Red", hex: "#AD6242", code: "PR101" },
    { name: "Red Ochre", hex: "#913831", code: "PR102" },
    { name: "Terra Rosa", hex: "#C75B4A", code: "PR102" },
    { name: "Caput Mortuum", hex: "#592720", code: "PR101" },
  ],
  "Pinks & Magentas": [
    { name: "Quinacridone Magenta", hex: "#A50B5E", code: "PR122" },
    { name: "Permanent Magenta", hex: "#D0417E", code: "PR122" },
    { name: "Primary Magenta", hex: "#FF0090", code: "PR122" },
    { name: "Opera Pink", hex: "#FF1493", code: "BV10" },
    { name: "Brilliant Pink", hex: "#FF007F", code: "PR122" },
    { name: "Permanent Rose", hex: "#FF007F", code: "PV19" },
    { name: "Rhodamine", hex: "#E0115F", code: "PR81" },
    { name: "Quinacridone Pink", hex: "#DE5D83", code: "PV42" },
    { name: "Potter's Pink", hex: "#D68A59", code: "PR233" },
    { name: "Shell Pink", hex: "#FFB4BB", code: "PR108/PW6" },
    { name: "Flesh Tint", hex: "#FFCBA4", code: "PW6/PY42" },
    { name: "Jaune Brilliant", hex: "#F5DEB3", code: "PW6/PY42" },
  ],
  "Violets & Purples": [
    { name: "Dioxazine Violet", hex: "#5C2D91", code: "PV23" },
    { name: "Dioxazine Purple", hex: "#663399", code: "PV23" },
    { name: "Ultramarine Violet", hex: "#5F4B8B", code: "PV15" },
    { name: "Cobalt Violet", hex: "#914E75", code: "PV14" },
    { name: "Cobalt Violet Deep", hex: "#722F37", code: "PV14" },
    { name: "Cobalt Violet Light", hex: "#B784A7", code: "PV49" },
    { name: "Manganese Violet", hex: "#8B008B", code: "PV16" },
    { name: "Quinacridone Violet", hex: "#922B3E", code: "PV19" },
    { name: "Mars Violet", hex: "#6B3FA0", code: "PR101" },
    { name: "Mauve", hex: "#E0B0FF", code: "PV15/PW6" },
    { name: "Permanent Violet", hex: "#7851A9", code: "PV23" },
    { name: "Carbazole Violet", hex: "#4A2C4A", code: "PV23" },
    { name: "Perylene Violet", hex: "#4E2A5A", code: "PV29" },
  ],
  "Blues": [
    { name: "Ultramarine Blue", hex: "#4166F5", code: "PB29" },
    { name: "French Ultramarine", hex: "#2A52BE", code: "PB29" },
    { name: "Ultramarine Light", hex: "#6495ED", code: "PB29" },
    { name: "Ultramarine Deep", hex: "#120A8F", code: "PB29" },
    { name: "Cobalt Blue", hex: "#0047AB", code: "PB28" },
    { name: "Cobalt Blue Deep", hex: "#002FA7", code: "PB28" },
    { name: "Cobalt Blue Light", hex: "#4169E1", code: "PB28" },
    { name: "Cerulean Blue", hex: "#2A52BE", code: "PB35" },
    { name: "Cerulean Chromium", hex: "#007BA7", code: "PB36" },
    { name: "Phthalo Blue GS", hex: "#000F89", code: "PB15:3" },
    { name: "Phthalo Blue RS", hex: "#0C2340", code: "PB15:1" },
    { name: "Prussian Blue", hex: "#003153", code: "PB27" },
    { name: "Antwerp Blue", hex: "#076789", code: "PB27" },
    { name: "Indanthrone Blue", hex: "#234B6E", code: "PB60" },
    { name: "Indigo", hex: "#4B0082", code: "PB66" },
    { name: "Manganese Blue", hex: "#03A89E", code: "PB33" },
    { name: "Smalt", hex: "#003399", code: "PB32" },
    { name: "Azure Blue", hex: "#007FFF", code: "PB29/PW6" },
    { name: "Egyptian Blue", hex: "#1034A6", code: "PB31" },
    { name: "Cobalt Turquoise", hex: "#00CED1", code: "PB28/PG50" },
    { name: "Phthalo Turquoise", hex: "#008B8B", code: "PB16" },
  ],
  "Greens": [
    { name: "Phthalo Green BS", hex: "#123524", code: "PG7" },
    { name: "Phthalo Green YS", hex: "#00755E", code: "PG36" },
    { name: "Viridian", hex: "#40826D", code: "PG18" },
    { name: "Viridian Hue", hex: "#40826D", code: "PG7/PY3" },
    { name: "Chromium Oxide", hex: "#667C3E", code: "PG17" },
    { name: "Cobalt Green", hex: "#3D9140", code: "PG19" },
    { name: "Cobalt Green Deep", hex: "#006B3C", code: "PG26" },
    { name: "Cobalt Green Pale", hex: "#8FBC8F", code: "PG50" },
    { name: "Cobalt Teal", hex: "#008B8B", code: "PG50" },
    { name: "Permanent Green Lt", hex: "#009E60", code: "PG7/PY3" },
    { name: "Permanent Green Dp", hex: "#006400", code: "PG7/PY42" },
    { name: "Hooker's Green", hex: "#49796B", code: "PG7/PY42" },
    { name: "Sap Green", hex: "#507D2A", code: "PG7/PY110" },
    { name: "Olive Green", hex: "#808000", code: "PY42/PG7" },
    { name: "Terre Verte", hex: "#6C7C59", code: "PG23" },
    { name: "Green Earth", hex: "#808000", code: "PG23" },
    { name: "Cadmium Green", hex: "#006B3C", code: "PG14" },
    { name: "Perylene Green", hex: "#2E4B26", code: "PBk31" },
  ],
  "Earth Tones": [
    { name: "Burnt Umber", hex: "#8A3324", code: "PBr7" },
    { name: "Raw Umber", hex: "#826644", code: "PBr7" },
    { name: "Burnt Sienna", hex: "#E97451", code: "PBr7" },
    { name: "Raw Sienna", hex: "#D68A59", code: "PBr7" },
    { name: "Van Dyke Brown", hex: "#664228", code: "PBr7/PBk9" },
    { name: "Sepia", hex: "#704214", code: "PBr7/PBk9" },
    { name: "Trans Brown Oxide", hex: "#80461B", code: "PBr7" },
    { name: "Mars Brown", hex: "#AD6F69", code: "PBr6" },
    { name: "Cyprus Umber", hex: "#635147", code: "PBr7" },
    { name: "Warm Sepia", hex: "#5E4534", code: "PBr7/PR101" },
    { name: "Quinacridone Gold", hex: "#D4AF37", code: "PO49" },
    { name: "Quin Burnt Orange", hex: "#CC5500", code: "PO48" },
    { name: "Quin Burnt Sienna", hex: "#8B4513", code: "PO48" },
    { name: "Gold Brown", hex: "#996515", code: "PY42/PR101" },
    { name: "Trans Oxide Red", hex: "#913831", code: "PR101" },
    { name: "Trans Oxide Yellow", hex: "#CB9D06", code: "PY42" },
  ],
  "Blacks": [
    { name: "Ivory Black", hex: "#231F20", code: "PBk9" },
    { name: "Lamp Black", hex: "#2C2C2C", code: "PBk6" },
    { name: "Mars Black", hex: "#1C1C1C", code: "PBk11" },
    { name: "Carbon Black", hex: "#1A1A1A", code: "PBk7" },
    { name: "Vine Black", hex: "#1B1811", code: "PBk8" },
    { name: "Bone Black", hex: "#2D2D2D", code: "PBk9" },
    { name: "Spinel Black", hex: "#0A0A0A", code: "PBk28" },
    { name: "Perylene Black", hex: "#1B1B1B", code: "PBk31" },
    { name: "Chromatic Black", hex: "#141414", code: "PG7/PR179" },
  ],
  "Grays": [
    { name: "Payne's Gray", hex: "#536878", code: "PB29/PBk9" },
    { name: "Davy's Gray", hex: "#555555", code: "PBk19" },
    { name: "Neutral Tint", hex: "#708090", code: "PV19/PG7" },
    { name: "Graphite Gray", hex: "#383838", code: "PBk10" },
    { name: "Charcoal Gray", hex: "#36454F", code: "PBk8" },
    { name: "Warm Gray", hex: "#808069", code: "PBk9/PW6" },
    { name: "Cool Gray", hex: "#8C92AC", code: "PBk11/PW6" },
  ],
  "Whites": [
    { name: "Titanium White", hex: "#FFFFFF", code: "PW6" },
    { name: "Zinc White", hex: "#FDFFF5", code: "PW4" },
    { name: "Mixing White", hex: "#F8F8FF", code: "PW6/PW4" },
    { name: "Flake White", hex: "#FFFAFA", code: "PW1" },
    { name: "Chinese White", hex: "#F8F8FF", code: "PW4" },
    { name: "Buff Titanium", hex: "#F0EAD6", code: "PW6/PY42" },
    { name: "Transparent White", hex: "#F5F5F5", code: "PW6" },
    { name: "Iridescent White", hex: "#FFFFF0", code: "PW6/Mica" },
  ],
};

// Color mixing recipes for kids
const mixingRecipes = [
  {
    name: "🌿 Making Greens",
    description: "Mix blue and yellow to make green!",
    mixes: [
      { color1: { name: "Lemon Yellow", hex: "#FFF44F" }, color2: { name: "Phthalo Blue", hex: "#000F89" }, result: { name: "Bright Green", hex: "#32CD32" } },
      { color1: { name: "Yellow Ochre", hex: "#CB9D06" }, color2: { name: "Ultramarine Blue", hex: "#4166F5" }, result: { name: "Olive Green", hex: "#556B2F" } },
      { color1: { name: "Cadmium Yellow", hex: "#FFD300" }, color2: { name: "Cerulean Blue", hex: "#2A52BE" }, result: { name: "Spring Green", hex: "#90EE90" } },
      { color1: { name: "Naples Yellow", hex: "#FADA5E" }, color2: { name: "Prussian Blue", hex: "#003153" }, result: { name: "Forest Green", hex: "#228B22" } },
    ]
  },
  {
    name: "🍊 Making Oranges",
    description: "Mix red and yellow to make orange!",
    mixes: [
      { color1: { name: "Cadmium Yellow", hex: "#FFD300" }, color2: { name: "Cadmium Red", hex: "#E30022" }, result: { name: "Bright Orange", hex: "#FF7F00" } },
      { color1: { name: "Lemon Yellow", hex: "#FFF44F" }, color2: { name: "Pyrrole Red", hex: "#E32636" }, result: { name: "Tangerine", hex: "#FF6347" } },
      { color1: { name: "Yellow Ochre", hex: "#CB9D06" }, color2: { name: "Vermilion", hex: "#E34234" }, result: { name: "Burnt Orange", hex: "#CC5500" } },
      { color1: { name: "Indian Yellow", hex: "#E3A857" }, color2: { name: "Quinacridone Red", hex: "#E8173F" }, result: { name: "Coral", hex: "#FF7F50" } },
    ]
  },
  {
    name: "💜 Making Purples",
    description: "Mix blue and red to make purple!",
    mixes: [
      { color1: { name: "Ultramarine Blue", hex: "#4166F5" }, color2: { name: "Quinacridone Magenta", hex: "#A50B5E" }, result: { name: "Deep Violet", hex: "#8B008B" } },
      { color1: { name: "Cobalt Blue", hex: "#0047AB" }, color2: { name: "Permanent Rose", hex: "#FF007F" }, result: { name: "Purple", hex: "#9370DB" } },
      { color1: { name: "Phthalo Blue", hex: "#000F89" }, color2: { name: "Alizarin Crimson", hex: "#E32636" }, result: { name: "Indigo", hex: "#4B0082" } },
      { color1: { name: "Cerulean Blue", hex: "#2A52BE" }, color2: { name: "Opera Pink", hex: "#FF1493" }, result: { name: "Lavender", hex: "#E6E6FA" } },
    ]
  },
  {
    name: "🤎 Making Browns",
    description: "Mix all three primary colors!",
    mixes: [
      { color1: { name: "Orange", hex: "#FF7F00" }, color2: { name: "Ultramarine Blue", hex: "#4166F5" }, result: { name: "Brown", hex: "#8B4513" } },
      { color1: { name: "Green", hex: "#32CD32" }, color2: { name: "Cadmium Red", hex: "#E30022" }, result: { name: "Dark Brown", hex: "#654321" } },
      { color1: { name: "Purple", hex: "#9370DB" }, color2: { name: "Yellow Ochre", hex: "#CB9D06" }, result: { name: "Warm Brown", hex: "#A0522D" } },
    ]
  },
  {
    name: "⬛ Making Blacks (No Black Paint!)",
    description: "Mix opposite colors to make dark colors!",
    mixes: [
      { color1: { name: "Ultramarine Blue", hex: "#4166F5" }, color2: { name: "Burnt Sienna", hex: "#E97451" }, result: { name: "Chromatic Black", hex: "#2F2F2F" } },
      { color1: { name: "Phthalo Green", hex: "#123524" }, color2: { name: "Alizarin Crimson", hex: "#E32636" }, result: { name: "Rich Black", hex: "#1C1C1C" } },
      { color1: { name: "Phthalo Blue", hex: "#000F89" }, color2: { name: "Burnt Umber", hex: "#8A3324" }, result: { name: "Deep Black", hex: "#141414" } },
    ]
  },
  {
    name: "🧑🏻‍🎨 Skin Tones",
    description: "Mix colors to paint people!",
    mixes: [
      { color1: { name: "White + Yellow Ochre", hex: "#FADA5E" }, color2: { name: "Cadmium Red (tiny)", hex: "#E30022" }, result: { name: "Light Skin", hex: "#FFE4C4" } },
      { color1: { name: "Yellow Ochre", hex: "#CB9D06" }, color2: { name: "Burnt Sienna + White", hex: "#D68A59" }, result: { name: "Medium Skin", hex: "#D2B48C" } },
      { color1: { name: "Burnt Sienna", hex: "#E97451" }, color2: { name: "Ultramarine Blue (tiny)", hex: "#4166F5" }, result: { name: "Dark Skin", hex: "#8B4513" } },
    ]
  },
];

// Color palettes for kids
const kidPalettes = [
  {
    name: "🌈 Rainbow Colors",
    colors: [
      { name: "Red", hex: "#E30022" },
      { name: "Orange", hex: "#FF7F00" },
      { name: "Yellow", hex: "#FFD300" },
      { name: "Green", hex: "#32CD32" },
      { name: "Blue", hex: "#4166F5" },
      { name: "Purple", hex: "#8B008B" },
    ]
  },
  {
    name: "🌅 Sunset Colors",
    colors: [
      { name: "Golden Yellow", hex: "#FFD700" },
      { name: "Orange", hex: "#FF8C00" },
      { name: "Coral", hex: "#FF7F50" },
      { name: "Red", hex: "#FF6347" },
      { name: "Purple", hex: "#9370DB" },
      { name: "Navy", hex: "#191970" },
    ]
  },
  {
    name: "🌊 Ocean Colors",
    colors: [
      { name: "Sky Blue", hex: "#87CEEB" },
      { name: "Turquoise", hex: "#40E0D0" },
      { name: "Teal", hex: "#008B8B" },
      { name: "Navy Blue", hex: "#000080" },
      { name: "Sea Green", hex: "#2E8B57" },
      { name: "Sand", hex: "#F5DEB3" },
    ]
  },
  {
    name: "🌸 Spring Garden",
    colors: [
      { name: "Pink", hex: "#FF69B4" },
      { name: "Lavender", hex: "#E6E6FA" },
      { name: "Yellow", hex: "#FFFF00" },
      { name: "Grass Green", hex: "#7CFC00" },
      { name: "Sky Blue", hex: "#87CEEB" },
      { name: "White", hex: "#FFFFFF" },
    ]
  },
  {
    name: "🍂 Autumn Leaves",
    colors: [
      { name: "Red", hex: "#B22222" },
      { name: "Orange", hex: "#FF8C00" },
      { name: "Gold", hex: "#DAA520" },
      { name: "Brown", hex: "#8B4513" },
      { name: "Rust", hex: "#B7410E" },
      { name: "Olive", hex: "#808000" },
    ]
  },
  {
    name: "❄️ Winter Wonderland",
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Ice Blue", hex: "#B0E0E6" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Navy", hex: "#000080" },
      { name: "Evergreen", hex: "#228B22" },
      { name: "Berry Red", hex: "#8B0000" },
    ]
  },
  {
    name: "🦁 Safari Animals",
    colors: [
      { name: "Lion Gold", hex: "#DAA520" },
      { name: "Elephant Gray", hex: "#808080" },
      { name: "Zebra Black", hex: "#1C1C1C" },
      { name: "Giraffe Brown", hex: "#D2691E" },
      { name: "Savanna Tan", hex: "#D2B48C" },
      { name: "Sunset Orange", hex: "#FF8C00" },
    ]
  },
  {
    name: "🧜‍♀️ Mermaid Magic",
    colors: [
      { name: "Aqua", hex: "#00FFFF" },
      { name: "Purple", hex: "#9370DB" },
      { name: "Pink", hex: "#FF69B4" },
      { name: "Seafoam", hex: "#98FF98" },
      { name: "Gold", hex: "#FFD700" },
      { name: "Deep Blue", hex: "#00008B" },
    ]
  },
];

// Primary & Secondary colors for teaching
const colorWheel = {
  primary: [
    { name: "Red", hex: "#E30022", desc: "Primary Color" },
    { name: "Yellow", hex: "#FFD300", desc: "Primary Color" },
    { name: "Blue", hex: "#0047AB", desc: "Primary Color" },
  ],
  secondary: [
    { name: "Orange", hex: "#FF7F00", desc: "Red + Yellow" },
    { name: "Green", hex: "#32CD32", desc: "Yellow + Blue" },
    { name: "Purple", hex: "#8B008B", desc: "Blue + Red" },
  ],
  tertiary: [
    { name: "Red-Orange", hex: "#FF4500" },
    { name: "Yellow-Orange", hex: "#FFAE42" },
    { name: "Yellow-Green", hex: "#9ACD32" },
    { name: "Blue-Green", hex: "#008B8B" },
    { name: "Blue-Purple", hex: "#4B0082" },
    { name: "Red-Purple", hex: "#C71585" },
  ]
};

function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1a1a1a' : '#ffffff';
}

function hexToRgb(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16)
  };
}

// Printable Color Swatch with visible name
function PrintableColorSwatch({ color, showCode = true, size = 'normal' }) {
  const textColor = getContrastColor(color.hex);
  const sizeClass = size === 'small' ? 'w-16 h-16' : size === 'large' ? 'w-24 h-20' : 'w-20 h-16';
  
  return (
    <div className="flex flex-col items-center print-swatch">
      <div 
        className={`${sizeClass} rounded-lg shadow-md flex items-end justify-center pb-1 print-color-box`}
        style={{ backgroundColor: color.hex, border: color.hex === '#FFFFFF' ? '1px solid #ddd' : 'none' }}
      >
        <span className="text-[8px] font-mono opacity-70 print-hex" style={{ color: textColor }}>
          {color.hex}
        </span>
      </div>
      <p className="text-[10px] font-medium text-center mt-1.5 leading-tight max-w-20 print-name text-gray-800">
        {color.name}
      </p>
      {showCode && color.code && (
        <p className="text-[8px] font-mono text-gray-500 print-code">{color.code}</p>
      )}
    </div>
  );
}

// Mixing Recipe Card (Printable)
function MixingRecipeCard({ recipe }) {
  return (
    <div className="p-5 rounded-xl bg-white border border-gray-200 print-card">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{recipe.name}</h3>
      <p className="text-sm text-gray-500 mb-4">{recipe.description}</p>
      <div className="space-y-4">
        {recipe.mixes.map((mix, i) => (
          <div key={i} className="flex items-center gap-2 flex-wrap">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg shadow" style={{ backgroundColor: mix.color1.hex }} />
              <span className="text-[9px] mt-1 text-center max-w-14 leading-tight">{mix.color1.name}</span>
            </div>
            <span className="text-xl text-gray-400 font-light">+</span>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-lg shadow" style={{ backgroundColor: mix.color2.hex }} />
              <span className="text-[9px] mt-1 text-center max-w-14 leading-tight">{mix.color2.name}</span>
            </div>
            <span className="text-xl text-gray-400 font-light">=</span>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-lg shadow-lg ring-2 ring-gray-200" style={{ backgroundColor: mix.result.hex }} />
              <span className="text-[10px] mt-1 font-medium text-center max-w-16 leading-tight">{mix.result.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Palette Card (Printable)
function PaletteCard({ palette }) {
  return (
    <div className="p-5 rounded-xl bg-white border border-gray-200 print-card">
      <h3 className="text-base font-semibold text-gray-800 mb-3">{palette.name}</h3>
      <div className="flex gap-1">
        {palette.colors.map((c, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div className="w-full h-14 rounded-lg shadow first:rounded-l-xl last:rounded-r-xl" 
              style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #ddd' : 'none' }} />
            <span className="text-[8px] mt-1 text-center leading-tight text-gray-600">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Color Wheel Visual (Printable)
function ColorWheelVisual() {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200 print-card">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">🎨 The Color Wheel</h3>
      
      {/* Visual Wheel */}
      <div className="flex justify-center mb-6">
        <svg viewBox="0 0 200 200" className="w-48 h-48">
          {/* Outer ring - all colors */}
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#wheelGradient)" strokeWidth="40" />
          
          <defs>
            <linearGradient id="wheelGradient">
              <stop offset="0%" stopColor="#E30022" />
              <stop offset="16%" stopColor="#FF7F00" />
              <stop offset="33%" stopColor="#FFD300" />
              <stop offset="50%" stopColor="#32CD32" />
              <stop offset="66%" stopColor="#0047AB" />
              <stop offset="83%" stopColor="#8B008B" />
              <stop offset="100%" stopColor="#E30022" />
            </linearGradient>
          </defs>
          
          {/* Primary color markers */}
          <circle cx="100" cy="25" r="15" fill="#E30022" stroke="white" strokeWidth="3" />
          <circle cx="165" cy="137" r="15" fill="#FFD300" stroke="white" strokeWidth="3" />
          <circle cx="35" cy="137" r="15" fill="#0047AB" stroke="white" strokeWidth="3" />
          
          {/* Secondary color markers */}
          <circle cx="165" cy="63" r="12" fill="#FF7F00" stroke="white" strokeWidth="2" />
          <circle cx="100" cy="175" r="12" fill="#32CD32" stroke="white" strokeWidth="2" />
          <circle cx="35" cy="63" r="12" fill="#8B008B" stroke="white" strokeWidth="2" />
          
          <text x="100" y="105" textAnchor="middle" fontSize="10" fill="#666">Color Wheel</text>
        </svg>
      </div>
      
      {/* Legend */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Primary Colors (You can't mix these!)</h4>
          <div className="flex gap-2">
            {colorWheel.primary.map((c, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full shadow" style={{ backgroundColor: c.hex }} />
                <span className="text-[9px] mt-1">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Secondary Colors (Mix 2 primaries!)</h4>
          <div className="flex gap-2">
            {colorWheel.secondary.map((c, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full shadow" style={{ backgroundColor: c.hex }} />
                <span className="text-[9px] mt-1">{c.name}</span>
                <span className="text-[7px] text-gray-400">{c.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Landscape Example (Printable)
function LandscapeExample() {
  return (
    <div className="p-4 rounded-xl bg-white border border-gray-200 print-card">
      <h3 className="text-base font-semibold text-gray-800 mb-3">🏔️ Paint a Landscape - Colors to Use</h3>
      <svg viewBox="0 0 400 250" className="w-full rounded-lg overflow-hidden shadow">
        <defs>
          <linearGradient id="sky2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#E6E6FA" />
          </linearGradient>
        </defs>
        
        <rect width="400" height="250" fill="url(#sky2)" />
        <circle cx="320" cy="60" r="30" fill="#FFD700" />
        
        {/* Mountains */}
        <path d="M0 160 L80 80 L160 140 L240 60 L320 120 L400 80 L400 180 L0 180 Z" fill="#5F4B8B" opacity="0.6" />
        <path d="M0 180 L100 120 L200 160 L300 100 L400 150 L400 200 L0 200 Z" fill="#507D2A" opacity="0.8" />
        
        {/* Lake */}
        <ellipse cx="200" cy="220" rx="180" ry="30" fill="#4682B4" />
        
        {/* Trees */}
        <g fill="#123524">
          <path d="M30 180 L45 120 L60 180 Z" />
          <path d="M350 175 L365 110 L380 175 Z" />
        </g>
      </svg>
      
      {/* Color palette used */}
      <div className="flex justify-center gap-3 mt-4 flex-wrap">
        {[
          { name: "Cerulean Blue", hex: "#87CEEB" },
          { name: "Cad Yellow", hex: "#FFD700" },
          { name: "Ultramarine Violet", hex: "#5F4B8B" },
          { name: "Sap Green", hex: "#507D2A" },
          { name: "Cobalt Blue", hex: "#4682B4" },
          { name: "Phthalo Green", hex: "#123524" },
        ].map((c, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-8 h-8 rounded shadow" style={{ backgroundColor: c.hex }} />
            <span className="text-[8px] mt-1 text-center max-w-12">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Still Life Example (Printable)
function StillLifeExample() {
  return (
    <div className="p-4 rounded-xl bg-white border border-gray-200 print-card">
      <h3 className="text-base font-semibold text-gray-800 mb-3">🍎 Paint a Still Life - Colors to Use</h3>
      <svg viewBox="0 0 400 280" className="w-full rounded-lg overflow-hidden shadow">
        <rect width="400" height="280" fill="#3d2817" />
        <rect y="160" width="400" height="120" fill="#8B4513" />
        
        {/* Vase */}
        <ellipse cx="150" cy="170" rx="40" ry="10" fill="#008B8B" />
        <path d="M110 170 Q110 100 130 80 Q150 60 170 80 Q190 100 190 170 Z" fill="#40E0D0" />
        
        {/* Flowers */}
        <circle cx="140" cy="50" r="18" fill="#A50B5E" />
        <circle cx="170" cy="40" r="15" fill="#FFD700" />
        <circle cx="130" cy="70" r="12" fill="#FF1493" />
        
        {/* Apple */}
        <ellipse cx="280" cy="210" rx="35" ry="30" fill="#E30022" />
        <ellipse cx="270" cy="195" rx="12" ry="8" fill="#FF6347" opacity="0.5" />
        
        {/* Lemon */}
        <ellipse cx="340" cy="215" rx="25" ry="18" fill="#FFD700" />
        
        {/* Orange */}
        <circle cx="230" cy="220" r="25" fill="#FF8C00" />
      </svg>
      
      {/* Color palette used */}
      <div className="flex justify-center gap-3 mt-4 flex-wrap">
        {[
          { name: "Burnt Umber", hex: "#3d2817" },
          { name: "Raw Sienna", hex: "#8B4513" },
          { name: "Cobalt Teal", hex: "#40E0D0" },
          { name: "Quin Magenta", hex: "#A50B5E" },
          { name: "Cad Red", hex: "#E30022" },
          { name: "Cad Yellow", hex: "#FFD700" },
          { name: "Cad Orange", hex: "#FF8C00" },
        ].map((c, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-8 h-8 rounded shadow" style={{ backgroundColor: c.hex }} />
            <span className="text-[8px] mt-1 text-center max-w-12">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Activity Worksheet
function ActivityWorksheet() {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200 print-card page-break-before">
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">🎨 Color Mixing Activity Sheet</h3>
      <p className="text-center text-gray-500 mb-6">Fill in the circles with the color you think you'll get!</p>
      
      <div className="grid grid-cols-2 gap-8">
        {/* Activity 1 */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#FFD300' }} />
          <span className="text-2xl text-gray-400">+</span>
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#0047AB' }} />
          <span className="text-2xl text-gray-400">=</span>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>
        
        {/* Activity 2 */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
          <span className="text-2xl text-gray-400">+</span>
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#FFD300' }} />
          <span className="text-2xl text-gray-400">=</span>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>
        
        {/* Activity 3 */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#0047AB' }} />
          <span className="text-2xl text-gray-400">+</span>
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
          <span className="text-2xl text-gray-400">=</span>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>
        
        {/* Activity 4 */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
          <span className="text-2xl text-gray-400">+</span>
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#FFFFFF', border: '2px solid #ddd' }} />
          <span className="text-2xl text-gray-400">=</span>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-700 mb-2">🌟 Challenge: What two colors make BROWN?</h4>
        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full border-4 border-dashed border-gray-300" />
          <span className="text-2xl text-gray-400">+</span>
          <div className="w-14 h-14 rounded-full border-4 border-dashed border-gray-300" />
          <span className="text-2xl text-gray-400">=</span>
          <div className="w-16 h-16 rounded-full shadow" style={{ backgroundColor: '#8B4513' }} />
        </div>
      </div>
    </div>
  );
}

export default function ArtistPigmentStudio() {
  const [activeTab, setActiveTab] = useState('colors');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...Object.keys(pigmentData)];
  const totalPigments = Object.values(pigmentData).flat().length;

  const filteredPigments = useMemo(() => {
    let result = {};
    const search = searchTerm.toLowerCase();
    
    Object.entries(pigmentData).forEach(([category, colors]) => {
      if (activeCategory !== 'All' && activeCategory !== category) return;
      
      const filtered = colors.filter(c => 
        c.name.toLowerCase().includes(search) || 
        c.hex.toLowerCase().includes(search) ||
        c.code.toLowerCase().includes(search)
      );
      
      if (filtered.length > 0) result[category] = filtered;
    });
    
    return result;
  }, [searchTerm, activeCategory]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&display=swap');
        
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes fadeIn { 
          from { opacity: 0; transform: translateY(8px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        .animate-fade { animation: fadeIn 0.4s ease-out forwards; }
        
        /* Print Styles */
        @media print {
          body { 
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            background: white !important;
          }
          
          .no-print { display: none !important; }
          
          .print-card {
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 16px;
          }
          
          .page-break-before {
            page-break-before: always;
          }
          
          .print-swatch {
            break-inside: avoid;
          }
          
          .print-color-box {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          header, nav { 
            position: static !important;
          }
          
          .print-grid {
            display: grid !important;
            grid-template-columns: repeat(8, 1fr) !important;
            gap: 12px !important;
          }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                🎨 Artist's Color Studio
              </h1>
              <p className="text-sm text-gray-500">
                {totalPigments} colors • Mixing guides • Printable charts for kids!
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              🖨️ Print This Page
            </button>
          </div>

          {/* Main Tabs */}
          <div className="flex gap-1 p-1 rounded-xl bg-gray-100 w-fit">
            {[
              { id: 'colors', label: '🎨 All Colors' },
              { id: 'mixing', label: '🧪 Color Mixing' },
              { id: 'palettes', label: '🖼️ Palettes' },
              { id: 'examples', label: '✏️ Examples' },
              { id: 'activity', label: '📝 Activity Sheet' },
            ].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeTab === tab.id ? 'white' : 'transparent',
                  color: activeTab === tab.id ? '#1a1a1a' : '#666',
                  boxShadow: activeTab === tab.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                }}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        
        {/* ============ ALL COLORS TAB ============ */}
        {activeTab === 'colors' && (
          <div>
            {/* Category Filter - No Print */}
            <nav className="flex gap-2 overflow-x-auto hide-scrollbar pb-4 mb-4 no-print">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all"
                  style={{
                    backgroundColor: activeCategory === cat ? '#3b82f6' : 'white',
                    color: activeCategory === cat ? 'white' : '#666',
                    border: '1px solid #e5e7eb'
                  }}>
                  {cat}
                </button>
              ))}
            </nav>

            {/* Search - No Print */}
            <div className="mb-6 no-print">
              <input
                type="text"
                placeholder="🔍 Search colors by name, hex, or pigment code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Color Grid */}
            {Object.entries(filteredPigments).map(([category, colors], catIndex) => (
              <section key={category} className="mb-8 animate-fade print-card" style={{ animationDelay: `${catIndex * 0.05}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl font-bold text-gray-800">{category}</h2>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    {colors.length} colors
                  </span>
                </div>
                <div className="grid gap-4 print-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(85px, 1fr))' }}>
                  {colors.map((color, i) => (
                    <div key={color.name} className="animate-fade" style={{ animationDelay: `${i * 0.01}s` }}>
                      <PrintableColorSwatch color={color} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* ============ COLOR MIXING TAB ============ */}
        {activeTab === 'mixing' && (
          <div className="space-y-6">
            <div className="text-center mb-8 no-print">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">🧪 Learn Color Mixing!</h2>
              <p className="text-gray-500">See what happens when you mix different colors together</p>
            </div>

            {/* Color Wheel */}
            <ColorWheelVisual />

            {/* Mixing Recipes */}
            <div className="grid md:grid-cols-2 gap-6">
              {mixingRecipes.map((recipe, i) => (
                <MixingRecipeCard key={i} recipe={recipe} />
              ))}
            </div>

            {/* Tips Section */}
            <div className="p-6 rounded-xl bg-yellow-50 border border-yellow-200 print-card">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">💡 Mixing Tips for Kids!</h3>
              <ul className="space-y-2 text-yellow-900">
                <li>• <strong>Start small!</strong> Add a tiny bit of color at a time.</li>
                <li>• <strong>Dark colors are strong!</strong> Blue and purple can take over - use less of them.</li>
                <li>• <strong>Clean your brush</strong> between colors so they stay bright!</li>
                <li>• <strong>Keep a color chart</strong> of mixes you like to remember them.</li>
                <li>• <strong>White makes colors lighter</strong> (called "tints"). Try it!</li>
              </ul>
            </div>
          </div>
        )}

        {/* ============ PALETTES TAB ============ */}
        {activeTab === 'palettes' && (
          <div className="space-y-6">
            <div className="text-center mb-8 no-print">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">🖼️ Color Palettes</h2>
              <p className="text-gray-500">Beautiful color combinations ready to use!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {kidPalettes.map((palette, i) => (
                <PaletteCard key={i} palette={palette} />
              ))}
            </div>

            {/* Complementary Colors */}
            <div className="p-6 rounded-xl bg-white border border-gray-200 print-card">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">🌟 Colors That Go Together (Complementary)</h3>
              <p className="text-center text-gray-500 mb-4">These opposite colors make each other POP!</p>
              <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex gap-2">
                    <div className="w-16 h-16 rounded-lg shadow" style={{ backgroundColor: '#E30022' }} />
                    <div className="w-16 h-16 rounded-lg shadow" style={{ backgroundColor: '#32CD32' }} />
                  </div>
                  <span className="text-sm mt-2 font-medium">Red & Green</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-2">
                    <div className="w-16 h-16 rounded-lg shadow" style={{ backgroundColor: '#FF7F00' }} />
                    <div className="w-16 h-16 rounded-lg shadow" style={{ backgroundColor: '#0047AB' }} />
                  </div>
                  <span className="text-sm mt-2 font-medium">Orange & Blue</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex gap-2">
                    <div className="w-16 h-16 rounded-lg shadow" style={{ backgroundColor: '#FFD300' }} />
                    <div className="w-16 h-16 rounded-lg shadow" style={{ backgroundColor: '#8B008B' }} />
                  </div>
                  <span className="text-sm mt-2 font-medium">Yellow & Purple</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============ EXAMPLES TAB ============ */}
        {activeTab === 'examples' && (
          <div className="space-y-6">
            <div className="text-center mb-8 no-print">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">✏️ Painting Examples</h2>
              <p className="text-gray-500">See which colors to use for different paintings!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <LandscapeExample />
              <StillLifeExample />
            </div>

            {/* Simple Objects to Paint */}
            <div className="p-6 rounded-xl bg-white border border-gray-200 print-card">
              <h3 className="text-lg font-bold text-gray-800 mb-4">🎯 Simple Things to Paint & Colors to Use</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Sun */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-full shadow-lg mb-2" style={{ background: 'radial-gradient(circle, #FFD700 0%, #FF8C00 100%)' }} />
                  <p className="font-medium">☀️ Sun</p>
                  <div className="flex justify-center gap-1 mt-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#FFD700' }} title="Cadmium Yellow" />
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#FF8C00' }} title="Cadmium Orange" />
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#FFFFFF', border: '1px solid #ddd' }} title="White" />
                  </div>
                </div>
                {/* Tree */}
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100">
                    <rect x="40" y="60" width="20" height="35" fill="#8B4513" />
                    <ellipse cx="50" cy="40" rx="35" ry="40" fill="#32CD32" />
                  </svg>
                  <p className="font-medium">🌳 Tree</p>
                  <div className="flex justify-center gap-1 mt-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#32CD32' }} title="Green" />
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#8B4513' }} title="Brown" />
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#FFD700' }} title="Yellow highlights" />
                  </div>
                </div>
                {/* House */}
                <div className="text-center">
                  <svg className="w-20 h-20 mx-auto" viewBox="0 0 100 100">
                    <polygon points="50,10 10,50 90,50" fill="#B22222" />
                    <rect x="20" y="50" width="60" height="45" fill="#F5DEB3" />
                    <rect x="40" y="65" width="20" height="30" fill="#8B4513" />
                    <rect x="55" y="55" width="15" height="15" fill="#87CEEB" />
                  </svg>
                  <p className="font-medium">🏠 House</p>
                  <div className="flex justify-center gap-1 mt-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#B22222' }} title="Red roof" />
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#F5DEB3' }} title="Tan walls" />
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: '#8B4513' }} title="Brown door" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============ ACTIVITY TAB ============ */}
        {activeTab === 'activity' && (
          <div className="space-y-6">
            <div className="text-center mb-8 no-print">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">📝 Activity Worksheets</h2>
              <p className="text-gray-500">Print these out and practice your color mixing!</p>
            </div>

            <ActivityWorksheet />

            {/* Blank Color Chart */}
            <div className="p-6 rounded-xl bg-white border border-gray-200 print-card page-break-before">
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">🎨 My Color Mixing Chart</h3>
              <p className="text-center text-gray-500 mb-6">Write down your favorite color mixes!</p>
              
              <div className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 rounded-lg border-2 border-dashed border-gray-300" />
                    <span className="text-gray-400">+</span>
                    <div className="w-12 h-12 rounded-lg border-2 border-dashed border-gray-300" />
                    <span className="text-gray-400">=</span>
                    <div className="w-14 h-14 rounded-lg border-2 border-dashed border-gray-300" />
                    <div className="flex-1 border-b-2 border-dotted border-gray-300 ml-4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Color by Number Guide */}
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 print-card">
              <h3 className="text-lg font-bold text-blue-800 mb-4">🔢 Color Code Reference</h3>
              <p className="text-blue-700 mb-4">Use these numbers for color-by-number activities!</p>
              <div className="grid grid-cols-6 gap-3">
                {[
                  { num: 1, color: "#E30022", name: "Red" },
                  { num: 2, color: "#FF7F00", name: "Orange" },
                  { num: 3, color: "#FFD300", name: "Yellow" },
                  { num: 4, color: "#32CD32", name: "Green" },
                  { num: 5, color: "#0047AB", name: "Blue" },
                  { num: 6, color: "#8B008B", name: "Purple" },
                  { num: 7, color: "#FF69B4", name: "Pink" },
                  { num: 8, color: "#8B4513", name: "Brown" },
                  { num: 9, color: "#1C1C1C", name: "Black" },
                  { num: 10, color: "#808080", name: "Gray" },
                  { num: 11, color: "#FFFFFF", name: "White" },
                  { num: 12, color: "#F5DEB3", name: "Tan" },
                ].map(item => (
                  <div key={item.num} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-lg shadow flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: item.color, border: item.color === '#FFFFFF' ? '2px solid #ddd' : 'none', color: getContrastColor(item.color) }}>
                      {item.num}
                    </div>
                    <span className="text-xs mt-1">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-8 bg-white no-print">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Pigment codes (PY, PR, PB...) are standard Color Index names used by professional artists</p>
          <p className="mt-1">Print any page to use as a reference chart! 🖨️</p>
        </div>
      </footer>
    </div>
  );
}
