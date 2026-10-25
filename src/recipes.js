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
  },
  {
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
    id: "paprikahendl", name: "Paprikahendl mit Nockerl", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#C8743F", "#F3E6D3", "#8C5A3C", "#E9D2B4"],
    kid: "Nur edelsüßes Paprikapulver verwenden, das ist nicht scharf. Hendl klein schneiden.",
    ingredients: [
      ["Hendlbrust oder Hendlkeulen ohne Knochen", 500, "g", "meat"], ["Zwiebel", 2, "Stk", "veg"], ["Sauerrahm", 250, "g", "fresh"],
      ["Schlagobers", 100, "ml", "fresh"], ["Frische Nockerl oder Spätzle", 500, "g", "fresh"], ["Paprikapulver edelsüß", 2, "EL", "pantry"],
      ["Mehl", 1, "EL", "pantry"], ["Butter", 20, "g", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebeln fein hacken, Hendl in Stücke schneiden.", items: ["Zwiebel", "Hendl"] },
      { icon: "pan", text: "Zwiebeln in Butter 5 Minuten goldig rösten.", timer: 300, items: ["Butter"] },
      { icon: "pan", text: "Hendl dazu, kurz anbraten. Paprikapulver drüber und gleich mit 300 ml Wasser ablöschen.", items: ["Paprikapulver"] },
      { icon: "boil", text: "Zugedeckt 15 Minuten leise köcheln.", timer: 900, items: [] },
      { icon: "mix", text: "Sauerrahm mit Mehl und Obers glatt rühren, einrühren, kurz aufkochen.", items: ["Sauerrahm", "Obers", "Mehl"] },
      { icon: "serve", text: "Nockerl in Butter schwenken und mit dem Hendl servieren.", items: ["Nockerl"] }
    ]
  },
  {
    id: "faschiertelaibchen", name: "Faschierte Laibchen mit Erdäpfelpüree", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#8C5A3C", "#F3E9D8", "#B9A27E", "#E7D3B8"],
    kid: "Laibchen klein formen. Gurkensalat ohne Essig für die Kleinen.",
    ingredients: [
      ["Faschiertes gemischt", 500, "g", "meat"], ["Semmel vom Vortag", 1, "Stk", "bread"], ["Eier", 1, "Stk", "fresh"],
      ["Zwiebel", 1, "Stk", "veg"], ["Petersilie", 1, "Bund", "veg"], ["Erdäpfel mehlig", 800, "g", "veg"],
      ["Milch", 200, "ml", "fresh"], ["Gurke", 1, "Stk", "veg"], ["Sauerrahm", 100, "g", "fresh"],
      ["Senf", 1, "TL", "pantry"], ["Butter", 30, "g", "pantry"], ["Öl", 3, "EL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Erdäpfel schälen, würfeln und 15 Minuten kochen.", timer: 900, items: ["Erdäpfel"] },
      { icon: "mix", text: "Semmel einweichen, ausdrücken. Mit Faschiertem, Ei, Zwiebel, Petersilie und Senf verkneten.", items: ["Faschiertes", "Semmel", "Ei"] },
      { icon: "pan", text: "Laibchen formen, je Seite 5 Minuten braten.", timer: 600, items: ["Öl"] },
      { icon: "mix", text: "Erdäpfel mit warmer Milch und Butter stampfen.", items: ["Milch", "Butter"] },
      { icon: "serve", text: "Gurke hobeln, mit Sauerrahm mischen. Alles anrichten.", items: ["Gurke", "Sauerrahm"] }
    ]
  },
  {
    id: "faschiertebaellchen", name: "Faschierte Bällchen in Tomatensauce", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#B5482F", "#8C5A3C", "#F3E6D3", "#E8D2B0"],
    kid: "Bällchen halbieren. Die Sauce ist mild und süßlich.",
    ingredients: [
      ["Faschiertes gemischt", 400, "g", "meat"], ["Eier", 1, "Stk", "fresh"], ["Semmelbrösel", 3, "EL", "pantry"],
      ["Passierte Tomaten", 700, "g", "dry"], ["Zwiebel", 1, "Stk", "veg"], ["Spiralnudeln", 300, "g", "dry"],
      ["Parmesan", 40, "g", "fresh"], ["Basilikum", 1, "Topf", "veg"]
    ],
    steps: [
      { icon: "mix", text: "Faschiertes mit Ei und Bröseln mischen, kleine Bällchen formen.", items: ["Faschiertes", "Ei", "Brösel"] },
      { icon: "pan", text: "Zwiebel hacken und in einem breiten Topf 3 Minuten anschwitzen.", timer: 180, items: ["Zwiebel"] },
      { icon: "boil", text: "Tomaten dazu, Bällchen hineinlegen. Zugedeckt 15 Minuten ziehen lassen.", timer: 900, items: ["Tomaten"] },
      { icon: "boil", text: "Parallel die Nudeln kochen.", timer: 600, items: ["Nudeln"] },
      { icon: "serve", text: "Mit Basilikum und Parmesan servieren.", items: ["Basilikum", "Parmesan"] }
    ]
  },
  {
    id: "faschierterbraten", name: "Faschierter Braten mit Erdäpfelpüree", origin: "Österreich", flag: "AT", time: 20, wait: 40,
    colors: ["#7A4E33", "#F3E9D8", "#9FB07E", "#D9BC94"],
    kid: "In dünne Scheiben schneiden. Reste schmecken am nächsten Tag kalt aufs Brot.",
    ingredients: [
      ["Faschiertes gemischt", 700, "g", "meat"], ["Semmel vom Vortag", 2, "Stk", "bread"], ["Eier", 2, "Stk", "fresh"],
      ["Zwiebel", 1, "Stk", "veg"], ["Karotten", 2, "Stk", "veg"], ["Erdäpfel mehlig", 800, "g", "veg"],
      ["Milch", 250, "ml", "fresh"], ["Senf", 1, "TL", "pantry"], ["Majoran", 1, "TL", "pantry"], ["Butter", 30, "g", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 180 Grad. Semmeln einweichen, Zwiebel und Karotte fein reiben.", items: ["Semmel", "Zwiebel", "Karotten"] },
      { icon: "mix", text: "Alles mit Faschiertem, Eiern, Senf und Majoran verkneten. Zu einem Laib formen.", items: ["Faschiertes", "Eier", "Majoran"] },
      { icon: "oven", text: "In einer Form 40 Minuten backen. Ab und zu mit etwas Wasser begießen.", timer: 2400, items: [] },
      { icon: "boil", text: "In der Zwischenzeit Erdäpfel kochen, mit Milch und Butter zu Püree stampfen.", timer: 900, items: ["Erdäpfel", "Milch"] },
      { icon: "serve", text: "Braten in Scheiben schneiden, mit Püree und Bratensaft servieren.", items: [] }
    ]
  },
  {
    id: "onepotbolo", name: "One-Pot-Pasta Bolognese", origin: "Italien", flag: "IT", time: 25,
    colors: ["#A8442E", "#8C5A3C", "#F3E6D3", "#E3C9A5"],
    kid: "Ein Topf, kein Abseihen. Fürs Kind mit wenig Parmesan.",
    ingredients: [
      ["Faschiertes Rind", 400, "g", "meat"], ["Penne", 350, "g", "dry"], ["Passierte Tomaten", 500, "g", "dry"],
      ["Karotten", 2, "Stk", "veg"], ["Zwiebel", 1, "Stk", "veg"], ["Parmesan", 40, "g", "fresh"], ["Olivenöl", 1, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebel und Karotten fein reiben.", items: ["Zwiebel", "Karotten"] },
      { icon: "pan", text: "Faschiertes im großen Topf 5 Minuten krümelig braten, Gemüse dazu.", timer: 300, items: ["Faschiertes"] },
      { icon: "boil", text: "Tomaten, Penne und 700 ml Wasser dazu. 12 Minuten köcheln, oft umrühren.", timer: 720, items: ["Penne", "Tomaten"] },
      { icon: "serve", text: "Wenn die Nudeln weich sind: Parmesan drüber, fertig.", items: ["Parmesan"] }
    ]
  },
  {
    id: "onepotpesto", name: "One-Pot-Pesto-Pasta mit Brokkoli", origin: "Italien", flag: "IT", time: 15,
    colors: ["#6F8F4E", "#F3E9D8", "#C7A46B", "#E6D6B8"],
    kid: "Pesto enthält oft Nüsse. Nur geben, wenn keine Allergie bekannt ist.",
    ingredients: [
      ["Spaghetti oder Trofie", 350, "g", "dry"], ["Brokkoli", 1, "Stk", "veg"], ["Basilikum-Pesto", 1, "Glas", "dry"],
      ["Cherrytomaten", 250, "g", "veg"], ["Mini-Mozzarella", 125, "g", "fresh"], ["Parmesan", 30, "g", "fresh"]
    ],
    steps: [
      { icon: "boil", text: "Nudeln im großen Topf kochen. Die letzten 4 Minuten Brokkoli-Röschen dazu.", timer: 600, items: ["Nudeln", "Brokkoli"] },
      { icon: "mix", text: "Eine Tasse Nudelwasser aufheben, dann abseihen.", items: [] },
      { icon: "mix", text: "Zurück in den Topf, Pesto und etwas Nudelwasser unterrühren.", items: ["Pesto"] },
      { icon: "serve", text: "Tomaten und Mozzarella vierteln, drüber. Parmesan drauf.", items: ["Tomaten", "Mozzarella", "Parmesan"] }
    ]
  },
  {
    id: "onepotrahm", name: "One-Pot Schinken-Erbsen-Rahmnudeln", origin: "Österreich", flag: "AT", time: 20,
    colors: ["#E9C98E", "#8DAA6A", "#D99C8A", "#F4ECDF"],
    kid: "Kinderliebling. Schinken klein würfeln.",
    ingredients: [
      ["Hörnchen oder Farfalle", 350, "g", "dry"], ["Beinschinken", 150, "g", "meat"], ["Erbsen", 200, "g", "frozen"],
      ["Schlagobers", 150, "ml", "fresh"], ["Parmesan", 40, "g", "fresh"], ["Gemüsebrühe (salzarm)", 800, "ml", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Schinken klein würfeln.", items: ["Schinken"] },
      { icon: "boil", text: "Nudeln mit Brühe im Topf 8 Minuten köcheln, oft umrühren.", timer: 480, items: ["Nudeln", "Brühe"] },
      { icon: "boil", text: "Erbsen, Schinken und Obers dazu, noch 3 Minuten.", timer: 180, items: ["Erbsen", "Obers"] },
      { icon: "serve", text: "Parmesan einrühren, fertig.", items: ["Parmesan"] }
    ]
  },
  {
    id: "onepotlachs", name: "One-Pot Lachs-Spinat-Pasta", origin: "Schweden", flag: "SE", time: 20,
    colors: ["#E9967A", "#5F7F4A", "#F4EDE0", "#D7C2A0"],
    kid: "Lachs zerpflücken und auf Gräten prüfen.",
    ingredients: [
      ["Bandnudeln", 350, "g", "dry"], ["Lachsfilet ohne Haut", 300, "g", "meat"], ["Blattspinat (TK)", 300, "g", "frozen"],
      ["Frischkäse", 150, "g", "fresh"], ["Zitrone", 1, "Stk", "veg"], ["Gemüsebrühe (salzarm)", 900, "ml", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Nudeln mit Brühe und Spinat in einen Topf. 8 Minuten köcheln, oft umrühren.", timer: 480, items: ["Nudeln", "Spinat", "Brühe"] },
      { icon: "chop", text: "Lachs in Würfel schneiden.", items: ["Lachs"] },
      { icon: "boil", text: "Lachs und Frischkäse dazu, 4 Minuten ziehen lassen.", timer: 240, items: ["Frischkäse"] },
      { icon: "serve", text: "Mit Zitronenschale und etwas Saft abschmecken.", items: ["Zitrone"] }
    ]
  },
  {
    id: "kartoffelauflauf", name: "Erdäpfel-Brokkoli-Auflauf", origin: "Österreich", flag: "AT", time: 15, wait: 35,
    colors: ["#E2B866", "#6F8F4E", "#F3E6D3", "#C69A6A"],
    kid: "Weich und mild. Etwas abkühlen lassen, innen sehr heiß.",
    ingredients: [
      ["Erdäpfel festkochend", 800, "g", "veg"], ["Brokkoli", 1, "Stk", "veg"], ["Beinschinken", 150, "g", "meat"],
      ["Schlagobers", 200, "ml", "fresh"], ["Milch", 200, "ml", "fresh"], ["Geriebener Bergkäse", 120, "g", "fresh"],
      ["Eier", 2, "Stk", "fresh"], ["Muskatnuss", 1, "Prise", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 200 Grad. Erdäpfel hauchdünn hobeln, Brokkoli in kleine Röschen.", items: ["Erdäpfel", "Brokkoli"] },
      { icon: "mix", text: "Obers, Milch, Eier und Muskat verquirlen.", items: ["Obers", "Milch", "Eier"] },
      { icon: "mix", text: "Erdäpfel, Brokkoli und Schinken in eine Form schichten, Guss drüber, Käse drauf.", items: ["Schinken", "Käse"] },
      { icon: "oven", text: "35 Minuten goldbraun backen.", timer: 2100, items: [] },
      { icon: "serve", text: "5 Minuten rasten lassen, dann schneiden.", items: [] }
    ]
  },
  {
    id: "zucchiniquiche", name: "Zucchini-Faschiertes-Quiche", origin: "Frankreich", flag: "FR", time: 15, wait: 30,
    colors: ["#D9B37A", "#6F8F4E", "#8C5A3C", "#F3E9D8"],
    kid: "In kleine Stücke schneiden. Schmeckt auch lauwarm.",
    ingredients: [
      ["Mürbteig oder Blätterteig (Kühlregal)", 1, "Pck", "fresh"], ["Faschiertes Rind", 300, "g", "meat"], ["Zucchini", 2, "Stk", "veg"],
      ["Zwiebel", 1, "Stk", "veg"], ["Eier", 3, "Stk", "fresh"], ["Sauerrahm", 200, "g", "fresh"],
      ["Geriebener Käse", 100, "g", "fresh"], ["Grüner Salat", 1, "Stk", "veg"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 190 Grad. Zucchini grob raspeln und ausdrücken, Zwiebel hacken.", items: ["Zucchini", "Zwiebel"] },
      { icon: "pan", text: "Faschiertes mit Zwiebel 6 Minuten braten.", timer: 360, items: ["Faschiertes"] },
      { icon: "mix", text: "Teig in die Form legen. Eier, Sauerrahm und Käse verrühren, mit Zucchini und Faschiertem mischen.", items: ["Teig", "Eier", "Sauerrahm"] },
      { icon: "oven", text: "Einfüllen und 30 Minuten backen.", timer: 1800, items: [] },
      { icon: "serve", text: "Mit grünem Salat servieren.", items: ["Salat"] }
    ]
  },
  {
    id: "pikantepalatschinken", name: "Pikante Palatschinken mit Rahmsauce", origin: "Österreich", flag: "AT", time: 25, wait: 15,
    colors: ["#E8C48A", "#F4ECDF", "#7F9E5E", "#D99C8A"],
    kid: "In Scheiben schneiden. Die Rahmsauce ist mild.",
    ingredients: [
      ["Mehl", 200, "g", "pantry"], ["Eier", 3, "Stk", "fresh"], ["Milch", 400, "ml", "fresh"],
      ["Beinschinken", 200, "g", "meat"], ["Blattspinat (TK)", 300, "g", "frozen"], ["Geriebener Käse", 150, "g", "fresh"],
      ["Sauerrahm", 250, "g", "fresh"], ["Schlagobers", 100, "ml", "fresh"], ["Butter", 20, "g", "pantry"]
    ],
    steps: [
      { icon: "mix", text: "Ofen auf 200 Grad. Mehl, Eier und Milch zu dünnem Teig verrühren.", items: ["Mehl", "Eier", "Milch"] },
      { icon: "pan", text: "In Butter dünne Palatschinken backen.", timer: 600, items: ["Butter"] },
      { icon: "mix", text: "Spinat auftauen und ausdrücken. Palatschinken mit Schinken, Spinat und etwas Käse füllen und rollen.", items: ["Schinken", "Spinat", "Käse"] },
      { icon: "mix", text: "In eine Form legen. Sauerrahm mit Obers verrühren, drübergießen, Rest-Käse drauf.", items: ["Sauerrahm", "Obers"] },
      { icon: "oven", text: "15 Minuten überbacken.", timer: 900, items: [] }
    ]
  },
  {
    id: "wuerstel", name: "Würstel mit Dillrahmsauce & Erdäpfeln", origin: "Österreich", flag: "AT", time: 25,
    colors: ["#B86A4A", "#F4ECDF", "#7F9E5E", "#E2C9A0"],
    kid: "Würstel immer der Länge nach vierteln (Verschluckgefahr). Würstel sind salzig, Sauce nicht nachsalzen.",
    ingredients: [
      ["Frankfurter oder Wiener Würstel", 6, "Stk", "meat"], ["Erdäpfel festkochend", 700, "g", "veg"], ["Dill", 1, "Bund", "veg"],
      ["Sauerrahm", 250, "g", "fresh"], ["Schlagobers", 100, "ml", "fresh"], ["Gemüsebrühe (salzarm)", 200, "ml", "pantry"],
      ["Mehl", 1, "EL", "pantry"], ["Butter", 20, "g", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Erdäpfel würfeln und 15 Minuten kochen.", timer: 900, items: ["Erdäpfel"] },
      { icon: "pan", text: "Mehl in Butter kurz anschwitzen, mit Brühe und Obers aufgießen, 3 Minuten köcheln.", timer: 180, items: ["Butter", "Mehl", "Obers"] },
      { icon: "mix", text: "Sauerrahm und viel gehackten Dill einrühren.", items: ["Sauerrahm", "Dill"] },
      { icon: "boil", text: "Würstel in der Sauce 5 Minuten heiß werden lassen (nicht kochen).", timer: 300, items: ["Würstel"] },
      { icon: "serve", text: "Mit Erdäpfeln servieren. Fürs Kind Würstel längs vierteln.", items: [] }
    ]
  },
  {
    id: "kartoffelgulasch", name: "Erdäpfelgulasch mit Würstel", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#B5552F", "#E2B866", "#8C5A3C", "#F3E6D3"],
    kid: "Würstel längs vierteln. Nur edelsüßes Paprikapulver, nicht scharf.",
    ingredients: [
      ["Erdäpfel speckig", 900, "g", "veg"], ["Zwiebel", 2, "Stk", "veg"], ["Frankfurter Würstel", 4, "Stk", "meat"],
      ["Tomatenmark", 1, "EL", "dry"], ["Paprikapulver edelsüß", 2, "EL", "pantry"], ["Majoran", 1, "TL", "pantry"],
      ["Kümmel gemahlen", 0.5, "TL", "pantry"], ["Schwarzbrot", 1, "Stk", "bread"], ["Öl", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebeln fein hacken, Erdäpfel in Würfel.", items: ["Zwiebel", "Erdäpfel"] },
      { icon: "pan", text: "Zwiebeln in Öl 6 Minuten goldbraun rösten.", timer: 360, items: ["Öl"] },
      { icon: "pan", text: "Tomatenmark und Paprika kurz mitrühren, sofort mit 700 ml Wasser aufgießen.", items: ["Tomatenmark", "Paprikapulver"] },
      { icon: "boil", text: "Erdäpfel, Majoran und Kümmel dazu. 18 Minuten köcheln, bis es sämig wird.", timer: 1080, items: ["Majoran", "Kümmel"] },
      { icon: "serve", text: "Würstel in Scheiben 3 Minuten mitziehen lassen. Mit Brot servieren.", items: ["Würstel", "Brot"] }
    ]
  },
  {
    id: "tantanmen", name: "Tantanmen-Nudeln mit Faschiertem", origin: "Japan", flag: "JP", time: 20,
    colors: ["#C8743F", "#F3E6D3", "#6F8F4E", "#8C5A3C"],
    kid: "Ohne Chili fürs Kind, Nudeln mit der Schere kürzen. Chiliöl nur bei den Großen.",
    ingredients: [
      ["Ramen-Nudeln", 3, "Pck", "dry"], ["Faschiertes Schwein oder Rind", 300, "g", "meat"], ["Tahin (Sesampaste)", 3, "EL", "dry"],
      ["Pak Choi", 2, "Stk", "veg"], ["Frühlingszwiebeln", 2, "Stk", "veg"], ["Knoblauch", 1, "Zehe", "veg"],
      ["Ingwer", 1, "Stk", "veg"], ["Sojasauce (salzreduziert)", 2, "EL", "pantry"], ["Chiliöl (nur Erwachsene)", 1, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Knoblauch und Ingwer hacken, Pak Choi halbieren, Lauchzwiebel in Ringe.", items: ["Knoblauch", "Ingwer", "Pak Choi"] },
      { icon: "pan", text: "Faschiertes mit Knoblauch und Ingwer 6 Minuten knusprig braten, 1 EL Soja dazu.", timer: 360, items: ["Faschiertes", "Sojasauce"] },
      { icon: "boil", text: "Nudeln und Pak Choi 3 Minuten kochen. 200 ml Kochwasser aufheben.", timer: 180, items: ["Ramen-Nudeln"] },
      { icon: "mix", text: "Tahin, restliche Soja und das Kochwasser zu cremiger Sauce verrühren.", items: ["Tahin"] },
      { icon: "serve", text: "Nudeln in die Sauce, Faschiertes und Lauchzwiebel drauf. Chiliöl für die Großen.", items: ["Chiliöl"] }
    ]
  },
  {
    id: "kasnocken", name: "Kasnocken mit Röstzwiebeln", origin: "Österreich", flag: "AT", time: 20,
    colors: ["#E8C27A", "#A0703F", "#7F9E5E", "#F4ECDF"],
    kid: "Käse ist salzig: fürs Kind eine kleinere Portion und viel Salat dazu.",
    ingredients: [
      ["Frische Spätzle oder Nockerl", 600, "g", "fresh"], ["Geriebener Bergkäse", 150, "g", "fresh"], ["Zwiebel", 2, "Stk", "veg"],
      ["Schnittlauch", 1, "Bund", "veg"], ["Grüner Salat", 1, "Stk", "veg"], ["Butter", 30, "g", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebeln in feine Ringe schneiden.", items: ["Zwiebel"] },
      { icon: "pan", text: "Zwiebeln in Butter 10 Minuten langsam goldbraun rösten, rausnehmen.", timer: 600, items: ["Butter"] },
      { icon: "pan", text: "Nockerl in der Pfanne 4 Minuten erhitzen, Käse drüber und schmelzen lassen.", timer: 240, items: ["Nockerl", "Käse"] },
      { icon: "serve", text: "Röstzwiebeln und Schnittlauch drauf. Salat dazu.", items: ["Schnittlauch", "Salat"] }
    ]
  },
  {
    id: "grenadiermarsch", name: "Grenadiermarsch", origin: "Österreich", flag: "AT", time: 25,
    colors: ["#E2B866", "#B86A4A", "#F3E6D3", "#7F9E5E"],
    kid: "Klassisches Resteessen, das Kinder lieben. Mit Gurkensalat.",
    ingredients: [
      ["Erdäpfel festkochend", 500, "g", "veg"], ["Fleckerl oder kurze Nudeln", 250, "g", "dry"], ["Beinschinken", 150, "g", "meat"],
      ["Zwiebel", 1, "Stk", "veg"], ["Eier", 2, "Stk", "fresh"], ["Gurke", 1, "Stk", "veg"], ["Majoran", 1, "TL", "pantry"],
      ["Öl", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Erdäpfel würfeln und 12 Minuten kochen. Nudeln parallel kochen.", timer: 720, items: ["Erdäpfel", "Nudeln"] },
      { icon: "pan", text: "Zwiebel und Schinken in Öl 4 Minuten rösten.", timer: 240, items: ["Zwiebel", "Schinken"] },
      { icon: "pan", text: "Erdäpfel und Nudeln dazu, 5 Minuten knusprig braten, Majoran drüber.", timer: 300, items: ["Majoran"] },
      { icon: "pan", text: "Eier verquirlen, drübergießen und durchstocken lassen.", items: ["Eier"] },
      { icon: "serve", text: "Mit Gurkensalat servieren.", items: ["Gurke"] }
    ]
  },
  {
    id: "schinkenfleckerl", name: "Überbackene Schinkenfleckerl", origin: "Österreich", flag: "AT", time: 15, wait: 20,
    colors: ["#E9C98E", "#D99C8A", "#F4ECDF", "#7F9E5E"],
    kid: "Ein Wiener Kinderklassiker. Mit grünem Salat.",
    ingredients: [
      ["Fleckerl", 300, "g", "dry"], ["Beinschinken", 200, "g", "meat"], ["Sauerrahm", 250, "g", "fresh"],
      ["Eier", 2, "Stk", "fresh"], ["Geriebener Käse", 80, "g", "fresh"], ["Grüner Salat", 1, "Stk", "veg"], ["Butter", 20, "g", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Ofen auf 200 Grad. Fleckerl kochen und abseihen.", timer: 600, items: ["Fleckerl"] },
      { icon: "chop", text: "Schinken klein würfeln.", items: ["Schinken"] },
      { icon: "mix", text: "Sauerrahm mit Eiern verrühren, mit Fleckerl und Schinken mischen.", items: ["Sauerrahm", "Eier"] },
      { icon: "oven", text: "In eine gebutterte Form, Käse drüber, 20 Minuten backen.", timer: 1200, items: ["Käse", "Butter"] },
      { icon: "serve", text: "Mit grünem Salat servieren.", items: ["Salat"] }
    ]
  },
  {
    id: "hendlstreifen", name: "Knusprige Hendlstreifen mit Erdäpfelsalat", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#D9A35E", "#F3E6D3", "#7F9E5E", "#C69A6A"],
    kid: "Panierte Streifen zum Selberhalten. Erdäpfelsalat mild abmachen.",
    ingredients: [
      ["Hendlbrust", 500, "g", "meat"], ["Semmelbrösel", 100, "g", "pantry"], ["Eier", 2, "Stk", "fresh"],
      ["Erdäpfel speckig", 700, "g", "veg"], ["Rote Zwiebel", 1, "Stk", "veg"], ["Vogerlsalat", 1, "Pck", "veg"],
      ["Zitrone", 1, "Stk", "veg"], ["Gemüsebrühe (salzarm)", 150, "ml", "pantry"], ["Mehl", 3, "EL", "pantry"], ["Öl", 6, "EL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Erdäpfel in der Schale 18 Minuten kochen.", timer: 1080, items: ["Erdäpfel"] },
      { icon: "chop", text: "Hendl in Streifen schneiden. In Mehl, Ei und Bröseln wenden.", items: ["Hendl", "Mehl", "Eier", "Brösel"] },
      { icon: "pan", text: "In Öl je Seite 3 Minuten goldbraun braten.", timer: 360, items: ["Öl"] },
      { icon: "mix", text: "Erdäpfel schälen, in Scheiben, mit warmer Brühe und feiner Zwiebel marinieren.", items: ["Brühe", "Zwiebel"] },
      { icon: "serve", text: "Vogerlsalat unterheben, mit Zitronenspalten servieren.", items: ["Vogerlsalat", "Zitrone"] }
    ]
  },
  {
    id: "griessschmarrn", name: "Grießschmarrn mit Apfelkompott", origin: "Österreich", flag: "AT", time: 25,
    colors: ["#EBCB8B", "#C98B5E", "#F4ECDF", "#B5C99A"],
    kid: "Ohne Staubzucker. Das Kompott macht ihn süß genug.",
    ingredients: [
      ["Weizengrieß", 200, "g", "dry"], ["Milch", 500, "ml", "fresh"], ["Eier", 2, "Stk", "fresh"],
      ["Äpfel", 4, "Stk", "veg"], ["Zimt", 1, "TL", "pantry"], ["Butter", 40, "g", "pantry"], ["Rosinen", 30, "g", "dry"]
    ],
    steps: [
      { icon: "boil", text: "Milch aufkochen, Grieß einrühren, 3 Minuten dick werden lassen. Abkühlen lassen.", timer: 180, items: ["Milch", "Grieß"] },
      { icon: "chop", text: "Äpfel schälen und würfeln.", items: ["Äpfel"] },
      { icon: "boil", text: "Mit wenig Wasser und Zimt 8 Minuten weich dünsten.", timer: 480, items: ["Zimt"] },
      { icon: "mix", text: "Eier und Rosinen unter den Grieß rühren.", items: ["Eier", "Rosinen"] },
      { icon: "pan", text: "In Butter 10 Minuten rösten und mit zwei Gabeln zerreißen.", timer: 600, items: ["Butter"] },
      { icon: "serve", text: "Mit Apfelkompott servieren.", items: [] }
    ]
  },
  {
    id: "spinatknoedel", name: "Spinatknödel mit brauner Butter", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#5F7F4A", "#E8C27A", "#F4ECDF", "#A0703F"],
    kid: "Knödel klein schneiden. Parmesan nur wenig.",
    ingredients: [
      ["Knödelbrot", 250, "g", "bread"], ["Blattspinat (TK)", 300, "g", "frozen"], ["Milch", 250, "ml", "fresh"],
      ["Eier", 2, "Stk", "fresh"], ["Zwiebel", 1, "Stk", "veg"], ["Parmesan", 50, "g", "fresh"],
      ["Grüner Salat", 1, "Stk", "veg"], ["Butter", 50, "g", "pantry"], ["Mehl", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "mix", text: "Knödelbrot mit warmer Milch übergießen, 10 Minuten ziehen lassen.", timer: 600, items: ["Knödelbrot", "Milch"] },
      { icon: "pan", text: "Zwiebel hacken, in Butter anschwitzen, Spinat dazu, bis er aufgetaut ist. Gut ausdrücken.", items: ["Zwiebel", "Spinat"] },
      { icon: "mix", text: "Alles mit Eiern, Mehl und der Hälfte vom Parmesan verkneten. 8 Knödel formen.", items: ["Eier", "Mehl", "Parmesan"] },
      { icon: "boil", text: "In leicht wallendem Wasser 12 Minuten ziehen lassen.", timer: 720, items: [] },
      { icon: "serve", text: "Butter bräunen, drüber, Parmesan drauf. Salat dazu.", items: ["Butter", "Salat"] }
    ]
  },
  {
    id: "erdaepfelpuffer", name: "Erdäpfelpuffer mit Schnittlauch-Topfendip", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#D9B77A", "#F3EAD6", "#9DB07F", "#B98B5A"],
    kid: "Puffer klein schneiden und abkühlen lassen. Dip ohne Salz anrühren, nur wenig Zitrone.",
    ingredients: [
      ["Erdäpfel (mehligkochend)", 700, "g", "veg"], ["Zwiebel", 1, "Stk", "veg"], ["Eier", 2, "Stk", "fresh"],
      ["Topfen", 250, "g", "fresh"], ["Schnittlauch", 1, "Bund", "veg"], ["Gurke", 1, "Stk", "veg"],
      ["Mehl", 3, "EL", "pantry"], ["Öl", 4, "EL", "pantry"], ["Salz", 1, "Prise", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Erdäpfel schälen und fein reiben. Zwiebel reiben. Gut ausdrücken.", items: ["Erdäpfel", "Zwiebel"] },
      { icon: "mix", text: "Mit Eiern, Mehl und einer Prise Salz zu einem Teig rühren.", items: ["Eier", "Mehl", "Salz"] },
      { icon: "mix", text: "Topfen mit gehacktem Schnittlauch verrühren. Gurke in Stifte schneiden.", items: ["Topfen", "Schnittlauch", "Gurke"] },
      { icon: "pan", text: "Öl erhitzen, kleine Puffer formen und je 4 Minuten pro Seite goldbraun braten.", timer: 480, items: ["Öl"] },
      { icon: "serve", text: "Mit Dip und Gurkenstiften servieren.", items: [] }
    ]
  },
  {
    id: "hendlrahm", name: "Hendl-Rahmgeschnetzeltes mit Butternudeln", origin: "Österreich", flag: "AT", time: 25,
    colors: ["#E8CFA0", "#F6EEDC", "#C9A374", "#A9C08F"],
    kid: "Hendl in kleine Stücke schneiden. Nudeln ohne Salzwasser-Überschuss kochen, Champignons klein hacken.",
    ingredients: [
      ["Hendlbrust", 400, "g", "meat"], ["Champignons", 200, "g", "veg"], ["Zwiebel", 1, "Stk", "veg"],
      ["Schlagobers", 200, "ml", "fresh"], ["Bandnudeln", 250, "g", "dry"], ["Petersilie", 1, "Bund", "veg"],
      ["Butter", 1, "EL", "pantry"], ["Mehl", 1, "EL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Nudeln in Wasser kochen, wie auf der Packung steht.", timer: 600, items: ["Nudeln"] },
      { icon: "chop", text: "Hendl in dünne Streifen, Champignons in Scheiben, Zwiebel fein schneiden.", items: ["Hendlbrust", "Champignons", "Zwiebel"] },
      { icon: "pan", text: "Hendl in Butter 5 Minuten anbraten, mehlieren. Zwiebel und Pilze dazu, 4 Minuten braten.", timer: 540, items: ["Butter", "Mehl"] },
      { icon: "mix", text: "Schlagobers eingießen und 5 Minuten sanft köcheln lassen.", timer: 300, items: ["Schlagobers"] },
      { icon: "serve", text: "Nudeln abgießen, mit Petersilie über das Geschnetzelte geben.", items: ["Petersilie"] }
    ]
  },
  {
    id: "krautfleckerl", name: "Krautfleckerl mit Würfelspeck", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#D8C48A", "#EFE6CF", "#A58A5C", "#B5C28E"],
    kid: "Speck nur wenig verwenden (viel Salz) und sehr klein schneiden. Kraut weich dünsten.",
    ingredients: [
      ["Fleckerl (Nudeln)", 250, "g", "dry"], ["Weißkraut", 400, "g", "veg"], ["Zwiebel", 1, "Stk", "veg"],
      ["Speckwürfel", 60, "g", "meat"], ["Zucker", 1, "TL", "pantry"], ["Kümmel", 1, "Prise", "pantry"],
      ["Öl", 2, "EL", "pantry"], ["Schnittlauch", 1, "Bund", "veg"]
    ],
    steps: [
      { icon: "boil", text: "Fleckerl in Wasser kochen und abgießen.", timer: 540, items: ["Fleckerl"] },
      { icon: "chop", text: "Kraut in dünne Streifen schneiden, Zwiebel fein hacken.", items: ["Weißkraut", "Zwiebel"] },
      { icon: "pan", text: "Zucker in Öl hellbraun rösten, Speck und Zwiebel dazu, dann das Kraut mit Kümmel 12 Minuten weich dünsten.", timer: 720, items: ["Zucker", "Speck", "Kümmel", "Öl"] },
      { icon: "mix", text: "Fleckerl untermischen und kurz durchrösten.", items: [] },
      { icon: "serve", text: "Mit Schnittlauch bestreut servieren.", items: ["Schnittlauch"] }
    ]
  },
  {
    id: "reisfleisch", name: "Faschiertes Reisfleisch", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#D98F5E", "#F2E2BF", "#B0653F", "#A8B87F"],
    kid: "Paprikapulver mild (edelsüß) und sparsam, keine Schärfe. Erbsen leicht zerdrücken (Verschluckgefahr).",
    ingredients: [
      ["Faschiertes (gemischt)", 400, "g", "meat"], ["Langkornreis", 200, "g", "dry"], ["Zwiebel", 1, "Stk", "veg"],
      ["Karotten", 2, "Stk", "veg"], ["Erbsen", 150, "g", "frozen"], ["Tomatenmark", 2, "EL", "pantry"],
      ["Paprikapulver edelsüß", 2, "TL", "pantry"], ["Gemüsebrühe (salzarm)", 500, "ml", "pantry"], ["Öl", 2, "EL", "pantry"], ["Parmesan", 30, "g", "fresh"]
    ],
    steps: [
      { icon: "chop", text: "Zwiebel hacken, Karotten fein würfeln.", items: ["Zwiebel", "Karotten"] },
      { icon: "pan", text: "Faschiertes in Öl krümelig anbraten, Zwiebel und Karotten 4 Minuten mitbraten.", timer: 480, items: ["Faschiertes", "Öl"] },
      { icon: "mix", text: "Tomatenmark und Paprikapulver unterrühren, Reis dazugeben.", items: ["Tomatenmark", "Paprikapulver", "Reis"] },
      { icon: "boil", text: "Brühe angießen, zugedeckt 15 Minuten bei kleiner Hitze garen. Erbsen die letzten 3 Minuten dazu.", timer: 900, items: ["Brühe", "Erbsen"] },
      { icon: "serve", text: "Mit Parmesan bestreut servieren.", items: ["Parmesan"] }
    ]
  },
  {
    id: "putenschnitzel", name: "Ofen-Putenschnitzel mit Petersil-Erdäpfeln", origin: "Österreich", flag: "AT", time: 30, wait: 15,
    colors: ["#E2B66B", "#F5ECD5", "#B07F45", "#9DB279"],
    kid: "Schnitzel in schmale Streifen schneiden. Zitrone nur zum Beträufeln für die Großen.",
    ingredients: [
      ["Putenschnitzel", 400, "g", "meat"], ["Semmelbrösel", 80, "g", "pantry"], ["Eier", 1, "Stk", "fresh"],
      ["Mehl", 3, "EL", "pantry"], ["Erdäpfel (festkochend)", 600, "g", "veg"], ["Petersilie", 1, "Bund", "veg"],
      ["Butter", 30, "g", "pantry"], ["Karotten", 2, "Stk", "veg"], ["Zitrone", 1, "Stk", "veg"]
    ],
    steps: [
      { icon: "chop", text: "Ofen auf 220 Grad. Erdäpfel schälen, vierteln und in Wasser kochen.", timer: 900, items: ["Erdäpfel"] },
      { icon: "mix", text: "Schnitzel in Mehl, verquirltem Ei und Bröseln wenden.", items: ["Putenschnitzel", "Mehl", "Eier", "Semmelbrösel"] },
      { icon: "oven", text: "Auf ein Blech mit Butterflöckchen legen, 15 Minuten backen, einmal wenden.", timer: 900, items: ["Butter"] },
      { icon: "boil", text: "Karotten in Stifte schneiden und 8 Minuten mit den Erdäpfeln mitkochen.", timer: 480, items: ["Karotten"] },
      { icon: "serve", text: "Erdäpfel mit Butter und Petersilie schwenken, mit Zitrone servieren.", items: ["Petersilie", "Zitrone"] }
    ]
  },
  {
    id: "zucchinipesto", name: "Pasta mit Zucchini-Basilikum-Pesto", origin: "Italien", flag: "IT", time: 20,
    colors: ["#B4C48B", "#EFE6CB", "#8FA66B", "#D8B98A"],
    kid: "Pesto mit Sonnenblumenkernen fein püriert, keine ganzen Nüsse oder Kerne (Verschluckgefahr). Wenig Salz.",
    ingredients: [
      ["Fusilli", 250, "g", "dry"], ["Zucchini", 2, "Stk", "veg"], ["Basilikum", 1, "Bund", "veg"],
      ["Sonnenblumenkerne", 40, "g", "pantry"], ["Parmesan", 50, "g", "fresh"], ["Frischkäse", 100, "g", "fresh"],
      ["Olivenöl", 3, "EL", "pantry"], ["Knoblauch", 1, "Zehe", "veg"]
    ],
    steps: [
      { icon: "boil", text: "Fusilli in Wasser kochen, etwas Kochwasser aufheben.", timer: 600, items: ["Fusilli"] },
      { icon: "chop", text: "Zucchini grob raspeln, Basilikum zupfen.", items: ["Zucchini", "Basilikum"] },
      { icon: "mix", text: "Zucchini, Basilikum, Kerne, Parmesan, Knoblauch, Öl und Frischkäse fein pürieren.", items: ["Sonnenblumenkerne", "Parmesan", "Knoblauch", "Olivenöl", "Frischkäse"] },
      { icon: "serve", text: "Nudeln mit Pesto und einem Schuss Kochwasser vermengen.", items: [] }
    ]
  },
  {
    id: "bulgogi", name: "Bulgogi-Bällchen mit Reis und Gurke", origin: "Korea", flag: "KR", time: 25,
    colors: ["#B9764A", "#F3EBDD", "#8E9E6E", "#D9A877"],
    kid: "Kein Chili, Sojasauce nur wenig. Sesam mitbraten und Bällchen halbieren.",
    ingredients: [
      ["Rindfaschiertes", 400, "g", "meat"], ["Jasminreis", 250, "g", "dry"], ["Gurke", 1, "Stk", "veg"],
      ["Karotten", 2, "Stk", "veg"], ["Frühlingszwiebel", 2, "Stk", "veg"], ["Sojasauce (salzreduziert)", 2, "EL", "pantry"],
      ["Honig", 1, "EL", "pantry"], ["Sesamöl", 1, "TL", "pantry"], ["Sesam", 1, "EL", "pantry"], ["Knoblauch", 1, "Zehe", "veg"]
    ],
    steps: [
      { icon: "rice", text: "Reis nach Packung kochen.", timer: 720, items: ["Reis"] },
      { icon: "mix", text: "Faschiertes mit Sojasauce, Honig, Knoblauch, Sesamöl und gehackter Frühlingszwiebel verkneten. Kleine Bällchen formen.", items: ["Faschiertes", "Sojasauce", "Honig", "Knoblauch", "Sesamöl", "Frühlingszwiebel"] },
      { icon: "pan", text: "Bällchen in einer Pfanne 10 Minuten rundum braten.", timer: 600, items: [] },
      { icon: "chop", text: "Gurke und Karotten in dünne Stifte schneiden.", items: ["Gurke", "Karotten"] },
      { icon: "serve", text: "Auf Reis anrichten, mit Sesam bestreuen.", items: ["Sesam"] }
    ]
  },
  {
    id: "gnocchipfanne", name: "Gnocchi-Pfanne mit Zucchini und Mozzarella", origin: "Italien", flag: "IT", time: 20,
    colors: ["#E4C98F", "#F6EEDA", "#A9BC83", "#CF8E66"],
    kid: "Gnocchi und Cherrytomaten halbieren oder vierteln (Verschluckgefahr bei ganzen Tomaten).",
    ingredients: [
      ["Gnocchi", 500, "g", "fresh"], ["Zucchini", 2, "Stk", "veg"], ["Cherrytomaten", 250, "g", "veg"],
      ["Mozzarella", 125, "g", "fresh"], ["Basilikum", 1, "Topf", "veg"], ["Olivenöl", 2, "EL", "pantry"], ["Knoblauch", 1, "Zehe", "veg"]
    ],
    steps: [
      { icon: "chop", text: "Zucchini in Scheiben, Tomaten halbieren, Mozzarella zupfen.", items: ["Zucchini", "Cherrytomaten", "Mozzarella"] },
      { icon: "pan", text: "Gnocchi in Öl 6 Minuten goldbraun braten.", timer: 360, items: ["Gnocchi", "Olivenöl"] },
      { icon: "pan", text: "Zucchini und Knoblauch dazu, 5 Minuten braten. Tomaten 2 Minuten mitgaren.", timer: 420, items: ["Zucchini", "Knoblauch", "Cherrytomaten"] },
      { icon: "oven", text: "Mozzarella drauf, Deckel auflegen und 2 Minuten schmelzen lassen.", timer: 120, items: [] },
      { icon: "serve", text: "Mit Basilikum servieren.", items: ["Basilikum"] }
    ]
  },
  {
    id: "minitacos", name: "Mini-Tacos mit Hendl und Avocado", origin: "Mexiko", flag: "MX", time: 25,
    colors: ["#D8A869", "#F3E8CC", "#8FA86B", "#C0724A"],
    kid: "Ohne Chili füllen, Mais abseihen und leicht zerdrücken. Taco als Fingerfood in Streifen schneiden.",
    ingredients: [
      ["Hendlbrust", 400, "g", "meat"], ["Weizentortillas (klein)", 8, "Stk", "bread"], ["Avocado", 2, "Stk", "veg"],
      ["Mais (Dose)", 150, "g", "dry"], ["Tomaten", 2, "Stk", "veg"], ["Naturjoghurt", 100, "g", "fresh"],
      ["Paprikapulver edelsüß", 1, "TL", "pantry"], ["Kreuzkümmel", 1, "TL", "pantry"], ["Limette", 1, "Stk", "veg"], ["Öl", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Hendl in schmale Streifen schneiden, mit Paprikapulver und Kreuzkümmel mischen.", items: ["Hendlbrust", "Paprikapulver", "Kreuzkümmel"] },
      { icon: "pan", text: "In Öl 8 Minuten durchbraten, Mais die letzten 2 Minuten dazu.", timer: 480, items: ["Öl", "Mais"] },
      { icon: "mix", text: "Avocado mit Limettensaft zerdrücken, Tomaten würfeln.", items: ["Avocado", "Limette", "Tomaten"] },
      { icon: "pan", text: "Tortillas kurz in der trockenen Pfanne erwärmen.", items: ["Tortillas"] },
      { icon: "serve", text: "Füllung, Avocado und Joghurt auf den Tortillas verteilen.", items: ["Joghurt"] }
    ]
  },
  {
    id: "butterchicken", name: "Mildes Butter-Chicken mit Basmatireis", origin: "Indien", flag: "IN", time: 30,
    colors: ["#D98E5A", "#F4E4C4", "#B8663E", "#A9BA86"],
    kid: "Ohne Chili kochen, nur mild würzen. Hendlstücke klein schneiden, Reis leicht anfeuchten.",
    ingredients: [
      ["Hendlbrust", 450, "g", "meat"], ["Basmatireis", 250, "g", "dry"], ["Passierte Tomaten", 400, "g", "dry"],
      ["Schlagobers", 150, "ml", "fresh"], ["Zwiebel", 1, "Stk", "veg"], ["Knoblauch", 1, "Zehe", "veg"],
      ["Garam Masala", 2, "TL", "pantry"], ["Butter", 1, "EL", "pantry"], ["Naturjoghurt", 100, "g", "fresh"], ["Koriander", 1, "Bund", "veg"]
    ],
    steps: [
      { icon: "rice", text: "Reis nach Packung kochen.", timer: 780, items: ["Basmatireis"] },
      { icon: "chop", text: "Hendl würfeln und mit Joghurt und 1 TL Garam Masala mischen. Zwiebel und Knoblauch hacken.", items: ["Hendlbrust", "Joghurt", "Garam Masala", "Zwiebel", "Knoblauch"] },
      { icon: "pan", text: "Zwiebel in Butter 4 Minuten anschwitzen, Hendl 6 Minuten mitbraten.", timer: 600, items: ["Butter"] },
      { icon: "boil", text: "Tomaten und restliches Garam Masala dazu, 10 Minuten köcheln. Schlagobers einrühren.", timer: 600, items: ["Passierte Tomaten", "Schlagobers"] },
      { icon: "serve", text: "Mit Reis und Koriander servieren.", items: ["Koriander"] }
    ]
  },
  {
    id: "misoahornhendl", name: "Miso-Ahorn-Hendl vom Blech mit Erdäpfeln", origin: "USA", flag: "US", time: 15, wait: 40,
    colors: ["#C8743F", "#F4ECDF", "#E9C98E", "#8FAE7F"], kid: "",
    source: { name: "Carolina Gelen", url: "https://www.instagram.com/carolinagelen/", instagram: "https://www.instagram.com/carolinagelen/", handle: "@carolinagelen" },
    ingredients: [
      ["Hendl-Oberkeulen ohne Knochen", 600, "g", "meat"], ["Erdäpfel festkochend", 700, "g", "veg"], ["Zwiebeln", 2, "Stk", "veg"],
      ["Knoblauch", 2, "Zehe", "veg"], ["Frühlingszwiebeln", 2, "Stk", "veg"], ["Helle Misopaste", 2, "EL", "fresh"],
      ["Ahornsirup", 3, "EL", "pantry"], ["Sojasauce (salzreduziert)", 1, "EL", "pantry"], ["Olivenöl", 3, "EL", "pantry"], ["Sesam", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "oven", text: "Heize den Ofen auf 220 Grad Ober-/Unterhitze vor. Lege ein großes Backblech mit Backpapier aus." },
      { icon: "mix", text: "Rühre in einer großen Schüssel {Helle Misopaste}, {Ahornsirup}, {Sojasauce (salzreduziert)} und {Olivenöl} glatt. Presse {Knoblauch} mit der Knoblauchpresse dazu und rühre um. Das ist die Miso-Ahorn-Sauce." },
      { icon: "chop", text: "Wasche {Erdäpfel festkochend} gründlich, schälen musst du sie nicht. Schneide sie in etwa 2 cm große Stücke. Schäle {Zwiebeln} und schneide sie in dicke Spalten (jede Zwiebel in 8 Teile)." },
      { icon: "mix", text: "Gib Erdäpfel und Zwiebeln in die Schüssel und mische sie mit gut zwei Dritteln der Sauce, bis alles glänzt. Verteile sie in einer Lage auf dem Blech." },
      { icon: "mix", text: "Tupfe {Hendl-Oberkeulen ohne Knochen} mit Küchenpapier trocken. Wende sie in der restlichen Sauce in der Schüssel und lege sie flach auf die Erdäpfel." },
      { icon: "oven", text: "Schiebe das Blech auf die mittlere Schiene und backe alles 35 bis 40 Minuten, bis die Erdäpfel weich und an den Rändern dunkelbraun und klebrig sind und das Hendl innen nicht mehr rosa ist.", timer: 2400 },
      { icon: "chop", text: "Schneide in der Zwischenzeit {Frühlingszwiebeln} in feine Ringe." },
      { icon: "serve", text: "Verteile Hendl und Erdäpfel auf Teller oder Schüsseln. Streue die Frühlingszwiebeln und {Sesam} darüber." }
    ]
  },
  {
    id: "groestl", name: "Tiroler Gröstl mit Spiegelei", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#C69A6A", "#F4ECDF", "#E9C98E", "#8FAE7F"], kid: "",
    ingredients: [
      ["Speckige Erdäpfel", 700, "g", "veg"], ["Zwiebel", 1, "Stk", "veg"], ["Selchfleisch oder Kochschinken", 200, "g", "meat"], ["Eier", 3, "Stk", "fresh"], ["Butterschmalz", 2, "EL", "pantry"], ["Kümmel", 0.5, "TL", "pantry"], ["Petersilie", 0.5, "Bund", "veg"]
    ],
    steps: [
      { icon: "boil", text: "Wasche {Speckige Erdäpfel} und koche sie mit Schale in einem Topf mit Salzwasser 20 Minuten, bis du sie mit einem Messer leicht anstechen kannst. Abgießen und kurz ausdampfen lassen.", timer: 1200 },
      { icon: "chop", text: "Schäle die Erdäpfel, solange sie noch warm sind, und schneide sie in 5 mm dicke Scheiben. Schäle {Zwiebel} und schneide sie in feine Streifen. Schneide {Selchfleisch oder Kochschinken} in kleine Würfel von etwa 1 cm." },
      { icon: "pan", text: "Erhitze {Butterschmalz} in einer großen Pfanne auf mittlerer bis starker Hitze. Brate die Erdäpfel 8 Minuten, ohne viel zu rühren, bis sie unten goldbraun und knusprig sind. Dann wenden.", timer: 480 },
      { icon: "pan", text: "Gib Zwiebel, Fleisch und {Kümmel} dazu und brate alles weitere 5 Minuten, bis die Zwiebel weich und das Fleisch leicht gebräunt ist. Mit Salz und Pfeffer würzen.", timer: 300 },
      { icon: "pan", text: "Schiebe das Gröstl an den Rand oder halte es warm. Brate {Eier} in einer zweiten kleinen Pfanne mit etwas Fett 3 Minuten als Spiegeleier, bis das Eiweiß fest ist.", timer: 180 },
      { icon: "serve", text: "Hacke {Petersilie} fein. Gröstl auf Teller verteilen, je ein Spiegelei darauflegen und mit Petersilie bestreuen." }
    ]
  },
  {
    id: "faschiertesauflauf", name: "Erdäpfel-Faschiertes-Auflauf mit Käsehaube", origin: "Österreich", flag: "AT", time: 25, wait: 30,
    colors: ["#B5482F", "#F3E6D3", "#E9C98E", "#7F9E5E"], kid: "",
    ingredients: [
      ["Mehlige Erdäpfel", 700, "g", "veg"], ["Gemischtes Faschiertes", 400, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"], ["Karotte", 1, "Stk", "veg"], ["Passierte Paradeiser", 400, "g", "dry"], ["Milch", 150, "ml", "fresh"], ["Butter", 20, "g", "fresh"], ["Geriebener Käse", 100, "g", "fresh"], ["Olivenöl", 1, "EL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Schäle {Mehlige Erdäpfel}, schneide sie in grobe Stücke und koche sie in Salzwasser 15 Minuten, bis sie ganz weich sind.", timer: 900 },
      { icon: "chop", text: "Heize den Ofen auf 200 Grad Ober-/Unterhitze vor. Schäle {Zwiebel} und hacke sie fein. Schäle {Karotte} und reibe sie fein." },
      { icon: "pan", text: "Erhitze {Olivenöl} in einer großen Pfanne auf starker Hitze. Brate {Gemischtes Faschiertes} 5 Minuten krümelig, bis kein Rosa mehr zu sehen ist. Gib Zwiebel und Karotte dazu und brate sie 3 Minuten mit.", timer: 480 },
      { icon: "boil", text: "Gieße {Passierte Paradeiser} dazu, würze mit Salz und Pfeffer und lass die Sauce 5 Minuten bei mittlerer Hitze einköcheln.", timer: 300 },
      { icon: "mix", text: "Gieße die Erdäpfel ab und stampfe sie mit {Milch} und {Butter} zu einem glatten Püree. Mit Salz und einer Prise Muskat abschmecken." },
      { icon: "oven", text: "Fülle das Faschierte in eine Auflaufform, streiche das Püree darauf und streue {Geriebener Käse} darüber. 25 bis 30 Minuten backen, bis der Käse goldbraun ist.", timer: 1800 },
      { icon: "serve", text: "5 Minuten ruhen lassen, dann mit einem großen Löffel portionieren. Dazu passt grüner Salat." }
    ]
  },
  {
    id: "champignonhuhn", name: "Huhn in Champignonrahm mit Spätzle", origin: "Österreich", flag: "AT", time: 25,
    colors: ["#D9BC94", "#F4F1EA", "#8C5A3C", "#9FB07E"], kid: "",
    ingredients: [
      ["Hühnerbrust", 450, "g", "meat"], ["Champignons", 250, "g", "veg"], ["Zwiebel", 1, "Stk", "veg"], ["Spätzle (Kühlregal)", 500, "g", "fresh"], ["Schlagobers", 200, "ml", "fresh"], ["Hühnersuppe oder Gemüsebrühe", 150, "ml", "pantry"], ["Butter", 20, "g", "fresh"], ["Öl", 1, "EL", "pantry"], ["Petersilie", 0.5, "Bund", "veg"]
    ],
    steps: [
      { icon: "chop", text: "Schneide {Hühnerbrust} in mundgerechte Streifen von etwa 1 cm Breite. Putze {Champignons} mit Küchenpapier und schneide sie in Scheiben. Schäle {Zwiebel} und hacke sie fein." },
      { icon: "pan", text: "Erhitze {Öl} in einer großen Pfanne auf starker Hitze. Brate das Huhn 5 Minuten rundum an, bis es außen goldbraun und innen nicht mehr rosa ist. Herausnehmen und auf einen Teller legen.", timer: 300 },
      { icon: "pan", text: "Gib Zwiebel und Champignons in dieselbe Pfanne und brate sie auf mittlerer Hitze 5 Minuten, bis die Pilze Farbe bekommen und das Wasser verdampft ist.", timer: 300 },
      { icon: "boil", text: "Gieße {Hühnersuppe oder Gemüsebrühe} und {Schlagobers} dazu und lass die Sauce 4 Minuten köcheln, bis sie leicht dick ist. Gib das Huhn zurück und würze mit Salz und Pfeffer.", timer: 240 },
      { icon: "pan", text: "Lass {Butter} in einer zweiten Pfanne schmelzen und schwenke {Spätzle (Kühlregal)} darin 4 Minuten, bis sie heiß sind und leicht knusprig werden.", timer: 240 },
      { icon: "serve", text: "Hacke {Petersilie} fein. Spätzle auf Teller verteilen, Champignonrahm darübergeben und mit Petersilie bestreuen." }
    ]
  },
  {
    id: "topfenknoedel", name: "Topfenknödel mit Butterbröseln und Zwetschkenröster", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#E9C98E", "#F4ECDF", "#8C3A5B", "#D99C8A"], kid: "",
    ingredients: [
      ["Topfen (20 %)", 500, "g", "fresh"], ["Eier", 2, "Stk", "fresh"], ["Weizengrieß", 100, "g", "dry"], ["Semmelbrösel", 120, "g", "bread"], ["Butter", 80, "g", "fresh"], ["Zucker", 2, "EL", "pantry"], ["Zwetschkenröster (Glas)", 1, "Glas", "dry"], ["Zimt", 0.5, "TL", "pantry"]
    ],
    steps: [
      { icon: "mix", text: "Verrühre {Topfen (20 %)}, {Eier}, {Weizengrieß} und 1 Prise Salz in einer Schüssel zu einem glatten Teig. 15 Minuten im Kühlschrank rasten lassen, damit der Grieß quillt.", timer: 900 },
      { icon: "boil", text: "Bring in einem großen Topf reichlich Wasser mit 1 Prise Salz zum Kochen." },
      { icon: "pan", text: "Lass {Butter} in einer Pfanne auf mittlerer Hitze schmelzen. Röste {Semmelbrösel} darin unter Rühren 4 Minuten, bis sie goldbraun sind. Rühre {Zucker} und {Zimt} unter und nimm die Pfanne vom Herd.", timer: 240 },
      { icon: "chop", text: "Forme mit nassen Händen aus dem Teig 9 bis 10 Knödel, etwa so groß wie ein Tischtennisball." },
      { icon: "boil", text: "Lege die Knödel ins Wasser, schalte auf kleine Flamme und lass sie 10 Minuten leicht ziehen, nicht sprudelnd kochen. Sie sind fertig, wenn sie oben schwimmen.", timer: 600 },
      { icon: "serve", text: "Hebe die Knödel mit einem Schaumlöffel heraus und wälze sie in den Butterbröseln. Erwärme {Zwetschkenröster (Glas)} kurz und serviere ihn dazu." }
    ]
  },
  {
    id: "gefuelltezucchini", name: "Gefüllte Zucchini mit Faschiertem und Reis", origin: "Österreich", flag: "AT", time: 25, wait: 25,
    colors: ["#7F9E5E", "#F3E6D3", "#B5482F", "#E9C98E"], kid: "",
    ingredients: [
      ["Zucchini", 3, "Stk", "veg"], ["Rinderfaschiertes", 300, "g", "meat"], ["Langkornreis", 100, "g", "dry"], ["Zwiebel", 1, "Stk", "veg"], ["Knoblauch", 1, "Zehe", "veg"], ["Passierte Paradeiser", 400, "g", "dry"], ["Geriebener Käse", 80, "g", "fresh"], ["Olivenöl", 1, "EL", "pantry"], ["Oregano", 1, "TL", "pantry"]
    ],
    steps: [
      { icon: "rice", text: "Koche {Langkornreis} nach Packungsangabe in leicht gesalzenem Wasser, etwa 12 Minuten. Heize den Ofen auf 200 Grad Ober-/Unterhitze vor.", timer: 720 },
      { icon: "chop", text: "Halbiere {Zucchini} der Länge nach und kratze das weiche Innere mit einem Teelöffel heraus, sodass ein 1 cm dicker Rand bleibt. Hacke das Innere fein. Schäle {Zwiebel} und hacke sie fein, presse {Knoblauch}." },
      { icon: "pan", text: "Erhitze {Olivenöl} in einer Pfanne auf starker Hitze. Brate {Rinderfaschiertes} 4 Minuten krümelig an, gib Zwiebel, Knoblauch und das gehackte Zucchini-Innere dazu und brate alles 4 Minuten weiter.", timer: 480 },
      { icon: "mix", text: "Mische den Reis und {Oregano} unter das Faschierte und würze kräftig mit Salz und Pfeffer." },
      { icon: "oven", text: "Gieße {Passierte Paradeiser} in eine Auflaufform und würze sie mit etwas Salz. Lege die Zucchinihälften hinein, fülle sie mit der Masse und streue {Geriebener Käse} darauf. 25 Minuten backen, bis die Zucchini weich und der Käse goldbraun ist.", timer: 1500 },
      { icon: "serve", text: "Je eine oder zwei Hälften mit etwas Paradeisersauce auf die Teller geben." }
    ]
  },
  {
    id: "bratwuerstel", name: "Bratwürstel mit Sauerkraut und Erdäpfelpüree", origin: "Österreich", flag: "AT", time: 30,
    colors: ["#C8743F", "#F4ECDF", "#E8D2B0", "#9FB07E"], kid: "",
    ingredients: [
      ["Bratwürstel", 6, "Stk", "meat"], ["Sauerkraut", 500, "g", "fresh"], ["Mehlige Erdäpfel", 700, "g", "veg"], ["Milch", 150, "ml", "fresh"], ["Butter", 30, "g", "fresh"], ["Zwiebel", 1, "Stk", "veg"], ["Öl", 1, "EL", "pantry"], ["Kümmel", 0.5, "TL", "pantry"]
    ],
    steps: [
      { icon: "boil", text: "Schäle {Mehlige Erdäpfel}, schneide sie in grobe Stücke und koche sie in Salzwasser 18 Minuten, bis sie ganz weich sind.", timer: 1080 },
      { icon: "chop", text: "Schäle {Zwiebel} und schneide sie in feine Würfel. Lass {Sauerkraut} in einem Sieb abtropfen, wenn sehr viel Saft dabei ist." },
      { icon: "boil", text: "Brate die Zwiebel in einem Topf mit der Hälfte von {Butter} 3 Minuten glasig. Gib Sauerkraut, {Kümmel} und 100 ml Wasser dazu und lass es mit Deckel auf kleiner Flamme 15 Minuten dünsten.", timer: 900 },
      { icon: "pan", text: "Erhitze {Öl} in einer Pfanne auf mittlerer Hitze. Brate {Bratwürstel} 10 bis 12 Minuten und wende sie immer wieder, bis sie rundum braun und durch sind.", timer: 720 },
      { icon: "mix", text: "Gieße die Erdäpfel ab. Erwärme {Milch} kurz und stampfe die Erdäpfel mit Milch und der restlichen Butter zu einem cremigen Püree. Mit Salz abschmecken." },
      { icon: "serve", text: "Püree, Sauerkraut und Würstel auf die Teller verteilen. Fürs schnellere Essen die Würstel in Scheiben schneiden." }
    ]
  },
  {
    id: "kuerbislasagne", name: "Kürbis-Ricotta-Lasagne", origin: "Italien", flag: "IT", time: 25, wait: 35,
    colors: ["#E39B4F", "#F4ECDF", "#7F9E5E", "#E9C98E"], kid: "",
    ingredients: [
      ["Hokkaido-Kürbis", 800, "g", "veg"], ["Ricotta", 250, "g", "fresh"], ["Lasagneblätter", 250, "g", "dry"], ["Babyspinat", 100, "g", "veg"], ["Milch", 300, "ml", "fresh"], ["Mozzarella", 125, "g", "fresh"], ["Parmesan", 40, "g", "fresh"], ["Olivenöl", 2, "EL", "pantry"], ["Muskatnuss", 0, "", "pantry"]
    ],
    steps: [
      { icon: "oven", text: "Heize den Ofen auf 200 Grad Ober-/Unterhitze vor. Wasche {Hokkaido-Kürbis}, halbiere ihn, kratze die Kerne heraus und schneide ihn mit Schale in 1 cm große Würfel." },
      { icon: "boil", text: "Gib die Kürbiswürfel mit {Olivenöl} und 150 ml Wasser in einen breiten Topf. Mit Deckel auf mittlerer Hitze 12 Minuten weich dünsten, dann mit dem Stabmixer oder einer Gabel grob zerdrücken. Mit Salz würzen.", timer: 720 },
      { icon: "mix", text: "Verrühre {Ricotta} mit {Milch}, einer Prise {Muskatnuss} und Salz zu einer cremigen Sauce. Hacke {Babyspinat} grob und mische ihn unter das Kürbismus." },
      { icon: "mix", text: "Streiche in einer Auflaufform etwas Ricottasauce auf den Boden. Schichte dann abwechselnd {Lasagneblätter}, Kürbis und Ricottasauce, drei Lagen. Oben mit Ricottasauce abschließen." },
      { icon: "oven", text: "Zupfe {Mozzarella} in kleine Stücke, verteile ihn darauf und reibe {Parmesan} darüber. 30 bis 35 Minuten backen, bis die Nudeln weich sind und oben alles goldbraun blubbert.", timer: 2100 },
      { icon: "serve", text: "10 Minuten ruhen lassen, dann schneiden. So fällt die Lasagne nicht auseinander." }
    ]
  },
  {
    id: "oyakodon", name: "Oyakodon – Huhn mit Ei auf Reis", origin: "Japan", flag: "JP", time: 25,
    colors: ["#E9C98E", "#F5F1E8", "#8FAE7F", "#C8743F"], kid: "",
    ingredients: [
      ["Sushi- oder Jasminreis", 250, "g", "dry"], ["Hühneroberkeulen ohne Haut", 400, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"], ["Eier", 4, "Stk", "fresh"], ["Sojasauce (salzreduziert)", 2, "EL", "pantry"], ["Honig", 1, "TL", "pantry"], ["Gemüsebrühe", 200, "ml", "pantry"], ["Frühlingszwiebel", 1, "Stk", "veg"]
    ],
    steps: [
      { icon: "rice", text: "Wasche {Sushi- oder Jasminreis} in einem Sieb, bis das Wasser klar ist. Koche ihn mit der eineinhalbfachen Menge Wasser auf und lass ihn mit Deckel auf kleinster Flamme 15 Minuten quellen.", timer: 900 },
      { icon: "chop", text: "Schneide {Hühneroberkeulen ohne Haut} in kleine Stücke von etwa 2 cm. Schäle {Zwiebel} und schneide sie in dünne Streifen." },
      { icon: "boil", text: "Gib {Gemüsebrühe}, {Sojasauce (salzreduziert)} und {Honig} in eine breite Pfanne mit Deckel und bring alles zum Köcheln. Lege Zwiebel und Huhn hinein und lass es 8 Minuten zugedeckt köcheln, bis das Huhn durch ist.", timer: 480 },
      { icon: "mix", text: "Verquirle {Eier} in einer Schüssel nur kurz mit der Gabel, es dürfen noch Streifen von Eiweiß zu sehen sein." },
      { icon: "pan", text: "Gieße die Eier gleichmäßig über das Huhn, lege den Deckel auf und lass alles auf kleiner Flamme 2 bis 3 Minuten stocken, bis das Ei fast fest, aber noch saftig ist.", timer: 180 },
      { icon: "serve", text: "Schneide {Frühlingszwiebel} in feine Ringe. Reis in Schüsseln füllen, Huhn mit Ei und etwas Sud darübergeben und mit Frühlingszwiebel bestreuen." }
    ]
  },
  {
    id: "shepherdspie", name: "Shepherd's Pie mit Faschiertem und Erbsen", origin: "Großbritannien", flag: "GB", time: 25, wait: 25,
    colors: ["#C69A6A", "#F4F1EA", "#7F9E5E", "#E2D3BC"], kid: "",
    ingredients: [
      ["Mehlige Erdäpfel", 800, "g", "veg"], ["Rinderfaschiertes", 400, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"], ["Karotten", 2, "Stk", "veg"], ["Erbsen", 150, "g", "frozen"], ["Tomatenmark", 1, "EL", "pantry"], ["Rindssuppe oder Gemüsebrühe", 200, "ml", "pantry"], ["Milch", 150, "ml", "fresh"], ["Butter", 30, "g", "fresh"], ["Geriebener Käse", 60, "g", "fresh"]
    ],
    steps: [
      { icon: "boil", text: "Schäle {Mehlige Erdäpfel}, schneide sie in grobe Stücke und koche sie in Salzwasser 15 Minuten, bis sie ganz weich sind.", timer: 900 },
      { icon: "chop", text: "Heize den Ofen auf 200 Grad Ober-/Unterhitze vor. Schäle {Zwiebel} und hacke sie fein. Schäle {Karotten} und schneide sie in kleine Würfel von etwa 5 mm." },
      { icon: "pan", text: "Brate {Rinderfaschiertes} in einer großen Pfanne auf starker Hitze 5 Minuten krümelig. Gib Zwiebel und Karotten dazu und brate sie 3 Minuten mit. Rühre {Tomatenmark} ein und brate es 1 Minute mit.", timer: 540 },
      { icon: "boil", text: "Gieße {Rindssuppe oder Gemüsebrühe} dazu und lass alles 8 Minuten köcheln, bis die Sauce dick ist. Rühre {Erbsen} unter und würze mit Salz und Pfeffer.", timer: 480 },
      { icon: "mix", text: "Gieße die Erdäpfel ab und stampfe sie mit {Milch} und {Butter} zu einem glatten Püree." },
      { icon: "oven", text: "Fülle das Faschierte in eine Auflaufform, verteile das Püree darauf und ziehe mit einer Gabel Rillen hinein. Streue {Geriebener Käse} darüber und backe alles 20 bis 25 Minuten, bis die Oberfläche goldbraun ist.", timer: 1500 },
      { icon: "serve", text: "5 Minuten stehen lassen, dann mit einem großen Löffel auf die Teller geben." }
    ]
  },
  {
    id: "tajine", name: "Milde Huhn-Tajine mit Karotten und Couscous", origin: "Marokko", flag: "MA", time: 30,
    colors: ["#D98E5A", "#F4E4C4", "#E9C98E", "#8FAE7F"], kid: "",
    ingredients: [
      ["Hühneroberkeulen ohne Haut", 500, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"], ["Karotten", 3, "Stk", "veg"], ["Kichererbsen (Dose)", 1, "Dose", "dry"], ["Getrocknete Marillen", 60, "g", "dry"], ["Gemüsebrühe", 300, "ml", "pantry"], ["Kreuzkümmel", 1, "TL", "pantry"], ["Zimt", 0.5, "TL", "pantry"], ["Couscous", 200, "g", "dry"], ["Olivenöl", 2, "EL", "pantry"]
    ],
    steps: [
      { icon: "chop", text: "Schneide {Hühneroberkeulen ohne Haut} in Stücke von etwa 3 cm. Schäle {Zwiebel} und hacke sie fein. Schäle {Karotten} und schneide sie in 1 cm dicke Scheiben. Schneide {Getrocknete Marillen} in kleine Stücke." },
      { icon: "pan", text: "Erhitze {Olivenöl} in einem breiten Topf auf mittlerer bis starker Hitze. Brate das Huhn 5 Minuten rundum an. Gib Zwiebel, {Kreuzkümmel} und {Zimt} dazu und brate alles 2 Minuten, bis es duftet.", timer: 420 },
      { icon: "boil", text: "Gib Karotten, Marillen und {Gemüsebrühe} dazu. Gieße {Kichererbsen (Dose)} in ein Sieb, spüle sie ab und gib sie auch in den Topf. Mit Deckel auf kleiner Flamme 15 Minuten schmoren, bis die Karotten weich sind.", timer: 900 },
      { icon: "boil", text: "Bring in der Zwischenzeit 250 ml Wasser mit 1 Prise Salz zum Kochen. Gieße es über {Couscous} in einer Schüssel, decke sie mit einem Teller ab und lass den Couscous 5 Minuten quellen. Dann mit einer Gabel auflockern.", timer: 300 },
      { icon: "serve", text: "Tajine mit Salz abschmecken und mit dem Couscous servieren. Wer mag, streut gehackte Petersilie oder Koriander darüber." }
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
  bulgur: ["fleisch", "pfanne", "orientalisch"],
  paprikahendl: ["huhn", "pfanne", "österreichisch", "rahm"], faschiertelaibchen: ["faschiert", "pfanne", "österreichisch", "fingerfood"],
  faschiertebaellchen: ["faschiert", "topf", "österreichisch", "pasta"], faschierterbraten: ["faschiert", "ofen", "österreichisch"],
  onepotbolo: ["faschiert", "onepot", "pasta", "mediterran"], onepotpesto: ["vegetarisch", "onepot", "pasta", "mediterran"],
  onepotrahm: ["fleisch", "onepot", "pasta", "rahm", "österreichisch"], onepotlachs: ["fisch", "onepot", "pasta", "rahm"],
  kartoffelauflauf: ["fleisch", "ofen", "auflauf", "österreichisch", "rahm"], zucchiniquiche: ["faschiert", "ofen", "auflauf"],
  pikantepalatschinken: ["fleisch", "ofen", "auflauf", "österreichisch", "rahm"], wuerstel: ["fleisch", "rahm", "österreichisch", "topf"],
  kartoffelgulasch: ["fleisch", "topf", "österreichisch"], tantanmen: ["faschiert", "asiatisch", "pasta"],
  kasnocken: ["vegetarisch", "pfanne", "österreichisch"], grenadiermarsch: ["fleisch", "pfanne", "österreichisch", "ei"],
  schinkenfleckerl: ["fleisch", "ofen", "auflauf", "österreichisch", "pasta"], hendlstreifen: ["huhn", "pfanne", "österreichisch", "fingerfood"],
  griessschmarrn: ["vegetarisch", "süß", "pfanne", "österreichisch"], spinatknoedel: ["vegetarisch", "topf", "österreichisch"],
  erdaepfelpuffer: ["vegetarisch", "pfanne", "österreichisch", "fingerfood"], hendlrahm: ["huhn", "pfanne", "österreichisch", "rahm", "pasta"],
  krautfleckerl: ["fleisch", "pfanne", "österreichisch", "pasta"], reisfleisch: ["faschiert", "topf", "onepot", "österreichisch"],
  putenschnitzel: ["fleisch", "ofen", "österreichisch", "fingerfood"], zucchinipesto: ["vegetarisch", "pasta", "mediterran"],
  bulgogi: ["faschiert", "pfanne", "asiatisch"], gnocchipfanne: ["vegetarisch", "pfanne", "mediterran"],
  minitacos: ["huhn", "pfanne", "fingerfood"], butterchicken: ["huhn", "topf", "orientalisch", "rahm"],
  misoahornhendl: ["huhn", "ofen", "asiatisch", "onepot"],
  groestl: ["fleisch", "pfanne", "österreichisch", "ei"], faschiertesauflauf: ["faschiert", "ofen", "auflauf", "österreichisch"], champignonhuhn: ["huhn", "pfanne", "österreichisch", "rahm"], topfenknoedel: ["vegetarisch", "süß", "topf", "österreichisch"], gefuelltezucchini: ["faschiert", "ofen", "österreichisch"], bratwuerstel: ["fleisch", "pfanne", "österreichisch"], kuerbislasagne: ["vegetarisch", "ofen", "auflauf", "mediterran", "pasta"], oyakodon: ["huhn", "asiatisch", "reis", "ei", "bowl"], shepherdspie: ["faschiert", "ofen", "auflauf"], tajine: ["huhn", "topf", "orientalisch"]
};
RECIPES.forEach(r => { r.tags = TAGS[r.id] || []; });
