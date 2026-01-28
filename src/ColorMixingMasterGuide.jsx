import React, { useState, useMemo } from 'react';

// ==========================================
// COMPREHENSIVE COLOR DATABASE
// ==========================================

// Extended pigment database with professional info
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
    { name: "Saffron", hex: "#F4C430" },
    { name: "Mustard", hex: "#FFDB58" },
    { name: "Cream", hex: "#FFFDD0" },
    { name: "Champagne", hex: "#F7E7CE" },
    { name: "Goldenrod", hex: "#DAA520" },
    { name: "Amber", hex: "#FFBF00" },
    { name: "Maize", hex: "#FBEC5D" },
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
    { name: "Tangerine", hex: "#FF9966" },
    { name: "Apricot", hex: "#FBCEB1" },
    { name: "Peach", hex: "#FFCBA4" },
    { name: "Coral", hex: "#FF7F50" },
    { name: "Burnt Orange", hex: "#CC5500" },
    { name: "Pumpkin", hex: "#FF7518" },
    { name: "Mango", hex: "#FF8243" },
    { name: "Persimmon", hex: "#EC5800" },
    { name: "Burnt Sienna", hex: "#E97451", code: "PBr7" },
  ],
  "Reds": [
    { name: "Cadmium Red Light", hex: "#E30022", code: "PR108" },
    { name: "Cadmium Red Medium", hex: "#E21A1A", code: "PR108" },
    { name: "Cadmium Red Deep", hex: "#A91B0D", code: "PR108" },
    { name: "Cadmium Scarlet", hex: "#E52B50", code: "PR108" },
    { name: "Vermilion", hex: "#E34234", code: "PR106" },
    { name: "Pyrrole Red", hex: "#E32636", code: "PR254" },
    { name: "Pyrrole Red Light", hex: "#FF2400", code: "PR255" },
    { name: "Pyrrole Red Deep", hex: "#B22222", code: "PR264" },
    { name: "Naphthol Red", hex: "#D10047", code: "PR112" },
    { name: "Quinacridone Red", hex: "#E8173F", code: "PR209" },
    { name: "Quinacridone Rose", hex: "#E32636", code: "PV19" },
    { name: "Alizarin Crimson", hex: "#E32636", code: "PR83" },
    { name: "Permanent Alizarin", hex: "#E32636", code: "PR177" },
    { name: "Carmine", hex: "#960018", code: "NR4" },
    { name: "Crimson", hex: "#DC143C" },
    { name: "Scarlet", hex: "#FF2400" },
    { name: "Cardinal", hex: "#C41E3A" },
    { name: "Ruby", hex: "#E0115F" },
    { name: "Cherry", hex: "#DE3163" },
    { name: "Burgundy", hex: "#800020" },
    { name: "Maroon", hex: "#800000" },
    { name: "Wine", hex: "#722F37" },
    { name: "Venetian Red", hex: "#C80815", code: "PR101" },
    { name: "Indian Red", hex: "#CD5C5C", code: "PR101" },
    { name: "Terra Rosa", hex: "#C75B4A", code: "PR102" },
    { name: "Brick Red", hex: "#CB4154" },
    { name: "Rust", hex: "#B7410E" },
  ],
  "Pinks & Magentas": [
    { name: "Quinacridone Magenta", hex: "#A50B5E", code: "PR122" },
    { name: "Permanent Magenta", hex: "#D0417E", code: "PR122" },
    { name: "Primary Magenta", hex: "#FF0090", code: "PR122" },
    { name: "Opera Pink", hex: "#FF1493", code: "BV10" },
    { name: "Brilliant Pink", hex: "#FF007F", code: "PR122" },
    { name: "Permanent Rose", hex: "#FF007F", code: "PV19" },
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
  "Violets & Purples": [
    { name: "Dioxazine Violet", hex: "#5C2D91", code: "PV23" },
    { name: "Dioxazine Purple", hex: "#663399", code: "PV23" },
    { name: "Ultramarine Violet", hex: "#5F4B8B", code: "PV15" },
    { name: "Cobalt Violet", hex: "#914E75", code: "PV14" },
    { name: "Cobalt Violet Deep", hex: "#722F37", code: "PV14" },
    { name: "Cobalt Violet Light", hex: "#B784A7", code: "PV49" },
    { name: "Manganese Violet", hex: "#8B008B", code: "PV16" },
    { name: "Quinacridone Violet", hex: "#922B3E", code: "PV19" },
    { name: "Permanent Violet", hex: "#7851A9", code: "PV23" },
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
    { name: "Aubergine", hex: "#614051" },
    { name: "Indigo", hex: "#4B0082", code: "PB66" },
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
    { name: "Phthalo Blue (GS)", hex: "#000F89", code: "PB15:3" },
    { name: "Phthalo Blue (RS)", hex: "#0C2340", code: "PB15:1" },
    { name: "Prussian Blue", hex: "#003153", code: "PB27" },
    { name: "Antwerp Blue", hex: "#076789", code: "PB27" },
    { name: "Indanthrone Blue", hex: "#234B6E", code: "PB60" },
    { name: "Manganese Blue", hex: "#03A89E", code: "PB33" },
    { name: "Azure", hex: "#007FFF" },
    { name: "Sky Blue", hex: "#87CEEB" },
    { name: "Baby Blue", hex: "#89CFF0" },
    { name: "Powder Blue", hex: "#B0E0E6" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Turquoise", hex: "#40E0D0" },
    { name: "Teal", hex: "#008080" },
    { name: "Steel Blue", hex: "#4682B4" },
    { name: "Navy Blue", hex: "#000080" },
    { name: "Midnight Blue", hex: "#191970" },
    { name: "Sapphire", hex: "#0F52BA" },
    { name: "Royal Blue", hex: "#4169E1" },
    { name: "Egyptian Blue", hex: "#1034A6", code: "PB31" },
    { name: "Cobalt Turquoise", hex: "#00CED1", code: "PB28/PG50" },
    { name: "Phthalo Turquoise", hex: "#008B8B", code: "PB16" },
  ],
  "Greens": [
    { name: "Phthalo Green (BS)", hex: "#123524", code: "PG7" },
    { name: "Phthalo Green (YS)", hex: "#00755E", code: "PG36" },
    { name: "Viridian", hex: "#40826D", code: "PG18" },
    { name: "Chromium Oxide", hex: "#667C3E", code: "PG17" },
    { name: "Cobalt Green", hex: "#3D9140", code: "PG19" },
    { name: "Cobalt Green Deep", hex: "#006B3C", code: "PG26" },
    { name: "Cobalt Teal", hex: "#008B8B", code: "PG50" },
    { name: "Permanent Green Light", hex: "#009E60", code: "PG7/PY3" },
    { name: "Permanent Green Deep", hex: "#006400", code: "PG7/PY42" },
    { name: "Hooker's Green", hex: "#49796B", code: "PG7/PY42" },
    { name: "Sap Green", hex: "#507D2A", code: "PG7/PY110" },
    { name: "Olive Green", hex: "#808000" },
    { name: "Terre Verte", hex: "#6C7C59", code: "PG23" },
    { name: "Cadmium Green", hex: "#006B3C", code: "PG14" },
    { name: "Perylene Green", hex: "#2E4B26", code: "PBk31" },
    { name: "Emerald", hex: "#50C878" },
    { name: "Jade", hex: "#00A86B" },
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
    { name: "Caput Mortuum", hex: "#592720", code: "PR101" },
    { name: "Quinacridone Gold", hex: "#D4AF37", code: "PO49" },
    { name: "Chocolate", hex: "#7B3F00" },
    { name: "Sienna", hex: "#A0522D" },
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
    { name: "Ivory Black", hex: "#231F20", code: "PBk9" },
    { name: "Lamp Black", hex: "#2C2C2C", code: "PBk6" },
    { name: "Mars Black", hex: "#1C1C1C", code: "PBk11" },
    { name: "Carbon Black", hex: "#1A1A1A", code: "PBk7" },
    { name: "Vine Black", hex: "#1B1811", code: "PBk8" },
    { name: "Bone Black", hex: "#2D2D2D", code: "PBk9" },
    { name: "Charcoal", hex: "#36454F" },
    { name: "Jet Black", hex: "#0A0A0A" },
    { name: "Onyx", hex: "#353839" },
    { name: "Graphite", hex: "#383838" },
    { name: "Payne's Gray", hex: "#536878", code: "PB29/PBk9" },
    { name: "Davy's Gray", hex: "#555555", code: "PBk19" },
    { name: "Slate Gray", hex: "#708090" },
    { name: "Battleship Gray", hex: "#848482" },
    { name: "Gunmetal", hex: "#2a3439" },
    { name: "Pewter", hex: "#8E8E8E" },
    { name: "Silver", hex: "#C0C0C0" },
    { name: "Ash Gray", hex: "#B2BEB5" },
    { name: "Platinum", hex: "#E5E4E2" },
  ],
  "Whites": [
    { name: "Titanium White", hex: "#FFFFFF", code: "PW6" },
    { name: "Zinc White", hex: "#FDFFF5", code: "PW4" },
    { name: "Flake White", hex: "#FFFAFA", code: "PW1" },
    { name: "Chinese White", hex: "#F8F8FF", code: "PW4" },
    { name: "Ivory", hex: "#FFFFF0" },
    { name: "Pearl White", hex: "#F0EAD6" },
    { name: "Antique White", hex: "#FAEBD7" },
    { name: "Eggshell", hex: "#F0EAD6" },
    { name: "Bone White", hex: "#E3DAC9" },
    { name: "Alabaster", hex: "#EDEAE0" },
    { name: "Snow", hex: "#FFFAFA" },
    { name: "Linen", hex: "#FAF0E6" },
    { name: "Seashell", hex: "#FFF5EE" },
  ],
};

// ==========================================
// MIXING DATABASE
// ==========================================

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
      { ingredients: ["Vermilion", "Naples Yellow"], result: "Peach", hex1: "#E34234", hex2: "#FADA5E", hexResult: "#FFCBA4" },
      { ingredients: ["Cadmium Red", "Raw Sienna"], result: "Terra Cotta", hex1: "#E30022", hex2: "#D68A59", hexResult: "#E2725B" },
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
      { ingredients: ["Cerulean Blue", "Opera Pink"], result: "Orchid", hex1: "#007BA7", hex2: "#FF1493", hexResult: "#DA70D6" },
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
      { ingredients: ["Viridian", "Alizarin Crimson"], result: "Green-Black", hex1: "#40826D", hex2: "#E32636", hexResult: "#1E1E1E" },
    ]
  },
  "Grays (Multiple Methods)": {
    description: "Several ways to mix beautiful grays",
    mixes: [
      { ingredients: ["Black", "White"], result: "Neutral Gray", hex1: "#1C1C1C", hex2: "#FFFFFF", hexResult: "#808080" },
      { ingredients: ["Ultramarine Blue", "Burnt Sienna", "White"], result: "Blue-Gray", hex1: "#4166F5", hex2: "#E97451", hexResult: "#536878", hex3: "#FFFFFF" },
      { ingredients: ["Raw Umber", "White"], result: "Warm Gray", hex1: "#826644", hex2: "#FFFFFF", hexResult: "#A89F91" },
      { ingredients: ["Payne's Gray", "Yellow Ochre"], result: "Greenish Gray", hex1: "#536878", hex2: "#CB9D06", hexResult: "#8F8F7A" },
      { ingredients: ["Viridian", "Cadmium Red", "White"], result: "Taupe", hex1: "#40826D", hex2: "#E30022", hexResult: "#8B8589", hex3: "#FFFFFF" },
    ]
  },
  "Skin Tones (Light to Dark)": {
    description: "Formulas for painting realistic skin",
    mixes: [
      { ingredients: ["White", "Yellow Ochre", "Cadmium Red (tiny)"], result: "Pale Skin", hex1: "#FFFFFF", hex2: "#CB9D06", hexResult: "#FFEFD5", hex3: "#E30022" },
      { ingredients: ["Yellow Ochre", "Cadmium Red", "White"], result: "Light Skin", hex1: "#CB9D06", hex2: "#E30022", hexResult: "#FFDAB9", hex3: "#FFFFFF" },
      { ingredients: ["Yellow Ochre", "Burnt Sienna", "White"], result: "Medium Light Skin", hex1: "#CB9D06", hex2: "#E97451", hexResult: "#DEB887", hex3: "#FFFFFF" },
      { ingredients: ["Burnt Sienna", "Yellow Ochre", "Cadmium Red"], result: "Medium Skin", hex1: "#E97451", hex2: "#CB9D06", hexResult: "#D2B48C", hex3: "#E30022" },
      { ingredients: ["Burnt Sienna", "Raw Umber", "Cadmium Red"], result: "Tan Skin", hex1: "#E97451", hex2: "#826644", hexResult: "#C19A6B", hex3: "#E30022" },
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
    ]
  },
  "Shades (Adding Black)": {
    description: "Make any color darker by adding black",
    mixes: [
      { ingredients: ["Cadmium Red", "Black"], result: "Maroon", hex1: "#E30022", hex2: "#1C1C1C", hexResult: "#800000" },
      { ingredients: ["Cadmium Red", "More Black"], result: "Burgundy", hex1: "#E30022", hex2: "#1C1C1C", hexResult: "#4A0000" },
      { ingredients: ["Ultramarine Blue", "Black"], result: "Navy Blue", hex1: "#4166F5", hex2: "#1C1C1C", hexResult: "#000080" },
      { ingredients: ["Cadmium Yellow", "Black"], result: "Olive", hex1: "#FFD300", hex2: "#1C1C1C", hexResult: "#808000" },
      { ingredients: ["Green", "Black"], result: "Forest Green", hex1: "#32CD32", hex2: "#1C1C1C", hexResult: "#228B22" },
      { ingredients: ["Green", "More Black"], result: "Hunter Green", hex1: "#32CD32", hex2: "#1C1C1C", hexResult: "#355E3B" },
      { ingredients: ["Purple", "Black"], result: "Eggplant", hex1: "#8B008B", hex2: "#1C1C1C", hexResult: "#614051" },
      { ingredients: ["Orange", "Black"], result: "Brown", hex1: "#FF7F00", hex2: "#1C1C1C", hexResult: "#8B4513" },
    ]
  },
};

// ==========================================
// THEME PALETTES
// ==========================================

const themePalettes = [
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
    name: "🌅 Sunset",
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
    name: "🌊 Ocean",
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
    name: "🍂 Autumn",
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
    name: "❄️ Winter",
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
    name: "🎨 Impressionist",
    colors: [
      { name: "Cerulean", hex: "#87CEEB" },
      { name: "Sap Green", hex: "#507D2A" },
      { name: "Cadmium Yellow", hex: "#FFD700" },
      { name: "Lavender", hex: "#E6E6FA" },
      { name: "Burnt Sienna", hex: "#E97451" },
    ]
  },
  {
    name: "🖼️ Rembrandt",
    colors: [
      { name: "Burnt Umber", hex: "#8B4513" },
      { name: "Raw Sienna", hex: "#D2691E" },
      { name: "Flesh", hex: "#FFE4C4" },
      { name: "Deep Brown", hex: "#2F1810" },
      { name: "Gold", hex: "#CD853F" },
    ]
  },
];

// ==========================================
// WARM/COOL COLORS
// ==========================================

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

// ==========================================
// HELPER FUNCTIONS
// ==========================================

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

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) { h = s = 0; }
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
      default: h = 0;
    }
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

// ==========================================
// COMPONENTS
// ==========================================

// Color Swatch with always-visible name
function ColorSwatch({ color, onClick, size = 'normal' }) {
  const textColor = getContrastColor(color.hex);
  const sizeClass = size === 'small' ? 'w-16 h-14' : size === 'large' ? 'w-24 h-20' : 'w-20 h-16';
  const isWhite = color.hex.toUpperCase() === '#FFFFFF' || color.hex.toUpperCase() === '#FFFAFA' || color.hex.toUpperCase() === '#FFFFF0';

  return (
    <div
      className="flex flex-col items-center cursor-pointer group"
      onClick={() => onClick && onClick(color)}
    >
      <div
        className={`${sizeClass} rounded-lg shadow-md flex items-end justify-center pb-1 transition-transform group-hover:scale-105`}
        style={{
          backgroundColor: color.hex,
          border: isWhite ? '1px solid #e5e7eb' : 'none'
        }}
      >
        <span className="text-[7px] font-mono opacity-60" style={{ color: textColor }}>
          {color.hex}
        </span>
      </div>
      <p className="text-[10px] font-medium text-center mt-1.5 leading-tight max-w-20 text-gray-800">
        {color.name}
      </p>
      {color.code && (
        <p className="text-[8px] font-mono text-gray-400">{color.code}</p>
      )}
    </div>
  );
}

// Color Detail Modal
function ColorDetailModal({ color, onClose }) {
  if (!color) return null;

  const textColor = getContrastColor(color.hex);
  const rgb = hexToRgb(color.hex);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: color.hex, boxShadow: `0 40px 80px ${color.hex}88` }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 z-10"
          style={{ backgroundColor: `${textColor}22`, color: textColor }}
        >
          ✕
        </button>
        <div className="aspect-square w-full" />
        <div className="p-8" style={{ color: textColor }}>
          <h2 className="text-3xl font-light mb-2">{color.name}</h2>
          {color.code && <p className="text-sm opacity-60 mb-6">Pigment: {color.code}</p>}
          <div className="space-y-3 text-sm font-mono">
            <div className="flex justify-between py-2 border-b" style={{ borderColor: `${textColor}22` }}>
              <span className="opacity-60">HEX</span>
              <span>{color.hex}</span>
            </div>
            <div className="flex justify-between py-2 border-b" style={{ borderColor: `${textColor}22` }}>
              <span className="opacity-60">RGB</span>
              <span>{rgb.r}, {rgb.g}, {rgb.b}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="opacity-60">HSL</span>
              <span>{hsl.h}°, {hsl.s}%, {hsl.l}%</span>
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

// Mixing Row Component
function MixRow({ mix, compact = false }) {
  const hasThird = mix.hex3;

  if (compact) {
    return (
      <div className="flex items-center gap-1.5 p-2 bg-white rounded-lg border border-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded shadow-sm" style={{ backgroundColor: mix.hex1 }} />
          <span className="text-[7px] mt-0.5 text-center max-w-10 leading-tight text-gray-600">{mix.ingredients[0]}</span>
        </div>
        <span className="text-gray-400 text-xs">+</span>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded shadow-sm" style={{ backgroundColor: mix.hex2 }} />
          <span className="text-[7px] mt-0.5 text-center max-w-10 leading-tight text-gray-600">{mix.ingredients[1]}</span>
        </div>
        {hasThird && (
          <>
            <span className="text-gray-400 text-xs">+</span>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded shadow-sm" style={{ backgroundColor: mix.hex3 }} />
              <span className="text-[7px] mt-0.5 text-center max-w-10 leading-tight text-gray-600">{mix.ingredients[2]}</span>
            </div>
          </>
        )}
        <span className="text-gray-400 text-xs">=</span>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-lg shadow ring-2 ring-gray-200" style={{ backgroundColor: mix.hexResult }} />
          <span className="text-[8px] mt-0.5 font-medium text-center max-w-12 leading-tight text-gray-800">{mix.result}</span>
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

// Mixing Category Section
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
            <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
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

// Color Wheel Visual
function ColorWheelSection() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 print-card">
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">The Color Wheel - Your Mixing Guide</h3>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <svg viewBox="0 0 300 300" className="w-64 h-64">
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
          <circle cx="150" cy="150" r="55" fill="white" stroke="#e5e7eb" strokeWidth="2" />
          <text x="150" y="145" textAnchor="middle" fontSize="11" fill="#666" fontWeight="bold">COLOR</text>
          <text x="150" y="160" textAnchor="middle" fontSize="11" fill="#666" fontWeight="bold">WHEEL</text>
        </svg>

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
      <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Warm vs Cool Colors</h3>
      <p className="text-center text-gray-500 mb-6">Warm colors advance (come forward), cool colors recede (go back)</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, #FFF5E6 0%, #FFE0CC 100%)' }}>
          <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">Warm Colors</h4>
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
          <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">Cool Colors</h4>
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
      <h3 className="text-xl font-bold text-yellow-800 mb-4 text-center">Quick Reference - Common Mixes</h3>
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

// Palette Card
function PaletteCard({ palette }) {
  return (
    <div className="p-5 rounded-xl bg-white border border-gray-200 print-card">
      <h3 className="text-base font-semibold text-gray-800 mb-3">{palette.name}</h3>
      <div className="flex gap-1">
        {palette.colors.map((c, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div
              className="w-full h-14 rounded-lg shadow first:rounded-l-xl last:rounded-r-xl"
              style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #ddd' : 'none' }}
            />
            <span className="text-[8px] mt-1 text-center leading-tight text-gray-600">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Activity Worksheet
function ActivityWorksheet() {
  return (
    <div className="p-6 rounded-xl bg-white border border-gray-200 print-card">
      <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">Color Mixing Activity Sheet</h3>
      <p className="text-center text-gray-500 mb-6">Fill in the circles with the color you think you'll get!</p>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#FFD300' }} />
          <span className="text-2xl text-gray-400">+</span>
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#0047AB' }} />
          <span className="text-2xl text-gray-400">=</span>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
          <span className="text-2xl text-gray-400">+</span>
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#FFD300' }} />
          <span className="text-2xl text-gray-400">=</span>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#0047AB' }} />
          <span className="text-2xl text-gray-400">+</span>
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
          <span className="text-2xl text-gray-400">=</span>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
          <span className="text-2xl text-gray-400">+</span>
          <div className="w-14 h-14 rounded-full shadow" style={{ backgroundColor: '#FFFFFF', border: '2px solid #ddd' }} />
          <span className="text-2xl text-gray-400">=</span>
          <div className="w-16 h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-700 mb-2">Challenge: What two colors make BROWN?</h4>
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

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function ColorMixingMasterGuide() {
  const [viewMode, setViewMode] = useState('interactive');
  const [expandAll, setExpandAll] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const totalMixes = Object.values(mixingDatabase).reduce((sum, cat) => sum + cat.mixes.length, 0);
  const totalPigments = Object.values(pigmentData).flat().length;
  const categories = ['All', ...Object.keys(pigmentData)];

  const filteredPigments = useMemo(() => {
    let result = {};
    const search = searchTerm.toLowerCase();

    Object.entries(pigmentData).forEach(([category, colors]) => {
      if (activeCategory !== 'All' && activeCategory !== category) return;

      const filtered = colors.filter(c =>
        c.name.toLowerCase().includes(search) ||
        c.hex.toLowerCase().includes(search) ||
        (c.code && c.code.toLowerCase().includes(search))
      );

      if (filtered.length > 0) result[category] = filtered;
    });

    return result;
  }, [searchTerm, activeCategory]);

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');

        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            font-size: 12pt !important;
          }
          .no-print { display: none !important; }
          .print-card { break-inside: avoid; page-break-inside: avoid; margin-bottom: 20px; }
          .page-break-inside-avoid { break-inside: avoid; }
          .print-always-show { display: grid !important; }
          .no-print-toggle { pointer-events: none; }

          /* Larger fonts for print */
          h1 { font-size: 24pt !important; }
          h2 { font-size: 18pt !important; }
          h3 { font-size: 14pt !important; }
          h4 { font-size: 12pt !important; }
          p, span, li { font-size: 11pt !important; }

          /* Color swatch names */
          .print-color-name { font-size: 10pt !important; }

          /* Mixing recipe labels */
          .print-mix-label { font-size: 10pt !important; }

          /* Make tiny text readable */
          .text-\\[7px\\], .text-\\[8px\\], .text-\\[9px\\], .text-\\[10px\\] {
            font-size: 9pt !important;
          }
          .text-xs { font-size: 10pt !important; }
          .text-sm { font-size: 11pt !important; }
          .text-base { font-size: 12pt !important; }
          .text-lg { font-size: 14pt !important; }
          .text-xl { font-size: 16pt !important; }
          .text-2xl { font-size: 18pt !important; }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white shadow-sm no-print">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-extrabold text-gray-800">
                Complete Color Mixing Guide
              </h1>
              <p className="text-sm text-gray-500">
                {totalPigments} pigments • {totalMixes} mixing recipes • Printable charts
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setExpandAll(!expandAll)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                {expandAll ? 'Collapse All' : 'Expand All'}
              </button>
              <button
                onClick={handlePrint}
                className="px-5 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Print Guide
              </button>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex gap-1 p-1 rounded-xl bg-gray-100 w-fit overflow-x-auto hide-scrollbar">
            {[
              { id: 'interactive', label: 'Mixing Recipes' },
              { id: 'colors', label: 'All Colors' },
              { id: 'palettes', label: 'Palettes' },
              { id: 'grid', label: 'Compact Grid' },
              { id: 'activity', label: 'Activity Sheet' },
            ].map(view => (
              <button key={view.id} onClick={() => setViewMode(view.id)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap"
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

        {/* ============ MIXING RECIPES VIEW ============ */}
        {viewMode === 'interactive' && (
          <>
            <div className="mb-8">
              <ColorWheelSection />
            </div>

            <div className="mb-8">
              <QuickReferenceCard />
            </div>

            <div className="mb-8">
              <WarmCoolSection />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-800 mb-4">All Mixing Recipes by Category</h2>
              {Object.entries(mixingDatabase).map(([category, data], index) => (
                <MixingCategory
                  key={category}
                  category={category}
                  data={data}
                  defaultOpen={expandAll || index < 3}
                />
              ))}
            </div>

            {/* Tips Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 print-card">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Pro Mixing Tips</h3>
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
          </>
        )}

        {/* ============ ALL COLORS VIEW ============ */}
        {viewMode === 'colors' && (
          <div>
            {/* Category Filter */}
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

            {/* Search */}
            <div className="mb-6 no-print">
              <input
                type="text"
                placeholder="Search colors by name, hex, or pigment code..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Color Grid */}
            {Object.entries(filteredPigments).map(([category, colors], catIndex) => (
              <section key={category} className="mb-8 print-card">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl font-bold text-gray-800">{category}</h2>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                    {colors.length} colors
                  </span>
                </div>
                <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))' }}>
                  {colors.map((color) => (
                    <ColorSwatch key={color.name} color={color} onClick={setSelectedColor} />
                  ))}
                </div>
              </section>
            ))}

            {Object.keys(filteredPigments).length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No colors found for "{searchTerm}"</p>
              </div>
            )}
          </div>
        )}

        {/* ============ PALETTES VIEW ============ */}
        {viewMode === 'palettes' && (
          <div className="space-y-6">
            <div className="text-center mb-8 no-print">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Color Palettes</h2>
              <p className="text-gray-500">Beautiful color combinations ready to use!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {themePalettes.map((palette, i) => (
                <PaletteCard key={i} palette={palette} />
              ))}
            </div>

            {/* Complementary Colors */}
            <div className="p-6 rounded-xl bg-white border border-gray-200 print-card">
              <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Colors That Go Together (Complementary)</h3>
              <p className="text-center text-gray-500 mb-4">These opposite colors make each other POP!</p>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { c1: "#E30022", c2: "#32CD32", n1: "Red", n2: "Green" },
                  { c1: "#FF7F00", c2: "#0047AB", n1: "Orange", n2: "Blue" },
                  { c1: "#FFD300", c2: "#8B008B", n1: "Yellow", n2: "Purple" },
                ].map((pair, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="flex gap-2">
                      <div className="w-16 h-16 rounded-lg shadow" style={{ backgroundColor: pair.c1 }} />
                      <div className="w-16 h-16 rounded-lg shadow" style={{ backgroundColor: pair.c2 }} />
                    </div>
                    <span className="text-sm mt-2 font-medium">{pair.n1} & {pair.n2}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============ COMPACT GRID VIEW ============ */}
        {viewMode === 'grid' && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Compact Mixing Grid (Print-Friendly)</h2>
            <PrintableGrid />
          </div>
        )}

        {/* ============ ACTIVITY SHEET VIEW ============ */}
        {viewMode === 'activity' && (
          <div className="space-y-6">
            <div className="text-center mb-8 no-print">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Activity Worksheets</h2>
              <p className="text-gray-500">Print these out and practice your color mixing!</p>
            </div>

            <ActivityWorksheet />

            {/* Color Code Reference */}
            <div className="p-6 rounded-xl bg-blue-50 border border-blue-200 print-card">
              <h3 className="text-lg font-bold text-blue-800 mb-4">Color Code Reference</h3>
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
                    <div
                      className="w-12 h-12 rounded-lg shadow flex items-center justify-center font-bold"
                      style={{
                        backgroundColor: item.color,
                        border: item.color === '#FFFFFF' ? '2px solid #ddd' : 'none',
                        color: getContrastColor(item.color)
                      }}
                    >
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
          <p className="mt-1">Print any page to use as a reference chart!</p>
        </div>
      </footer>

      {/* Color Detail Modal */}
      <ColorDetailModal color={selectedColor} onClose={() => setSelectedColor(null)} />
    </div>
  );
}
