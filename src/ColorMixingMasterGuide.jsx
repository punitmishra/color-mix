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
// BRAND DATABASE
// ==========================================

const brandData = {
  "Winsor & Newton": {
    abbr: "W&N",
    type: "Professional Watercolour / Artists' Oil",
    colors: {
      "Cadmium Yellow": { code: "108", series: "4" },
      "Cadmium Yellow Light": { code: "118", series: "4" },
      "Cadmium Yellow Deep": { code: "111", series: "4" },
      "Lemon Yellow": { code: "347", series: "1" },
      "Yellow Ochre": { code: "744", series: "1" },
      "Cadmium Orange": { code: "089", series: "4" },
      "Cadmium Red": { code: "094", series: "4" },
      "Cadmium Red Deep": { code: "097", series: "4" },
      "Alizarin Crimson": { code: "004", series: "1" },
      "Permanent Rose": { code: "502", series: "3" },
      "Quinacridone Magenta": { code: "545", series: "3" },
      "Ultramarine Blue": { code: "660", series: "1" },
      "Cobalt Blue": { code: "178", series: "4" },
      "Cerulean Blue": { code: "137", series: "3" },
      "Phthalo Blue": { code: "707", series: "1" },
      "Prussian Blue": { code: "538", series: "1" },
      "Viridian": { code: "692", series: "3" },
      "Phthalo Green": { code: "522", series: "1" },
      "Burnt Sienna": { code: "074", series: "1" },
      "Burnt Umber": { code: "076", series: "1" },
      "Raw Sienna": { code: "552", series: "1" },
      "Raw Umber": { code: "554", series: "1" },
      "Ivory Black": { code: "331", series: "1" },
      "Titanium White": { code: "644", series: "1" },
    }
  },
  "Golden": {
    abbr: "Golden",
    type: "Heavy Body Acrylics",
    colors: {
      "Cadmium Yellow Medium": { code: "1130", series: "7" },
      "Cadmium Yellow Light": { code: "1120", series: "7" },
      "Hansa Yellow Light": { code: "1180", series: "3" },
      "Hansa Yellow Medium": { code: "1190", series: "3" },
      "Yellow Ochre": { code: "1410", series: "1" },
      "Cadmium Orange": { code: "1070", series: "7" },
      "Pyrrole Orange": { code: "1276", series: "6" },
      "Cadmium Red Medium": { code: "1100", series: "7" },
      "Cadmium Red Light": { code: "1090", series: "7" },
      "Pyrrole Red": { code: "1280", series: "6" },
      "Quinacridone Magenta": { code: "1305", series: "6" },
      "Quinacridone Red": { code: "1310", series: "6" },
      "Ultramarine Blue": { code: "1400", series: "2" },
      "Cobalt Blue": { code: "1140", series: "8" },
      "Cerulean Blue Chromium": { code: "1050", series: "9" },
      "Phthalo Blue (GS)": { code: "1250", series: "4" },
      "Phthalo Blue (RS)": { code: "1255", series: "4" },
      "Phthalo Green (BS)": { code: "1270", series: "4" },
      "Phthalo Green (YS)": { code: "1275", series: "4" },
      "Viridian": { code: "1740", series: "6" },
      "Burnt Sienna": { code: "1020", series: "1" },
      "Burnt Umber": { code: "1030", series: "1" },
      "Raw Sienna": { code: "1330", series: "1" },
      "Raw Umber": { code: "1340", series: "1" },
      "Carbon Black": { code: "1040", series: "1" },
      "Titanium White": { code: "1380", series: "1" },
    }
  },
  "Liquitex": {
    abbr: "Liquitex",
    type: "Heavy Body Acrylics",
    colors: {
      "Cadmium Yellow Medium Hue": { code: "830", series: "1A" },
      "Cadmium Yellow Light Hue": { code: "159", series: "1A" },
      "Yellow Medium Azo": { code: "412", series: "2" },
      "Yellow Oxide": { code: "416", series: "1A" },
      "Cadmium Orange Hue": { code: "720", series: "1A" },
      "Pyrrole Orange": { code: "323", series: "3" },
      "Cadmium Red Medium Hue": { code: "151", series: "1A" },
      "Pyrrole Red": { code: "321", series: "3" },
      "Quinacridone Magenta": { code: "114", series: "3" },
      "Alizarin Crimson Hue Permanent": { code: "116", series: "2" },
      "Ultramarine Blue": { code: "380", series: "1A" },
      "Cobalt Blue Hue": { code: "381", series: "1A" },
      "Cerulean Blue Hue": { code: "470", series: "1A" },
      "Phthalo Blue (GS)": { code: "316", series: "1A" },
      "Prussian Blue Hue": { code: "320", series: "1A" },
      "Phthalo Green (BS)": { code: "317", series: "1A" },
      "Viridian Hue Permanent": { code: "398", series: "1A" },
      "Burnt Sienna": { code: "127", series: "1A" },
      "Burnt Umber": { code: "128", series: "1A" },
      "Raw Sienna": { code: "330", series: "1A" },
      "Raw Umber": { code: "331", series: "1A" },
      "Ivory Black": { code: "244", series: "1A" },
      "Titanium White": { code: "432", series: "1A" },
    }
  },
  "Daniel Smith": {
    abbr: "DS",
    type: "Extra Fine Watercolors",
    colors: {
      "Cadmium Yellow Medium Hue": { code: "015", series: "3" },
      "Hansa Yellow Light": { code: "039", series: "1" },
      "Hansa Yellow Medium": { code: "040", series: "1" },
      "New Gamboge": { code: "066", series: "1" },
      "Yellow Ochre": { code: "115", series: "1" },
      "Cadmium Orange Hue": { code: "014", series: "3" },
      "Pyrrol Orange": { code: "083", series: "2" },
      "Cadmium Red Medium Hue": { code: "185", series: "3" },
      "Pyrrol Scarlet": { code: "084", series: "2" },
      "Quinacridone Magenta": { code: "088", series: "2" },
      "Quinacridone Rose": { code: "089", series: "2" },
      "Alizarin Crimson": { code: "004", series: "1" },
      "Ultramarine Blue": { code: "106", series: "1" },
      "Cobalt Blue": { code: "025", series: "3" },
      "Cerulean Blue Chromium": { code: "021", series: "3" },
      "Phthalo Blue (GS)": { code: "079", series: "1" },
      "Phthalo Blue (RS)": { code: "080", series: "1" },
      "Prussian Blue": { code: "082", series: "1" },
      "Phthalo Green (BS)": { code: "077", series: "1" },
      "Phthalo Green (YS)": { code: "078", series: "1" },
      "Viridian": { code: "112", series: "2" },
      "Burnt Sienna": { code: "010", series: "1" },
      "Burnt Umber": { code: "011", series: "1" },
      "Raw Sienna": { code: "093", series: "1" },
      "Raw Umber": { code: "094", series: "1" },
      "Ivory Black": { code: "049", series: "1" },
      "Chinese White": { code: "023", series: "1" },
    }
  },
  "Gamblin": {
    abbr: "Gamblin",
    type: "Artist's Oil Colors",
    colors: {
      "Cadmium Yellow Light": { code: "1130" },
      "Cadmium Yellow Medium": { code: "1140" },
      "Cadmium Yellow Deep": { code: "1150" },
      "Hansa Yellow Light": { code: "1200" },
      "Yellow Ochre": { code: "1740" },
      "Cadmium Orange": { code: "1090" },
      "Cadmium Red Light": { code: "1050" },
      "Cadmium Red Medium": { code: "1060" },
      "Cadmium Red Deep": { code: "1070" },
      "Alizarin Permanent": { code: "1020" },
      "Quinacridone Magenta": { code: "1440" },
      "Quinacridone Red": { code: "1450" },
      "Ultramarine Blue": { code: "1700" },
      "Cobalt Blue": { code: "1110" },
      "Cerulean Blue": { code: "1100" },
      "Phthalo Blue": { code: "1380" },
      "Prussian Blue": { code: "1430" },
      "Phthalo Green": { code: "1370" },
      "Viridian": { code: "1730" },
      "Chromium Oxide Green": { code: "1105" },
      "Burnt Sienna": { code: "1030" },
      "Burnt Umber": { code: "1040" },
      "Raw Sienna": { code: "1460" },
      "Raw Umber": { code: "1470" },
      "Ivory Black": { code: "1230" },
      "Titanium White": { code: "1670" },
    }
  },
  "Holbein": {
    abbr: "Holbein",
    type: "Artists' Watercolors",
    colors: {
      "Cadmium Yellow": { code: "W024" },
      "Cadmium Yellow Light": { code: "W023" },
      "Lemon Yellow": { code: "W012" },
      "Yellow Ochre": { code: "W042" },
      "Cadmium Orange": { code: "W036" },
      "Cadmium Red": { code: "W101" },
      "Cadmium Red Light": { code: "W039" },
      "Alizarin Crimson": { code: "W104" },
      "Permanent Rose": { code: "W107" },
      "Quinacridone Magenta": { code: "W112" },
      "Ultramarine Light": { code: "W294" },
      "Ultramarine Deep": { code: "W293" },
      "Cobalt Blue": { code: "W288" },
      "Cerulean Blue": { code: "W277" },
      "Phthalo Blue": { code: "W308" },
      "Prussian Blue": { code: "W306" },
      "Viridian": { code: "W261" },
      "Phthalo Green": { code: "W267" },
      "Burnt Sienna": { code: "W055" },
      "Burnt Umber": { code: "W058" },
      "Raw Sienna": { code: "W052" },
      "Raw Umber": { code: "W057" },
      "Ivory Black": { code: "W334" },
      "Titanium White": { code: "W001" },
    }
  },
};

// ==========================================
// MIXING DATABASE (WITH RATIOS)
// ==========================================

const mixingDatabase = {
  "Primary → Secondary": {
    description: "Mix two primary colors to get secondary colors",
    mixes: [
      { ingredients: ["Red", "Yellow"], result: "Orange", hex1: "#E30022", hex2: "#FFD300", hexResult: "#FF7F00", ratio: "1:1", tip: "Equal parts for pure orange" },
      { ingredients: ["Yellow", "Blue"], result: "Green", hex1: "#FFD300", hex2: "#0047AB", hexResult: "#32CD32", ratio: "2:1", tip: "More yellow than blue - blue is stronger" },
      { ingredients: ["Blue", "Red"], result: "Purple", hex1: "#0047AB", hex2: "#E30022", hexResult: "#8B008B", ratio: "1:1", tip: "Use cool red for cleaner purple" },
    ]
  },
  "Primary + Secondary → Tertiary": {
    description: "Mix a primary with its neighboring secondary",
    mixes: [
      { ingredients: ["Red", "Orange"], result: "Red-Orange", hex1: "#E30022", hex2: "#FF7F00", hexResult: "#FF4500", ratio: "2:1", tip: "More red for warmer result" },
      { ingredients: ["Yellow", "Orange"], result: "Yellow-Orange", hex1: "#FFD300", hex2: "#FF7F00", hexResult: "#FFAE42", ratio: "2:1", tip: "More yellow for golden tone" },
      { ingredients: ["Yellow", "Green"], result: "Yellow-Green", hex1: "#FFD300", hex2: "#32CD32", hexResult: "#9ACD32", ratio: "1:1", tip: "Chartreuse - very vibrant" },
      { ingredients: ["Blue", "Green"], result: "Blue-Green (Teal)", hex1: "#0047AB", hex2: "#32CD32", hexResult: "#008B8B", ratio: "1:1", tip: "Adjust for warmer/cooler teal" },
      { ingredients: ["Blue", "Purple"], result: "Blue-Purple", hex1: "#0047AB", hex2: "#8B008B", hexResult: "#4B0082", ratio: "2:1", tip: "More blue for indigo" },
      { ingredients: ["Red", "Purple"], result: "Red-Purple (Magenta)", hex1: "#E30022", hex2: "#8B008B", hexResult: "#C71585", ratio: "1:1", tip: "Use quinacridone for intensity" },
    ]
  },
  "Greens (Yellow + Blue variations)": {
    description: "Different yellows and blues make different greens",
    mixes: [
      { ingredients: ["Lemon Yellow", "Phthalo Blue"], result: "Bright Green", hex1: "#FFF44F", hex2: "#000F89", hexResult: "#32CD32", ratio: "3:1", tip: "Phthalo is very strong - use sparingly" },
      { ingredients: ["Cadmium Yellow", "Cerulean Blue"], result: "Spring Green", hex1: "#FFD300", hex2: "#007BA7", hexResult: "#00FF7F", ratio: "2:1", tip: "Light, fresh green for foliage" },
      { ingredients: ["Cadmium Yellow", "Ultramarine Blue"], result: "Leaf Green", hex1: "#FFD300", hex2: "#4166F5", hexResult: "#228B22", ratio: "2:1", tip: "Classic natural green" },
      { ingredients: ["Yellow Ochre", "Ultramarine Blue"], result: "Olive Green", hex1: "#CB9D06", hex2: "#4166F5", hexResult: "#556B2F", ratio: "2:1", tip: "Muted, natural olive" },
      { ingredients: ["Yellow Ochre", "Phthalo Blue"], result: "Dark Olive", hex1: "#CB9D06", hex2: "#000F89", hexResult: "#4B5320", ratio: "3:1", tip: "Deep shadow green" },
      { ingredients: ["Naples Yellow", "Prussian Blue"], result: "Forest Green", hex1: "#FADA5E", hex2: "#003153", hexResult: "#228B22", ratio: "2:1", tip: "Rich forest color" },
      { ingredients: ["Raw Sienna", "Phthalo Blue"], result: "Deep Forest", hex1: "#D68A59", hex2: "#000F89", hexResult: "#2F4F4F", ratio: "2:1", tip: "Muted, earthy green" },
      { ingredients: ["Cadmium Yellow", "Phthalo Green"], result: "Lime Green", hex1: "#FFD300", hex2: "#123524", hexResult: "#32CD32", ratio: "4:1", tip: "Phthalo Green is intense" },
      { ingredients: ["Lemon Yellow", "Viridian"], result: "Mint Green", hex1: "#FFF44F", hex2: "#40826D", hexResult: "#98FF98", ratio: "2:1", tip: "Cool, refreshing mint" },
      { ingredients: ["Yellow Ochre", "Viridian"], result: "Sage Green", hex1: "#CB9D06", hex2: "#40826D", hexResult: "#9DC183", ratio: "1:1", tip: "Soft, muted sage" },
    ]
  },
  "Oranges (Red + Yellow variations)": {
    description: "Different reds and yellows make different oranges",
    mixes: [
      { ingredients: ["Cadmium Red", "Cadmium Yellow"], result: "Bright Orange", hex1: "#E30022", hex2: "#FFD300", hexResult: "#FF7F00", ratio: "1:2", tip: "More yellow for bright orange" },
      { ingredients: ["Cadmium Red Light", "Lemon Yellow"], result: "Light Orange", hex1: "#E30022", hex2: "#FFF44F", hexResult: "#FFA500", ratio: "1:3", tip: "High-key, warm orange" },
      { ingredients: ["Pyrrole Red", "Hansa Yellow"], result: "Tangerine", hex1: "#E32636", hex2: "#FFEB3B", hexResult: "#FF9966", ratio: "1:2", tip: "Vibrant modern pigments" },
      { ingredients: ["Vermilion", "Cadmium Yellow Deep"], result: "Deep Orange", hex1: "#E34234", hex2: "#FFA500", hexResult: "#FF6600", ratio: "1:1", tip: "Rich, saturated orange" },
      { ingredients: ["Quinacridone Red", "Indian Yellow"], result: "Coral", hex1: "#E8173F", hex2: "#E3A857", hexResult: "#FF7F50", ratio: "1:2", tip: "Transparent, glowing coral" },
      { ingredients: ["Cadmium Red Deep", "Yellow Ochre"], result: "Burnt Orange", hex1: "#A91B0D", hex2: "#CB9D06", hexResult: "#CC5500", ratio: "1:1", tip: "Earthy, muted orange" },
      { ingredients: ["Vermilion", "Naples Yellow"], result: "Peach", hex1: "#E34234", hex2: "#FADA5E", hexResult: "#FFCBA4", ratio: "1:3", tip: "Soft skin tone base" },
      { ingredients: ["Cadmium Red", "Raw Sienna"], result: "Terra Cotta", hex1: "#E30022", hex2: "#D68A59", hexResult: "#E2725B", ratio: "1:2", tip: "Earthy pottery color" },
    ]
  },
  "Purples & Violets (Blue + Red variations)": {
    description: "Different blues and reds make different purples",
    mixes: [
      { ingredients: ["Ultramarine Blue", "Alizarin Crimson"], result: "Royal Purple", hex1: "#4166F5", hex2: "#E32636", hexResult: "#7851A9", ratio: "1:1", tip: "Classic purple mix" },
      { ingredients: ["Ultramarine Blue", "Quinacridone Magenta"], result: "Deep Violet", hex1: "#4166F5", hex2: "#A50B5E", hexResult: "#8B008B", ratio: "2:1", tip: "Intense, clean violet" },
      { ingredients: ["Cobalt Blue", "Permanent Rose"], result: "Medium Purple", hex1: "#0047AB", hex2: "#FF007F", hexResult: "#9370DB", ratio: "1:1", tip: "Bright, clear purple" },
      { ingredients: ["Phthalo Blue", "Alizarin Crimson"], result: "Indigo", hex1: "#000F89", hex2: "#E32636", hexResult: "#4B0082", ratio: "3:1", tip: "Deep, dark indigo" },
      { ingredients: ["Cerulean Blue", "Quinacridone Red"], result: "Lavender", hex1: "#007BA7", hex2: "#E8173F", hexResult: "#E6E6FA", ratio: "1:1 + white", tip: "Add white for lavender" },
      { ingredients: ["Ultramarine Blue", "Cadmium Red"], result: "Plum", hex1: "#4166F5", hex2: "#E30022", hexResult: "#8E4585", ratio: "2:1", tip: "Muted, earthy purple" },
      { ingredients: ["Phthalo Blue", "Quinacridone Magenta"], result: "Blue-Violet", hex1: "#000F89", hex2: "#A50B5E", hexResult: "#8A2BE2", ratio: "2:1", tip: "Electric violet" },
      { ingredients: ["Cerulean Blue", "Opera Pink"], result: "Orchid", hex1: "#007BA7", hex2: "#FF1493", hexResult: "#DA70D6", ratio: "1:2", tip: "Light, floral purple" },
    ]
  },
  "Browns (Complementary Mixes)": {
    description: "Mix opposite colors on the color wheel",
    mixes: [
      { ingredients: ["Orange", "Blue"], result: "Brown", hex1: "#FF7F00", hex2: "#0047AB", hexResult: "#8B4513", ratio: "2:1", tip: "Orange dominant for warm brown" },
      { ingredients: ["Red", "Green"], result: "Dark Brown", hex1: "#E30022", hex2: "#32CD32", hexResult: "#654321", ratio: "1:1", tip: "Equal parts for neutral brown" },
      { ingredients: ["Purple", "Yellow"], result: "Olive Brown", hex1: "#8B008B", hex2: "#FFD300", hexResult: "#6B4423", ratio: "1:2", tip: "More yellow to avoid mud" },
      { ingredients: ["Cadmium Orange", "Ultramarine Blue"], result: "Burnt Umber", hex1: "#ED872D", hex2: "#4166F5", hexResult: "#8A3324", ratio: "3:1", tip: "Touch of blue to orange" },
      { ingredients: ["Cadmium Red", "Phthalo Green"], result: "Van Dyke Brown", hex1: "#E30022", hex2: "#123524", hexResult: "#664228", ratio: "3:1", tip: "Little green - very strong" },
      { ingredients: ["Yellow Ochre", "Dioxazine Violet"], result: "Raw Umber", hex1: "#CB9D06", hex2: "#5C2D91", hexResult: "#826644", ratio: "4:1", tip: "Violet is intense" },
      { ingredients: ["Vermilion", "Viridian"], result: "Sepia", hex1: "#E34234", hex2: "#40826D", hexResult: "#704214", ratio: "2:1", tip: "Classic brown mix" },
    ]
  },
  "Chromatic Blacks (No Black Paint!)": {
    description: "Mix complementary colors for rich blacks",
    mixes: [
      { ingredients: ["Ultramarine Blue", "Burnt Sienna"], result: "Warm Black", hex1: "#4166F5", hex2: "#E97451", hexResult: "#2F2F2F", ratio: "1:1", tip: "Most popular chromatic black" },
      { ingredients: ["Phthalo Blue", "Burnt Umber"], result: "Cool Black", hex1: "#000F89", hex2: "#8A3324", hexResult: "#1A1A1A", ratio: "1:1", tip: "Cool, deep black" },
      { ingredients: ["Phthalo Green", "Alizarin Crimson"], result: "Rich Black", hex1: "#123524", hex2: "#E32636", hexResult: "#141414", ratio: "1:1", tip: "Very dark, neutral black" },
      { ingredients: ["Phthalo Green", "Quinacridone Red"], result: "Neutral Black", hex1: "#123524", hex2: "#E8173F", hexResult: "#1C1C1C", ratio: "1:1", tip: "Adjust ratio to warm/cool" },
      { ingredients: ["Ultramarine Blue", "Burnt Umber"], result: "Blue-Black", hex1: "#4166F5", hex2: "#8A3324", hexResult: "#1F1F2E", ratio: "2:1", tip: "More blue for cool tint" },
      { ingredients: ["Viridian", "Alizarin Crimson"], result: "Green-Black", hex1: "#40826D", hex2: "#E32636", hexResult: "#1E1E1E", ratio: "1:1", tip: "Slight green undertone" },
    ]
  },
  "Grays (Multiple Methods)": {
    description: "Several ways to mix beautiful grays",
    mixes: [
      { ingredients: ["Black", "White"], result: "Neutral Gray", hex1: "#1C1C1C", hex2: "#FFFFFF", hexResult: "#808080", ratio: "1:4", tip: "Start with white, add black" },
      { ingredients: ["Ultramarine Blue", "Burnt Sienna", "White"], result: "Blue-Gray", hex1: "#4166F5", hex2: "#E97451", hexResult: "#536878", ratio: "1:1:2", tip: "Chromatic black + white" },
      { ingredients: ["Raw Umber", "White"], result: "Warm Gray", hex1: "#826644", hex2: "#FFFFFF", hexResult: "#A89F91", ratio: "1:4", tip: "Brownish warm gray" },
      { ingredients: ["Payne's Gray", "Yellow Ochre"], result: "Greenish Gray", hex1: "#536878", hex2: "#CB9D06", hexResult: "#8F8F7A", ratio: "3:1", tip: "Olive-tinted gray" },
      { ingredients: ["Viridian", "Cadmium Red", "White"], result: "Taupe", hex1: "#40826D", hex2: "#E30022", hexResult: "#8B8589", ratio: "1:1:3", tip: "Neutral warm gray" },
    ]
  },
  "Skin Tones (Light to Dark)": {
    description: "Formulas for painting realistic skin",
    mixes: [
      { ingredients: ["White", "Yellow Ochre", "Cadmium Red (tiny)"], result: "Pale Skin", hex1: "#FFFFFF", hex2: "#CB9D06", hexResult: "#FFEFD5", ratio: "10:2:touch", tip: "Very little red" },
      { ingredients: ["Yellow Ochre", "Cadmium Red", "White"], result: "Light Skin", hex1: "#CB9D06", hex2: "#E30022", hexResult: "#FFDAB9", ratio: "2:1:4", tip: "Base for light skin" },
      { ingredients: ["Yellow Ochre", "Burnt Sienna", "White"], result: "Medium Light Skin", hex1: "#CB9D06", hex2: "#E97451", hexResult: "#DEB887", ratio: "1:1:3", tip: "Warm undertone" },
      { ingredients: ["Burnt Sienna", "Yellow Ochre", "Cadmium Red"], result: "Medium Skin", hex1: "#E97451", hex2: "#CB9D06", hexResult: "#D2B48C", ratio: "2:1:touch", tip: "Balanced mid-tone" },
      { ingredients: ["Burnt Sienna", "Raw Umber", "Cadmium Red"], result: "Tan Skin", hex1: "#E97451", hex2: "#826644", hexResult: "#C19A6B", ratio: "2:1:touch", tip: "Warmer tan" },
      { ingredients: ["Burnt Sienna", "Ultramarine Blue (tiny)"], result: "Dark Tan", hex1: "#E97451", hex2: "#4166F5", hexResult: "#8B7355", ratio: "5:1", tip: "Blue neutralizes orange" },
      { ingredients: ["Burnt Umber", "Ultramarine Blue", "Cadmium Red"], result: "Dark Skin", hex1: "#8A3324", hex2: "#4166F5", hexResult: "#6B4423", ratio: "3:1:touch", tip: "Rich dark tone" },
      { ingredients: ["Burnt Umber", "Phthalo Blue", "Cadmium Red Deep"], result: "Deep Dark Skin", hex1: "#8A3324", hex2: "#000F89", hexResult: "#3D2B1F", ratio: "3:1:touch", tip: "Deep, warm dark" },
    ]
  },
  "Tints (Adding White)": {
    description: "Make any color lighter by adding white",
    mixes: [
      { ingredients: ["Cadmium Red", "White"], result: "Pink", hex1: "#E30022", hex2: "#FFFFFF", hexResult: "#FF6B6B", ratio: "1:2", tip: "Coral pink" },
      { ingredients: ["Cadmium Red", "More White"], result: "Light Pink", hex1: "#E30022", hex2: "#FFFFFF", hexResult: "#FFB6C1", ratio: "1:5", tip: "Baby pink" },
      { ingredients: ["Ultramarine Blue", "White"], result: "Sky Blue", hex1: "#4166F5", hex2: "#FFFFFF", hexResult: "#87CEEB", ratio: "1:3", tip: "Light sky color" },
      { ingredients: ["Ultramarine Blue", "More White"], result: "Baby Blue", hex1: "#4166F5", hex2: "#FFFFFF", hexResult: "#89CFF0", ratio: "1:6", tip: "Very pale blue" },
      { ingredients: ["Cadmium Yellow", "White"], result: "Cream", hex1: "#FFD300", hex2: "#FFFFFF", hexResult: "#FFFDD0", ratio: "1:4", tip: "Warm cream" },
      { ingredients: ["Phthalo Green", "White"], result: "Mint", hex1: "#123524", hex2: "#FFFFFF", hexResult: "#98FF98", ratio: "1:6", tip: "Cool mint green" },
      { ingredients: ["Dioxazine Violet", "White"], result: "Lavender", hex1: "#5C2D91", hex2: "#FFFFFF", hexResult: "#E6E6FA", ratio: "1:6", tip: "Soft lavender" },
      { ingredients: ["Burnt Sienna", "White"], result: "Salmon", hex1: "#E97451", hex2: "#FFFFFF", hexResult: "#FA8072", ratio: "1:2", tip: "Peach/salmon" },
    ]
  },
  "Shades (Adding Black)": {
    description: "Make any color darker by adding black",
    mixes: [
      { ingredients: ["Cadmium Red", "Black"], result: "Maroon", hex1: "#E30022", hex2: "#1C1C1C", hexResult: "#800000", ratio: "4:1", tip: "Little black goes far" },
      { ingredients: ["Cadmium Red", "More Black"], result: "Burgundy", hex1: "#E30022", hex2: "#1C1C1C", hexResult: "#4A0000", ratio: "2:1", tip: "Deep wine color" },
      { ingredients: ["Ultramarine Blue", "Black"], result: "Navy Blue", hex1: "#4166F5", hex2: "#1C1C1C", hexResult: "#000080", ratio: "3:1", tip: "Classic navy" },
      { ingredients: ["Cadmium Yellow", "Black"], result: "Olive", hex1: "#FFD300", hex2: "#1C1C1C", hexResult: "#808000", ratio: "4:1", tip: "Yellow + black = olive green" },
      { ingredients: ["Green", "Black"], result: "Forest Green", hex1: "#32CD32", hex2: "#1C1C1C", hexResult: "#228B22", ratio: "4:1", tip: "Deep forest" },
      { ingredients: ["Green", "More Black"], result: "Hunter Green", hex1: "#32CD32", hex2: "#1C1C1C", hexResult: "#355E3B", ratio: "2:1", tip: "Very dark green" },
      { ingredients: ["Purple", "Black"], result: "Eggplant", hex1: "#8B008B", hex2: "#1C1C1C", hexResult: "#614051", ratio: "3:1", tip: "Deep aubergine" },
      { ingredients: ["Orange", "Black"], result: "Brown", hex1: "#FF7F00", hex2: "#1C1C1C", hexResult: "#8B4513", ratio: "4:1", tip: "Quick brown method" },
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
// FAMOUS ARTIST PALETTES
// ==========================================

const artistPalettes = [
  {
    name: "Bob Ross",
    subtitle: "The Joy of Painting",
    description: "Bob's signature wet-on-wet oil painting palette for happy little trees and mountains",
    image: "🏔️",
    colors: [
      { name: "Titanium White", hex: "#FFFFFF", code: "PW6", note: "Base for clouds, snow, highlights" },
      { name: "Phthalo Blue", hex: "#000F89", code: "PB15", note: "Sky, water - very strong!" },
      { name: "Prussian Blue", hex: "#003153", code: "PB27", note: "Darker skies, shadows" },
      { name: "Midnight Black", hex: "#1C1C1C", code: "PBk9", note: "Tree trunks, dark areas" },
      { name: "Van Dyke Brown", hex: "#664228", code: "PBr7", note: "Trees, mountains, ground" },
      { name: "Dark Sienna", hex: "#3C1414", code: "PBr7", note: "Deep shadows, tree bases" },
      { name: "Alizarin Crimson", hex: "#E32636", code: "PR83", note: "Sunsets, flowers, mixing" },
      { name: "Sap Green", hex: "#507D2A", code: "PG7/PY110", note: "Trees, bushes, foliage" },
      { name: "Cadmium Yellow", hex: "#FFD300", code: "PY37", note: "Sun, highlights, bright areas" },
      { name: "Yellow Ochre", hex: "#CB9D06", code: "PY43", note: "Paths, ground, sandy areas" },
      { name: "Indian Yellow", hex: "#E3A857", code: "PY153", note: "Golden highlights, autumn" },
      { name: "Bright Red", hex: "#E30022", code: "PR108", note: "Flowers, barns, accents" },
    ],
    tips: [
      "Apply Liquid White first for wet-on-wet technique",
      "Use big brush for sky and water",
      "Fan brush for trees and bushes",
      "Palette knife for mountains",
      "Work dark to light, big to small",
    ]
  },
  {
    name: "Vincent van Gogh",
    subtitle: "Post-Impressionist Master",
    description: "Bold, expressive colors used in Starry Night, Sunflowers, and Irises",
    image: "🌻",
    colors: [
      { name: "Chrome Yellow", hex: "#FFC200", code: "PY34", note: "Sunflowers, stars, wheat" },
      { name: "Cadmium Yellow", hex: "#FFD300", code: "PY37", note: "Bright yellow areas" },
      { name: "Yellow Ochre", hex: "#CB9D06", code: "PY43", note: "Fields, earth tones" },
      { name: "Chrome Orange", hex: "#FF7F00", code: "PO21", note: "Warm accents" },
      { name: "Vermilion", hex: "#E34234", code: "PR106", note: "Bold red accents" },
      { name: "Geranium Lake", hex: "#D10047", code: "PR81", note: "Pink flowers, sunset" },
      { name: "Cobalt Blue", hex: "#0047AB", code: "PB28", note: "Starry Night sky" },
      { name: "Ultramarine Blue", hex: "#4166F5", code: "PB29", note: "Deep sky, shadows" },
      { name: "Prussian Blue", hex: "#003153", code: "PB27", note: "Dark night areas" },
      { name: "Emerald Green", hex: "#50C878", code: "PG18", note: "Bright foliage" },
      { name: "Viridian", hex: "#40826D", code: "PG18", note: "Irises, cypress trees" },
      { name: "Zinc White", hex: "#FDFFF5", code: "PW4", note: "Stars, highlights" },
    ],
    tips: [
      "Use thick, visible brushstrokes (impasto)",
      "Complementary colors side by side",
      "Swirling, expressive movement",
      "Bold outlines in contrasting colors",
      "Pure color from the tube when possible",
    ]
  },
  {
    name: "Claude Monet",
    subtitle: "Father of Impressionism",
    description: "Soft, atmospheric colors for water lilies, haystacks, and gardens",
    image: "🌸",
    colors: [
      { name: "Lead White", hex: "#FFFAFA", code: "PW1", note: "Clouds, highlights, mixing" },
      { name: "Chrome Yellow", hex: "#FFC200", code: "PY34", note: "Sunlight, flowers" },
      { name: "Cadmium Yellow", hex: "#FFD300", code: "PY37", note: "Bright areas" },
      { name: "Vermilion", hex: "#E34234", code: "PR106", note: "Poppies, warm accents" },
      { name: "Rose Madder", hex: "#E32636", code: "NR9", note: "Pink flowers, sunset" },
      { name: "Cobalt Blue", hex: "#0047AB", code: "PB28", note: "Sky, water reflections" },
      { name: "Ultramarine Blue", hex: "#4166F5", code: "PB29", note: "Shadows, deep water" },
      { name: "Cerulean Blue", hex: "#007BA7", code: "PB35", note: "Light sky, atmosphere" },
      { name: "Viridian", hex: "#40826D", code: "PG18", note: "Water lilies, foliage" },
      { name: "Emerald Green", hex: "#50C878", code: "PG18", note: "Bright gardens" },
      { name: "Ivory Black", hex: "#231F20", code: "PBk9", note: "Rarely used, for dark accents" },
    ],
    tips: [
      "Capture light at specific times of day",
      "Short, broken brushstrokes",
      "Colors mixed on canvas, not palette",
      "Paint outdoors (en plein air)",
      "Focus on atmosphere over detail",
    ]
  },
  {
    name: "Johannes Vermeer",
    subtitle: "Dutch Golden Age Master",
    description: "Rich, luminous colors for Girl with a Pearl Earring and interiors",
    image: "👩‍🎨",
    colors: [
      { name: "Lead White", hex: "#FFFAFA", code: "PW1", note: "Collars, pearls, light" },
      { name: "Yellow Ochre", hex: "#CB9D06", code: "PY43", note: "Skin, walls, warmth" },
      { name: "Lead-Tin Yellow", hex: "#F5D033", code: "PY41", note: "Bright highlights" },
      { name: "Vermilion", hex: "#E34234", code: "PR106", note: "Lips, fabric, accents" },
      { name: "Madder Lake", hex: "#E32636", code: "NR9", note: "Glazing, fabric" },
      { name: "Natural Ultramarine", hex: "#2A52BE", code: "PB29", note: "Famous blue turban" },
      { name: "Azurite Blue", hex: "#007FFF", code: "PB30", note: "Background blues" },
      { name: "Terre Verte", hex: "#6C7C59", code: "PG23", note: "Underpainting for skin" },
      { name: "Raw Umber", hex: "#826644", code: "PBr7", note: "Shadows, backgrounds" },
      { name: "Burnt Umber", hex: "#8A3324", code: "PBr7", note: "Dark shadows" },
      { name: "Ivory Black", hex: "#231F20", code: "PBk9", note: "Deepest darks" },
    ],
    tips: [
      "Build up thin glazes for luminosity",
      "Camera obscura for accurate drawing",
      "Natural light from left side",
      "Limited palette, masterfully mixed",
      "Soft edges on fabric and skin",
    ]
  },
  {
    name: "Rembrandt van Rijn",
    subtitle: "Master of Light and Shadow",
    description: "Dramatic chiaroscuro palette for portraits and biblical scenes",
    image: "🕯️",
    colors: [
      { name: "Lead White", hex: "#FFFAFA", code: "PW1", note: "Highlights, ruffs, pearls" },
      { name: "Yellow Ochre", hex: "#CB9D06", code: "PY43", note: "Skin base, golden light" },
      { name: "Naples Yellow", hex: "#FADA5E", code: "PY41", note: "Warm highlights" },
      { name: "Vermilion", hex: "#E34234", code: "PR106", note: "Lips, ruddy skin" },
      { name: "Red Ochre", hex: "#913831", code: "PR102", note: "Skin shadows, warmth" },
      { name: "Burnt Sienna", hex: "#E97451", code: "PBr7", note: "Warm mid-tones" },
      { name: "Van Dyke Brown", hex: "#664228", code: "PBr7", note: "Deep shadows" },
      { name: "Raw Umber", hex: "#826644", code: "PBr7", note: "Cool shadows" },
      { name: "Burnt Umber", hex: "#8A3324", code: "PBr7", note: "Dark accents" },
      { name: "Bone Black", hex: "#2D2D2D", code: "PBk9", note: "Deepest darks, backgrounds" },
      { name: "Smalt", hex: "#003399", code: "PB32", note: "Cool shadows (rare)" },
    ],
    tips: [
      "Dark backgrounds push subject forward",
      "Single light source for drama",
      "Thick paint in lights, thin in darks",
      "Build shadows with transparent glazes",
      "Focus detail only on focal point",
    ]
  },
  {
    name: "Georgia O'Keeffe",
    subtitle: "American Modernist",
    description: "Bold, saturated colors for flowers, skulls, and desert landscapes",
    image: "🌺",
    colors: [
      { name: "Titanium White", hex: "#FFFFFF", code: "PW6", note: "Skulls, clouds, highlights" },
      { name: "Cadmium Yellow Light", hex: "#FFF700", code: "PY37", note: "Bright flower centers" },
      { name: "Cadmium Orange", hex: "#ED872D", code: "PO20", note: "Poppies, desert rock" },
      { name: "Cadmium Red", hex: "#E30022", code: "PR108", note: "Red poppies, canna lilies" },
      { name: "Alizarin Crimson", hex: "#E32636", code: "PR83", note: "Deep reds, shadows" },
      { name: "Quinacridone Magenta", hex: "#A50B5E", code: "PR122", note: "Pink flowers" },
      { name: "Dioxazine Violet", hex: "#5C2D91", code: "PV23", note: "Purple petunias" },
      { name: "Ultramarine Blue", hex: "#4166F5", code: "PB29", note: "Desert sky" },
      { name: "Cerulean Blue", hex: "#007BA7", code: "PB35", note: "New Mexico sky" },
      { name: "Viridian", hex: "#40826D", code: "PG18", note: "Leaves, stems" },
      { name: "Yellow Ochre", hex: "#CB9D06", code: "PY43", note: "Desert earth, bones" },
      { name: "Burnt Sienna", hex: "#E97451", code: "PBr7", note: "Desert landscape" },
    ],
    tips: [
      "Fill the canvas - crop dramatically",
      "Soft blended edges",
      "Bold, saturated colors",
      "Simple, clean shapes",
      "Zoom in on small subjects",
    ]
  },
  {
    name: "Zorn Palette",
    subtitle: "Anders Zorn's Limited Palette",
    description: "Only 4 colors! Proves you don't need many colors for beautiful paintings",
    image: "4️⃣",
    colors: [
      { name: "Titanium White", hex: "#FFFFFF", code: "PW6", note: "Essential for tints and highlights" },
      { name: "Yellow Ochre", hex: "#CB9D06", code: "PY43", note: "Warm tones, skin, golden hues" },
      { name: "Cadmium Red", hex: "#E30022", code: "PR108", note: "Warms, skin, lips, accents" },
      { name: "Ivory Black", hex: "#231F20", code: "PBk9", note: "Cool tones, shadows, blues" },
    ],
    tips: [
      "Black + White = cool blue-gray",
      "Ochre + White = warm cream",
      "All 3 + White = skin tones",
      "Great for portraits and figures",
      "Forces you to understand color relationships",
    ]
  },
  {
    name: "Split Primary Palette",
    subtitle: "Ultimate Mixing Palette",
    description: "Two versions of each primary (warm and cool) for maximum color range",
    image: "🎨",
    colors: [
      { name: "Cadmium Yellow Light", hex: "#FFF700", code: "PY37", note: "Cool yellow (greenish)" },
      { name: "Cadmium Yellow Deep", hex: "#FFA500", code: "PY37", note: "Warm yellow (orangish)" },
      { name: "Cadmium Red Light", hex: "#E30022", code: "PR108", note: "Warm red (orangish)" },
      { name: "Alizarin Crimson", hex: "#E32636", code: "PR83", note: "Cool red (bluish)" },
      { name: "Ultramarine Blue", hex: "#4166F5", code: "PB29", note: "Warm blue (reddish)" },
      { name: "Phthalo Blue", hex: "#000F89", code: "PB15", note: "Cool blue (greenish)" },
      { name: "Titanium White", hex: "#FFFFFF", code: "PW6", note: "For tints" },
      { name: "Ivory Black", hex: "#231F20", code: "PBk9", note: "For shades (optional)" },
    ],
    tips: [
      "Mix warm+warm for brightest secondary",
      "Mix cool+cool for muted secondary",
      "Warm yellow + Cool blue = muted green",
      "Cool yellow + Cool blue = bright green",
      "Best palette for learning color theory",
    ]
  },
];

// ==========================================
// BRUSH TYPES DATABASE
// ==========================================

const brushTypes = [
  {
    name: "Round",
    icon: "●",
    description: "Versatile brush with a pointed tip. Perfect for details, lines, and filling small areas.",
    sizes: ["0 (detail)", "2 (small)", "6 (medium)", "10 (large)", "14 (wash)"],
    bestFor: ["Fine lines", "Details", "Lettering", "Outlining", "Dots and stippling"],
    strokePreview: "M10,50 Q50,10 90,50 Q130,90 170,50", // SVG path for wavy line
    strokeWidth: "round",
    paperEffects: {
      "Hot Press": "Smooth, clean lines with sharp edges",
      "Cold Press": "Slightly textured lines with soft edges",
      "Rough": "Broken, textured strokes that show paper grain",
      "Canvas": "Bold strokes with visible texture"
    }
  },
  {
    name: "Flat",
    icon: "▬",
    description: "Rectangular brush for bold strokes, washes, and sharp edges. Great for backgrounds.",
    sizes: ["1/4\"", "1/2\"", "3/4\"", "1\"", "2\""],
    bestFor: ["Washes", "Bold strokes", "Sharp edges", "Backgrounds", "Geometric shapes"],
    strokePreview: "M10,30 L170,30 L170,70 L10,70 Z",
    strokeWidth: "flat",
    paperEffects: {
      "Hot Press": "Even, smooth coverage with clean edges",
      "Cold Press": "Textured washes with organic edges",
      "Rough": "Dramatic dry brush effects",
      "Canvas": "Heavy impasto strokes"
    }
  },
  {
    name: "Filbert",
    icon: "◗",
    description: "Oval-shaped brush combining flat and round qualities. Perfect for blending and organic shapes.",
    sizes: ["2", "4", "6", "8", "12"],
    bestFor: ["Blending", "Petals", "Leaves", "Portraits", "Organic shapes"],
    strokePreview: "M10,50 Q40,20 90,50 Q140,80 170,50",
    strokeWidth: "filbert",
    paperEffects: {
      "Hot Press": "Smooth gradients and soft blends",
      "Cold Press": "Natural-looking organic textures",
      "Rough": "Expressive, loose strokes",
      "Canvas": "Soft blended areas"
    }
  },
  {
    name: "Fan",
    icon: "🌿",
    description: "Spread bristles for texture effects. Used for trees, grass, hair, and special effects.",
    sizes: ["2 (small)", "4 (medium)", "6 (large)"],
    bestFor: ["Trees & foliage", "Grass", "Hair", "Texture", "Feathering"],
    strokePreview: "M20,70 L30,30 L50,50 L70,20 L90,45 L110,25 L130,50 L150,30 L160,70",
    strokeWidth: "fan",
    paperEffects: {
      "Hot Press": "Delicate, precise texture marks",
      "Cold Press": "Natural grass and foliage effects",
      "Rough": "Wild, expressive textures",
      "Canvas": "Bob Ross-style happy trees!"
    }
  },
  {
    name: "Liner/Rigger",
    icon: "—",
    description: "Very thin brush with long bristles. Perfect for fine lines, branches, and signatures.",
    sizes: ["0 (extra fine)", "1 (fine)", "2 (medium)"],
    bestFor: ["Fine lines", "Branches", "Grass blades", "Signatures", "Details"],
    strokePreview: "M10,80 Q30,60 50,70 Q70,40 90,60 Q120,30 150,50 Q160,45 170,50",
    strokeWidth: "liner",
    paperEffects: {
      "Hot Press": "Crisp, consistent fine lines",
      "Cold Press": "Slightly broken lines with character",
      "Rough": "Organic, varying line weights",
      "Canvas": "Expressive linework"
    }
  },
  {
    name: "Mop",
    icon: "○",
    description: "Large, soft brush for washes and blending. Holds lots of water/paint.",
    sizes: ["1/2\"", "3/4\"", "1\"", "1.5\""],
    bestFor: ["Large washes", "Wet-on-wet", "Skies", "Backgrounds", "Softening edges"],
    strokePreview: "M10,20 C40,80 80,20 110,70 C140,30 170,60 170,60",
    strokeWidth: "mop",
    paperEffects: {
      "Hot Press": "Smooth, even washes",
      "Cold Press": "Beautiful granulation effects",
      "Rough": "Dramatic texture in washes",
      "Canvas": "Smooth blending"
    }
  },
  {
    name: "Angle/Shader",
    icon: "◢",
    description: "Angled flat brush for precise edges and shading. Great for one-stroke techniques.",
    sizes: ["1/4\"", "3/8\"", "1/2\"", "3/4\""],
    bestFor: ["Sharp edges", "Corners", "Shading", "Lettering", "One-stroke flowers"],
    strokePreview: "M10,70 L50,30 L170,30 L130,70 Z",
    strokeWidth: "angle",
    paperEffects: {
      "Hot Press": "Crisp angles and clean corners",
      "Cold Press": "Soft shading with texture",
      "Rough": "Broken angular strokes",
      "Canvas": "Bold angular marks"
    }
  },
  {
    name: "Dagger/Striper",
    icon: "◣",
    description: "Angled brush that tapers to a point. Creates varied stroke widths in one motion.",
    sizes: ["1/4\"", "3/8\"", "1/2\""],
    bestFor: ["Leaves", "Ribbons", "Varied lines", "Decorative work", "Calligraphy"],
    strokePreview: "M10,60 Q50,30 90,60 Q130,90 170,40",
    strokeWidth: "dagger",
    paperEffects: {
      "Hot Press": "Smooth varied strokes",
      "Cold Press": "Natural leaf-like marks",
      "Rough": "Organic, expressive marks",
      "Canvas": "Bold decorative strokes"
    }
  },
];

// ==========================================
// PAPER & SURFACE TYPES DATABASE (with GSM)
// ==========================================

const paperTypes = [
  {
    name: "Hot Press Watercolor",
    texture: "Smooth",
    icon: "📜",
    description: "Smooth surface created by pressing paper through hot rollers. Best for detailed work.",
    weight: "140lb (300gsm) - 300lb (640gsm)",
    gsmOptions: [
      { gsm: 185, lb: "90lb", use: "Practice, sketching" },
      { gsm: 300, lb: "140lb", use: "Standard work" },
      { gsm: 425, lb: "200lb", use: "Heavy washes" },
      { gsm: 640, lb: "300lb", use: "No buckling, professional" }
    ],
    bestFor: ["Detailed illustrations", "Botanical art", "Pen & ink + wash", "Portraits", "Fine lines"],
    notIdealFor: ["Wet-on-wet", "Heavy washes", "Texture effects"],
    characteristics: [
      "No visible texture",
      "Paint dries quickly",
      "Colors appear more vibrant",
      "Shows brush marks clearly",
      "Great for scanning/reproduction"
    ],
    brands: ["Arches", "Fabriano Artistico", "Saunders Waterford", "Strathmore"]
  },
  {
    name: "Cold Press Watercolor",
    texture: "Medium",
    icon: "📄",
    description: "Most popular watercolor paper. Medium texture good for most techniques.",
    weight: "140lb (300gsm) - 300lb (640gsm)",
    gsmOptions: [
      { gsm: 185, lb: "90lb", use: "Student grade, practice" },
      { gsm: 300, lb: "140lb", use: "Most common, versatile" },
      { gsm: 425, lb: "200lb", use: "Less buckling" },
      { gsm: 640, lb: "300lb", use: "Professional, no stretching needed" }
    ],
    bestFor: ["General watercolor", "Landscapes", "Portraits", "Mixed techniques", "Learning"],
    notIdealFor: ["Very fine details", "Smooth gradients"],
    characteristics: [
      "Subtle tooth/texture",
      "Holds water well",
      "Good for wet-on-wet",
      "Forgiving for beginners",
      "Most versatile choice"
    ],
    brands: ["Arches", "Winsor & Newton", "Canson Heritage", "Hahnemühle"]
  },
  {
    name: "Rough Watercolor",
    texture: "Heavy",
    icon: "🏔️",
    description: "Maximum texture for dramatic effects. Paper shows through strokes.",
    weight: "140lb (300gsm) - 300lb (640gsm)",
    gsmOptions: [
      { gsm: 300, lb: "140lb", use: "Standard rough work" },
      { gsm: 425, lb: "200lb", use: "Heavy techniques" },
      { gsm: 640, lb: "300lb", use: "Maximum durability" }
    ],
    bestFor: ["Expressive work", "Landscapes", "Texture effects", "Dry brush", "Impressionistic style"],
    notIdealFor: ["Fine details", "Smooth washes", "Portraits"],
    characteristics: [
      "Deep valleys trap pigment",
      "Creates granulation naturally",
      "Paper texture shows through",
      "Great for dry brush sparkle",
      "Most dramatic effects"
    ],
    brands: ["Arches", "Fabriano", "Langton"]
  },
  {
    name: "Canvas",
    texture: "Woven",
    icon: "🖼️",
    description: "Traditional surface for oil and acrylic. Woven texture adds depth.",
    weight: "Cotton or Linen",
    gsmOptions: [
      { gsm: 280, type: "Light Cotton", use: "Student grade" },
      { gsm: 380, type: "Medium Cotton", use: "General purpose" },
      { gsm: 450, type: "Heavy Cotton", use: "Professional" },
      { gsm: 520, type: "Linen", use: "Archival, museum quality" }
    ],
    bestFor: ["Oil painting", "Acrylics", "Impasto techniques", "Large works", "Professional galleries"],
    notIdealFor: ["Fine watercolor", "Detailed pencil work"],
    characteristics: [
      "Woven texture pattern",
      "Must be primed (gesso)",
      "Stretched on wooden bars",
      "Very durable",
      "Can be rolled for storage"
    ]
  },
  {
    name: "Bristol Board",
    texture: "Smooth/Vellum",
    icon: "📋",
    description: "Heavy cardstock for illustration. Available smooth or with slight texture.",
    weight: "100lb - 200lb",
    bestFor: ["Illustration", "Markers", "Ink work", "Technical drawing", "Comics"],
    notIdealFor: ["Heavy wet media", "Watercolor washes"],
    characteristics: [
      "Very smooth (plate) or slight tooth (vellum)",
      "Doesn't buckle easily",
      "Great for scanning",
      "Bleed-proof for markers",
      "Layers pencil well"
    ]
  },
  {
    name: "Mixed Media Paper",
    texture: "Light-Medium",
    icon: "🎭",
    description: "Versatile paper that handles wet and dry media. Jack of all trades.",
    weight: "90lb - 140lb",
    gsmOptions: [
      { gsm: 160, lb: "75lb", use: "Light techniques" },
      { gsm: 200, lb: "90lb", use: "Mixed media standard" },
      { gsm: 300, lb: "140lb", use: "Heavier applications" }
    ],
    bestFor: ["Mixed media", "Journaling", "Experimentation", "Collage", "Multiple techniques"],
    notIdealFor: ["Heavy watercolor washes", "Professional final work"],
    characteristics: [
      "Handles light washes",
      "Good for dry media",
      "Affordable for practice",
      "Light texture",
      "Versatile but not specialist"
    ],
    brands: ["Strathmore", "Canson XL", "Fabriano Mixed Media"]
  },
];

// ==========================================
// CANVAS & CLOTH TYPES DATABASE
// ==========================================

const canvasTypes = [
  {
    name: "Cotton Duck Canvas",
    weave: "Plain weave",
    color: "#F5F5DC",
    description: "Most common and affordable canvas. Good tooth for oil and acrylic.",
    weights: [
      { oz: "4oz", gsm: 135, use: "Light work, practice" },
      { oz: "7oz", gsm: 237, use: "Student grade" },
      { oz: "10oz", gsm: 340, use: "Standard professional" },
      { oz: "12oz", gsm: 407, use: "Heavy impasto" }
    ],
    characteristics: ["Affordable", "Good tooth", "Slightly elastic", "Takes gesso well"],
    bestFor: ["Beginners", "Large works", "Budget-conscious artists"],
    brands: ["Fredrix", "Blick", "Utrecht"]
  },
  {
    name: "Linen Canvas",
    weave: "Plain/Twill weave",
    color: "#D4C4A8",
    description: "Premium natural fiber. Stronger, less elastic, archival quality.",
    weights: [
      { oz: "9oz", gsm: 305, use: "Portrait grade" },
      { oz: "12oz", gsm: 407, use: "Professional standard" },
      { oz: "15oz", gsm: 508, use: "Museum quality" }
    ],
    characteristics: ["Non-elastic", "Fine texture", "Archival", "Natural brown color"],
    bestFor: ["Professional work", "Portraits", "Museum pieces", "Long-term preservation"],
    brands: ["Claessens", "Artfix", "Belle Arti"]
  },
  {
    name: "Polyester Canvas",
    weave: "Synthetic weave",
    color: "#FFFFFF",
    description: "Synthetic alternative. Doesn't rot, consistent texture, very stable.",
    weights: [
      { oz: "8oz", gsm: 271, use: "General use" },
      { oz: "12oz", gsm: 407, use: "Heavy applications" }
    ],
    characteristics: ["Weather resistant", "No rot/mildew", "Very stable", "Uniform texture"],
    bestFor: ["Outdoor work", "Humid climates", "Commercial applications"],
    brands: ["Fredrix Polyflax", "Masterpiece"]
  },
  {
    name: "Jute/Burlap",
    weave: "Coarse open weave",
    color: "#C4A35A",
    description: "Very coarse natural fiber. Creates heavily textured surface.",
    weights: [
      { oz: "10oz", gsm: 340, use: "Textured work" },
      { oz: "14oz", gsm: 475, use: "Heavy texture" }
    ],
    characteristics: ["Very coarse", "Visible weave", "Natural look", "Requires heavy gesso"],
    bestFor: ["Rustic effects", "Abstract work", "Heavy texture"],
    brands: ["Various craft suppliers"]
  }
];

// ==========================================
// BRUSH HAIR TYPES DATABASE
// ==========================================

const brushHairTypes = [
  {
    name: "Kolinsky Sable",
    origin: "Siberian mink tail",
    color: "#8B4513",
    colorName: "Rich brown with golden tips",
    description: "The finest natural hair for watercolor. Exceptional point and spring.",
    characteristics: ["Holds water exceptionally", "Perfect point", "Natural spring", "Most expensive"],
    bestMedia: ["Watercolor", "Gouache", "Ink"],
    priceRange: "$$$$$",
    brands: ["Winsor & Newton Series 7", "Raphael Kolinsky", "Da Vinci Maestro"],
    famousUsers: ["John Singer Sargent", "Winslow Homer"]
  },
  {
    name: "Red Sable",
    origin: "Weasel family",
    color: "#A0522D",
    colorName: "Reddish-brown",
    description: "Good quality natural hair. Less expensive alternative to Kolinsky.",
    characteristics: ["Good point", "Decent spring", "Holds water well", "Moderate price"],
    bestMedia: ["Watercolor", "Gouache", "Acrylic"],
    priceRange: "$$$",
    brands: ["Escoda Reserva", "Princeton Neptune"],
    famousUsers: ["Many professional watercolorists"]
  },
  {
    name: "Squirrel Hair",
    origin: "Squirrel tail",
    color: "#696969",
    colorName: "Soft gray-brown",
    description: "Extremely soft, holds huge amounts of water. No point but great for washes.",
    characteristics: ["Ultra soft", "Massive water capacity", "No point", "Great for mops"],
    bestMedia: ["Watercolor washes", "Glazing"],
    priceRange: "$$$$",
    brands: ["Isabey Petit Gris", "Raphael Softaqua"],
    famousUsers: ["Claude Monet", "J.M.W. Turner"]
  },
  {
    name: "Hog Bristle (Chungking)",
    origin: "Chinese pig hair",
    color: "#F5DEB3",
    colorName: "Cream/off-white with flagged tips",
    description: "Stiff natural hair for oil painting. Flagged tips hold paint well.",
    characteristics: ["Stiff", "Flagged tips", "Holds thick paint", "Visible brushmarks"],
    bestMedia: ["Oil", "Heavy body acrylic"],
    priceRange: "$$",
    brands: ["Winsor & Newton Artisan", "Robert Simmons Signet", "Silver Bristlon"],
    famousUsers: ["Van Gogh", "Rembrandt", "Bob Ross"]
  },
  {
    name: "Badger Hair",
    origin: "Badger",
    color: "#D3D3D3",
    colorName: "Gray with dark bands",
    description: "Very soft natural hair for blending. Used in oil painting for glazes.",
    characteristics: ["Extremely soft", "Perfect for blending", "Creates no marks", "Delicate"],
    bestMedia: ["Oil glazing", "Softening edges"],
    priceRange: "$$$",
    brands: ["Da Vinci", "Rosemary & Co"],
    famousUsers: ["Classical portrait painters"]
  },
  {
    name: "Golden Taklon (Synthetic)",
    origin: "Nylon/polyester blend",
    color: "#DAA520",
    colorName: "Golden yellow",
    description: "High-quality synthetic. Mimics sable properties at lower cost.",
    characteristics: ["Good spring", "Easy to clean", "Durable", "Vegan-friendly"],
    bestMedia: ["Acrylic", "Watercolor", "All media"],
    priceRange: "$",
    brands: ["Princeton Velvetouch", "Royal & Langnickel", "Loew-Cornell"],
    famousUsers: ["Modern acrylics artists"]
  },
  {
    name: "White Taklon (Synthetic)",
    origin: "Nylon/polyester",
    color: "#FFFAFA",
    colorName: "Pure white",
    description: "Soft synthetic for smooth application. Great for blending.",
    characteristics: ["Soft", "Smooth application", "Good for thin paints", "Affordable"],
    bestMedia: ["Acrylic", "Fabric paint", "Face paint"],
    priceRange: "$",
    brands: ["Royal & Langnickel", "Dynasty"],
    famousUsers: ["Craft and hobby artists"]
  }
];

// ==========================================
// PAINT MEDIA & BRANDS DATABASE
// ==========================================

const paintMediaBrands = {
  "Watercolor": {
    description: "Transparent water-based paint. Pigment bound with gum arabic.",
    characteristics: ["Transparent", "Rewettable", "Luminous", "Paper shows through"],
    brands: [
      { name: "Winsor & Newton Professional", tier: "Professional", priceRange: "$$$", colorCount: 108, famous: "British heritage since 1832" },
      { name: "Daniel Smith Extra Fine", tier: "Professional", priceRange: "$$$", colorCount: 250, famous: "PrimaTek mineral colors" },
      { name: "Schmincke Horadam", tier: "Professional", priceRange: "$$$$", colorCount: 140, famous: "German precision" },
      { name: "Holbein Artists'", tier: "Professional", priceRange: "$$$", colorCount: 108, famous: "Japanese quality, even flow" },
      { name: "Cotman/Cotman", tier: "Student", priceRange: "$", colorCount: 40, famous: "Good student grade" },
      { name: "Van Gogh", tier: "Student", priceRange: "$$", colorCount: 40, famous: "Balanced price/quality" }
    ]
  },
  "Oil": {
    description: "Pigment bound with drying oils (linseed, walnut). Traditional fine art medium.",
    characteristics: ["Slow drying", "Rich colors", "Blendable", "Buttery texture"],
    brands: [
      { name: "Old Holland", tier: "Professional", priceRange: "$$$$$", colorCount: 168, famous: "Highest pigment load since 1664" },
      { name: "Michael Harding", tier: "Professional", priceRange: "$$$$", colorCount: 100, famous: "Handmade, artist-owned" },
      { name: "Winsor & Newton Artists'", tier: "Professional", priceRange: "$$$", colorCount: 120, famous: "Industry standard" },
      { name: "Gamblin Artist's", tier: "Professional", priceRange: "$$$", colorCount: 90, famous: "American made, consistent" },
      { name: "Bob Ross", tier: "Specialty", priceRange: "$$", colorCount: 14, famous: "Wet-on-wet technique" },
      { name: "Winton", tier: "Student", priceRange: "$", colorCount: 47, famous: "Good student oil" }
    ]
  },
  "Acrylic": {
    description: "Pigment in acrylic polymer emulsion. Fast drying, water cleanup.",
    characteristics: ["Fast drying", "Water cleanup", "Flexible when dry", "Versatile"],
    brands: [
      { name: "Golden Heavy Body", tier: "Professional", priceRange: "$$$", colorCount: 90, famous: "Industry standard, color mixing" },
      { name: "Liquitex Professional", tier: "Professional", priceRange: "$$$", colorCount: 100, famous: "First acrylic paint brand 1955" },
      { name: "Holbein Acryla", tier: "Professional", priceRange: "$$$", colorCount: 84, famous: "Buttery, oil-like feel" },
      { name: "Golden Fluid", tier: "Professional", priceRange: "$$$", colorCount: 90, famous: "Smooth, ink-like" },
      { name: "Liquitex Basics", tier: "Student", priceRange: "$", colorCount: 48, famous: "Best student acrylic" },
      { name: "Amsterdam Standard", tier: "Student", priceRange: "$", colorCount: 90, famous: "Dutch quality, affordable" }
    ]
  },
  "Gouache": {
    description: "Opaque watercolor. Pigment with gum arabic and white added.",
    characteristics: ["Opaque", "Matte finish", "Rewettable", "Velvety texture"],
    brands: [
      { name: "Winsor & Newton Designers'", tier: "Professional", priceRange: "$$$", colorCount: 83, famous: "Industry standard" },
      { name: "Holbein Acryla Gouache", tier: "Professional", priceRange: "$$$", colorCount: 102, famous: "Acrylic-based, permanent" },
      { name: "Schmincke Horadam Gouache", tier: "Professional", priceRange: "$$$$", colorCount: 48, famous: "German excellence" },
      { name: "Himi/MIYA Gouache", tier: "Student", priceRange: "$", colorCount: 56, famous: "Popular with illustrators" }
    ]
  }
};

// ==========================================
// PAINTING REFERENCES (Creative Commons)
// ==========================================

const paintingReferences = {
  "Bob Ross": [
    {
      title: "Mountain Summit",
      type: "Landscape",
      technique: "Wet-on-wet oil",
      wikiLink: "https://commons.wikimedia.org/wiki/Category:Bob_Ross",
      description: "Classic Bob Ross mountain scene with happy trees"
    }
  ],
  "Vincent van Gogh": [
    {
      title: "The Starry Night",
      year: "1889",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      description: "Swirling night sky over village, Museum of Modern Art"
    },
    {
      title: "Sunflowers",
      year: "1888",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Vincent_Willem_van_Gogh_127.jpg",
      description: "Vibrant yellow sunflowers in a vase"
    },
    {
      title: "Irises",
      year: "1889",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Irises-Vincent_van_Gogh.jpg",
      description: "Blue irises in a garden, J. Paul Getty Museum"
    },
    {
      title: "Café Terrace at Night",
      year: "1888",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Vincent_Willem_van_Gogh_-_Cafe_Terrace_at_Night_(Yorck).jpg",
      description: "Evening café scene with starry sky"
    }
  ],
  "Claude Monet": [
    {
      title: "Water Lilies",
      year: "1906",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Claude_Monet_-_Water_Lilies_-_1906,_Ryerson.jpg",
      description: "Peaceful pond with floating water lilies"
    },
    {
      title: "Impression, Sunrise",
      year: "1872",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Monet_-_Impression,_Sunrise.jpg",
      description: "The painting that named Impressionism"
    },
    {
      title: "Woman with a Parasol",
      year: "1875",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg",
      description: "Monet's wife and son in a breezy meadow"
    }
  ],
  "Johannes Vermeer": [
    {
      title: "Girl with a Pearl Earring",
      year: "1665",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Girl_with_a_Pearl_Earring.jpg",
      description: "Iconic portrait with the famous pearl, Mauritshuis"
    },
    {
      title: "The Milkmaid",
      year: "1658",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
      description: "Servant pouring milk, Rijksmuseum"
    }
  ],
  "Rembrandt van Rijn": [
    {
      title: "The Night Watch",
      year: "1642",
      wikiLink: "https://commons.wikimedia.org/wiki/File:The_Night_Watch_-_HD.jpg",
      description: "Dramatic militia group portrait, Rijksmuseum"
    },
    {
      title: "Self-Portrait",
      year: "1659",
      wikiLink: "https://commons.wikimedia.org/wiki/File:Rembrandt_Harmensz._van_Rijn_135.jpg",
      description: "Masterful self-portrait showing chiaroscuro technique"
    }
  ],
  "Georgia O'Keeffe": [
    {
      title: "Jimson Weed",
      year: "1936",
      wikiLink: "https://commons.wikimedia.org/wiki/Category:Georgia_O%27Keeffe",
      description: "Large-scale white flower painting"
    }
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
  const sizeClass = size === 'small' ? 'w-14 h-12 sm:w-16 sm:h-14' : size === 'large' ? 'w-20 h-16 sm:w-24 sm:h-20' : 'w-16 h-14 sm:w-20 sm:h-16';
  const isWhite = color.hex.toUpperCase() === '#FFFFFF' || color.hex.toUpperCase() === '#FFFAFA' || color.hex.toUpperCase() === '#FFFFF0';

  return (
    <div
      className="flex flex-col items-center cursor-pointer group min-w-0"
      onClick={() => onClick && onClick(color)}
    >
      <div
        className={`${sizeClass} rounded-lg shadow-md flex items-end justify-center pb-1 transition-transform group-hover:scale-105 active:scale-95`}
        style={{
          backgroundColor: color.hex,
          border: isWhite ? '1px solid #e5e7eb' : 'none'
        }}
      >
        <span className="text-[6px] sm:text-[7px] font-mono opacity-60" style={{ color: textColor }}>
          {color.hex}
        </span>
      </div>
      <p className="text-[9px] sm:text-[10px] font-medium text-center mt-1 sm:mt-1.5 leading-tight max-w-16 sm:max-w-20 text-gray-800 truncate w-full">
        {color.name}
      </p>
      {color.code && (
        <p className="text-[7px] sm:text-[8px] font-mono text-gray-400">{color.code}</p>
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
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] sm:max-h-none"
        style={{ backgroundColor: color.hex, boxShadow: `0 40px 80px ${color.hex}88` }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95 z-10"
          style={{ backgroundColor: `${textColor}22`, color: textColor }}
        >
          ✕
        </button>
        {/* Drag handle for mobile */}
        <div className="sm:hidden w-10 h-1 bg-current opacity-30 rounded-full mx-auto mt-3" style={{ color: textColor }} />
        <div className="aspect-video sm:aspect-square w-full" />
        <div className="p-6 sm:p-8" style={{ color: textColor }}>
          <h2 className="text-2xl sm:text-3xl font-light mb-2">{color.name}</h2>
          {color.code && <p className="text-sm opacity-60 mb-4 sm:mb-6">Pigment: {color.code}</p>}
          <div className="space-y-2 sm:space-y-3 text-sm font-mono">
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
            className="mt-4 sm:mt-6 w-full py-3 rounded-xl font-medium transition-transform hover:scale-105 active:scale-95"
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
      <div className="flex items-center gap-1 sm:gap-1.5 p-2 bg-white rounded-lg border border-gray-100">
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded shadow-sm" style={{ backgroundColor: mix.hex1 }} />
          <span className="text-[6px] sm:text-[7px] mt-0.5 text-center max-w-8 sm:max-w-10 leading-tight text-gray-600 truncate">{mix.ingredients[0]}</span>
        </div>
        <span className="text-gray-400 text-[10px] sm:text-xs">+</span>
        <div className="flex flex-col items-center">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded shadow-sm" style={{ backgroundColor: mix.hex2 }} />
          <span className="text-[6px] sm:text-[7px] mt-0.5 text-center max-w-8 sm:max-w-10 leading-tight text-gray-600 truncate">{mix.ingredients[1]}</span>
        </div>
        {hasThird && (
          <>
            <span className="text-gray-400 text-[10px] sm:text-xs">+</span>
            <div className="flex flex-col items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded shadow-sm" style={{ backgroundColor: mix.hex3 }} />
              <span className="text-[6px] sm:text-[7px] mt-0.5 text-center max-w-8 sm:max-w-10 leading-tight text-gray-600 truncate">{mix.ingredients[2]}</span>
            </div>
          </>
        )}
        <span className="text-gray-400 text-[10px] sm:text-xs">=</span>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg shadow ring-2 ring-gray-200" style={{ backgroundColor: mix.hexResult }} />
          <span className="text-[7px] sm:text-[8px] mt-0.5 font-medium text-center max-w-10 sm:max-w-12 leading-tight text-gray-800 truncate">{mix.result}</span>
          {mix.ratio && <span className="text-[6px] sm:text-[7px] text-blue-600 font-medium">{mix.ratio}</span>}
        </div>
      </div>
    );
  }

  return (
    <div className="p-2 sm:p-3 bg-white rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <div className="flex flex-col items-center min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow flex-shrink-0" style={{ backgroundColor: mix.hex1 }} />
          <span className="text-[8px] sm:text-[9px] mt-1 text-center max-w-12 sm:max-w-14 leading-tight text-gray-600 truncate w-full">{mix.ingredients[0]}</span>
        </div>
        <span className="text-lg sm:text-xl text-gray-300 font-light flex-shrink-0">+</span>
        <div className="flex flex-col items-center min-w-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow flex-shrink-0" style={{ backgroundColor: mix.hex2 }} />
          <span className="text-[8px] sm:text-[9px] mt-1 text-center max-w-12 sm:max-w-14 leading-tight text-gray-600 truncate w-full">{mix.ingredients[1]}</span>
        </div>
        {hasThird && (
          <>
            <span className="text-lg sm:text-xl text-gray-300 font-light flex-shrink-0">+</span>
            <div className="flex flex-col items-center min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow flex-shrink-0" style={{ backgroundColor: mix.hex3 }} />
              <span className="text-[8px] sm:text-[9px] mt-1 text-center max-w-12 sm:max-w-14 leading-tight text-gray-600 truncate w-full">{mix.ingredients[2]}</span>
            </div>
          </>
        )}
        <span className="text-lg sm:text-xl text-gray-300 font-light flex-shrink-0">=</span>
        <div className="flex flex-col items-center min-w-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl shadow-lg ring-2 ring-gray-200 flex-shrink-0" style={{ backgroundColor: mix.hexResult }} />
          <span className="text-[9px] sm:text-[10px] mt-1 font-semibold text-center max-w-14 sm:max-w-16 leading-tight text-gray-800 truncate w-full">{mix.result}</span>
          <span className="text-[7px] sm:text-[8px] font-mono text-gray-400">{mix.hexResult}</span>
        </div>
      </div>
      {/* Ratio and Tip */}
      {(mix.ratio || mix.tip) && (
        <div className="mt-2 pt-2 border-t border-gray-100 flex flex-wrap items-center gap-2 sm:gap-3">
          {mix.ratio && (
            <span className="text-[9px] sm:text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold flex-shrink-0">
              Ratio: {mix.ratio}
            </span>
          )}
          {mix.tip && (
            <span className="text-[8px] sm:text-[9px] text-gray-500 italic">{mix.tip}</span>
          )}
        </div>
      )}
    </div>
  );
}

// Artist Palette Card
function ArtistPaletteCard({ palette, onSelect }) {
  return (
    <div
      className="p-4 sm:p-5 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg active:scale-[0.99] transition-all cursor-pointer print-card"
      onClick={() => onSelect && onSelect(palette)}
    >
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <span className="text-3xl sm:text-4xl">{palette.image}</span>
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-gray-800">{palette.name}</h3>
          <p className="text-xs sm:text-sm text-gray-500">{palette.subtitle}</p>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2">{palette.description}</p>

      {/* Color strip preview */}
      <div className="flex h-8 sm:h-10 rounded-lg overflow-hidden shadow-inner mb-2 sm:mb-3">
        {palette.colors.slice(0, 8).map((c, i) => (
          <div
            key={i}
            className="flex-1"
            style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #e5e7eb' : 'none' }}
            title={c.name}
          />
        ))}
      </div>
      <p className="text-[10px] sm:text-xs text-gray-400">{palette.colors.length} colors - Tap to see full palette</p>
    </div>
  );
}

// Artist Palette Detail Modal
function ArtistPaletteModal({ palette, onClose }) {
  if (!palette) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full sm:max-w-4xl bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl max-h-[95vh] sm:max-h-[90vh] sm:my-8 overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors z-10"
        >
          ✕
        </button>

        {/* Drag handle for mobile */}
        <div className="sm:hidden w-10 h-1 bg-gray-300 rounded-full mx-auto mt-3" />

        {/* Header */}
        <div className="p-4 sm:p-8 bg-gradient-to-r from-gray-100 to-gray-50 border-b">
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-4xl sm:text-5xl">{palette.image}</span>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-3xl font-bold text-gray-800">{palette.name}</h2>
              <p className="text-sm sm:text-lg text-gray-500">{palette.subtitle}</p>
            </div>
          </div>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600">{palette.description}</p>
        </div>

        {/* Colors Grid */}
        <div className="p-4 sm:p-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Palette Colors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {palette.colors.map((color, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow flex-shrink-0"
                  style={{ backgroundColor: color.hex, border: color.hex === '#FFFFFF' ? '1px solid #ddd' : 'none' }}
                />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm text-gray-800 truncate">{color.name}</p>
                  <p className="text-xs font-mono text-gray-400">{color.hex}</p>
                  {color.code && <p className="text-xs text-gray-400">{color.code}</p>}
                  {color.note && <p className="text-xs text-gray-500 mt-1">{color.note}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Tips */}
          {palette.tips && palette.tips.length > 0 && (
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-yellow-50 rounded-xl border border-yellow-200">
              <h3 className="text-base sm:text-lg font-bold text-yellow-800 mb-2 sm:mb-3">Painting Tips</h3>
              <ul className="space-y-2">
                {palette.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-yellow-900">
                    <span className="text-yellow-600">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Mixing Category Section
function MixingCategory({ category, data, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-4 sm:mb-6 print-card">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 hover:border-gray-300 active:bg-gray-50 transition-all no-print-toggle"
      >
        <div className="text-left min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-bold text-gray-800">{category}</h3>
          <p className="text-xs sm:text-sm text-gray-500 truncate">{data.description}</p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
          <span className="text-[10px] sm:text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
            {data.mixes.length}
          </span>
          <span className="text-lg sm:text-xl text-gray-400 no-print">{isOpen ? '−' : '+'}</span>
        </div>
      </button>

      <div className={`mt-2 sm:mt-3 grid gap-2 sm:gap-3 ${isOpen ? 'grid' : 'hidden'} print-always-show`}
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
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
    <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 print-card">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center">The Color Wheel - Your Mixing Guide</h3>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
        <svg viewBox="0 0 300 300" className="w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0">
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

        <div className="space-y-3 sm:space-y-4 w-full sm:w-auto">
          <div className="p-3 sm:p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2 text-sm sm:text-base">Primary Colors</h4>
            <div className="flex gap-2 justify-center sm:justify-start">
              {[{ name: "Red", hex: "#E30022" }, { name: "Yellow", hex: "#FFD300" }, { name: "Blue", hex: "#0047AB" }].map(c => (
                <div key={c.name} className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg shadow" style={{ backgroundColor: c.hex }} />
                  <span className="text-[10px] sm:text-xs mt-1">{c.name}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-red-600 mt-2 text-center sm:text-left">Cannot be mixed - must buy these!</p>
          </div>

          <div className="p-3 sm:p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-bold text-green-800 mb-2 text-sm sm:text-base">Secondary Colors</h4>
            <div className="flex gap-2 justify-center sm:justify-start">
              {[{ name: "Orange", hex: "#FF7F00" }, { name: "Green", hex: "#32CD32" }, { name: "Violet", hex: "#8B008B" }].map(c => (
                <div key={c.name} className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg shadow" style={{ backgroundColor: c.hex }} />
                  <span className="text-[10px] sm:text-xs mt-1">{c.name}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] sm:text-xs text-green-600 mt-2 text-center sm:text-left">Mix 2 primaries!</p>
          </div>

          <div className="p-3 sm:p-4 bg-purple-50 rounded-xl border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-2 text-sm sm:text-base">Complementary = Opposites</h4>
            <p className="text-[10px] sm:text-xs text-purple-600 text-center sm:text-left">Colors across from each other make brown/black when mixed!</p>
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
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-300 p-4 sm:p-6 print-card">
      <h3 className="text-lg sm:text-xl font-bold text-yellow-800 mb-3 sm:mb-4 text-center">Quick Reference - Common Mixes</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
        {quickMixes.map((item, i) => (
          <div key={i} className="bg-white rounded-lg p-2 sm:p-3 shadow-sm border border-yellow-200">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded shadow flex-shrink-0" style={{ backgroundColor: item.hex }} />
              <span className="font-semibold text-xs sm:text-sm text-gray-800 truncate">{item.need}</span>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500">{item.mix}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Palette Card
function PaletteCard({ palette }) {
  return (
    <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 print-card">
      <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">{palette.name}</h3>
      <div className="flex gap-0.5 sm:gap-1">
        {palette.colors.map((c, i) => (
          <div key={i} className="flex-1 flex flex-col items-center min-w-0">
            <div
              className="w-full h-10 sm:h-14 rounded-lg shadow first:rounded-l-xl last:rounded-r-xl"
              style={{ backgroundColor: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #ddd' : 'none' }}
            />
            <span className="text-[6px] sm:text-[8px] mt-0.5 sm:mt-1 text-center leading-tight text-gray-600 truncate w-full">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Activity Worksheet
function ActivityWorksheet() {
  return (
    <div className="p-4 sm:p-6 rounded-xl bg-white border border-gray-200 print-card">
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-center">Color Mixing Activity Sheet</h3>
      <p className="text-center text-xs sm:text-base text-gray-500 mb-4 sm:mb-6">Fill in the circles with the color you think you'll get!</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow" style={{ backgroundColor: '#FFD300' }} />
          <span className="text-xl sm:text-2xl text-gray-400">+</span>
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow" style={{ backgroundColor: '#0047AB' }} />
          <span className="text-xl sm:text-2xl text-gray-400">=</span>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>

        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
          <span className="text-xl sm:text-2xl text-gray-400">+</span>
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow" style={{ backgroundColor: '#FFD300' }} />
          <span className="text-xl sm:text-2xl text-gray-400">=</span>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>

        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow" style={{ backgroundColor: '#0047AB' }} />
          <span className="text-xl sm:text-2xl text-gray-400">+</span>
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
          <span className="text-xl sm:text-2xl text-gray-400">=</span>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>

        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow" style={{ backgroundColor: '#E30022' }} />
          <span className="text-xl sm:text-2xl text-gray-400">+</span>
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow" style={{ backgroundColor: '#FFFFFF', border: '2px solid #ddd' }} />
          <span className="text-xl sm:text-2xl text-gray-400">=</span>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-dashed border-gray-300" />
        </div>
      </div>

      <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-sm sm:text-base text-gray-700 mb-2 text-center">Challenge: What two colors make BROWN?</h4>
        <div className="flex items-center justify-center gap-1.5 sm:gap-2">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-dashed border-gray-300" />
          <span className="text-xl sm:text-2xl text-gray-400">+</span>
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-dashed border-gray-300" />
          <span className="text-xl sm:text-2xl text-gray-400">=</span>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full shadow" style={{ backgroundColor: '#8B4513' }} />
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
  const [selectedArtistPalette, setSelectedArtistPalette] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBrand, setActiveBrand] = useState('All');

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
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 sm:mb-4">
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800">
                Complete Color Mixing Guide
              </h1>
              <p className="text-xs sm:text-sm text-gray-500">
                {totalPigments} pigments • {totalMixes} recipes
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setExpandAll(!expandAll)}
                className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {expandAll ? 'Collapse' : 'Expand'}
              </button>
              <button
                onClick={handlePrint}
                className="px-4 sm:px-5 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                Print
              </button>
            </div>
          </div>

          {/* View Toggle - Mobile scrollable */}
          <div className="flex gap-1 p-1 rounded-xl bg-gray-100 overflow-x-auto hide-scrollbar -mx-3 px-3 sm:mx-0 sm:px-1 sm:w-fit">
            {[
              { id: 'interactive', label: 'Recipes', fullLabel: 'Mixing Recipes' },
              { id: 'artists', label: 'Artists', fullLabel: 'Artist Palettes' },
              { id: 'colors', label: 'Colors', fullLabel: 'All Colors' },
              { id: 'brands', label: 'Brands', fullLabel: 'By Brand' },
              { id: 'palettes', label: 'Palettes', fullLabel: 'Theme Palettes' },
              { id: 'activity', label: 'Activity', fullLabel: 'Activity Sheet' },
              { id: 'techniques', label: 'Brushes', fullLabel: 'Brushes & Paper' },
            ].map(view => (
              <button key={view.id} onClick={() => setViewMode(view.id)}
                className="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap flex-shrink-0"
                style={{
                  backgroundColor: viewMode === view.id ? 'white' : 'transparent',
                  color: viewMode === view.id ? '#1a1a1a' : '#666',
                  boxShadow: viewMode === view.id ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
                }}>
                <span className="sm:hidden">{view.label}</span>
                <span className="hidden sm:inline">{view.fullLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-6">

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
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 print-card">
              <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3 sm:mb-4">Pro Mixing Tips</h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-bold text-blue-700 mb-2 text-sm sm:text-base">For Clean Colors:</h4>
                  <ul className="text-xs sm:text-sm text-blue-900 space-y-1">
                    <li>• Add dark colors to light (not light to dark)</li>
                    <li>• Clean brush between colors</li>
                    <li>• Mix on a white palette to see true color</li>
                    <li>• Test on scrap paper before painting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-purple-700 mb-2 text-sm sm:text-base">For Better Results:</h4>
                  <ul className="text-xs sm:text-sm text-purple-900 space-y-1">
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
            <nav className="flex gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar pb-3 sm:pb-4 mb-3 sm:mb-4 no-print -mx-3 px-3 sm:mx-0 sm:px-0">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 active:scale-95"
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
            <div className="mb-4 sm:mb-6 no-print">
              <input
                type="text"
                placeholder="Search colors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:max-w-md px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            {/* Color Grid */}
            {Object.entries(filteredPigments).map(([category, colors], catIndex) => (
              <section key={category} className="mb-6 sm:mb-8 print-card">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-800">{category}</h2>
                  <span className="text-[10px] sm:text-xs bg-gray-200 text-gray-600 px-2 py-0.5 sm:py-1 rounded-full">
                    {colors.length}
                  </span>
                </div>
                <div className="grid gap-3 sm:gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))' }}>
                  {colors.map((color) => (
                    <ColorSwatch key={color.name} color={color} onClick={setSelectedColor} />
                  ))}
                </div>
              </section>
            ))}

            {Object.keys(filteredPigments).length === 0 && (
              <div className="text-center py-12 sm:py-20">
                <p className="text-gray-500 text-sm sm:text-lg">No colors found for "{searchTerm}"</p>
              </div>
            )}
          </div>
        )}

        {/* ============ PALETTES VIEW ============ */}
        {viewMode === 'palettes' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-6 sm:mb-8 no-print">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Color Palettes</h2>
              <p className="text-sm sm:text-base text-gray-500">Beautiful color combinations ready to use!</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {themePalettes.map((palette, i) => (
                <PaletteCard key={i} palette={palette} />
              ))}
            </div>

            {/* Complementary Colors */}
            <div className="p-4 sm:p-6 rounded-xl bg-white border border-gray-200 print-card">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 text-center">Colors That Go Together (Complementary)</h3>
              <p className="text-center text-xs sm:text-base text-gray-500 mb-3 sm:mb-4">These opposite colors make each other POP!</p>
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {[
                  { c1: "#E30022", c2: "#32CD32", n1: "Red", n2: "Green" },
                  { c1: "#FF7F00", c2: "#0047AB", n1: "Orange", n2: "Blue" },
                  { c1: "#FFD300", c2: "#8B008B", n1: "Yellow", n2: "Purple" },
                ].map((pair, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="flex gap-1 sm:gap-2">
                      <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg shadow" style={{ backgroundColor: pair.c1 }} />
                      <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-lg shadow" style={{ backgroundColor: pair.c2 }} />
                    </div>
                    <span className="text-[10px] sm:text-sm mt-1 sm:mt-2 font-medium text-center">{pair.n1} & {pair.n2}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============ ARTIST PALETTES VIEW ============ */}
        {viewMode === 'artists' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-6 sm:mb-8 no-print">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Famous Artist Palettes</h2>
              <p className="text-sm sm:text-base text-gray-500">Paint like the masters with these authentic color palettes</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {artistPalettes.map((palette, i) => (
                <ArtistPaletteCard
                  key={i}
                  palette={palette}
                  onSelect={setSelectedArtistPalette}
                />
              ))}
            </div>

            {/* Tips for using artist palettes */}
            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 print-card">
              <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-3 sm:mb-4">How to Use Artist Palettes</h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-bold text-amber-700 mb-2 text-sm sm:text-base">Getting Started:</h4>
                  <ul className="text-xs sm:text-sm text-amber-900 space-y-1">
                    <li>• Start with a limited palette (4-6 colors)</li>
                    <li>• Mix all colors on your palette before painting</li>
                    <li>• Create a value scale from light to dark</li>
                    <li>• Test mixes on scrap paper first</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-amber-700 mb-2 text-sm sm:text-base">Pro Tips:</h4>
                  <ul className="text-xs sm:text-sm text-amber-900 space-y-1">
                    <li>• Study the master's actual paintings</li>
                    <li>• Note which colors appear most often</li>
                    <li>• Practice their brushwork techniques</li>
                    <li>• Don't be afraid to experiment!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============ BRANDS VIEW ============ */}
        {viewMode === 'brands' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-6 sm:mb-8 no-print">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Colors by Brand</h2>
              <p className="text-sm sm:text-base text-gray-500">Find exact product codes for your favorite paint brands</p>
            </div>

            {/* Brand selector */}
            <nav className="flex gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar pb-3 sm:pb-4 mb-3 sm:mb-4 no-print -mx-3 px-3 sm:mx-0 sm:px-0">
              {['All', ...Object.keys(brandData)].map(brand => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 active:scale-95"
                  style={{
                    backgroundColor: activeBrand === brand ? '#3b82f6' : 'white',
                    color: activeBrand === brand ? 'white' : '#666',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  {brand}
                </button>
              ))}
            </nav>

            {/* Brand cards */}
            {Object.entries(brandData)
              .filter(([name]) => activeBrand === 'All' || activeBrand === name)
              .map(([brandName, brand]) => (
                <div key={brandName} className="bg-white rounded-2xl border border-gray-200 overflow-hidden print-card">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-gray-100 to-gray-50 border-b">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">{brandName}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{brand.type}</p>
                  </div>
                  <div className="p-3 sm:p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
                      {Object.entries(brand.colors).map(([colorName, info]) => {
                        const pigment = Object.values(pigmentData).flat().find(p => p.name === colorName);
                        const hex = pigment?.hex || '#888888';
                        return (
                          <div key={colorName} className="flex items-center gap-2 sm:gap-3 p-2 rounded-lg bg-gray-50">
                            <div
                              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg shadow flex-shrink-0"
                              style={{ backgroundColor: hex, border: hex === '#FFFFFF' ? '1px solid #ddd' : 'none' }}
                            />
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-xs sm:text-sm text-gray-800 truncate">{colorName}</p>
                              <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                                #{info.code} {info.series && `• S${info.series}`}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}

            {/* Brand comparison tip */}
            <div className="p-4 sm:p-6 rounded-xl bg-blue-50 border border-blue-200 print-card">
              <h3 className="text-base sm:text-lg font-bold text-blue-800 mb-2 sm:mb-3">About Paint Brands</h3>
              <p className="text-xs sm:text-sm text-blue-900 mb-3">
                Different brands may have slightly different formulations of the same pigment. The Color Index code (PY, PR, PB, etc.) tells you the actual pigment used, regardless of brand name.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
                <div className="bg-white p-2 sm:p-3 rounded-lg">
                  <p className="font-bold text-blue-800">Professional Grade</p>
                  <p className="text-blue-700">Higher pigment concentration, better lightfastness</p>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-lg">
                  <p className="font-bold text-blue-800">Student Grade</p>
                  <p className="text-blue-700">More affordable, good for learning</p>
                </div>
                <div className="bg-white p-2 sm:p-3 rounded-lg">
                  <p className="font-bold text-blue-800">"Hue" Colors</p>
                  <p className="text-blue-700">Less expensive alternatives to cadmium/cobalt</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============ ACTIVITY SHEET VIEW ============ */}
        {viewMode === 'activity' && (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center mb-6 sm:mb-8 no-print">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Activity Worksheets</h2>
              <p className="text-sm sm:text-base text-gray-500">Print these out and practice your color mixing!</p>
            </div>

            <ActivityWorksheet />

            {/* Color Code Reference */}
            <div className="p-4 sm:p-6 rounded-xl bg-blue-50 border border-blue-200 print-card">
              <h3 className="text-base sm:text-lg font-bold text-blue-800 mb-3 sm:mb-4">Color Code Reference</h3>
              <p className="text-xs sm:text-base text-blue-700 mb-3 sm:mb-4">Use these numbers for color-by-number activities!</p>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 sm:gap-3">
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
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg shadow flex items-center justify-center font-bold text-sm sm:text-base"
                      style={{
                        backgroundColor: item.color,
                        border: item.color === '#FFFFFF' ? '2px solid #ddd' : 'none',
                        color: getContrastColor(item.color)
                      }}
                    >
                      {item.num}
                    </div>
                    <span className="text-[10px] sm:text-xs mt-1">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ============ TECHNIQUES VIEW (BRUSHES & PAPER) ============ */}
        {viewMode === 'techniques' && (
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center mb-6 sm:mb-8 no-print">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Brushes & Paper Guide</h2>
              <p className="text-sm sm:text-base text-gray-500">Learn how different brushes work on various paper types</p>
            </div>

            {/* Brush Types Section */}
            <section>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🖌️</span> Brush Types
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {brushTypes.map((brush, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden print-card hover:shadow-lg transition-shadow">
                    <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-b">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{brush.icon}</span>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">{brush.name}</h4>
                          <p className="text-xs text-gray-500">{brush.sizes.slice(0, 3).join(", ")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">{brush.description}</p>

                      {/* Stroke Preview */}
                      <div className="bg-gray-50 rounded-lg p-3 mb-3">
                        <p className="text-[10px] text-gray-500 mb-2 font-medium">STROKE PREVIEW</p>
                        <svg viewBox="0 0 180 100" className="w-full h-12">
                          <path
                            d={brush.strokePreview}
                            fill="none"
                            stroke="#1a1a1a"
                            strokeWidth={brush.strokeWidth === 'liner' ? '2' : brush.strokeWidth === 'fan' ? '1' : '8'}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray={brush.strokeWidth === 'fan' ? '2,4' : 'none'}
                          />
                        </svg>
                      </div>

                      <div className="mb-3">
                        <p className="text-[10px] text-gray-500 font-medium mb-1">BEST FOR:</p>
                        <div className="flex flex-wrap gap-1">
                          {brush.bestFor.slice(0, 4).map((use, j) => (
                            <span key={j} className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">{use}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Paper Types Section */}
            <section>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📄</span> Paper Types
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {paperTypes.map((paper, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden print-card hover:shadow-lg transition-shadow">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{paper.icon}</span>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-800">{paper.name}</h4>
                          <p className="text-xs text-gray-500">Texture: {paper.texture}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-xs sm:text-sm text-gray-600 mb-3">{paper.description}</p>

                      {/* Texture Preview */}
                      <div className="rounded-lg p-3 mb-3 h-12" style={{
                        background: paper.texture === 'Smooth'
                          ? 'linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%)'
                          : paper.texture === 'Medium'
                          ? 'repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 2px, #ebebeb 2px, #ebebeb 4px)'
                          : paper.texture === 'Heavy'
                          ? 'repeating-conic-gradient(#f0f0f0 0% 25%, #e8e8e8 0% 50%) 50% / 8px 8px'
                          : paper.texture === 'Woven'
                          ? 'repeating-linear-gradient(0deg, #f5f5f5, #f5f5f5 2px, #e8e8e8 2px, #e8e8e8 4px), repeating-linear-gradient(90deg, #f5f5f5, #f5f5f5 2px, #e8e8e8 2px, #e8e8e8 4px)'
                          : 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)'
                      }}>
                        <p className="text-[10px] text-gray-500 font-medium">TEXTURE SAMPLE</p>
                      </div>

                      <div className="mb-3">
                        <p className="text-[10px] text-gray-500 font-medium mb-1">BEST FOR:</p>
                        <div className="flex flex-wrap gap-1">
                          {paper.bestFor.slice(0, 4).map((use, j) => (
                            <span key={j} className="text-[10px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">{use}</span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-[10px] text-gray-500 font-medium mb-1">CHARACTERISTICS:</p>
                        <ul className="text-[10px] text-gray-600 space-y-0.5">
                          {paper.characteristics.slice(0, 3).map((char, j) => (
                            <li key={j} className="flex items-start gap-1">
                              <span className="text-blue-500">•</span>
                              <span>{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Brush + Paper Combinations */}
            <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-4 sm:p-6 print-card">
              <h3 className="text-lg sm:text-xl font-bold text-purple-800 mb-4">Brush + Paper Effects</h3>
              <p className="text-xs sm:text-sm text-purple-700 mb-4">See how different brushes behave on different paper types:</p>

              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full text-[10px] sm:text-xs">
                  <thead>
                    <tr className="border-b border-purple-200">
                      <th className="text-left py-2 pr-2 font-bold text-purple-800">Brush</th>
                      <th className="text-left py-2 px-2 font-bold text-purple-800">Hot Press</th>
                      <th className="text-left py-2 px-2 font-bold text-purple-800">Cold Press</th>
                      <th className="text-left py-2 px-2 font-bold text-purple-800">Rough</th>
                      <th className="text-left py-2 pl-2 font-bold text-purple-800">Canvas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brushTypes.slice(0, 5).map((brush, i) => (
                      <tr key={i} className="border-b border-purple-100">
                        <td className="py-2 pr-2 font-semibold text-gray-800">{brush.icon} {brush.name}</td>
                        <td className="py-2 px-2 text-gray-600">{brush.paperEffects["Hot Press"]}</td>
                        <td className="py-2 px-2 text-gray-600">{brush.paperEffects["Cold Press"]}</td>
                        <td className="py-2 px-2 text-gray-600">{brush.paperEffects["Rough"]}</td>
                        <td className="py-2 pl-2 text-gray-600">{brush.paperEffects["Canvas"]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Realistic Brush Hair Strokes */}
            <section>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🖌️</span> Brush Hair & Stroke Effects
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">See how different brush hair types create unique stroke characteristics:</p>

              <div className="space-y-6">
                {/* Kolinsky Sable - Watercolor */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden print-card">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm sm:text-base">Kolinsky Sable (Natural Hair)</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500">Premium watercolor brush - Holds water, springs to point</p>
                      </div>
                      <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full">Watercolor</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <svg viewBox="0 0 400 180" className="w-full" style={{ background: 'linear-gradient(180deg, #faf8f5 0%, #f5f0e8 100%)' }}>
                      <defs>
                        {/* Paper texture filter */}
                        <filter id="paperTex">
                          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise"/>
                          <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1.5" result="light">
                            <feDistantLight azimuth="45" elevation="60"/>
                          </feDiffuseLighting>
                          <feBlend in="SourceGraphic" in2="light" mode="multiply"/>
                        </filter>
                        {/* Watercolor wet edge effect */}
                        <filter id="wetEdge">
                          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="blur"/>
                          <feMorphology in="blur" operator="dilate" radius="0.5" result="dilated"/>
                          <feComposite in="SourceGraphic" in2="dilated" operator="over"/>
                        </filter>
                        {/* Gradient for wet wash */}
                        <linearGradient id="sableWash" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2A52BE" stopOpacity="0.7"/>
                          <stop offset="50%" stopColor="#4166F5" stopOpacity="0.5"/>
                          <stop offset="100%" stopColor="#6495ED" stopOpacity="0.2"/>
                        </linearGradient>
                        <radialGradient id="waterBloom" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#DC143C" stopOpacity="0.6"/>
                          <stop offset="70%" stopColor="#DC143C" stopOpacity="0.3"/>
                          <stop offset="100%" stopColor="#DC143C" stopOpacity="0.1"/>
                        </radialGradient>
                      </defs>

                      {/* Fine pointed strokes - sable point */}
                      <g filter="url(#wetEdge)">
                        <path d="M20,30 Q30,28 50,30 Q80,25 100,32 Q110,35 115,30" fill="none" stroke="#1034A6" strokeWidth="1" opacity="0.9"/>
                        <path d="M15,35 Q40,30 70,38 Q100,32 125,36 Q140,40 145,35" fill="none" stroke="#1034A6" strokeWidth="2.5" opacity="0.85"/>
                        <path d="M10,42 Q50,35 90,45 Q130,38 150,42" fill="none" stroke="#2A52BE" strokeWidth="4" opacity="0.8"/>
                      </g>
                      <text x="160" y="40" fontSize="8" fill="#666">Fine point control</text>

                      {/* Wet-on-wet bloom effect */}
                      <ellipse cx="80" cy="90" rx="50" ry="25" fill="url(#waterBloom)" filter="url(#wetEdge)"/>
                      <ellipse cx="90" cy="85" rx="30" ry="15" fill="#E32636" opacity="0.4"/>
                      <text x="160" y="95" fontSize="8" fill="#666">Wet-on-wet bloom</text>

                      {/* Graded wash */}
                      <rect x="15" y="120" width="130" height="25" rx="3" fill="url(#sableWash)" filter="url(#wetEdge)"/>
                      <text x="160" y="135" fontSize="8" fill="#666">Smooth graded wash</text>

                      {/* Dry brush detail */}
                      <g opacity="0.75">
                        <path d="M15,165 Q25,160 40,165 Q55,162 65,167" fill="none" stroke="#228B22" strokeWidth="1.5"/>
                        <path d="M70,163 Q85,158 100,163 Q115,160 125,165" fill="none" stroke="#228B22" strokeWidth="1"/>
                        <path d="M50,170 Q70,165 90,172 Q110,168 130,173" fill="none" stroke="#32CD32" strokeWidth="0.8"/>
                      </g>
                      <text x="160" y="170" fontSize="8" fill="#666">Delicate dry details</text>

                      {/* Brush illustration */}
                      <g transform="translate(300, 20)">
                        <ellipse cx="30" cy="10" rx="8" ry="4" fill="#8B4513"/>
                        <rect x="22" y="10" width="16" height="60" fill="url(#ferruleGrad)" rx="1"/>
                        <path d="M26,70 Q30,130 34,70" fill="#D4A574" stroke="#C49A6C" strokeWidth="0.5"/>
                        <defs>
                          <linearGradient id="ferruleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#B8860B"/>
                            <stop offset="50%" stopColor="#DAA520"/>
                            <stop offset="100%" stopColor="#B8860B"/>
                          </linearGradient>
                        </defs>
                        <text x="5" y="145" fontSize="7" fill="#666">Kolinsky</text>
                        <text x="10" y="155" fontSize="7" fill="#666">Sable</text>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Hog Bristle - Oil */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden print-card">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-orange-50 to-red-50 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm sm:text-base">Hog Bristle (Natural Stiff)</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500">Traditional oil painting brush - Holds thick paint, visible strokes</p>
                      </div>
                      <span className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full">Oil Painting</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <svg viewBox="0 0 400 180" className="w-full">
                      <defs>
                        {/* Canvas texture */}
                        <pattern id="canvasTex" patternUnits="userSpaceOnUse" width="4" height="4">
                          <rect width="4" height="4" fill="#f5f0e6"/>
                          <rect width="2" height="4" fill="#ebe6dc"/>
                          <rect width="4" height="2" fill="#ebe6dc"/>
                        </pattern>
                        {/* Impasto filter for thick paint */}
                        <filter id="impasto">
                          <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="noise"/>
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
                          <feGaussianBlur stdDeviation="0.3"/>
                        </filter>
                        {/* Bristle marks filter */}
                        <filter id="bristle">
                          <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="2" result="noise"/>
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
                        </filter>
                      </defs>

                      <rect width="400" height="180" fill="url(#canvasTex)"/>

                      {/* Heavy impasto strokes */}
                      <g filter="url(#impasto)">
                        <path d="M20,35 C50,20 90,40 120,30 C140,25 150,35 160,30" fill="none" stroke="#FFD700" strokeWidth="18" strokeLinecap="round"/>
                        <path d="M25,33 C55,22 85,38 115,32" fill="none" stroke="#FFC200" strokeWidth="8" strokeLinecap="round" opacity="0.6"/>
                        <path d="M30,38 C60,28 90,42 110,35" fill="none" stroke="#FFE135" strokeWidth="4" strokeLinecap="round" opacity="0.4"/>
                      </g>
                      <text x="175" y="35" fontSize="8" fill="#666">Thick impasto - visible bristle marks</text>

                      {/* Flat brush strokes showing bristle tracks */}
                      <g filter="url(#bristle)">
                        <rect x="20" y="60" width="140" height="20" rx="2" fill="#E30022" opacity="0.85"/>
                        {/* Bristle track lines */}
                        {[0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120,128].map((x, i) => (
                          <line key={i} x1={22+x} y1="62" x2={22+x} y2="78" stroke="#B8001F" strokeWidth="0.5" opacity="0.3"/>
                        ))}
                      </g>
                      <text x="175" y="75" fontSize="8" fill="#666">Flat bristle - parallel brush marks</text>

                      {/* Scumbling / broken color */}
                      <g>
                        {[...Array(40)].map((_, i) => (
                          <rect key={i} x={20 + (i % 10) * 14 + Math.random() * 4} y={105 + Math.floor(i / 10) * 8 + Math.random() * 3}
                            width={6 + Math.random() * 4} height={4 + Math.random() * 3}
                            fill={i % 3 === 0 ? '#0047AB' : i % 3 === 1 ? '#4169E1' : '#6495ED'}
                            opacity={0.5 + Math.random() * 0.4}
                            transform={`rotate(${Math.random() * 20 - 10})`}
                          />
                        ))}
                      </g>
                      <text x="175" y="125" fontSize="8" fill="#666">Scumbling - broken color layers</text>

                      {/* Fan brush blend */}
                      <g opacity="0.8">
                        {[...Array(25)].map((_, i) => (
                          <line key={i} x1={20 + i * 5} y1="160" x2={30 + i * 5} y2="175"
                            stroke={`hsl(${30 + i * 2}, 70%, ${45 + i}%)`} strokeWidth="2" strokeLinecap="round"/>
                        ))}
                      </g>
                      <text x="175" y="170" fontSize="8" fill="#666">Fan bristle - blending strokes</text>

                      {/* Brush illustration */}
                      <g transform="translate(320, 20)">
                        <rect x="15" y="0" width="30" height="8" fill="#4a3728" rx="1"/>
                        <rect x="15" y="8" width="30" height="50" fill="url(#ferruleGrad2)" rx="1"/>
                        <g>
                          {[...Array(15)].map((_, i) => (
                            <line key={i} x1={18 + i * 2} y1="58" x2={17 + i * 2 + Math.random() * 2} y2={95 + Math.random() * 10}
                              stroke="#E8DCC8" strokeWidth="1.5" strokeLinecap="round"/>
                          ))}
                        </g>
                        <defs>
                          <linearGradient id="ferruleGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#888"/>
                            <stop offset="50%" stopColor="#aaa"/>
                            <stop offset="100%" stopColor="#888"/>
                          </linearGradient>
                        </defs>
                        <text x="10" y="120" fontSize="7" fill="#666">Hog</text>
                        <text x="5" y="130" fontSize="7" fill="#666">Bristle</text>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Synthetic Taklon - Acrylic */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden print-card">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-pink-50 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm sm:text-base">Synthetic Taklon (Golden Taklon)</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500">Versatile acrylic brush - Smooth application, easy cleanup</p>
                      </div>
                      <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full">Acrylic</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <svg viewBox="0 0 400 180" className="w-full" style={{ background: '#fafafa' }}>
                      <defs>
                        {/* Smooth synthetic stroke */}
                        <linearGradient id="synthGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8B008B" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#DA70D6" stopOpacity="0.7"/>
                        </linearGradient>
                        <linearGradient id="synthGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#228B22"/>
                          <stop offset="100%" stopColor="#90EE90"/>
                        </linearGradient>
                        <filter id="smoothEdge">
                          <feGaussianBlur stdDeviation="0.5"/>
                        </filter>
                      </defs>

                      {/* Smooth gradient stroke */}
                      <path d="M20,30 C60,20 100,35 140,28 C160,25 170,32 180,28" fill="none" stroke="url(#synthGrad1)" strokeWidth="12" strokeLinecap="round" filter="url(#smoothEdge)"/>
                      <text x="195" y="32" fontSize="8" fill="#666">Smooth gradient application</text>

                      {/* Clean flat coverage */}
                      <rect x="20" y="55" width="160" height="22" rx="2" fill="#E30022" opacity="0.9" filter="url(#smoothEdge)"/>
                      <rect x="22" y="57" width="156" height="18" rx="1" fill="#FF4444" opacity="0.3"/>
                      <text x="195" y="70" fontSize="8" fill="#666">Even flat coverage</text>

                      {/* Blended transition */}
                      <defs>
                        <linearGradient id="blendGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FFD700"/>
                          <stop offset="50%" stopColor="#FFA500"/>
                          <stop offset="100%" stopColor="#FF4500"/>
                        </linearGradient>
                      </defs>
                      <rect x="20" y="95" width="160" height="20" rx="10" fill="url(#blendGrad)" filter="url(#smoothEdge)"/>
                      <text x="195" y="108" fontSize="8" fill="#666">Seamless color blending</text>

                      {/* Fine detail work */}
                      <g>
                        <circle cx="40" cy="150" r="12" fill="none" stroke="#0047AB" strokeWidth="1.5"/>
                        <circle cx="40" cy="150" r="8" fill="none" stroke="#4169E1" strokeWidth="1"/>
                        <circle cx="40" cy="150" r="4" fill="#6495ED"/>
                        <path d="M70,140 Q90,145 110,140 Q130,155 150,145 Q165,150 175,142" fill="none" stroke="#008B8B" strokeWidth="1.5"/>
                      </g>
                      <text x="195" y="150" fontSize="8" fill="#666">Precise detail work</text>

                      {/* Brush illustration */}
                      <g transform="translate(320, 20)">
                        <rect x="18" y="0" width="24" height="8" fill="#2a2a2a" rx="1"/>
                        <rect x="18" y="8" width="24" height="45" fill="url(#ferruleGrad3)" rx="1"/>
                        <path d="M20,53 Q30,110 40,53" fill="#F5DEB3" stroke="#E8DCC8" strokeWidth="0.5"/>
                        <defs>
                          <linearGradient id="ferruleGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#DAA520"/>
                            <stop offset="50%" stopColor="#FFD700"/>
                            <stop offset="100%" stopColor="#DAA520"/>
                          </linearGradient>
                        </defs>
                        <text x="5" y="125" fontSize="7" fill="#666">Golden</text>
                        <text x="5" y="135" fontSize="7" fill="#666">Taklon</text>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Fan & Specialty Brushes */}
                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden print-card">
                  <div className="p-3 sm:p-4 bg-gradient-to-r from-green-50 to-teal-50 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm sm:text-base">Specialty Brushes</h4>
                        <p className="text-[10px] sm:text-xs text-gray-500">Fan, Mop, Rigger - Each creates unique textures</p>
                      </div>
                      <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">All Media</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <svg viewBox="0 0 400 200" className="w-full" style={{ background: 'linear-gradient(180deg, #f8f6f0 0%, #f0ebe0 100%)' }}>
                      {/* Fan Brush - Trees */}
                      <g>
                        <text x="20" y="20" fontSize="9" fontWeight="bold" fill="#333">Fan Brush - Foliage & Texture</text>
                        {/* Tree foliage effect */}
                        {[...Array(35)].map((_, i) => {
                          const x = 30 + (i % 7) * 18;
                          const y = 35 + Math.floor(i / 7) * 10;
                          return (
                            <g key={i} transform={`translate(${x},${y}) rotate(${-30 + Math.random() * 60})`}>
                              <line x1="0" y1="0" x2={4 + Math.random() * 3} y2={8 + Math.random() * 4}
                                stroke={`hsl(${100 + Math.random() * 40}, ${50 + Math.random() * 30}%, ${25 + Math.random() * 20}%)`}
                                strokeWidth="1.5" strokeLinecap="round"/>
                            </g>
                          );
                        })}
                      </g>

                      {/* Mop Brush - Soft Wash */}
                      <g>
                        <text x="200" y="20" fontSize="9" fontWeight="bold" fill="#333">Mop Brush - Soft Washes</text>
                        <defs>
                          <radialGradient id="mopWash" cx="50%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.6"/>
                            <stop offset="50%" stopColor="#ADD8E6" stopOpacity="0.4"/>
                            <stop offset="100%" stopColor="#E0FFFF" stopOpacity="0.1"/>
                          </radialGradient>
                        </defs>
                        <ellipse cx="280" cy="55" rx="70" ry="30" fill="url(#mopWash)"/>
                        <ellipse cx="290" cy="50" rx="40" ry="18" fill="#87CEEB" opacity="0.3"/>
                      </g>

                      {/* Rigger/Liner - Fine Lines */}
                      <g>
                        <text x="20" y="110" fontSize="9" fontWeight="bold" fill="#333">Rigger/Liner - Fine Details</text>
                        {/* Tree branches */}
                        <path d="M30,125 Q50,120 80,130 Q100,125 120,135" fill="none" stroke="#4a3728" strokeWidth="0.8"/>
                        <path d="M50,122 Q60,115 75,120" fill="none" stroke="#5a4738" strokeWidth="0.6"/>
                        <path d="M90,128 Q105,120 115,125" fill="none" stroke="#5a4738" strokeWidth="0.5"/>
                        <path d="M60,132 Q70,140 85,135" fill="none" stroke="#4a3728" strokeWidth="0.5"/>
                        {/* Grass blades */}
                        {[...Array(15)].map((_, i) => (
                          <path key={i} d={`M${130 + i * 8},155 Q${132 + i * 8},${140 - Math.random() * 10} ${135 + i * 8 + Math.random() * 5},${125 + Math.random() * 10}`}
                            fill="none" stroke={`hsl(${90 + Math.random() * 30}, 60%, ${30 + Math.random() * 20}%)`}
                            strokeWidth="0.7" strokeLinecap="round"/>
                        ))}
                      </g>

                      {/* Filbert - Blending */}
                      <g>
                        <text x="200" y="110" fontSize="9" fontWeight="bold" fill="#333">Filbert - Organic Shapes</text>
                        {/* Rose petals */}
                        <ellipse cx="250" cy="140" rx="20" ry="12" fill="#FFB6C1" opacity="0.7" transform="rotate(-20, 250, 140)"/>
                        <ellipse cx="270" cy="135" rx="18" ry="10" fill="#FFC0CB" opacity="0.8" transform="rotate(15, 270, 135)"/>
                        <ellipse cx="260" cy="150" rx="22" ry="11" fill="#FF69B4" opacity="0.6" transform="rotate(-10, 260, 150)"/>
                        <ellipse cx="280" cy="148" rx="16" ry="9" fill="#FFB6C1" opacity="0.75" transform="rotate(25, 280, 148)"/>
                        <circle cx="265" cy="143" r="8" fill="#FF1493" opacity="0.5"/>
                        {/* Leaves */}
                        <ellipse cx="310" cy="155" rx="15" ry="6" fill="#228B22" opacity="0.7" transform="rotate(30, 310, 155)"/>
                        <ellipse cx="325" cy="145" rx="12" ry="5" fill="#32CD32" opacity="0.6" transform="rotate(-20, 325, 145)"/>
                      </g>

                      {/* Palette Knife */}
                      <g>
                        <text x="20" y="175" fontSize="9" fontWeight="bold" fill="#333">Palette Knife - Bold Texture</text>
                        <polygon points="50,185 100,180 105,192 55,197" fill="#0047AB" opacity="0.9"/>
                        <polygon points="52,186 95,182 98,190 57,194" fill="#4169E1" opacity="0.4"/>
                        <polygon points="110,182 155,178 158,190 113,194" fill="#FFD700" opacity="0.85"/>
                        <polygon points="112,183 150,180 153,188 115,191" fill="#FFF700" opacity="0.3"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </section>

            {/* Medium-Specific Brushes */}
            <section className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 p-4 sm:p-6 print-card">
              <h3 className="text-lg sm:text-xl font-bold text-emerald-800 mb-4">Brushes by Medium</h3>
              <p className="text-xs sm:text-sm text-emerald-700 mb-4">Choose the right brush material for your paint medium:</p>

              <div className="grid sm:grid-cols-3 gap-4">
                {/* Watercolor */}
                <div className="bg-white rounded-xl p-4 border border-emerald-100">
                  <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                    <span>💧</span> Watercolor
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">Best:</span>
                      <span className="text-gray-700">Natural hair (Kolinsky sable, squirrel)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">Good:</span>
                      <span className="text-gray-700">Synthetic sable blends</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">Types:</span>
                      <span className="text-gray-700">Round, Mop, Rigger</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-2 pt-2 border-t">Holds water well, springs back to point</p>
                  </div>
                </div>

                {/* Acrylic */}
                <div className="bg-white rounded-xl p-4 border border-emerald-100">
                  <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                    <span>🎨</span> Acrylic
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">Best:</span>
                      <span className="text-gray-700">Synthetic (Taklon, Golden Taklon)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">Good:</span>
                      <span className="text-gray-700">Hog bristle for texture</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">Types:</span>
                      <span className="text-gray-700">Flat, Filbert, Round, Fan</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-2 pt-2 border-t">Durable, withstands acrylic's abrasiveness</p>
                  </div>
                </div>

                {/* Oil */}
                <div className="bg-white rounded-xl p-4 border border-emerald-100">
                  <h4 className="font-bold text-emerald-800 mb-2 flex items-center gap-2">
                    <span>🖼️</span> Oil
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">Best:</span>
                      <span className="text-gray-700">Hog bristle (Chungking)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">Good:</span>
                      <span className="text-gray-700">Mongoose, badger for blending</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">Types:</span>
                      <span className="text-gray-700">Filbert, Flat, Bright, Fan</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-2 pt-2 border-t">Stiff for thick paint, soft for glazing</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Canvas & Cloth Types */}
            <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-4 sm:p-6 print-card">
              <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🧵</span> Canvas & Cloth Types
              </h3>
              <p className="text-xs sm:text-sm text-amber-700 mb-4">Choose the right canvas material and weight for your painting:</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {canvasTypes.map((canvas, i) => (
                  <div key={i} className="bg-white rounded-xl border border-amber-100 overflow-hidden">
                    {/* Canvas color swatch header */}
                    <div className="flex items-center gap-3 p-3 border-b border-amber-100">
                      <div
                        className="w-16 h-16 rounded-lg border-2 border-amber-200 shadow-inner flex-shrink-0"
                        style={{
                          backgroundColor: canvas.color,
                          backgroundImage: canvas.name.includes('Jute')
                            ? 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px), repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px)'
                            : canvas.name.includes('Linen')
                            ? 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)'
                            : 'none'
                        }}
                      />
                      <div>
                        <h4 className="font-bold text-amber-900 text-sm sm:text-base">{canvas.name}</h4>
                        <p className="text-xs text-amber-600">{canvas.weave}</p>
                      </div>
                    </div>

                    <div className="p-3">
                      <p className="text-xs text-gray-600 mb-3">{canvas.description}</p>

                      {/* GSM/Weight Table */}
                      <div className="mb-3">
                        <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wide mb-1">Weight Options:</p>
                        <div className="bg-amber-50 rounded-lg p-2">
                          <div className="grid grid-cols-3 gap-1 text-[10px]">
                            <span className="font-bold text-amber-800">Weight</span>
                            <span className="font-bold text-amber-800">GSM</span>
                            <span className="font-bold text-amber-800">Use</span>
                            {canvas.weights.map((w, wi) => (
                              <React.Fragment key={wi}>
                                <span className="text-gray-700">{w.oz}</span>
                                <span className="text-gray-700">{w.gsm}g/m²</span>
                                <span className="text-gray-600 truncate">{w.use}</span>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Characteristics */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {canvas.characteristics.map((char, ci) => (
                          <span key={ci} className="text-[9px] px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">
                            {char}
                          </span>
                        ))}
                      </div>

                      {/* Brands */}
                      <p className="text-[10px] text-gray-500">
                        <span className="font-semibold">Brands:</span> {canvas.brands.join(', ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Brush Hair Types */}
            <section className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl border border-rose-200 p-4 sm:p-6 print-card">
              <h3 className="text-lg sm:text-xl font-bold text-rose-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🖌️</span> Brush Hair Types
              </h3>
              <p className="text-xs sm:text-sm text-rose-700 mb-4">Natural and synthetic brush fibers with their actual colors:</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {brushHairTypes.map((hair, i) => (
                  <div key={i} className="bg-white rounded-xl border border-rose-100 overflow-hidden">
                    {/* Hair color swatch with realistic brush shape */}
                    <div className="p-3 border-b border-rose-100 bg-gradient-to-b from-rose-50 to-white">
                      <div className="flex items-center gap-3">
                        {/* Brush illustration */}
                        <svg viewBox="0 0 40 80" className="w-10 h-20 flex-shrink-0">
                          {/* Ferrule (metal part) */}
                          <rect x="12" y="30" width="16" height="12" fill="#C0C0C0" rx="1"/>
                          <rect x="12" y="30" width="16" height="3" fill="#A0A0A0"/>
                          {/* Handle */}
                          <rect x="14" y="42" width="12" height="38" fill="#8B4513" rx="2"/>
                          <rect x="14" y="42" width="3" height="38" fill="#A0522D" rx="1"/>
                          {/* Brush hair/bristles */}
                          <ellipse cx="20" cy="15" rx="8" ry="15" fill={hair.color}/>
                          <ellipse cx="18" cy="15" rx="4" ry="14" fill={hair.color} opacity="0.7"/>
                          {/* Tip highlight */}
                          <ellipse cx="20" cy="5" rx="3" ry="4" fill={hair.color} style={{ filter: 'brightness(1.2)' }}/>
                        </svg>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-rose-900 text-sm">{hair.name}</h4>
                          <p className="text-[10px] text-rose-600">{hair.origin}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <div
                              className="w-4 h-4 rounded-full border border-rose-200"
                              style={{ backgroundColor: hair.color }}
                              title={hair.colorName}
                            />
                            <span className="text-[10px] text-gray-500">{hair.colorName}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <p className="text-xs text-gray-600 mb-2">{hair.description}</p>

                      {/* Characteristics */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {hair.characteristics.slice(0, 3).map((char, ci) => (
                          <span key={ci} className="text-[9px] px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full">
                            {char}
                          </span>
                        ))}
                      </div>

                      {/* Best Media & Price */}
                      <div className="flex items-center justify-between text-[10px] mb-2">
                        <span className="text-gray-600">
                          <span className="font-semibold">Best for:</span> {hair.bestMedia.slice(0, 2).join(', ')}
                        </span>
                        <span className="font-bold text-green-600">{hair.priceRange}</span>
                      </div>

                      {/* Famous Users */}
                      {hair.famousUsers && (
                        <p className="text-[10px] text-purple-600 italic border-t border-rose-100 pt-2 mt-2">
                          ✨ Used by: {hair.famousUsers.join(', ')}
                        </p>
                      )}

                      {/* Brands */}
                      <p className="text-[10px] text-gray-500 mt-1">
                        <span className="font-semibold">Brands:</span> {hair.brands.slice(0, 2).join(', ')}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Paint Media & Brands */}
            <section className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl border border-violet-200 p-4 sm:p-6 print-card">
              <h3 className="text-lg sm:text-xl font-bold text-violet-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎨</span> Paint Media & Brands
              </h3>
              <p className="text-xs sm:text-sm text-violet-700 mb-4">Professional and student grade paints by medium:</p>

              <div className="space-y-6">
                {Object.entries(paintMediaBrands).map(([medium, data]) => (
                  <div key={medium} className="bg-white rounded-xl border border-violet-100 overflow-hidden">
                    {/* Medium Header */}
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-violet-100 to-purple-100 border-b border-violet-200">
                      <h4 className="font-bold text-violet-900 text-base sm:text-lg flex items-center gap-2">
                        {medium === 'Watercolor' && '💧'}
                        {medium === 'Oil' && '🖼️'}
                        {medium === 'Acrylic' && '🎨'}
                        {medium === 'Gouache' && '✨'}
                        {medium}
                      </h4>
                      <p className="text-xs text-violet-700 mt-1">{data.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {data.characteristics.map((char, ci) => (
                          <span key={ci} className="text-[9px] px-2 py-0.5 bg-white/50 text-violet-700 rounded-full">
                            {char}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Brands Table */}
                    <div className="p-3 sm:p-4">
                      <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                          <thead>
                            <tr className="text-left border-b border-violet-100">
                              <th className="pb-2 font-bold text-violet-800">Brand</th>
                              <th className="pb-2 font-bold text-violet-800 hidden sm:table-cell">Tier</th>
                              <th className="pb-2 font-bold text-violet-800">Price</th>
                              <th className="pb-2 font-bold text-violet-800 hidden sm:table-cell">Colors</th>
                              <th className="pb-2 font-bold text-violet-800">Known For</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.brands.map((brand, bi) => (
                              <tr key={bi} className="border-b border-violet-50 last:border-0">
                                <td className="py-2 pr-2">
                                  <span className="font-semibold text-gray-800">{brand.name}</span>
                                  <span className="sm:hidden text-[10px] text-gray-500 block">{brand.tier}</span>
                                </td>
                                <td className="py-2 pr-2 hidden sm:table-cell">
                                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                                    brand.tier === 'Professional' ? 'bg-amber-100 text-amber-700' :
                                    brand.tier === 'Student' ? 'bg-blue-100 text-blue-700' :
                                    'bg-gray-100 text-gray-700'
                                  }`}>
                                    {brand.tier}
                                  </span>
                                </td>
                                <td className="py-2 pr-2">
                                  <span className="text-green-600 font-bold">{brand.priceRange}</span>
                                </td>
                                <td className="py-2 pr-2 hidden sm:table-cell text-gray-600">
                                  {brand.colorCount}
                                </td>
                                <td className="py-2 text-gray-500 text-[10px] sm:text-xs">
                                  {brand.famous}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Paper GSM Reference */}
            <section className="bg-gradient-to-r from-cyan-50 to-sky-50 rounded-2xl border border-cyan-200 p-4 sm:p-6 print-card">
              <h3 className="text-lg sm:text-xl font-bold text-cyan-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">📄</span> Paper Weight Reference (GSM)
              </h3>
              <p className="text-xs sm:text-sm text-cyan-700 mb-4">GSM (grams per square meter) indicates paper thickness. Higher = thicker paper.</p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Weight categories */}
                <div className="bg-white rounded-xl p-4 border border-cyan-100">
                  <h4 className="font-bold text-cyan-800 mb-2 text-sm flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-cyan-200"></span> Light (90-185 GSM)
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• <span className="font-semibold">90 GSM:</span> Standard copy paper</li>
                    <li>• <span className="font-semibold">120 GSM:</span> Quality stationery</li>
                    <li>• <span className="font-semibold">185 GSM:</span> Light sketching</li>
                  </ul>
                  <p className="text-[10px] text-cyan-600 mt-2 pt-2 border-t border-cyan-100">
                    Best for: Pencil, pen, light washes
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-cyan-100">
                  <h4 className="font-bold text-cyan-800 mb-2 text-sm flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-cyan-400"></span> Medium (200-300 GSM)
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• <span className="font-semibold">200 GSM:</span> Mixed media light</li>
                    <li>• <span className="font-semibold">240 GSM:</span> Marker paper</li>
                    <li>• <span className="font-semibold">300 GSM (140lb):</span> Standard watercolor</li>
                  </ul>
                  <p className="text-[10px] text-cyan-600 mt-2 pt-2 border-t border-cyan-100">
                    Best for: Watercolor, gouache, markers
                  </p>
                </div>

                <div className="bg-white rounded-xl p-4 border border-cyan-100">
                  <h4 className="font-bold text-cyan-800 mb-2 text-sm flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-cyan-600"></span> Heavy (356-640 GSM)
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• <span className="font-semibold">356 GSM (260lb):</span> Heavy watercolor</li>
                    <li>• <span className="font-semibold">425 GSM (300lb):</span> No buckling</li>
                    <li>• <span className="font-semibold">640 GSM:</span> Board-like, museum quality</li>
                  </ul>
                  <p className="text-[10px] text-cyan-600 mt-2 pt-2 border-t border-cyan-100">
                    Best for: Wet techniques, multiple layers
                  </p>
                </div>
              </div>

              {/* Conversion chart */}
              <div className="mt-4 bg-white rounded-xl p-4 border border-cyan-100">
                <h4 className="font-bold text-cyan-800 mb-2 text-sm">GSM to LB Conversion</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="bg-cyan-50 rounded p-2 text-center">
                    <span className="block font-bold text-cyan-800">90 lb</span>
                    <span className="text-gray-600">= 185 GSM</span>
                  </div>
                  <div className="bg-cyan-50 rounded p-2 text-center">
                    <span className="block font-bold text-cyan-800">140 lb</span>
                    <span className="text-gray-600">= 300 GSM</span>
                  </div>
                  <div className="bg-cyan-50 rounded p-2 text-center">
                    <span className="block font-bold text-cyan-800">260 lb</span>
                    <span className="text-gray-600">= 356 GSM</span>
                  </div>
                  <div className="bg-cyan-50 rounded p-2 text-center">
                    <span className="block font-bold text-cyan-800">300 lb</span>
                    <span className="text-gray-600">= 640 GSM</span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-2 italic">
                  Note: US uses pounds (lb) measured per ream. UK/EU uses GSM (grams per square meter).
                </p>
              </div>
            </section>

            {/* Painting References */}
            <section>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎨</span> Famous Painting References
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-4">Study these masterpieces to learn from the masters. Links go to Wikimedia Commons (Creative Commons).</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(paintingReferences).map(([artist, paintings]) => (
                  <div key={artist} className="bg-white rounded-2xl border border-gray-200 overflow-hidden print-card">
                    <div className="p-3 sm:p-4 bg-gradient-to-r from-gray-100 to-gray-50 border-b">
                      <h4 className="text-base sm:text-lg font-bold text-gray-800">{artist}</h4>
                    </div>
                    <div className="p-3 sm:p-4">
                      <div className="space-y-2">
                        {paintings.map((painting, i) => (
                          <a
                            key={i}
                            href={painting.wikiLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block p-2 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
                          >
                            <div className="flex items-start gap-2">
                              <span className="text-blue-500 group-hover:text-blue-600">🔗</span>
                              <div className="min-w-0 flex-1">
                                <p className="font-semibold text-xs sm:text-sm text-gray-800 group-hover:text-blue-700">
                                  {painting.title} {painting.year && `(${painting.year})`}
                                </p>
                                <p className="text-[10px] sm:text-xs text-gray-500 truncate">{painting.description}</p>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tips Section */}
            <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-4 sm:p-6 print-card">
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-4">Getting Started Tips</h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="font-bold text-green-700 mb-2 text-sm sm:text-base">Brush Care:</h4>
                  <ul className="text-xs sm:text-sm text-green-900 space-y-1">
                    <li>• Never leave brushes in water</li>
                    <li>• Clean thoroughly after each session</li>
                    <li>• Store bristles up or flat</li>
                    <li>• Use brush soap for deep cleaning</li>
                    <li>• Natural hair for watercolor, synthetic for acrylic</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-green-700 mb-2 text-sm sm:text-base">Paper Selection:</h4>
                  <ul className="text-xs sm:text-sm text-green-900 space-y-1">
                    <li>• Start with 140lb Cold Press</li>
                    <li>• Tape edges to prevent buckling</li>
                    <li>• Test paper with a wet wash first</li>
                    <li>• Use heavier paper for wet techniques</li>
                    <li>• Keep scraps for testing colors</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t py-4 sm:py-6 mt-6 sm:mt-8 bg-white no-print">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center text-gray-500 text-xs sm:text-sm">
          <p>Pigment codes (PY, PR, PB...) are standard Color Index names used by professional artists</p>
          <p className="mt-1">Print any page to use as a reference chart!</p>
        </div>
      </footer>

      {/* Color Detail Modal */}
      <ColorDetailModal color={selectedColor} onClose={() => setSelectedColor(null)} />

      {/* Artist Palette Modal */}
      <ArtistPaletteModal palette={selectedArtistPalette} onClose={() => setSelectedArtistPalette(null)} />
    </div>
  );
}
