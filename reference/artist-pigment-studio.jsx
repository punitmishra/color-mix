import React, { useState, useMemo } from 'react';

// Comprehensive pigment database with real art pigment codes
const pigmentData = {
  "Yellows (PY)": [
    { name: "Lemon Yellow", hex: "#FFF44F", code: "PY3", opacity: "Semi-Transparent", lightfast: "★★★", temp: "Cool" },
    { name: "Hansa Yellow Light", hex: "#FFEB3B", code: "PY3", opacity: "Semi-Transparent", lightfast: "★★★", temp: "Cool" },
    { name: "Hansa Yellow Medium", hex: "#FFD700", code: "PY97", opacity: "Semi-Transparent", lightfast: "★★★★", temp: "Neutral" },
    { name: "Hansa Yellow Deep", hex: "#FFBF00", code: "PY65", opacity: "Semi-Transparent", lightfast: "★★★", temp: "Warm" },
    { name: "Cadmium Yellow Lemon", hex: "#FFF700", code: "PY37", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cadmium Yellow Light", hex: "#FDEE00", code: "PY37", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cadmium Yellow Medium", hex: "#FFD300", code: "PY37", opacity: "Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Cadmium Yellow Deep", hex: "#FFA500", code: "PY37", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Aureolin (Cobalt Yellow)", hex: "#FDEE00", code: "PY40", opacity: "Transparent", lightfast: "★★", temp: "Cool" },
    { name: "Gamboge", hex: "#E49B0F", code: "NY24", opacity: "Transparent", lightfast: "★★", temp: "Warm" },
    { name: "Indian Yellow", hex: "#E3A857", code: "PY153", opacity: "Transparent", lightfast: "★★★★", temp: "Warm" },
    { name: "Naples Yellow", hex: "#FADA5E", code: "PY41", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Naples Yellow Deep", hex: "#E4A010", code: "PBr24", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Yellow Ochre", hex: "#CB9D06", code: "PY43", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Gold Ochre", hex: "#CC7722", code: "PY43", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Mars Yellow", hex: "#E4A010", code: "PY42", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Raw Sienna", hex: "#D68A59", code: "PBr7", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Transparent Yellow", hex: "#FFE135", code: "PY150", opacity: "Transparent", lightfast: "★★★★", temp: "Neutral" },
    { name: "Bismuth Yellow", hex: "#F0E130", code: "PY184", opacity: "Opaque", lightfast: "★★★★", temp: "Cool" },
    { name: "Nickel Titanate Yellow", hex: "#E8E4C9", code: "PY53", opacity: "Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Benzimidazolone Yellow", hex: "#FFCC00", code: "PY154", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Arylide Yellow", hex: "#E9D66B", code: "PY1", opacity: "Semi-Opaque", lightfast: "★★", temp: "Neutral" },
    { name: "Chrome Yellow", hex: "#FFC200", code: "PY34", opacity: "Opaque", lightfast: "★★", temp: "Warm" },
    { name: "Strontium Yellow", hex: "#E4D00A", code: "PY32", opacity: "Opaque", lightfast: "★★★", temp: "Cool" },
    { name: "Barium Yellow", hex: "#DFFF00", code: "PY31", opacity: "Opaque", lightfast: "★★★", temp: "Cool" },
  ],
  "Oranges (PO)": [
    { name: "Cadmium Orange", hex: "#ED872D", code: "PO20", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Cadmium Orange Deep", hex: "#E55B3C", code: "PO20", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Pyrrole Orange", hex: "#FF5800", code: "PO73", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Perinone Orange", hex: "#FF6700", code: "PO43", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Benzimidazolone Orange", hex: "#FF5F1F", code: "PO62", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Quinacridone Orange", hex: "#FF6347", code: "PO48", opacity: "Transparent", lightfast: "★★★★", temp: "Warm" },
    { name: "Transparent Orange", hex: "#FF7F50", code: "PO71", opacity: "Transparent", lightfast: "★★★★", temp: "Warm" },
    { name: "Mars Orange", hex: "#E2703A", code: "PR101", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Chrome Orange", hex: "#FF7F00", code: "PO21", opacity: "Opaque", lightfast: "★★", temp: "Warm" },
    { name: "Isoindolinone Orange", hex: "#FF8C00", code: "PO61", opacity: "Semi-Transparent", lightfast: "★★★★", temp: "Warm" },
    { name: "Diketopyrrolopyrrole Orange", hex: "#FF6F00", code: "PO73", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Burnt Sienna", hex: "#E97451", code: "PBr7", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
  ],
  "Reds (PR)": [
    { name: "Cadmium Red Light", hex: "#E30022", code: "PR108", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Cadmium Red Medium", hex: "#E21A1A", code: "PR108", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Cadmium Red Deep", hex: "#A91B0D", code: "PR108", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cadmium Scarlet", hex: "#E52B50", code: "PR108", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Vermilion (Genuine)", hex: "#E34234", code: "PR106", opacity: "Opaque", lightfast: "★★★", temp: "Warm" },
    { name: "Vermilion Hue", hex: "#D9381E", code: "PR188", opacity: "Opaque", lightfast: "★★★★", temp: "Warm" },
    { name: "Pyrrole Red", hex: "#E32636", code: "PR254", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Pyrrole Red Light", hex: "#FF2400", code: "PR255", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Pyrrole Red Deep", hex: "#B22222", code: "PR264", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Naphthol Red Light", hex: "#D10047", code: "PR112", opacity: "Semi-Transparent", lightfast: "★★★", temp: "Warm" },
    { name: "Naphthol Red Medium", hex: "#C41E3A", code: "PR170", opacity: "Semi-Opaque", lightfast: "★★★★", temp: "Neutral" },
    { name: "Naphthol Red Deep", hex: "#A52A2A", code: "PR170", opacity: "Semi-Opaque", lightfast: "★★★★", temp: "Cool" },
    { name: "Quinacridone Red", hex: "#E8173F", code: "PR209", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Quinacridone Rose", hex: "#E32636", code: "PV19", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Quinacridone Crimson", hex: "#DC143C", code: "PR206", opacity: "Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Alizarin Crimson", hex: "#E32636", code: "PR83", opacity: "Transparent", lightfast: "★★", temp: "Cool" },
    { name: "Permanent Alizarin", hex: "#E32636", code: "PR177", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Carmine", hex: "#960018", code: "NR4", opacity: "Transparent", lightfast: "★", temp: "Cool" },
    { name: "Rose Madder (Genuine)", hex: "#E32636", code: "NR9", opacity: "Transparent", lightfast: "★", temp: "Cool" },
    { name: "Perylene Red", hex: "#B32821", code: "PR178", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Perylene Maroon", hex: "#800000", code: "PR179", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Anthraquinone Red", hex: "#C71585", code: "PR177", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Venetian Red", hex: "#C80815", code: "PR101", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Indian Red", hex: "#CD5C5C", code: "PR101", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "English Red", hex: "#AB4E52", code: "PR101", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Mars Red", hex: "#AD6242", code: "PR101", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Red Ochre", hex: "#913831", code: "PR102", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Terra Rosa", hex: "#C75B4A", code: "PR102", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Caput Mortuum", hex: "#592720", code: "PR101", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
  ],
  "Magentas & Pinks (PR/PV)": [
    { name: "Quinacridone Magenta", hex: "#A50B5E", code: "PR122", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Permanent Magenta", hex: "#D0417E", code: "PR122", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Primary Magenta", hex: "#FF0090", code: "PR122", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Opera Pink", hex: "#FF1493", code: "BV10", opacity: "Transparent", lightfast: "★", temp: "Cool" },
    { name: "Brilliant Pink", hex: "#FF007F", code: "PR122", opacity: "Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Permanent Rose", hex: "#FF007F", code: "PV19", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Rhodamine", hex: "#E0115F", code: "PR81", opacity: "Transparent", lightfast: "★", temp: "Cool" },
    { name: "Quinacridone Pink", hex: "#DE5D83", code: "PV42", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Potter's Pink", hex: "#D68A59", code: "PR233", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Shell Pink", hex: "#FFB4BB", code: "PR108/PW6", opacity: "Opaque", lightfast: "★★★★", temp: "Warm" },
    { name: "Flesh Tint", hex: "#FFCBA4", code: "PW6/PY42/PR101", opacity: "Opaque", lightfast: "★★★★", temp: "Warm" },
    { name: "Jaune Brilliant", hex: "#F5DEB3", code: "PW6/PY42", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
  ],
  "Violets & Purples (PV)": [
    { name: "Dioxazine Violet", hex: "#5C2D91", code: "PV23", opacity: "Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Dioxazine Purple", hex: "#663399", code: "PV23", opacity: "Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Ultramarine Violet", hex: "#5F4B8B", code: "PV15", opacity: "Semi-Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cobalt Violet", hex: "#914E75", code: "PV14", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cobalt Violet Deep", hex: "#722F37", code: "PV14", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cobalt Violet Light", hex: "#B784A7", code: "PV49", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Manganese Violet", hex: "#8B008B", code: "PV16", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Quinacridone Violet", hex: "#922B3E", code: "PV19", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Mars Violet", hex: "#6B3FA0", code: "PR101", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Caput Mortuum Violet", hex: "#592720", code: "PR101", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Mauve", hex: "#E0B0FF", code: "PV15/PW6", opacity: "Semi-Opaque", lightfast: "★★★★", temp: "Cool" },
    { name: "Permanent Violet", hex: "#7851A9", code: "PV23", opacity: "Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Carbazole Violet", hex: "#4A2C4A", code: "PV23", opacity: "Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Perylene Violet", hex: "#4E2A5A", code: "PV29", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
  ],
  "Blues (PB)": [
    { name: "Ultramarine Blue", hex: "#4166F5", code: "PB29", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "French Ultramarine", hex: "#2A52BE", code: "PB29", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Ultramarine Light", hex: "#6495ED", code: "PB29", opacity: "Semi-Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Ultramarine Deep", hex: "#120A8F", code: "PB29", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Cobalt Blue", hex: "#0047AB", code: "PB28", opacity: "Semi-Transparent", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Cobalt Blue Deep", hex: "#002FA7", code: "PB28", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Cobalt Blue Light", hex: "#4169E1", code: "PB28", opacity: "Semi-Transparent", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Cerulean Blue", hex: "#2A52BE", code: "PB35", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cerulean Blue Chromium", hex: "#007BA7", code: "PB36", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Phthalo Blue (Green Shade)", hex: "#000F89", code: "PB15:3", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Phthalo Blue (Red Shade)", hex: "#0C2340", code: "PB15:1", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Prussian Blue", hex: "#003153", code: "PB27", opacity: "Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Antwerp Blue", hex: "#076789", code: "PB27", opacity: "Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Indanthrone Blue", hex: "#234B6E", code: "PB60", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Indigo", hex: "#4B0082", code: "PB66", opacity: "Transparent", lightfast: "★★★★", temp: "Neutral" },
    { name: "Manganese Blue", hex: "#03A89E", code: "PB33", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Smalt", hex: "#003399", code: "PB32", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Azure Blue", hex: "#007FFF", code: "PB29/PW6", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Egyptian Blue", hex: "#1034A6", code: "PB31", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cobalt Turquoise", hex: "#00CED1", code: "PB28/PG50", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Phthalo Turquoise", hex: "#008B8B", code: "PB16", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
  ],
  "Greens (PG)": [
    { name: "Phthalo Green (Blue Shade)", hex: "#123524", code: "PG7", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Phthalo Green (Yellow Shade)", hex: "#00755E", code: "PG36", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Viridian", hex: "#40826D", code: "PG18", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Viridian Hue", hex: "#40826D", code: "PG7/PY3", opacity: "Semi-Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Chromium Oxide Green", hex: "#667C3E", code: "PG17", opacity: "Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Cobalt Green", hex: "#3D9140", code: "PG19", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cobalt Green Deep", hex: "#006B3C", code: "PG26", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cobalt Green Pale", hex: "#8FBC8F", code: "PG50", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Cobalt Teal", hex: "#008B8B", code: "PG50", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Permanent Green Light", hex: "#009E60", code: "PG7/PY3", opacity: "Semi-Opaque", lightfast: "★★★★", temp: "Cool" },
    { name: "Permanent Green Deep", hex: "#006400", code: "PG7/PY42", opacity: "Semi-Opaque", lightfast: "★★★★", temp: "Warm" },
    { name: "Hooker's Green", hex: "#49796B", code: "PG7/PY42", opacity: "Transparent", lightfast: "★★★★", temp: "Neutral" },
    { name: "Sap Green", hex: "#507D2A", code: "PG7/PY110", opacity: "Transparent", lightfast: "★★★", temp: "Warm" },
    { name: "Olive Green", hex: "#808000", code: "PY42/PG7", opacity: "Semi-Opaque", lightfast: "★★★★", temp: "Warm" },
    { name: "Terre Verte", hex: "#6C7C59", code: "PG23", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Green Earth", hex: "#808000", code: "PG23", opacity: "Transparent", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Cadmium Green", hex: "#006B3C", code: "PG14", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Perylene Green", hex: "#2E4B26", code: "PBk31", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Chromium Green Oxide", hex: "#556B2F", code: "PG17", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
  ],
  "Earth Tones (PBr/Natural)": [
    { name: "Burnt Umber", hex: "#8A3324", code: "PBr7", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Raw Umber", hex: "#826644", code: "PBr7", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Burnt Sienna", hex: "#E97451", code: "PBr7", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Raw Sienna", hex: "#D68A59", code: "PBr7", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Van Dyke Brown", hex: "#664228", code: "PBr7/PBk9", opacity: "Transparent", lightfast: "★★★", temp: "Cool" },
    { name: "Sepia", hex: "#704214", code: "PBr7/PBk9", opacity: "Transparent", lightfast: "★★★★", temp: "Warm" },
    { name: "Transparent Brown Oxide", hex: "#80461B", code: "PBr7", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Mars Brown", hex: "#AD6F69", code: "PBr6", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Cyprus Umber", hex: "#635147", code: "PBr7", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Warm Sepia", hex: "#5E4534", code: "PBr7/PR101", opacity: "Transparent", lightfast: "★★★★", temp: "Warm" },
    { name: "Quinacridone Gold", hex: "#D4AF37", code: "PO49", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Quinacridone Burnt Orange", hex: "#CC5500", code: "PO48", opacity: "Transparent", lightfast: "★★★★", temp: "Warm" },
    { name: "Quinacridone Burnt Sienna", hex: "#8B4513", code: "PO48", opacity: "Transparent", lightfast: "★★★★", temp: "Warm" },
    { name: "Gold Brown", hex: "#996515", code: "PY42/PR101", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Transparent Oxide Red", hex: "#913831", code: "PR101", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Transparent Oxide Yellow", hex: "#CB9D06", code: "PY42", opacity: "Transparent", lightfast: "★★★★★", temp: "Warm" },
  ],
  "Blacks (PBk)": [
    { name: "Ivory Black", hex: "#231F20", code: "PBk9", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Lamp Black", hex: "#2C2C2C", code: "PBk6", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Mars Black", hex: "#1C1C1C", code: "PBk11", opacity: "Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Carbon Black", hex: "#1A1A1A", code: "PBk7", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Vine Black", hex: "#1B1811", code: "PBk8", opacity: "Semi-Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Bone Black", hex: "#2D2D2D", code: "PBk9", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Spinel Black", hex: "#0A0A0A", code: "PBk28", opacity: "Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Perylene Black", hex: "#1B1B1B", code: "PBk31", opacity: "Semi-Transparent", lightfast: "★★★★★", temp: "Warm" },
    { name: "Chromatic Black", hex: "#141414", code: "PG7/PR179", opacity: "Transparent", lightfast: "★★★★★", temp: "Neutral" },
  ],
  "Grays (PBk/PW)": [
    { name: "Payne's Gray", hex: "#536878", code: "PB29/PBk9", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Davy's Gray", hex: "#555555", code: "PBk19", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Neutral Tint", hex: "#708090", code: "PV19/PG7/PBk9", opacity: "Transparent", lightfast: "★★★★", temp: "Neutral" },
    { name: "Indigo (Neutral)", hex: "#36454F", code: "PB66/PBk9", opacity: "Transparent", lightfast: "★★★★", temp: "Cool" },
    { name: "Graphite Gray", hex: "#383838", code: "PBk10", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Charcoal Gray", hex: "#36454F", code: "PBk8", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Warm Gray", hex: "#808069", code: "PBk9/PW6/PY42", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Cool Gray", hex: "#8C92AC", code: "PBk11/PW6/PB29", opacity: "Opaque", lightfast: "★★★★★", temp: "Cool" },
  ],
  "Whites (PW)": [
    { name: "Titanium White", hex: "#FFFFFF", code: "PW6", opacity: "Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Zinc White", hex: "#FDFFF5", code: "PW4", opacity: "Transparent", lightfast: "★★★★★", temp: "Cool" },
    { name: "Mixing White", hex: "#F8F8FF", code: "PW6/PW4", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Flake White (Lead)", hex: "#FFFAFA", code: "PW1", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Chinese White", hex: "#F8F8FF", code: "PW4", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Cool" },
    { name: "Buff Titanium", hex: "#F0EAD6", code: "PW6/PY42", opacity: "Opaque", lightfast: "★★★★★", temp: "Warm" },
    { name: "Transparent White", hex: "#F5F5F5", code: "PW6", opacity: "Transparent", lightfast: "★★★★★", temp: "Neutral" },
    { name: "Iridescent White", hex: "#FFFFF0", code: "PW6/Mica", opacity: "Semi-Opaque", lightfast: "★★★★★", temp: "Neutral" },
  ],
};

// Color mixing recipes
const mixingRecipes = [
  {
    name: "Mixing Greens",
    mixes: [
      { colors: ["Cadmium Yellow Light", "Phthalo Blue (GS)"], result: "#32CD32", resultName: "Bright Green" },
      { colors: ["Yellow Ochre", "Ultramarine Blue"], result: "#556B2F", resultName: "Olive Green" },
      { colors: ["Lemon Yellow", "Cerulean Blue"], result: "#90EE90", resultName: "Spring Green" },
      { colors: ["Raw Sienna", "Phthalo Blue (GS)"], result: "#2F4F4F", resultName: "Deep Forest" },
    ]
  },
  {
    name: "Mixing Oranges",
    mixes: [
      { colors: ["Cadmium Yellow", "Cadmium Red Light"], result: "#FF7F00", resultName: "Brilliant Orange" },
      { colors: ["Hansa Yellow", "Pyrrole Red"], result: "#FF6347", resultName: "Tomato Red" },
      { colors: ["Yellow Ochre", "Vermilion"], result: "#CC5500", resultName: "Burnt Orange" },
      { colors: ["Naples Yellow", "Quinacridone Rose"], result: "#FF7F50", resultName: "Coral" },
    ]
  },
  {
    name: "Mixing Purples",
    mixes: [
      { colors: ["Ultramarine Blue", "Quinacridone Magenta"], result: "#8B008B", resultName: "Deep Violet" },
      { colors: ["Cobalt Blue", "Permanent Rose"], result: "#9370DB", resultName: "Medium Purple" },
      { colors: ["Phthalo Blue (RS)", "Alizarin Crimson"], result: "#4B0082", resultName: "Indigo" },
      { colors: ["Cerulean Blue", "Quinacridone Red"], result: "#DDA0DD", resultName: "Plum" },
    ]
  },
  {
    name: "Mixing Neutrals",
    mixes: [
      { colors: ["Ultramarine Blue", "Burnt Sienna"], result: "#36454F", resultName: "Chromatic Black" },
      { colors: ["Phthalo Green", "Alizarin Crimson"], result: "#1C1C1C", resultName: "Deep Black" },
      { colors: ["Burnt Umber", "Ultramarine Blue"], result: "#555555", resultName: "Warm Gray" },
      { colors: ["Raw Umber", "Cobalt Blue"], result: "#708090", resultName: "Cool Gray" },
    ]
  },
  {
    name: "Skin Tones",
    mixes: [
      { colors: ["Titanium White", "Yellow Ochre", "Cadmium Red Light"], result: "#FFE4C4", resultName: "Light Skin" },
      { colors: ["Burnt Sienna", "Yellow Ochre", "Titanium White"], result: "#D2B48C", resultName: "Medium Skin" },
      { colors: ["Burnt Umber", "Cadmium Red", "Yellow Ochre"], result: "#8B4513", resultName: "Dark Skin" },
      { colors: ["Cadmium Red Light", "Yellow Ochre", "Viridian"], result: "#BC8F8F", resultName: "Rosy Skin" },
    ]
  },
];

// Color palettes for inspiration
const colorPalettes = [
  {
    name: "Impressionist Landscape",
    colors: ["#87CEEB", "#90EE90", "#FFD700", "#E6E6FA", "#F4A460"],
    description: "Light, airy palette for outdoor scenes"
  },
  {
    name: "Rembrandt Portrait",
    colors: ["#8B4513", "#D2691E", "#FFE4C4", "#2F1810", "#CD853F"],
    description: "Rich earth tones for dramatic portraits"
  },
  {
    name: "Monet Water Lilies",
    colors: ["#4682B4", "#98FB98", "#FFB6C1", "#E6E6FA", "#F0FFF0"],
    description: "Soft, dreamy aquatic colors"
  },
  {
    name: "Van Gogh Starry Night",
    colors: ["#191970", "#FFD700", "#4169E1", "#00CED1", "#2F4F4F"],
    description: "Bold, swirling night sky palette"
  },
  {
    name: "Warm Sunset",
    colors: ["#FF6347", "#FF8C00", "#FFD700", "#DC143C", "#4B0082"],
    description: "Vibrant warm to cool transition"
  },
  {
    name: "Ocean & Sand",
    colors: ["#006994", "#40E0D0", "#F5DEB3", "#FFF8DC", "#2F4F4F"],
    description: "Coastal serenity"
  },
  {
    name: "Autumn Forest",
    colors: ["#D2691E", "#8B4513", "#FFD700", "#B22222", "#556B2F"],
    description: "Rich fall foliage colors"
  },
  {
    name: "Zorn Palette (Limited)",
    colors: ["#FFFFFF", "#FFE4C4", "#E34234", "#231F20"],
    description: "Classic limited palette: White, Yellow Ochre, Vermilion, Ivory Black"
  },
];

function getContrastColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#1a1a1a' : '#ffffff';
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function ColorSwatch({ color, onClick, size = 'normal' }) {
  const textColor = getContrastColor(color.hex);
  const sizeClasses = size === 'small' ? 'w-12 h-12' : size === 'large' ? 'w-24 h-24' : 'w-16 h-16';
  
  return (
    <div
      onClick={() => onClick && onClick(color)}
      className={`group relative cursor-pointer transition-all duration-300 ease-out ${sizeClasses} rounded-lg`}
      style={{
        backgroundColor: color.hex,
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
      }}
    >
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg"
        style={{ backgroundColor: `${color.hex}ee` }}
      >
        <span className="text-[9px] font-medium text-center leading-tight" style={{ color: textColor }}>
          {color.name}
        </span>
        {color.code && (
          <span className="text-[8px] mt-0.5 font-mono opacity-70" style={{ color: textColor }}>
            {color.code}
          </span>
        )}
      </div>
    </div>
  );
}

function ColorDetail({ color, onClose }) {
  if (!color) return null;
  const textColor = getContrastColor(color.hex);
  const { r, g, b } = hexToRgb(color.hex);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}>
      <div onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl"
        style={{ backgroundColor: '#1a1a1a' }}>
        <div className="aspect-video w-full" style={{ backgroundColor: color.hex }} />
        <button onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
          style={{ backgroundColor: `${textColor}33`, color: textColor }}>✕</button>
        <div className="p-8 text-white">
          <h2 className="text-2xl font-light mb-2">{color.name}</h2>
          {color.code && <p className="text-sm font-mono text-gray-400 mb-6">Pigment: {color.code}</p>}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <span className="text-gray-500 text-xs">HEX</span>
              <p className="font-mono mt-1">{color.hex}</p>
            </div>
            <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <span className="text-gray-500 text-xs">RGB</span>
              <p className="font-mono mt-1">{r}, {g}, {b}</p>
            </div>
            {color.opacity && (
              <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <span className="text-gray-500 text-xs">Opacity</span>
                <p className="mt-1">{color.opacity}</p>
              </div>
            )}
            {color.lightfast && (
              <div className="p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <span className="text-gray-500 text-xs">Lightfastness</span>
                <p className="mt-1">{color.lightfast}</p>
              </div>
            )}
            {color.temp && (
              <div className="p-4 rounded-xl col-span-2" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                <span className="text-gray-500 text-xs">Temperature</span>
                <p className="mt-1">{color.temp}</p>
              </div>
            )}
          </div>
          <button onClick={() => navigator.clipboard.writeText(color.hex)}
            className="mt-6 w-full py-3 rounded-xl font-medium transition-all hover:scale-[1.02]"
            style={{ backgroundColor: color.hex, color: textColor }}>
            Copy HEX Code
          </button>
        </div>
      </div>
    </div>
  );
}

function MixingCard({ recipe }) {
  return (
    <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
      <h3 className="text-lg font-medium text-white mb-4">{recipe.name}</h3>
      <div className="space-y-4">
        {recipe.mixes.map((mix, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {mix.colors.map((c, j) => (
                <React.Fragment key={j}>
                  <span className="text-xs text-gray-400">{c}</span>
                  {j < mix.colors.length - 1 && <span className="text-gray-600 mx-1">+</span>}
                </React.Fragment>
              ))}
            </div>
            <span className="text-gray-600">=</span>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg shadow-lg" style={{ backgroundColor: mix.result }} />
              <span className="text-sm text-gray-300">{mix.resultName}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PaletteCard({ palette }) {
  return (
    <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
      <h3 className="text-base font-medium text-white mb-2">{palette.name}</h3>
      <p className="text-xs text-gray-500 mb-4">{palette.description}</p>
      <div className="flex gap-2">
        {palette.colors.map((c, i) => (
          <div key={i} className="flex-1 h-16 rounded-lg first:rounded-l-xl last:rounded-r-xl shadow-lg"
            style={{ backgroundColor: c }} />
        ))}
      </div>
    </div>
  );
}

function LandscapeSketch() {
  return (
    <svg viewBox="0 0 800 500" className="w-full rounded-2xl overflow-hidden shadow-2xl">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="60%" stopColor="#E6E6FA" />
          <stop offset="100%" stopColor="#FFF8DC" />
        </linearGradient>
        <linearGradient id="water" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4682B4" />
          <stop offset="100%" stopColor="#006994" />
        </linearGradient>
        <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4B0082" />
          <stop offset="100%" stopColor="#2F4F4F" />
        </linearGradient>
        <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#556B2F" />
          <stop offset="100%" stopColor="#2F4F4F" />
        </linearGradient>
        <linearGradient id="sunset" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
      </defs>
      
      {/* Background sky */}
      <rect width="800" height="500" fill="url(#sky)" />
      
      {/* Sun */}
      <circle cx="650" cy="150" r="50" fill="url(#sunset)" opacity="0.9" />
      <circle cx="650" cy="150" r="40" fill="#FFD700" opacity="0.7" />
      
      {/* Distant mountains - Ultramarine Violet */}
      <path d="M0 280 L100 180 L200 220 L300 150 L400 200 L500 160 L600 210 L700 170 L800 230 L800 320 L0 320 Z" 
        fill="url(#mountain1)" opacity="0.6" />
      
      {/* Mid mountains - Hooker's Green */}
      <path d="M0 320 L80 260 L180 290 L280 240 L380 280 L480 230 L580 270 L680 220 L780 260 L800 280 L800 360 L0 360 Z" 
        fill="url(#mountain2)" opacity="0.8" />
      
      {/* Foreground hills - Sap Green */}
      <path d="M0 360 L100 330 L200 350 L350 320 L450 340 L550 310 L700 340 L800 320 L800 400 L0 400 Z" 
        fill="#507D2A" />
      
      {/* Lake - Cerulean/Cobalt Blue */}
      <ellipse cx="400" cy="420" rx="350" ry="60" fill="url(#water)" />
      
      {/* Reflection */}
      <ellipse cx="400" cy="420" rx="300" ry="40" fill="#87CEEB" opacity="0.3" />
      
      {/* Trees - Phthalo Green */}
      <g fill="#123524">
        <path d="M50 360 L60 300 L70 360 Z" />
        <path d="M55 320 L60 280 L65 320 Z" />
        <path d="M100 355 L115 280 L130 355 Z" />
        <path d="M107 305 L115 250 L123 305 Z" />
        <path d="M700 350 L720 260 L740 350 Z" />
        <path d="M708 290 L720 220 L732 290 Z" />
        <path d="M750 360 L765 300 L780 360 Z" />
      </g>
      
      {/* Grass details - Yellow Ochre highlights */}
      <g stroke="#CB9D06" strokeWidth="2" opacity="0.6">
        <line x1="200" y1="380" x2="210" y2="365" />
        <line x1="220" y1="385" x2="225" y2="370" />
        <line x1="240" y1="378" x2="248" y2="362" />
        <line x1="550" y1="375" x2="558" y2="360" />
        <line x1="580" y1="380" x2="590" y2="368" />
      </g>
      
      {/* Color swatches overlay */}
      <g transform="translate(20, 420)">
        <rect x="0" y="0" width="760" height="60" rx="10" fill="rgba(0,0,0,0.7)" />
        <text x="15" y="22" fill="#aaa" fontSize="10" fontFamily="sans-serif">PALETTE USED:</text>
        
        <rect x="15" y="30" width="24" height="24" rx="4" fill="#87CEEB" />
        <text x="15" y="66" fill="#666" fontSize="8">Cerulean</text>
        
        <rect x="55" y="30" width="24" height="24" rx="4" fill="#4B0082" />
        <text x="55" y="66" fill="#666" fontSize="8">Indigo</text>
        
        <rect x="95" y="30" width="24" height="24" rx="4" fill="#507D2A" />
        <text x="95" y="66" fill="#666" fontSize="8">Sap Green</text>
        
        <rect x="150" y="30" width="24" height="24" rx="4" fill="#123524" />
        <text x="150" y="66" fill="#666" fontSize="8">Phthalo G</text>
        
        <rect x="210" y="30" width="24" height="24" rx="4" fill="#CB9D06" />
        <text x="210" y="66" fill="#666" fontSize="8">Yel Ochre</text>
        
        <rect x="270" y="30" width="24" height="24" rx="4" fill="#FFD700" />
        <text x="270" y="66" fill="#666" fontSize="8">Cad Yellow</text>
        
        <rect x="330" y="30" width="24" height="24" rx="4" fill="#FF6347" />
        <text x="330" y="66" fill="#666" fontSize="8">Vermilion</text>
        
        <rect x="390" y="30" width="24" height="24" rx="4" fill="#4682B4" />
        <text x="390" y="66" fill="#666" fontSize="8">Cobalt B</text>
      </g>
    </svg>
  );
}

function StillLifeSketch() {
  return (
    <svg viewBox="0 0 600 450" className="w-full rounded-2xl overflow-hidden shadow-2xl">
      <defs>
        <linearGradient id="tablecloth" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#654321" />
        </linearGradient>
        <linearGradient id="vase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#006994" />
          <stop offset="50%" stopColor="#40E0D0" />
          <stop offset="100%" stopColor="#006994" />
        </linearGradient>
        <linearGradient id="apple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#8B0000" />
        </linearGradient>
        <linearGradient id="lemon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <radialGradient id="orange" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFA500" />
          <stop offset="100%" stopColor="#FF6347" />
        </radialGradient>
        <linearGradient id="bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2F1810" />
          <stop offset="100%" stopColor="#1a0f0a" />
        </linearGradient>
      </defs>
      
      {/* Background - Burnt Umber */}
      <rect width="600" height="450" fill="url(#bg)" />
      
      {/* Wall shadow */}
      <rect x="0" y="0" width="600" height="280" fill="#3d2817" opacity="0.5" />
      
      {/* Table - Raw Sienna / Burnt Sienna */}
      <path d="M0 280 L600 280 L600 450 L0 450 Z" fill="url(#tablecloth)" />
      <path d="M0 280 L600 280 L550 320 L50 320 Z" fill="#A0522D" />
      
      {/* Cloth drape - Raw Umber */}
      <path d="M350 280 Q400 350 450 280 L450 320 Q400 380 350 320 Z" fill="#F5DEB3" opacity="0.8" />
      
      {/* Vase - Cobalt Teal */}
      <ellipse cx="200" cy="290" rx="60" ry="15" fill="#008B8B" />
      <path d="M140 290 Q140 180 160 150 Q200 120 240 150 Q260 180 260 290 Z" fill="url(#vase)" />
      <ellipse cx="200" cy="150" rx="40" ry="12" fill="#40E0D0" />
      
      {/* Flowers - Quinacridone Magenta, Cadmium Yellow */}
      <g>
        <circle cx="180" cy="100" r="25" fill="#A50B5E" />
        <circle cx="180" cy="100" r="15" fill="#D0417E" />
        <circle cx="220" cy="80" r="20" fill="#FFD700" />
        <circle cx="220" cy="80" r="12" fill="#FFA500" />
        <circle cx="160" cy="70" r="18" fill="#FF1493" />
        <circle cx="200" cy="50" r="22" fill="#E8173F" />
        <circle cx="200" cy="50" r="14" fill="#FF6B6B" />
        <circle cx="240" cy="110" r="15" fill="#DA70D6" />
      </g>
      
      {/* Stems - Sap Green */}
      <g stroke="#507D2A" strokeWidth="3" fill="none">
        <path d="M200 150 Q190 120 180 100" />
        <path d="M200 150 Q210 110 220 80" />
        <path d="M200 150 Q180 100 160 70" />
        <path d="M200 150 Q200 90 200 50" />
        <path d="M200 150 Q220 130 240 110" />
      </g>
      
      {/* Leaves - Viridian */}
      <g fill="#40826D">
        <ellipse cx="165" cy="130" rx="15" ry="8" transform="rotate(-30 165 130)" />
        <ellipse cx="235" cy="125" rx="12" ry="6" transform="rotate(20 235 125)" />
        <ellipse cx="175" cy="145" rx="10" ry="5" transform="rotate(-45 175 145)" />
      </g>
      
      {/* Apple - Cadmium Red */}
      <ellipse cx="350" cy="340" rx="45" ry="40" fill="url(#apple)" />
      <ellipse cx="335" cy="320" rx="15" ry="10" fill="#FF6347" opacity="0.6" />
      <path d="M350 300 Q355 290 360 295" stroke="#654321" strokeWidth="3" fill="none" />
      <ellipse cx="362" cy="292" rx="8" ry="5" fill="#507D2A" transform="rotate(30 362 292)" />
      
      {/* Lemon - Cadmium Yellow */}
      <ellipse cx="420" cy="350" rx="35" ry="25" fill="url(#lemon)" />
      <ellipse cx="408" cy="340" rx="10" ry="8" fill="#FFFF00" opacity="0.5" />
      
      {/* Orange - Cadmium Orange */}
      <circle cx="480" cy="340" r="35" fill="url(#orange)" />
      <circle cx="465" cy="325" r="12" fill="#FFD700" opacity="0.4" />
      <circle cx="480" cy="305" r="5" fill="#507D2A" />
      
      {/* Shadows - Burnt Umber */}
      <ellipse cx="200" cy="295" rx="65" ry="12" fill="#3d2817" opacity="0.6" />
      <ellipse cx="350" cy="380" rx="50" ry="10" fill="#3d2817" opacity="0.5" />
      <ellipse cx="420" cy="375" rx="40" ry="8" fill="#3d2817" opacity="0.5" />
      <ellipse cx="480" cy="375" rx="40" ry="10" fill="#3d2817" opacity="0.5" />
      
      {/* Palette legend */}
      <g transform="translate(20, 395)">
        <rect x="0" y="0" width="560" height="45" rx="8" fill="rgba(0,0,0,0.75)" />
        <text x="12" y="15" fill="#888" fontSize="9" fontFamily="sans-serif">REMBRANDT PALETTE:</text>
        
        <rect x="12" y="22" width="18" height="18" rx="3" fill="#2F1810" />
        <text x="12" y="52" fill="#555" fontSize="7">Burnt Umb</text>
        
        <rect x="52" y="22" width="18" height="18" rx="3" fill="#8B4513" />
        <text x="52" y="52" fill="#555" fontSize="7">Raw Sienna</text>
        
        <rect x="105" y="22" width="18" height="18" rx="3" fill="#40E0D0" />
        <text x="105" y="52" fill="#555" fontSize="7">Cobalt Teal</text>
        
        <rect x="158" y="22" width="18" height="18" rx="3" fill="#A50B5E" />
        <text x="158" y="52" fill="#555" fontSize="7">Quin Mag</text>
        
        <rect x="205" y="22" width="18" height="18" rx="3" fill="#E30022" />
        <text x="205" y="52" fill="#555" fontSize="7">Cad Red</text>
        
        <rect x="248" y="22" width="18" height="18" rx="3" fill="#FFD700" />
        <text x="248" y="52" fill="#555" fontSize="7">Cad Yellow</text>
        
        <rect x="300" y="22" width="18" height="18" rx="3" fill="#FF8C00" />
        <text x="300" y="52" fill="#555" fontSize="7">Cad Orange</text>
        
        <rect x="355" y="22" width="18" height="18" rx="3" fill="#40826D" />
        <text x="355" y="52" fill="#555" fontSize="7">Viridian</text>
        
        <rect x="400" y="22" width="18" height="18" rx="3" fill="#507D2A" />
        <text x="400" y="52" fill="#555" fontSize="7">Sap Green</text>
      </g>
    </svg>
  );
}

export default function ArtistPigmentStudio() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('pigments');
  const [activeCategory, setActiveCategory] = useState('All');

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

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(145deg, #0d0d0d 0%, #1a1510 50%, #0d1015 100%)',
      fontFamily: "'Cormorant Garamond', Georgia, serif"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap');
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade { animation: fadeIn 0.5s ease-out forwards; }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b" 
        style={{ backgroundColor: 'rgba(13,13,13,0.9)', borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-3xl font-light text-white tracking-wide">
                Artist's Pigment Studio
              </h1>
              <p className="text-sm text-gray-500 mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                {totalPigments} professional pigments • mixing guides • palettes
              </p>
            </div>
            {activeTab === 'pigments' && (
              <input
                type="text"
                placeholder="Search pigments, codes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-72 px-5 py-3 rounded-xl text-white placeholder-gray-600 outline-none transition-all focus:ring-1 focus:ring-amber-500/30"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', fontFamily: 'JetBrains Mono, monospace', fontSize: '13px' }}
              />
            )}
          </div>

          {/* Main Tabs */}
          <div className="flex gap-1 p-1 rounded-xl w-fit" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
            {['pigments', 'mixing', 'palettes', 'examples'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="px-6 py-2.5 rounded-lg text-sm capitalize transition-all"
                style={{
                  backgroundColor: activeTab === tab ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: activeTab === tab ? '#fff' : 'rgba(255,255,255,0.4)'
                }}>
                {tab === 'examples' ? 'Visual Examples' : tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Pigments Tab */}
        {activeTab === 'pigments' && (
          <>
            {/* Category Filter */}
            <nav className="flex gap-2 overflow-x-auto hide-scrollbar pb-6 mb-2">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all"
                  style={{
                    backgroundColor: activeCategory === cat ? 'rgba(255,200,100,0.15)' : 'transparent',
                    color: activeCategory === cat ? '#ffd700' : 'rgba(255,255,255,0.4)',
                    border: activeCategory === cat ? '1px solid rgba(255,200,100,0.3)' : '1px solid rgba(255,255,255,0.08)'
                  }}>
                  {cat}
                </button>
              ))}
            </nav>

            {/* Pigment Grid */}
            {Object.entries(filteredPigments).map(([category, colors], catIndex) => (
              <section key={category} className="mb-10 animate-fade" style={{ animationDelay: `${catIndex * 0.05}s` }}>
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-xl font-light text-white">{category}</h2>
                  <span className="text-xs text-gray-600 px-3 py-1 rounded-full" 
                    style={{ backgroundColor: 'rgba(255,255,255,0.03)', fontFamily: 'JetBrains Mono' }}>
                    {colors.length}
                  </span>
                  <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.1), transparent)' }} />
                </div>
                <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(64px, 1fr))' }}>
                  {colors.map((color, i) => (
                    <div key={color.name} className="animate-fade" style={{ animationDelay: `${i * 0.015}s` }}>
                      <ColorSwatch color={color} onClick={setSelectedColor} />
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {Object.keys(filteredPigments).length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">No pigments found for "{searchTerm}"</p>
              </div>
            )}
          </>
        )}

        {/* Mixing Tab */}
        {activeTab === 'mixing' && (
          <div className="animate-fade">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-white mb-2">Color Mixing Guide</h2>
              <p className="text-gray-500">Classic pigment combinations every artist should know</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {mixingRecipes.map((recipe, i) => (
                <div key={i} className="animate-fade" style={{ animationDelay: `${i * 0.1}s` }}>
                  <MixingCard recipe={recipe} />
                </div>
              ))}
            </div>
            
            {/* Color Theory Tips */}
            <div className="mt-12 p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255,200,100,0.05)', border: '1px solid rgba(255,200,100,0.1)' }}>
              <h3 className="text-xl text-amber-200 mb-4">💡 Pro Mixing Tips</h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-400 text-sm leading-relaxed">
                <div>
                  <p className="mb-3"><strong className="text-white">Chromatic Blacks:</strong> Mix complementary colors (Blue + Orange, Red + Green, Yellow + Purple) for rich, vibrant blacks that are more interesting than tube black.</p>
                  <p><strong className="text-white">Clean Greens:</strong> Phthalo Blue + Cadmium Yellow makes brilliant greens. For muted greens, use Ultramarine + Yellow Ochre.</p>
                </div>
                <div>
                  <p className="mb-3"><strong className="text-white">Avoid Mud:</strong> Don't mix more than 3 pigments. Each additional pigment reduces chroma and can create muddy colors.</p>
                  <p><strong className="text-white">Temperature Shifts:</strong> Cool yellows (Lemon) + Cool blues (Cerulean) = Bright greens. Warm yellows (Cadmium) + Warm blues (Ultramarine) = Muted greens.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Palettes Tab */}
        {activeTab === 'palettes' && (
          <div className="animate-fade">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-white mb-2">Curated Color Palettes</h2>
              <p className="text-gray-500">Harmonious combinations inspired by master painters</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {colorPalettes.map((palette, i) => (
                <div key={i} className="animate-fade" style={{ animationDelay: `${i * 0.1}s` }}>
                  <PaletteCard palette={palette} />
                </div>
              ))}
            </div>
            
            {/* Color Harmony Guide */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <div className="w-20 h-20 mx-auto mb-4 rounded-full" style={{ background: 'conic-gradient(#FF6347, #FFD700, #32CD32, #4169E1, #8B008B, #FF6347)' }} />
                <h4 className="text-white mb-2">Complementary</h4>
                <p className="text-gray-500 text-sm">Colors opposite on the wheel create maximum contrast</p>
              </div>
              <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <div className="flex justify-center gap-2 mb-4">
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#FF6347' }} />
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#FF8C00' }} />
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#FFD700' }} />
                </div>
                <h4 className="text-white mb-2">Analogous</h4>
                <p className="text-gray-500 text-sm">Adjacent colors create harmonious, cohesive schemes</p>
              </div>
              <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <div className="flex justify-center gap-2 mb-4">
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#FF6347' }} />
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#32CD32' }} />
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#4169E1' }} />
                </div>
                <h4 className="text-white mb-2">Triadic</h4>
                <p className="text-gray-500 text-sm">Three evenly spaced colors for vibrant balance</p>
              </div>
            </div>
          </div>
        )}

        {/* Visual Examples Tab */}
        {activeTab === 'examples' && (
          <div className="animate-fade">
            <div className="mb-8">
              <h2 className="text-2xl font-light text-white mb-2">Paintings & Color In Action</h2>
              <p className="text-gray-500">See how pigments work together in actual compositions</p>
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-lg text-white mb-4">Landscape — Impressionist Approach</h3>
                <LandscapeSketch />
              </div>
              
              <div>
                <h3 className="text-lg text-white mb-4">Still Life — Classical Approach</h3>
                <StillLifeSketch />
              </div>
            </div>
            
            {/* Additional tips */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(100,149,237,0.08)', border: '1px solid rgba(100,149,237,0.2)' }}>
                <h4 className="text-blue-300 mb-3">🌅 Landscape Tips</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Use cooler, lighter colors for distant objects (atmospheric perspective)</li>
                  <li>• Warm colors advance, cool colors recede</li>
                  <li>• Cerulean Blue is perfect for clear skies</li>
                  <li>• Mix greens from blues and yellows—avoid tube greens for natural foliage</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(139,69,19,0.12)', border: '1px solid rgba(139,69,19,0.3)' }}>
                <h4 className="text-amber-300 mb-3">🍎 Still Life Tips</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Earth tones (Burnt Umber, Raw Sienna) create warm, inviting backgrounds</li>
                  <li>• Use complementary colors in shadows (red apple → green shadow)</li>
                  <li>• Reflected light picks up colors from nearby objects</li>
                  <li>• The Zorn palette (4 colors) can paint almost anything</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-12" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm">
          <p>Pigment codes follow Color Index naming (PY = Pigment Yellow, PR = Pigment Red, etc.)</p>
          <p className="mt-1">★ = Lightfastness rating (★★★★★ = Excellent, ★ = Fugitive)</p>
        </div>
      </footer>

      {/* Color Detail Modal */}
      <ColorDetail color={selectedColor} onClose={() => setSelectedColor(null)} />
    </div>
  );
}
