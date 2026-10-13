// Rezepte für 2 Erwachsene + 1 Kleinkind (ca. 2,5 Portionen), alle unter 30 Minuten.
// aisle = Abteilung im Supermarkt. pantry = hast du vermutlich schon zu Hause.
const AISLES = {
  veg: "Obst & Gemüse",
  fresh: "Kühlregal",
  meat: "Fleisch & Fisch",
  frozen: "Tiefkühl",
  dry: "Nudeln, Reis & Konserven",
  bread: "Brot",
  pantry: "Vorrat (hast du vermutlich)"
};

// icon: chop | boil | pan | oven | mix | serve | rice
const RECIPES = [
  {
    id: "lachs", name: "Ofenlachs mit Dill-Kartoffeln", origin: "Schweden", flag: "SE", time: 25,
    colors: ["#E9A58A", "#E8D7A8", "#9DB59A", "#F3EFE6"],
    kid: "Lachs mit den Fingern zerpflücken und auf Gräten prüfen. Kartoffeln leicht zerdrücken.",
    ingredients: [
      ["Lachsfilet", 400, "g", "meat"], ["Kleine Kartoffeln (Drillinge)", 600, "g", "veg"],
      ["Erbsen", 200, "g", "frozen"], ["Dill", 1, "Bund", "veg"], ["Zitrone", 1, "Stk", "veg"],
      ["Naturjoghurt", 150, "g", "fresh"], ["Olivenöl", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 200 Grad stellen. Kartoffeln halbieren.", items: ["Kartoffeln"] },
      { icon: "oven", text: "Kartoffeln mit Öl aufs Blech. 10 Minuten backen.", timer: 600, items: ["Olivenöl"] },
      { icon: "oven", text: "Lachs dazulegen, Zitronenscheiben drauf. Noch 12 Minuten backen.", timer: 720, items: ["Lachs", "Zitrone"] },
      { icon: "boil", text: "Erbsen 3 Minuten in Wasser kochen.", timer: 180, items: ["Erbsen"] },
      { icon: "mix", text: "Joghurt mit gehacktem Dill verrühren.", items: ["Joghurt", "Dill"] },
      { icon: "serve", text: "Anrichten. Fürs Kind den Lachs zerpflücken.", items: [] }
    ]
  },
  {
    id: "teriyaki", name: "Teriyaki-Hähnchen-Bowl mit Edamame", origin: "Japan", flag: "JP", time: 25,
    colors: ["#C98B5E", "#F5F1E8", "#8FB08C", "#E6A57E"],
    kid: "Kinderportion vor der Soße abnehmen. Edamame aus der Schote holen und halbieren.",
    ingredients: [
      ["Hähnchenbrust", 400, "g", "meat"], ["Sushi- oder Jasminreis", 250, "g", "dry"],
      ["Edamame", 200, "g", "frozen"], ["Karotten", 2, "Stk", "veg"], ["Gurke", 1, "Stk", "veg"],
      ["Sojasauce (salzreduziert)", 2, "EL", "pantry"], ["Honig", 1, "EL", "pantry"], ["Sesam", 1, "EL", "pantry"]
    ],
    steps: [
      { icon: "rice", text: "Reis mit doppelt so viel Wasser aufsetzen. 15 Minuten leise köcheln.", timer: 900, items: ["Reis"] },
      { icon: "chop", text: "Hähnchen in kleine Würfel schneiden.", items: ["Hähnchen"] },
      { icon: "pan", text: "Hähnchen 8 Minuten rundum braten.", timer: 480, items: ["Hähnchen"] },
      { icon: "boil", text: "Edamame 4 Minuten kochen.", timer: 240, items: ["Edamame"] },
      { icon: "mix", text: "Soja, Honig und 3 Esslöffel Wasser in die Pfanne. Kurz glasieren.", items: ["Sojasauce", "Honig"] },
      { icon: "serve", text: "Gurke und Karotte in Stifte. Alles in Schalen, Sesam drüber.", items: ["Gurke", "Karotten", "Sesam"] }
    ]
  },
  {
    id: "dal", name: "Rote-Linsen-Dal mit Kokos & Spinat", origin: "Indien", flag: "IN", time: 25,
    colors: ["#E2A44C", "#F4EEDF", "#7FA37A", "#D9C3A0"],
    kid: "Mild würzen. Chili nur auf die Teller der Großen.",
    ingredients: [
      ["Rote Linsen", 250, "g", "dry"], ["Kokosmilch", 400, "ml", "dry"], ["Gehackte Tomaten", 1, "Dose", "dry"],
      ["Zwiebel", 1, "Stk", "veg"], ["Knoblauch", 2, "Zehe", "veg"], ["Ingwer", 1, "Stk", "veg"],
      ["Babyspinat", 100, "g", "veg"], ["Basmatireis", 200, "g", "dry"], ["Currypulver mild", 2, "TL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebel, Knoblauch und Ingwer fein hacken.", items: ["Zwiebel", "Knoblauch", "Ingwer"] },
      { icon: "pan", text: "Im Topf mit Curry 3 Minuten anschwitzen.", timer: 180, items: ["Curry"] },
      { icon: "boil", text: "Linsen, Tomaten, Kokosmilch und 300 ml Wasser dazu. 15 Minuten köcheln.", timer: 900, items: ["Linsen", "Tomaten", "Kokosmilch"] },
      { icon: "rice", text: "Parallel den Reis kochen.", timer: 720, items: ["Reis"] },
      { icon: "mix", text: "Spinat unterrühren, bis er zusammenfällt.", items: ["Spinat"] },
      { icon: "serve", text: "Mit Reis servieren.", items: [] }
    ]
  },
  {
    id: "orzo", name: "Griechische Hackbällchen mit Zitronen-Orzo", origin: "Griechenland", flag: "GR", time: 30,
    colors: ["#A8674A", "#F1E6C8", "#A9C29A", "#F7F3EA"],
    kid: "Bällchen halbieren. Feta ist salzig, fürs Kind nur ein paar Krümel.",
    ingredients: [
      ["Rinderhack", 400, "g", "meat"], ["Orzo (Kritharaki)", 250, "g", "dry"], ["Zucchini", 1, "Stk", "veg"],
      ["Zitrone", 1, "Stk", "veg"], ["Feta", 100, "g", "fresh"], ["Eier", 1, "Stk", "fresh"],
      ["Gemüsebrühe (salzarm)", 600, "ml", "pantry"], ["Oregano", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "mix", text: "Hack mit Ei und Oregano mischen. Kleine Bällchen formen.", items: ["Hack", "Ei", "Oregano"] },
      { icon: "pan", text: "Bällchen 6 Minuten rundum anbraten, rausnehmen.", timer: 360, items: [] },
      { icon: "chop", text: "Zucchini klein würfeln.", items: ["Zucchini"] },
      { icon: "pan", text: "Orzo, Zucchini und Brühe in die Pfanne. 10 Minuten köcheln.", timer: 600, items: ["Orzo", "Brühe"] },
      { icon: "serve", text: "Bällchen zurück. Zitrone drüber, Feta drauf.", items: ["Zitrone", "Feta"] }
    ]
  },
  {
    id: "shakshuka", name: "Shakshuka mit Feta & Fladenbrot", origin: "Nahost", flag: "IL", time: 25,
    colors: ["#C9553F", "#F6E7B8", "#8DAA82", "#E9D9BD"],
    kid: "Ei fürs Kind ganz durchgaren lassen. Brot zum Tunken ist perfekt.",
    ingredients: [
      ["Eier", 5, "Stk", "fresh"], ["Passierte Tomaten", 500, "g", "dry"], ["Rote Paprika", 2, "Stk", "veg"],
      ["Zwiebel", 1, "Stk", "veg"], ["Feta", 100, "g", "fresh"], ["Fladenbrot", 1, "Stk", "bread"],
      ["Petersilie", 1, "Bund", "veg"], ["Kreuzkümmel", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Paprika und Zwiebel in Streifen schneiden.", items: ["Paprika", "Zwiebel"] },
      { icon: "pan", text: "In der Pfanne 5 Minuten weich braten.", timer: 300, items: [] },
      { icon: "boil", text: "Tomaten und Kreuzkümmel dazu. 5 Minuten köcheln.", timer: 300, items: ["Tomaten", "Kreuzkümmel"] },
      { icon: "pan", text: "Mulden machen, Eier hinein. Deckel drauf, 8 Minuten.", timer: 480, items: ["Eier"] },
      { icon: "serve", text: "Feta und Petersilie drüber. Mit Brot servieren.", items: ["Feta", "Petersilie", "Brot"] }
    ]
  },
  {
    id: "quesadilla", name: "Süßkartoffel-Bohnen-Quesadillas", origin: "Mexiko", flag: "MX", time: 25,
    colors: ["#E58F4E", "#F2D98B", "#7E9E6E", "#F4EDE0"],
    kid: "In schmale Streifen schneiden. Das ideale Fingerfood.",
    ingredients: [
      ["Süßkartoffel", 400, "g", "veg"], ["Kidneybohnen", 1, "Dose", "dry"], ["Mais", 1, "Dose", "dry"],
      ["Weizentortillas", 6, "Stk", "bread"], ["Geriebener Käse", 150, "g", "fresh"], ["Avocado", 1, "Stk", "veg"],
      ["Limette", 1, "Stk", "veg"], ["Kreuzkümmel", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Süßkartoffel schälen und sehr klein würfeln.", items: ["Süßkartoffel"] },
      { icon: "pan", text: "Mit etwas Wasser und Deckel 8 Minuten weich dünsten.", timer: 480, items: [] },
      { icon: "mix", text: "Bohnen und Mais dazu, alles grob zerdrücken.", items: ["Bohnen", "Mais", "Kreuzkümmel"] },
      { icon: "pan", text: "Auf Tortilla streichen, Käse drauf, zuklappen. Je Seite 3 Minuten braten.", timer: 360, items: ["Tortillas", "Käse"] },
      { icon: "mix", text: "Avocado mit Limette zerdrücken.", items: ["Avocado", "Limette"] },
      { icon: "serve", text: "In Dreiecke schneiden und dippen.", items: [] }
    ]
  },
  {
    id: "gnocchi", name: "Blech-Gnocchi mit Ofengemüse", origin: "Italien", flag: "IT", time: 25,
    colors: ["#E4C27A", "#D9533F", "#90AE7F", "#F6F1E6"],
    kid: "Cherrytomaten und Mozzarella-Kugeln immer vierteln (Verschluckgefahr).",
    ingredients: [
      ["Gnocchi", 800, "g", "fresh"], ["Cherrytomaten", 250, "g", "veg"], ["Zucchini", 1, "Stk", "veg"],
      ["Gelbe Paprika", 1, "Stk", "veg"], ["Mini-Mozzarella", 125, "g", "fresh"], ["Basilikum", 1, "Topf", "veg"],
      ["Olivenöl", 3, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 220 Grad. Zucchini und Paprika würfeln.", items: ["Zucchini", "Paprika"] },
      { icon: "mix", text: "Gnocchi, Gemüse und Tomaten mit Öl aufs Blech.", items: ["Gnocchi", "Tomaten", "Öl"] },
      { icon: "oven", text: "20 Minuten backen. Nach der Hälfte einmal wenden.", timer: 1200, items: [] },
      { icon: "serve", text: "Mozzarella und Basilikum drüber.", items: ["Mozzarella", "Basilikum"] }
    ]
  },
  {
    id: "smorrebrod", name: "Smørrebrød-Teller zum Selberbauen", origin: "Dänemark", flag: "DK", time: 20,
    colors: ["#6B4F3A", "#F3D36B", "#9EC08F", "#EFA9A0"],
    kid: "Räucherlachs ist sehr salzig. Fürs Kind lieber Ei und Avocado. Kleine Quadrate schneiden.",
    ingredients: [
      ["Vollkorn-Roggenbrot", 1, "Pck", "bread"], ["Eier", 4, "Stk", "fresh"], ["Frischkäse", 150, "g", "fresh"],
      ["Räucherlachs", 100, "g", "meat"], ["Gurke", 1, "Stk", "veg"], ["Avocado", 1, "Stk", "veg"],
      ["Radieschen", 1, "Bund", "veg"], ["Kresse", 1, "Pck", "veg"]
    ],
    steps: [
      { icon: "boil", text: "Eier 9 Minuten hart kochen.", timer: 540, items: ["Eier"] },
      { icon: "chop", text: "Gurke, Radieschen und Avocado in dünne Scheiben.", items: ["Gurke", "Radieschen", "Avocado"] },
      { icon: "mix", text: "Brot mit Frischkäse bestreichen.", items: ["Brot", "Frischkäse"] },
      { icon: "serve", text: "Alles auf einen Teller. Jeder belegt selbst.", items: ["Lachs", "Kresse"] }
    ]
  },
  {
    id: "thai", name: "Thai-Hähnchenbällchen mit Kokos-Limette", origin: "Thailand", flag: "TH", time: 30,
    colors: ["#D6B48A", "#F5F0E4", "#6E9E62", "#E8E0B0"],
    kid: "Bällchen halbieren. Brokkoli-Röschen sind tolle kleine Bäume zum Greifen.",
    ingredients: [
      ["Hähnchen- oder Putenhack", 400, "g", "meat"], ["Zucchini", 1, "Stk", "veg"], ["Frühlingszwiebeln", 2, "Stk", "veg"],
      ["Ingwer", 1, "Stk", "veg"], ["Jasminreis", 250, "g", "dry"], ["Brokkoli", 1, "Stk", "veg"],
      ["Kokosmilch", 200, "ml", "dry"], ["Limette", 1, "Stk", "veg"]
    ],
    steps: [
      { icon: "rice", text: "Reis aufsetzen, 15 Minuten.", timer: 900, items: ["Reis"] },
      { icon: "chop", text: "Zucchini raspeln und gut ausdrücken. Lauchzwiebel und Ingwer fein hacken.", items: ["Zucchini", "Frühlingszwiebel", "Ingwer"] },
      { icon: "mix", text: "Mit dem Hack mischen und kleine Bällchen formen.", items: ["Hack"] },
      { icon: "pan", text: "Bällchen 10 Minuten rundum braten.", timer: 600, items: [] },
      { icon: "boil", text: "Brokkoli 5 Minuten dämpfen.", timer: 300, items: ["Brokkoli"] },
      { icon: "serve", text: "Kokosmilch mit Limettensaft in die Pfanne. Alles zusammen servieren.", items: ["Kokosmilch", "Limette"] }
    ]
  },
  {
    id: "pajeon", name: "Gemüse-Pfannkuchen mit knusprigem Tofu", origin: "Korea", flag: "KR", time: 30,
    colors: ["#E7C27B", "#88A96F", "#E58B5A", "#F4EFE4"],
    kid: "In Streifen schneiden. Dip mit Wasser verdünnen.",
    ingredients: [
      ["Mehl", 150, "g", "pantry"], ["Eier", 2, "Stk", "fresh"], ["Frühlingszwiebeln", 1, "Bund", "veg"],
      ["Karotten", 2, "Stk", "veg"], ["Zucchini", 1, "Stk", "veg"], ["Tofu natur", 200, "g", "fresh"],
      ["Sojasauce (salzreduziert)", 2, "EL", "pantry"], ["Sesamöl", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Karotte, Zucchini und Lauchzwiebeln in feine Streifen.", items: ["Karotten", "Zucchini", "Frühlingszwiebeln"] },
      { icon: "mix", text: "Mehl, Eier und 200 ml Wasser verrühren. Gemüse unterheben.", items: ["Mehl", "Eier"] },
      { icon: "pan", text: "Teig in die Pfanne. Je Seite 4 Minuten goldbraun braten.", timer: 480, items: [] },
      { icon: "pan", text: "Tofu würfeln und knusprig braten.", timer: 360, items: ["Tofu"] },
      { icon: "serve", text: "Soja mit Wasser und Sesamöl als Dip. In Stücke schneiden.", items: ["Sojasauce", "Sesamöl"] }
    ]
  },
  {
    id: "couscous", name: "Kichererbsen-Couscous mit Aprikosen", origin: "Marokko", flag: "MA", time: 20,
    colors: ["#E6C37E", "#D98A4B", "#8DAE85", "#F6F0E2"],
    kid: "Aprikosen klein schneiden, Kichererbsen leicht zerdrücken.",
    ingredients: [
      ["Couscous", 250, "g", "dry"], ["Kichererbsen", 1, "Dose", "dry"], ["Karotten", 2, "Stk", "veg"],
      ["Zucchini", 1, "Stk", "veg"], ["Getrocknete Aprikosen", 60, "g", "dry"], ["Naturjoghurt", 150, "g", "fresh"],
      ["Petersilie", 1, "Bund", "veg"], ["Gemüsebrühe (salzarm)", 300, "ml", "pantry"], ["Zimt", 0.5, "TL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Karotten, Zucchini und Aprikosen klein würfeln.", items: ["Karotten", "Zucchini", "Aprikosen"] },
      { icon: "pan", text: "Gemüse mit Zimt 6 Minuten anbraten.", timer: 360, items: ["Zimt"] },
      { icon: "pan", text: "Kichererbsen und Aprikosen dazu, 4 Minuten.", timer: 240, items: ["Kichererbsen"] },
      { icon: "rice", text: "Couscous mit heißer Brühe übergießen. 5 Minuten quellen.", timer: 300, items: ["Couscous", "Brühe"] },
      { icon: "serve", text: "Alles mischen. Joghurt und Petersilie drauf.", items: ["Joghurt", "Petersilie"] }
    ]
  },
  {
    id: "lohikeitto", name: "Cremige Lachssuppe Lohikeitto", origin: "Finnland", flag: "FI", time: 30,
    colors: ["#F0B79A", "#F6F2E8", "#E2A458", "#9DB89A"],
    kid: "Suppe etwas abkühlen lassen. Brot zum Tunken dazu.",
    ingredients: [
      ["Lachsfilet", 350, "g", "meat"], ["Kartoffeln", 500, "g", "veg"], ["Karotten", 2, "Stk", "veg"],
      ["Lauch", 1, "Stk", "veg"], ["Sahne", 200, "ml", "fresh"], ["Dill", 1, "Bund", "veg"],
      ["Vollkorn-Roggenbrot", 1, "Pck", "bread"], ["Gemüsebrühe (salzarm)", 800, "ml", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Lauch in Ringe, Kartoffeln und Karotten würfeln.", items: ["Lauch", "Kartoffeln", "Karotten"] },
      { icon: "pan", text: "Lauch im Topf 3 Minuten anschwitzen.", timer: 180, items: [] },
      { icon: "boil", text: "Gemüse und Brühe dazu. 12 Minuten köcheln.", timer: 720, items: ["Brühe"] },
      { icon: "boil", text: "Lachs würfeln, in die Suppe. 5 Minuten ziehen lassen.", timer: 300, items: ["Lachs"] },
      { icon: "serve", text: "Sahne und Dill einrühren. Mit Brot servieren.", items: ["Sahne", "Dill", "Brot"] }
    ]
  },
  {
    id: "erbsenpasta", name: "Erbsen-Ricotta-Pasta mit Zitrone", origin: "Italien", flag: "IT", time: 15,
    colors: ["#E9D7A0", "#9FC57F", "#F7F4EC", "#E6D45E"],
    kid: "Erbsen für ganz Kleine kurz zerdrücken.",
    ingredients: [
      ["Vollkorn-Pasta", 300, "g", "dry"], ["Erbsen", 250, "g", "frozen"], ["Ricotta", 250, "g", "fresh"],
      ["Zitrone", 1, "Stk", "veg"], ["Parmesan", 40, "g", "fresh"], ["Babyspinat", 80, "g", "veg"]
    ],
    steps: [
      { icon: "boil", text: "Pasta kochen, etwa 10 Minuten.", timer: 600, items: ["Pasta"] },
      { icon: "boil", text: "Die letzten 3 Minuten Erbsen mitkochen.", timer: 180, items: ["Erbsen"] },
      { icon: "mix", text: "Ricotta, Zitronenschale und Parmesan mit etwas Nudelwasser verrühren.", items: ["Ricotta", "Zitrone", "Parmesan"] },
      { icon: "serve", text: "Pasta untermischen, Spinat dazu. Fertig.", items: ["Spinat"] }
    ]
  },
  {
    id: "tortilla", name: "Spanische Kartoffel-Tortilla mit Salat", origin: "Spanien", flag: "ES", time: 30,
    colors: ["#F0CF73", "#E0A05C", "#93B489", "#D8533F"],
    kid: "Ei ganz durchgaren. Tortilla in kleine Würfel, Tomaten vierteln.",
    ingredients: [
      ["Eier", 6, "Stk", "fresh"], ["Kartoffeln", 400, "g", "veg"], ["Rote Paprika", 1, "Stk", "veg"],
      ["Zwiebel", 1, "Stk", "veg"], ["Gurke", 1, "Stk", "veg"], ["Cherrytomaten", 250, "g", "veg"],
      ["Olivenöl", 3, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Kartoffeln in dünne Scheiben, Zwiebel und Paprika würfeln.", items: ["Kartoffeln", "Zwiebel", "Paprika"] },
      { icon: "pan", text: "Mit Öl in die Pfanne. Deckel drauf, 12 Minuten weich garen.", timer: 720, items: ["Olivenöl"] },
      { icon: "mix", text: "Eier verquirlen und darüber gießen.", items: ["Eier"] },
      { icon: "pan", text: "Mit Deckel 6 Minuten stocken lassen. Mit Teller wenden, 3 Minuten.", timer: 540, items: [] },
      { icon: "serve", text: "Gurke und Tomaten als Salat. In Stücke schneiden.", items: ["Gurke", "Tomaten"] }
    ]
  }
  ,{
    id: "frittata", name: "Mini-Frittatas aus dem Muffinblech", origin: "England", flag: "GB", time: 25,
    colors: ["#F0CF6B", "#8FB07E", "#D9533F", "#F6F1E4"],
    kid: "Perfekt zum Selberhalten. Abkühlen lassen, innen wird es heiß.",
    ingredients: [
      ["Eier", 6, "Stk", "fresh"], ["Milch", 50, "ml", "fresh"], ["Rote Paprika", 1, "Stk", "veg"],
      ["Babyspinat", 60, "g", "veg"], ["Geriebener Käse", 80, "g", "fresh"], ["Vollkorn-Roggenbrot", 1, "Pck", "bread"],
      ["Gurke", 1, "Stk", "veg"], ["Olivenöl", 1, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 190 Grad. Paprika klein würfeln, Spinat hacken.", items: ["Paprika", "Spinat"] },
      { icon: "mix", text: "Eier mit Milch und Käse verquirlen, Gemüse unterrühren.", items: ["Eier", "Milch", "Käse"] },
      { icon: "oven", text: "Muffinblech einölen, Masse einfüllen. 18 Minuten backen.", timer: 1080, items: ["Olivenöl"] },
      { icon: "serve", text: "Mit Brot und Gurkensticks servieren.", items: ["Brot", "Gurke"] }
    ]
  },
  {
    id: "fischstaebchen", name: "Selbstgemachte Fischstäbchen mit Erbsenpüree", origin: "England", flag: "GB", time: 30,
    colors: ["#E2B566", "#9CC07F", "#F4F0E6", "#E8C9A0"],
    kid: "Fisch vorher auf Gräten prüfen. Püree eignet sich super zum Löffeln.",
    ingredients: [
      ["Kabeljaufilet", 400, "g", "meat"], ["Panko-Brösel", 80, "g", "dry"], ["Eier", 1, "Stk", "fresh"],
      ["Erbsen", 300, "g", "frozen"], ["Kartoffeln", 400, "g", "veg"], ["Zitrone", 1, "Stk", "veg"],
      ["Mehl", 2, "EL", "pantry"], ["Olivenöl", 3, "EL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Kartoffeln würfeln und 15 Minuten kochen.", timer: 900, items: ["Kartoffeln"] },
      { icon: "chop", text: "Fisch in dicke Streifen schneiden.", items: ["Kabeljau"] },
      { icon: "mix", text: "Streifen in Mehl, dann Ei, dann Panko wenden.", items: ["Mehl", "Ei", "Panko"] },
      { icon: "pan", text: "In Öl je Seite 3 Minuten goldbraun braten.", timer: 360, items: ["Olivenöl"] },
      { icon: "boil", text: "Erbsen die letzten 4 Minuten zu den Kartoffeln geben.", timer: 240, items: ["Erbsen"] },
      { icon: "serve", text: "Kartoffeln und Erbsen zerstampfen. Mit Zitrone servieren.", items: ["Zitrone"] }
    ]
  },
  {
    id: "friedrice", name: "Bunter Hähnchen-Fried-Rice", origin: "China", flag: "CN", time: 20,
    colors: ["#E8D9A8", "#E58B5A", "#86AC74", "#F5F0E4"],
    kid: "Kinderportion vor der Sojasauce abnehmen.",
    ingredients: [
      ["Express-Reis (vorgegart)", 2, "Beutel", "dry"], ["Hähnchenbrust", 300, "g", "meat"], ["Eier", 2, "Stk", "fresh"],
      ["Erbsen", 150, "g", "frozen"], ["Karotten", 2, "Stk", "veg"], ["Frühlingszwiebeln", 2, "Stk", "veg"],
      ["Sojasauce (salzreduziert)", 1, "EL", "pantry"], ["Sesamöl", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Hähnchen und Karotten klein würfeln, Lauchzwiebeln in Ringe.", items: ["Hähnchen", "Karotten", "Frühlingszwiebeln"] },
      { icon: "pan", text: "Hähnchen 5 Minuten braten, Karotten und Erbsen dazu, 3 Minuten.", timer: 480, items: ["Erbsen"] },
      { icon: "pan", text: "Alles zur Seite schieben, Eier in die Lücke und verrühren.", items: ["Eier"] },
      { icon: "rice", text: "Reis dazu und 4 Minuten mitbraten.", timer: 240, items: ["Reis"] },
      { icon: "serve", text: "Sesamöl, Lauchzwiebel und etwas Soja für die Großen.", items: ["Sesamöl", "Sojasauce"] }
    ]
  },
  {
    id: "kuerbissuppe", name: "Kürbis-Kokos-Suppe mit Linsen", origin: "Thailand", flag: "TH", time: 30,
    colors: ["#E7934A", "#F3E9D2", "#8FAE84", "#EFC38A"],
    kid: "Etwas abkühlen lassen. Brotstreifen zum Tunken dazu.",
    ingredients: [
      ["Hokkaido-Kürbis", 800, "g", "veg"], ["Kokosmilch", 400, "ml", "dry"], ["Rote Linsen", 100, "g", "dry"],
      ["Zwiebel", 1, "Stk", "veg"], ["Ingwer", 1, "Stk", "veg"], ["Fladenbrot", 1, "Stk", "bread"],
      ["Gemüsebrühe (salzarm)", 600, "ml", "pantry"], ["Currypulver mild", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Kürbis mit Schale würfeln. Zwiebel und Ingwer hacken.", items: ["Kürbis", "Zwiebel", "Ingwer"] },
      { icon: "pan", text: "Zwiebel, Ingwer und Curry 3 Minuten anschwitzen.", timer: 180, items: ["Curry"] },
      { icon: "boil", text: "Kürbis, Linsen und Brühe dazu. 18 Minuten köcheln.", timer: 1080, items: ["Linsen", "Brühe"] },
      { icon: "mix", text: "Kokosmilch dazu und alles fein pürieren.", items: ["Kokosmilch"] },
      { icon: "serve", text: "Mit Brot servieren.", items: ["Brot"] }
    ]
  },
  {
    id: "falafel", name: "Ofen-Falafel mit Joghurt-Dip", origin: "Libanon", flag: "LB", time: 30,
    colors: ["#B98A4E", "#7FA36E", "#F4EFE3", "#E9D7B0"],
    kid: "Bällchen halbieren oder leicht zerdrücken.",
    ingredients: [
      ["Kichererbsen", 2, "Dose", "dry"], ["Haferflocken", 50, "g", "dry"], ["Petersilie", 1, "Bund", "veg"],
      ["Knoblauch", 1, "Zehe", "veg"], ["Naturjoghurt", 200, "g", "fresh"], ["Gurke", 1, "Stk", "veg"],
      ["Fladenbrot", 1, "Stk", "bread"], ["Kreuzkümmel", 1, "TL", "pantry"], ["Olivenöl", 3, "EL", "pantry"]
    ],
    steps: [
      { icon: "mix", text: "Ofen auf 200 Grad. Kichererbsen, Haferflocken, Petersilie, Knoblauch und Kreuzkümmel grob pürieren.", items: ["Kichererbsen", "Haferflocken", "Petersilie"] },
      { icon: "mix", text: "Kleine Bällchen formen und mit Öl aufs Blech.", items: ["Olivenöl"] },
      { icon: "oven", text: "20 Minuten backen, einmal wenden.", timer: 1200, items: [] },
      { icon: "chop", text: "Gurke raspeln und mit Joghurt verrühren.", items: ["Gurke", "Joghurt"] },
      { icon: "serve", text: "Mit Fladenbrot und Dip servieren.", items: ["Fladenbrot"] }
    ]
  },
  {
    id: "koettbullar", name: "Köttbullar mit Kartoffelpüree", origin: "Schweden", flag: "SE", time: 30,
    colors: ["#9C6B4A", "#F1E6C8", "#C2414B", "#9DB59A"],
    kid: "Bällchen halbieren. Preiselbeeren nur ein Klecks.",
    ingredients: [
      ["Rinderhack", 400, "g", "meat"], ["Eier", 1, "Stk", "fresh"], ["Kartoffeln", 700, "g", "veg"],
      ["Milch", 150, "ml", "fresh"], ["Gurke", 1, "Stk", "veg"], ["Preiselbeeren", 1, "Glas", "dry"],
      ["Semmelbrösel", 3, "EL", "pantry"], ["Butter", 20, "g", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Kartoffeln würfeln und 15 Minuten kochen.", timer: 900, items: ["Kartoffeln"] },
      { icon: "mix", text: "Hack, Ei und Brösel mischen. Kleine Bällchen formen.", items: ["Hack", "Ei", "Brösel"] },
      { icon: "pan", text: "Bällchen 10 Minuten rundum braten.", timer: 600, items: [] },
      { icon: "mix", text: "Kartoffeln mit Milch und Butter stampfen.", items: ["Milch", "Butter"] },
      { icon: "serve", text: "Mit Gurkenscheiben und Preiselbeeren servieren.", items: ["Gurke", "Preiselbeeren"] }
    ]
  },
  {
    id: "sommerrolle", name: "Sommerrollen-Bowl mit Mango", origin: "Vietnam", flag: "VN", time: 20,
    colors: ["#F2C14E", "#F5F1E8", "#7FAE7A", "#E58B6A"],
    kid: "Nudeln kurz schneiden. Erdnuss-Dip nur, wenn keine Allergie bekannt ist.",
    ingredients: [
      ["Reisnudeln", 200, "g", "dry"], ["Hähnchenbrust", 300, "g", "meat"], ["Mango", 1, "Stk", "veg"],
      ["Gurke", 1, "Stk", "veg"], ["Karotten", 2, "Stk", "veg"], ["Minze", 1, "Topf", "veg"],
      ["Limette", 1, "Stk", "veg"], ["Erdnussmus", 2, "EL", "dry"]
    ],
    steps: [
      { icon: "boil", text: "Reisnudeln mit heißem Wasser übergießen. 5 Minuten ziehen lassen.", timer: 300, items: ["Reisnudeln"] },
      { icon: "pan", text: "Hähnchen in Streifen schneiden und 7 Minuten braten.", timer: 420, items: ["Hähnchen"] },
      { icon: "chop", text: "Mango, Gurke und Karotte in feine Streifen.", items: ["Mango", "Gurke", "Karotten"] },
      { icon: "mix", text: "Erdnussmus mit Limette und etwas Wasser verrühren.", items: ["Erdnussmus", "Limette"] },
      { icon: "serve", text: "Alles in Schalen, Minze drüber.", items: ["Minze"] }
    ]
  },
  {
    id: "gemuesepasta", name: "Pasta mit versteckter Gemüsesoße", origin: "Italien", flag: "IT", time: 25,
    colors: ["#D9533F", "#E9C97A", "#8FAE7F", "#F6F0E4"],
    kid: "Die Soße schmeckt nach Tomate. Das Gemüse sieht man nicht.",
    ingredients: [
      ["Vollkorn-Pasta", 300, "g", "dry"], ["Passierte Tomaten", 500, "g", "dry"], ["Rote Paprika", 1, "Stk", "veg"],
      ["Karotten", 2, "Stk", "veg"], ["Zucchini", 1, "Stk", "veg"], ["Zwiebel", 1, "Stk", "veg"],
      ["Parmesan", 40, "g", "fresh"], ["Olivenöl", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebel, Paprika, Karotten und Zucchini grob würfeln.", items: ["Zwiebel", "Paprika", "Karotten", "Zucchini"] },
      { icon: "pan", text: "Gemüse 5 Minuten in Öl anbraten.", timer: 300, items: ["Olivenöl"] },
      { icon: "boil", text: "Tomaten dazu, 12 Minuten köcheln. Parallel Pasta kochen.", timer: 720, items: ["Tomaten", "Pasta"] },
      { icon: "mix", text: "Soße fein pürieren.", items: [] },
      { icon: "serve", text: "Mit Pasta mischen, Parmesan drüber.", items: ["Parmesan"] }
    ]
  },
  {
    id: "souvlaki", name: "Hähnchen-Souvlaki mit Tzatziki", origin: "Griechenland", flag: "GR", time: 25,
    colors: ["#D9A066", "#F4F1E8", "#86A97A", "#E35D4A"],
    kid: "Fleisch in kleine Stücke, Knoblauch im Tzatziki sparsam.",
    ingredients: [
      ["Hähnchenbrust", 400, "g", "meat"], ["Griechischer Joghurt", 250, "g", "fresh"], ["Gurke", 1, "Stk", "veg"],
      ["Cherrytomaten", 250, "g", "veg"], ["Fladenbrot", 1, "Stk", "bread"], ["Zitrone", 1, "Stk", "veg"],
      ["Knoblauch", 1, "Zehe", "veg"], ["Oregano", 1, "TL", "pantry"], ["Olivenöl", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Hähnchen würfeln, mit Öl, Zitrone und Oregano mischen.", items: ["Hähnchen", "Zitrone", "Oregano"] },
      { icon: "pan", text: "8 Minuten rundum braten.", timer: 480, items: [] },
      { icon: "mix", text: "Gurke raspeln, mit Joghurt und wenig Knoblauch verrühren.", items: ["Gurke", "Joghurt", "Knoblauch"] },
      { icon: "oven", text: "Fladenbrot kurz im Ofen oder Toaster wärmen.", items: ["Fladenbrot"] },
      { icon: "serve", text: "Mit Tomaten servieren. Tomaten fürs Kind vierteln.", items: ["Tomaten"] }
    ]
  },
  {
    id: "laibchen", name: "Gemüselaibchen mit Erdäpfel-Gurkensalat", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#C9A86A", "#8FB07E", "#F2EDE0", "#E7B07A"],
    kid: "Laibchen sind ideales Fingerfood. Salat ohne Essig für die Kleinen.",
    ingredients: [
      ["Zucchini", 1, "Stk", "veg"], ["Karotten", 2, "Stk", "veg"], ["Haferflocken", 80, "g", "dry"],
      ["Eier", 2, "Stk", "fresh"], ["Geriebener Käse", 60, "g", "fresh"], ["Kartoffeln", 500, "g", "veg"],
      ["Gurke", 1, "Stk", "veg"], ["Sauerrahm", 100, "g", "fresh"], ["Olivenöl", 3, "EL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Kartoffeln würfeln und 12 Minuten kochen.", timer: 720, items: ["Kartoffeln"] },
      { icon: "chop", text: "Zucchini und Karotten raspeln, Zucchini gut ausdrücken.", items: ["Zucchini", "Karotten"] },
      { icon: "mix", text: "Mit Haferflocken, Eiern und Käse mischen. Laibchen formen.", items: ["Haferflocken", "Eier", "Käse"] },
      { icon: "pan", text: "Je Seite 4 Minuten goldbraun braten.", timer: 480, items: ["Olivenöl"] },
      { icon: "serve", text: "Kartoffeln mit Gurke und Sauerrahm zu Salat mischen.", items: ["Gurke", "Sauerrahm"] }
    ]
  },
  {
    id: "kaiserschmarrn", name: "Vollkorn-Kaiserschmarrn mit Apfelmus", origin: "Österreich", flag: "AT", time: 25,
    colors: ["#E6C27A", "#F4EEDC", "#D99A6C", "#B5C99A"],
    kid: "Ohne Zuckerguss. Apfelmus macht ihn süß genug.",
    ingredients: [
      ["Eier", 4, "Stk", "fresh"], ["Milch", 300, "ml", "fresh"], ["Vollkornmehl", 200, "g", "dry"],
      ["Apfelmus ungesüßt", 1, "Glas", "dry"], ["Äpfel", 2, "Stk", "veg"], ["Butter", 30, "g", "pantry"],
      ["Rosinen", 30, "g", "dry"]
    ],
    steps: [
      { icon: "mix", text: "Eier, Milch und Mehl zu glattem Teig verrühren.", items: ["Eier", "Milch", "Mehl"] },
      { icon: "pan", text: "Butter in die Pfanne, Teig hinein. 5 Minuten stocken lassen.", timer: 300, items: ["Butter"] },
      { icon: "pan", text: "Wenden, mit zwei Gabeln zerreißen, Rosinen dazu. 4 Minuten braten.", timer: 240, items: ["Rosinen"] },
      { icon: "chop", text: "Äpfel in Spalten schneiden.", items: ["Äpfel"] },
      { icon: "serve", text: "Mit Apfelmus und Apfelspalten servieren.", items: ["Apfelmus"] }
    ]
  }
  ,{
    id: "blechhuhn", name: "Blech-Hähnchen mit Ofengemüse & Kräuterjoghurt", origin: "Deutschland", flag: "DE", time: 30,
    colors: ["#D9A066", "#E58B5A", "#8FAE7F", "#F4EFE4"],
    kid: "Hähnchen klein schneiden, Gemüse weich gebacken ist perfektes Fingerfood.",
    ingredients: [
      ["Hähnchenbrust", 400, "g", "meat"], ["Kartoffeln", 500, "g", "veg"], ["Karotten", 3, "Stk", "veg"],
      ["Rote Zwiebel", 1, "Stk", "veg"], ["Brokkoli", 1, "Stk", "veg"], ["Naturjoghurt", 200, "g", "fresh"],
      ["Schnittlauch", 1, "Bund", "veg"], ["Paprikapulver edelsüß", 1, "TL", "pantry"], ["Olivenöl", 3, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 220 Grad. Kartoffeln und Karotten klein würfeln.", items: ["Kartoffeln", "Karotten"] },
      { icon: "oven", text: "Mit Öl aufs Blech. 10 Minuten vorbacken.", timer: 600, items: ["Olivenöl"] },
      { icon: "mix", text: "Hähnchen würfeln, mit Paprika und Öl mischen. Brokkoli und Zwiebel klein schneiden.", items: ["Hähnchen", "Paprika", "Brokkoli"] },
      { icon: "oven", text: "Alles aufs Blech. Noch 15 Minuten backen.", timer: 900, items: [] },
      { icon: "serve", text: "Joghurt mit Schnittlauch verrühren und dazu servieren.", items: ["Joghurt", "Schnittlauch"] }
    ]
  },
  {
    id: "eiernockerl", name: "Eiernockerl mit grünem Salat", origin: "Österreich", flag: "AT", time: 20,
    colors: ["#F0D27A", "#9FC57F", "#F6F1E4", "#E8C9A0"],
    kid: "Ei gut durchgaren. Nockerl sind weich und leicht zu kauen.",
    ingredients: [
      ["Mehl", 300, "g", "pantry"], ["Eier", 6, "Stk", "fresh"], ["Milch", 200, "ml", "fresh"],
      ["Kopfsalat", 1, "Stk", "veg"], ["Schnittlauch", 1, "Bund", "veg"], ["Butter", 30, "g", "pantry"],
      ["Apfelessig", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "mix", text: "Mehl, 3 Eier und Milch zu zähem Teig verrühren.", items: ["Mehl", "Eier", "Milch"] },
      { icon: "boil", text: "Mit einem Löffel kleine Nockerl ins kochende Wasser streichen. 3 Minuten kochen.", timer: 180, items: [] },
      { icon: "pan", text: "Nockerl in Butter schwenken, 3 Eier verquirlt drüber. Rühren, bis alles gestockt ist.", timer: 240, items: ["Butter", "Eier"] },
      { icon: "chop", text: "Salat waschen, mit Essig und Öl anmachen.", items: ["Salat", "Essig"] },
      { icon: "serve", text: "Mit Schnittlauch bestreuen.", items: ["Schnittlauch"] }
    ]
  },
  {
    id: "macncheese", name: "Brokkoli-Mac-&-Cheese", origin: "USA", flag: "US", time: 20,
    colors: ["#F0C75E", "#7FA36E", "#F6F1E4", "#E8B86A"],
    kid: "Brokkoli in kleine Röschen schneiden. Ohne zusätzliches Salz.",
    ingredients: [
      ["Hörnchennudeln", 300, "g", "dry"], ["Brokkoli", 1, "Stk", "veg"], ["Milch", 300, "ml", "fresh"],
      ["Geriebener Bergkäse", 150, "g", "fresh"], ["Mehl", 2, "EL", "pantry"], ["Butter", 20, "g", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Nudeln kochen. Die letzten 4 Minuten Brokkoli-Röschen dazu.", timer: 600, items: ["Nudeln", "Brokkoli"] },
      { icon: "pan", text: "Butter schmelzen, Mehl einrühren, 1 Minute anschwitzen.", timer: 60, items: ["Butter", "Mehl"] },
      { icon: "mix", text: "Milch nach und nach einrühren, 3 Minuten köcheln, Käse schmelzen.", timer: 180, items: ["Milch", "Käse"] },
      { icon: "serve", text: "Nudeln und Brokkoli untermischen.", items: [] }
    ]
  },
  {
    id: "kokoscurry", name: "Hähnchen-Kokos-Curry mit Süßkartoffel", origin: "Sri Lanka", flag: "LK", time: 30,
    colors: ["#E5A54A", "#F4EEDF", "#7FA37A", "#D98A4B"],
    kid: "Mild würzen, Chili nur für die Großen.",
    ingredients: [
      ["Hähnchenbrust", 400, "g", "meat"], ["Süßkartoffel", 400, "g", "veg"], ["Kokosmilch", 400, "ml", "dry"],
      ["Babyspinat", 100, "g", "veg"], ["Zwiebel", 1, "Stk", "veg"], ["Ingwer", 1, "Stk", "veg"],
      ["Basmatireis", 250, "g", "dry"], ["Currypulver mild", 2, "TL", "pantry"]
    ],
    steps: [
      { icon: "rice", text: "Reis aufsetzen, 15 Minuten.", timer: 900, items: ["Reis"] },
      { icon: "chop", text: "Zwiebel, Ingwer hacken. Süßkartoffel und Hähnchen klein würfeln.", items: ["Zwiebel", "Süßkartoffel", "Hähnchen"] },
      { icon: "pan", text: "Zwiebel, Ingwer und Hähnchen mit Curry 5 Minuten anbraten.", timer: 300, items: ["Curry"] },
      { icon: "boil", text: "Süßkartoffel und Kokosmilch dazu. 15 Minuten köcheln.", timer: 900, items: ["Kokosmilch"] },
      { icon: "serve", text: "Spinat unterrühren, mit Reis servieren.", items: ["Spinat"] }
    ]
  },
  {
    id: "udon", name: "Udon-Nudelsuppe mit Ei & Gemüse", origin: "Japan", flag: "JP", time: 20,
    colors: ["#F2E3C2", "#8FB08C", "#E8B86A", "#F6F2E8"],
    kid: "Nudeln mit der Schere klein schneiden. Brühe abkühlen lassen.",
    ingredients: [
      ["Udon-Nudeln", 3, "Pck", "dry"], ["Eier", 3, "Stk", "fresh"], ["Pak Choi", 2, "Stk", "veg"],
      ["Champignons", 200, "g", "veg"], ["Frühlingszwiebeln", 2, "Stk", "veg"], ["Gemüsebrühe (salzarm)", 1200, "ml", "pantry"],
      ["Sojasauce (salzreduziert)", 1, "EL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Eier 8 Minuten kochen, abschrecken und schälen.", timer: 480, items: ["Eier"] },
      { icon: "chop", text: "Pilze in Scheiben, Pak Choi und Lauchzwiebeln klein schneiden.", items: ["Champignons", "Pak Choi"] },
      { icon: "boil", text: "Brühe aufkochen, Pilze und Pak Choi 4 Minuten mitkochen.", timer: 240, items: ["Brühe"] },
      { icon: "boil", text: "Udon dazu, 3 Minuten ziehen lassen.", timer: 180, items: ["Udon"] },
      { icon: "serve", text: "In Schalen, halbe Eier drauf. Soja nur für die Großen.", items: ["Sojasauce"] }
    ]
  },
  {
    id: "burritobowl", name: "Burrito-Bowl mit Bohnen & Mais", origin: "Mexiko", flag: "MX", time: 25,
    colors: ["#E2A44C", "#7FA36E", "#C9553F", "#F4EFE4"],
    kid: "Bohnen leicht zerdrücken, Tomaten vierteln, alles getrennt auf den Teller.",
    ingredients: [
      ["Reis", 250, "g", "dry"], ["Schwarze Bohnen", 1, "Dose", "dry"], ["Mais", 1, "Dose", "dry"],
      ["Avocado", 1, "Stk", "veg"], ["Cherrytomaten", 250, "g", "veg"], ["Geriebener Käse", 100, "g", "fresh"],
      ["Sauerrahm", 100, "g", "fresh"], ["Limette", 1, "Stk", "veg"], ["Kreuzkümmel", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "rice", text: "Reis aufsetzen, 15 Minuten.", timer: 900, items: ["Reis"] },
      { icon: "pan", text: "Bohnen und Mais mit Kreuzkümmel 5 Minuten erwärmen.", timer: 300, items: ["Bohnen", "Mais"] },
      { icon: "chop", text: "Avocado und Tomaten würfeln.", items: ["Avocado", "Tomaten"] },
      { icon: "serve", text: "Alles in Schalen. Käse, Sauerrahm und Limette drauf.", items: ["Käse", "Sauerrahm", "Limette"] }
    ]
  },
  {
    id: "polenta", name: "Cremige Polenta mit Linsen-Tomaten-Ragout", origin: "Italien", flag: "IT", time: 25,
    colors: ["#F0CF73", "#C9553F", "#8FAE7F", "#F6F1E4"],
    kid: "Polenta ist weich und gut zu löffeln. Etwas abkühlen lassen.",
    ingredients: [
      ["Instant-Polenta", 200, "g", "dry"], ["Rote Linsen", 100, "g", "dry"], ["Passierte Tomaten", 500, "g", "dry"],
      ["Karotten", 2, "Stk", "veg"], ["Zwiebel", 1, "Stk", "veg"], ["Parmesan", 40, "g", "fresh"],
      ["Gemüsebrühe (salzarm)", 800, "ml", "pantry"], ["Olivenöl", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebel und Karotten fein würfeln.", items: ["Zwiebel", "Karotten"] },
      { icon: "pan", text: "In Öl 4 Minuten anschwitzen.", timer: 240, items: ["Olivenöl"] },
      { icon: "boil", text: "Linsen, Tomaten und 200 ml Wasser dazu. 15 Minuten köcheln.", timer: 900, items: ["Linsen", "Tomaten"] },
      { icon: "boil", text: "Brühe aufkochen, Polenta einrühren. 5 Minuten quellen lassen.", timer: 300, items: ["Polenta", "Brühe"] },
      { icon: "serve", text: "Parmesan in die Polenta, Ragout drüber.", items: ["Parmesan"] }
    ]
  },
  {
    id: "pitapizza", name: "Pita-Pizzen zum Selberbelegen", origin: "Italien", flag: "IT", time: 20,
    colors: ["#D9533F", "#F2E3C2", "#8FAE7F", "#E9C97A"],
    kid: "Selber belegen lassen! Oliven und Tomaten klein schneiden.",
    ingredients: [
      ["Pita-Brote", 6, "Stk", "bread"], ["Passierte Tomaten", 200, "g", "dry"], ["Mozzarella", 250, "g", "fresh"],
      ["Gelbe Paprika", 1, "Stk", "veg"], ["Champignons", 150, "g", "veg"], ["Kochschinken", 100, "g", "meat"],
      ["Rucola", 1, "Pck", "veg"], ["Oregano", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 220 Grad. Paprika, Pilze, Schinken und Mozzarella klein schneiden.", items: ["Paprika", "Champignons", "Schinken", "Mozzarella"] },
      { icon: "mix", text: "Pitas mit Tomaten bestreichen, Oregano drauf.", items: ["Pita", "Tomaten", "Oregano"] },
      { icon: "mix", text: "Jeder belegt seine eigene Pizza.", items: [] },
      { icon: "oven", text: "10 Minuten backen.", timer: 600, items: [] },
      { icon: "serve", text: "Rucola für die Großen drüber.", items: ["Rucola"] }
    ]
  },
  {
    id: "hummus", name: "Hummus-Teller mit Ofengemüse", origin: "Libanon", flag: "LB", time: 25,
    colors: ["#E8D7B0", "#D98A4B", "#7FA36E", "#F4EFE3"],
    kid: "Hummus ist ein toller Dip für Gemüsesticks und Brot.",
    ingredients: [
      ["Kichererbsen", 1, "Dose", "dry"], ["Tahin", 2, "EL", "dry"], ["Zitrone", 1, "Stk", "veg"],
      ["Zucchini", 1, "Stk", "veg"], ["Rote Paprika", 1, "Stk", "veg"], ["Karotten", 2, "Stk", "veg"],
      ["Fladenbrot", 1, "Stk", "bread"], ["Knoblauch", 1, "Zehe", "veg"], ["Olivenöl", 4, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 220 Grad. Gemüse in Stifte schneiden.", items: ["Zucchini", "Paprika", "Karotten"] },
      { icon: "oven", text: "Mit Öl aufs Blech, 18 Minuten backen.", timer: 1080, items: ["Olivenöl"] },
      { icon: "mix", text: "Kichererbsen, Tahin, Zitrone, Knoblauch und etwas Wasser cremig pürieren.", items: ["Kichererbsen", "Tahin", "Zitrone"] },
      { icon: "serve", text: "Hummus auf Teller streichen, Gemüse und Brot dazu.", items: ["Fladenbrot"] }
    ]
  },
  {
    id: "bacalhau", name: "Ofen-Kabeljau mit Tomaten & Kartoffeln", origin: "Portugal", flag: "PT", time: 30,
    colors: ["#F4EFE6", "#D9533F", "#E8C98A", "#8FAE7F"],
    kid: "Fisch auf Gräten prüfen und zerpflücken.",
    ingredients: [
      ["Kabeljaufilet", 400, "g", "meat"], ["Kartoffeln", 500, "g", "veg"], ["Cherrytomaten", 250, "g", "veg"],
      ["Rote Zwiebel", 1, "Stk", "veg"], ["Petersilie", 1, "Bund", "veg"], ["Zitrone", 1, "Stk", "veg"],
      ["Olivenöl", 3, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 210 Grad. Kartoffeln in dünne Scheiben, Zwiebel in Ringe.", items: ["Kartoffeln", "Zwiebel"] },
      { icon: "oven", text: "Mit Öl in eine Form, 12 Minuten backen.", timer: 720, items: ["Olivenöl"] },
      { icon: "mix", text: "Fisch und Tomaten drauflegen, Zitrone drüber.", items: ["Kabeljau", "Tomaten", "Zitrone"] },
      { icon: "oven", text: "Noch 14 Minuten backen.", timer: 840, items: [] },
      { icon: "serve", text: "Mit Petersilie bestreuen.", items: ["Petersilie"] }
    ]
  },
  {
    id: "erbsensuppe", name: "Erbsen-Minz-Suppe mit Käsetoast", origin: "England", flag: "GB", time: 20,
    colors: ["#9FC57F", "#F4EFE4", "#E8B86A", "#7FA36E"],
    kid: "Toast in Streifen schneiden, zum Tunken.",
    ingredients: [
      ["Erbsen", 600, "g", "frozen"], ["Kartoffeln", 200, "g", "veg"], ["Zwiebel", 1, "Stk", "veg"],
      ["Minze", 1, "Topf", "veg"], ["Vollkorntoast", 1, "Pck", "bread"], ["Geriebener Käse", 100, "g", "fresh"],
      ["Gemüsebrühe (salzarm)", 800, "ml", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebel und Kartoffel klein würfeln.", items: ["Zwiebel", "Kartoffeln"] },
      { icon: "boil", text: "Mit Brühe 10 Minuten kochen.", timer: 600, items: ["Brühe"] },
      { icon: "boil", text: "Erbsen dazu, 4 Minuten kochen.", timer: 240, items: ["Erbsen"] },
      { icon: "mix", text: "Mit Minzblättern fein pürieren.", items: ["Minze"] },
      { icon: "oven", text: "Toast mit Käse belegen und 5 Minuten überbacken.", timer: 300, items: ["Toast", "Käse"] }
    ]
  },
  {
    id: "padthai", name: "Milder Pad Thai mit Tofu", origin: "Thailand", flag: "TH", time: 25,
    colors: ["#E8C98A", "#E58B5A", "#86AC74", "#F5F0E4"],
    kid: "Nudeln kurz schneiden. Erdnüsse nur gehackt und ohne Allergie.",
    ingredients: [
      ["Reisbandnudeln", 250, "g", "dry"], ["Tofu natur", 200, "g", "fresh"], ["Eier", 2, "Stk", "fresh"],
      ["Karotten", 2, "Stk", "veg"], ["Sojasprossen", 150, "g", "veg"], ["Frühlingszwiebeln", 2, "Stk", "veg"],
      ["Limette", 1, "Stk", "veg"], ["Erdnüsse ungesalzen", 40, "g", "dry"], ["Sojasauce (salzreduziert)", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Nudeln mit heißem Wasser übergießen, 8 Minuten ziehen lassen.", timer: 480, items: ["Reisnudeln"] },
      { icon: "pan", text: "Tofu würfeln und 6 Minuten knusprig braten.", timer: 360, items: ["Tofu"] },
      { icon: "pan", text: "Karotten-Streifen dazu, Eier hinein und verrühren.", items: ["Karotten", "Eier"] },
      { icon: "mix", text: "Nudeln, Sprossen, Soja und Limette untermischen.", items: ["Sprossen", "Sojasauce", "Limette"] },
      { icon: "serve", text: "Gehackte Erdnüsse und Lauchzwiebel drüber.", items: ["Erdnüsse"] }
    ]
  },
  {
    id: "pyttipanna", name: "Pyttipanna mit Ei", origin: "Schweden", flag: "SE", time: 30,
    colors: ["#E2B566", "#C2414B", "#F2D98B", "#9DB59A"],
    kid: "Ei für das Kind beidseitig braten, bis das Eigelb fest ist.",
    ingredients: [
      ["Kartoffeln", 600, "g", "veg"], ["Kochschinken", 150, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"],
      ["Rote Paprika", 1, "Stk", "veg"], ["Eier", 3, "Stk", "fresh"], ["Rote Bete (vorgegart)", 1, "Pck", "veg"],
      ["Olivenöl", 3, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Kartoffeln klein würfeln, Zwiebel, Paprika und Schinken auch.", items: ["Kartoffeln", "Zwiebel", "Paprika", "Schinken"] },
      { icon: "pan", text: "Kartoffeln mit Deckel 12 Minuten braten, öfter wenden.", timer: 720, items: ["Olivenöl"] },
      { icon: "pan", text: "Zwiebel, Paprika und Schinken dazu, 6 Minuten.", timer: 360, items: [] },
      { icon: "pan", text: "Eier daneben braten, gut durch.", timer: 240, items: ["Eier"] },
      { icon: "serve", text: "Mit Rote-Bete-Würfeln servieren.", items: ["Rote Bete"] }
    ]
  },
  {
    id: "palatschinken", name: "Topfen-Palatschinken mit Beeren", origin: "Österreich", flag: "AT", time: 25,
    colors: ["#F2D9A0", "#B5475A", "#F6F1E6", "#7E9E6E"],
    kid: "Aufrollen und in Stücke schneiden. Beeren halbieren.",
    ingredients: [
      ["Mehl", 200, "g", "pantry"], ["Eier", 3, "Stk", "fresh"], ["Milch", 400, "ml", "fresh"],
      ["Topfen (Quark)", 250, "g", "fresh"], ["Beeren (TK)", 300, "g", "frozen"], ["Banane", 1, "Stk", "veg"],
      ["Butter", 20, "g", "pantry"]
    ],
    steps: [
      { icon: "mix", text: "Mehl, Eier und Milch zu dünnem Teig verrühren.", items: ["Mehl", "Eier", "Milch"] },
      { icon: "pan", text: "In Butter dünne Palatschinken backen, je Seite 1 Minute.", timer: 600, items: ["Butter"] },
      { icon: "mix", text: "Topfen mit zerdrückter Banane verrühren.", items: ["Topfen", "Banane"] },
      { icon: "pan", text: "Beeren kurz in einem Topf erwärmen.", timer: 180, items: ["Beeren"] },
      { icon: "serve", text: "Palatschinken füllen, rollen, Beeren drüber.", items: [] }
    ]
  },
  {
    id: "bulgur", name: "Bulgur-Hackpfanne mit Paprika", origin: "Türkei", flag: "TR", time: 25,
    colors: ["#C98B5E", "#D9533F", "#F2E3C2", "#8FAE7F"],
    kid: "Joghurt dazu macht es milder.",
    ingredients: [
      ["Rinderhack", 300, "g", "meat"], ["Bulgur", 200, "g", "dry"], ["Rote Paprika", 2, "Stk", "veg"],
      ["Zwiebel", 1, "Stk", "veg"], ["Tomatenmark", 2, "EL", "dry"], ["Naturjoghurt", 200, "g", "fresh"],
      ["Petersilie", 1, "Bund", "veg"], ["Gemüsebrühe (salzarm)", 450, "ml", "pantry"], ["Paprikapulver edelsüß", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebel und Paprika würfeln.", items: ["Zwiebel", "Paprika"] },
      { icon: "pan", text: "Hack mit Zwiebel 5 Minuten krümelig braten.", timer: 300, items: ["Hack"] },
      { icon: "pan", text: "Paprika, Tomatenmark und Gewürz dazu, 2 Minuten.", timer: 120, items: ["Tomatenmark"] },
      { icon: "boil", text: "Bulgur und Brühe dazu. Deckel drauf, 12 Minuten quellen lassen.", timer: 720, items: ["Bulgur", "Brühe"] },
      { icon: "serve", text: "Mit Joghurt und Petersilie servieren.", items: ["Joghurt", "Petersilie"] }
    ]
  }
];

// Merkmale für "Passt zu euch": je mehr Merkmale ein Gericht mit euren Herz-Gerichten teilt, desto öfter wird es vorgeschlagen.
const TAGS = {
  lachs: ["fisch", "ofen", "nordisch"], teriyaki: ["huhn", "reis", "asiatisch", "bowl"],
  dal: ["vegetarisch", "topf", "indisch", "reis"], orzo: ["fleisch", "pfanne", "mediterran", "pasta"],
  shakshuka: ["vegetarisch", "ei", "pfanne", "orientalisch"], quesadilla: ["vegetarisch", "fingerfood", "pfanne", "lateinamerika"],
  gnocchi: ["vegetarisch", "ofen", "mediterran"], smorrebrod: ["fisch", "ei", "fingerfood", "nordisch", "kalt"],
  thai: ["huhn", "reis", "asiatisch", "pfanne"], pajeon: ["vegetarisch", "pfanne", "asiatisch", "fingerfood"],
  couscous: ["vegetarisch", "orientalisch", "pfanne"], lohikeitto: ["fisch", "suppe", "nordisch", "topf"],
  erbsenpasta: ["vegetarisch", "pasta", "mediterran"], tortilla: ["vegetarisch", "ei", "pfanne", "mediterran"],
  frittata: ["vegetarisch", "ei", "ofen", "fingerfood"], fischstaebchen: ["fisch", "pfanne", "fingerfood"],
  friedrice: ["huhn", "reis", "asiatisch", "pfanne"], kuerbissuppe: ["vegetarisch", "suppe", "asiatisch", "topf"],
  falafel: ["vegetarisch", "ofen", "orientalisch", "fingerfood"], koettbullar: ["fleisch", "pfanne", "nordisch"],
  sommerrolle: ["huhn", "asiatisch", "bowl", "kalt"], gemuesepasta: ["vegetarisch", "pasta", "mediterran", "topf"],
  souvlaki: ["huhn", "pfanne", "mediterran"], laibchen: ["vegetarisch", "pfanne", "fingerfood", "österreichisch"],
  kaiserschmarrn: ["vegetarisch", "süß", "pfanne", "österreichisch", "ei"],
  blechhuhn: ["huhn", "ofen", "fingerfood"], eiernockerl: ["vegetarisch", "ei", "pfanne", "österreichisch"],
  macncheese: ["vegetarisch", "pasta", "topf"], kokoscurry: ["huhn", "reis", "indisch", "topf"],
  udon: ["vegetarisch", "ei", "suppe", "asiatisch"], burritobowl: ["vegetarisch", "reis", "lateinamerika", "bowl"],
  polenta: ["vegetarisch", "topf", "mediterran"], pitapizza: ["fleisch", "ofen", "fingerfood", "mediterran"],
  hummus: ["vegetarisch", "ofen", "orientalisch", "fingerfood"], bacalhau: ["fisch", "ofen", "mediterran"],
  erbsensuppe: ["vegetarisch", "suppe", "topf"], padthai: ["vegetarisch", "asiatisch", "pfanne", "ei"],
  pyttipanna: ["fleisch", "ei", "pfanne", "nordisch"], palatschinken: ["vegetarisch", "süß", "pfanne", "österreichisch"],
  bulgur: ["fleisch", "pfanne", "orientalisch"]
};
RECIPES.forEach(r => { r.tags = TAGS[r.id] || []; });
