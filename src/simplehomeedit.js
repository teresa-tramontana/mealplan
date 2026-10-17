// 20 Rezepte nach Simple Home Edit (https://simplehomeedit.com/recipes/), ins Deutsche übertragen,
// gekürzt und auf 2 Große + 1 Kleines angepasst. Jedes Rezept verlinkt auf das Original.
(function () {
  const SRC = slug => ({ name: "Simple Home Edit", url: "https://simplehomeedit.com/recipe/" + slug + "/", instagram: "https://www.instagram.com/simple.home.edit/", handle: "@simple.home.edit" });
  const C = [["#D9A066", "#F3E6D3", "#8FAE7F", "#E8D2B0"], ["#B5482F", "#F3E6D3", "#7F9E5E", "#E3C9A5"], ["#E9C98E", "#F4ECDF", "#7F9E5E", "#D99C8A"], ["#8C5A3C", "#F3E9D8", "#9FB07E", "#D9BC94"]];
  const add = (r, i) => RECIPES.push(Object.assign({ flag: "", colors: C[i % C.length], source: SRC(r.slug) }, r, { id: "she" + r.slug.replace(/[^a-z]/g, ""), tags: r.tags.concat("simplehomeedit") }));
  [
    {
      slug: "baked-chicken-rissoles", name: "Knusprige Hendl-Laibchen aus dem Ofen", origin: "Australien", time: 15, wait: 20,
      kid: "Laibchen klein formen, sie sind weich und gut zum Selberhalten.", tags: ["huhn", "faschiert", "ofen", "fingerfood"],
      ingredients: [["Hendl- oder Putenfaschiertes", 500, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"], ["Knoblauch", 1, "Zehe", "veg"], ["Petersilie", 1, "Bund", "veg"],
        ["Panko-Brösel", 60, "g", "dry"], ["Eier", 1, "Stk", "fresh"], ["Parmesan", 35, "g", "fresh"], ["Erdäpfel mehlig", 700, "g", "veg"], ["Gurke", 1, "Stk", "veg"],
        ["Sauerrahm", 100, "g", "fresh"], ["Paprikapulver edelsüß", 1, "TL", "pantry"], ["Olivenöl", 2, "EL", "pantry"]],
      steps: [
        { icon: "chop", text: "Ofen auf 220 Grad. Panko mit Parmesan und Paprikapulver in einem Teller mischen.", items: ["Panko", "Parmesan"] },
        { icon: "mix", text: "Faschiertes mit geriebener Zwiebel, Knoblauch, Petersilie, Ei und einer Handvoll Panko verkneten.", items: ["Faschiertes", "Ei", "Zwiebel"] },
        { icon: "mix", text: "Mit nassen Händen Laibchen formen, in der Bröselmischung wälzen, aufs geölte Blech legen.", items: ["Olivenöl"] },
        { icon: "oven", text: "20 Minuten backen, nach der Hälfte wenden. Parallel Erdäpfel kochen und stampfen.", timer: 1200, items: ["Erdäpfel"] },
        { icon: "serve", text: "Mit Püree und Gurken-Sauerrahm-Salat servieren.", items: ["Gurke", "Sauerrahm"] }]
    },
    {
      slug: "beef-rissoles", name: "Saftige Rindslaibchen mit Bratensaft", origin: "Australien", time: 25,
      kid: "Gut durchbraten. Laibchen in Stücke schneiden.", tags: ["faschiert", "pfanne", "fingerfood"],
      ingredients: [["Rinderfaschiertes", 500, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"], ["Knoblauch", 1, "Zehe", "veg"], ["Eier", 1, "Stk", "fresh"],
        ["Panko-Brösel", 60, "g", "dry"], ["Erdäpfel mehlig", 700, "g", "veg"], ["Brokkoli", 1, "Stk", "veg"], ["Ketchup", 1, "EL", "pantry"], ["Worcestersauce", 1, "EL", "pantry"], ["Olivenöl", 3, "EL", "pantry"]],
      steps: [
        { icon: "boil", text: "Erdäpfel würfeln und 15 Minuten kochen.", timer: 900, items: ["Erdäpfel"] },
        { icon: "mix", text: "Faschiertes mit geriebener Zwiebel, Knoblauch, Ei, Bröseln, Ketchup und Worcestersauce verkneten. Golfballgroße Laibchen formen.", items: ["Faschiertes", "Ei", "Ketchup"] },
        { icon: "pan", text: "Bei mittlerer Hitze 8 bis 10 Minuten braten, einmal wenden.", timer: 600, items: ["Olivenöl"] },
        { icon: "pan", text: "Fett abgießen, 3 EL Wasser in die heiße Pfanne, Bratrückstände lösen. Brokkoli dämpfen.", items: ["Brokkoli"] },
        { icon: "serve", text: "Laibchen mit Bratensaft, Püree und Brokkoli servieren.", items: [] }]
    },
    {
      slug: "cheeseburger-pasta", name: "One-Pot-Cheeseburger-Nudeln", origin: "USA", time: 30,
      kid: "Mild und käsig, ein sicherer Kinderliebling.", tags: ["faschiert", "onepot", "pasta"],
      ingredients: [["Rinderfaschiertes", 400, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"], ["Karotten", 2, "Stk", "veg"], ["Stangensellerie", 1, "Stk", "veg"],
        ["Hörnchennudeln", 300, "g", "dry"], ["Gehackte Tomaten", 1, "Dose", "dry"], ["Tomatenmark", 2, "EL", "dry"], ["Milch", 100, "ml", "fresh"],
        ["Geriebener Käse", 200, "g", "fresh"], ["Rindsuppe (salzarm)", 800, "ml", "pantry"], ["Oregano", 1, "TL", "pantry"], ["Olivenöl", 2, "EL", "pantry"]],
      steps: [
        { icon: "chop", text: "Zwiebel, Karotten und Sellerie fein würfeln.", items: ["Zwiebel", "Karotten", "Sellerie"] },
        { icon: "pan", text: "Gemüse in Öl 3 Minuten weich dünsten, Faschiertes dazu und krümelig braten.", timer: 360, items: ["Faschiertes"] },
        { icon: "pan", text: "Oregano und Tomatenmark 1 Minute mitrösten.", items: ["Tomatenmark", "Oregano"] },
        { icon: "boil", text: "Suppe, Tomaten und Nudeln dazu. Zugedeckt 15 Minuten köcheln, ab und zu rühren.", timer: 900, items: ["Nudeln", "Tomaten", "Suppe"] },
        { icon: "serve", text: "Milch und Käse einrühren, bis alles cremig ist.", items: ["Milch", "Käse"] }]
    },
    {
      slug: "creamy-garlic-chicken", name: "Hendl in Knoblauch-Rahmsauce", origin: "Australien", time: 20,
      kid: "Hendl klein schneiden, Sauce über Reis oder Püree.", tags: ["huhn", "pfanne", "rahm"],
      ingredients: [["Hendlbrust", 500, "g", "meat"], ["Knoblauch", 3, "Zehe", "veg"], ["Schlagobers", 250, "ml", "fresh"], ["Parmesan", 40, "g", "fresh"],
        ["Reis", 250, "g", "dry"], ["Fisolen", 300, "g", "veg"], ["Hühnersuppe (salzarm)", 125, "ml", "pantry"], ["Mehl", 3, "EL", "pantry"],
        ["Dijonsenf", 1, "TL", "pantry"], ["Thymian getrocknet", 1, "TL", "pantry"], ["Butter", 20, "g", "pantry"]],
      steps: [
        { icon: "rice", text: "Reis aufsetzen, 15 Minuten.", timer: 900, items: ["Reis"] },
        { icon: "chop", text: "Hendlbrust waagrecht halbieren, mit Thymian würzen und in Mehl wenden.", items: ["Hendl", "Mehl", "Thymian"] },
        { icon: "pan", text: "In Butter und Öl 5 bis 6 Minuten braten, herausnehmen.", timer: 360, items: ["Butter"] },
        { icon: "boil", text: "Knoblauch kurz anschwitzen, Suppe dazu und um die Hälfte einkochen. Obers und Senf einrühren, 2 Minuten köcheln.", timer: 120, items: ["Knoblauch", "Obers", "Senf"] },
        { icon: "serve", text: "Parmesan einrühren, Hendl zurück in die Sauce. Mit Reis und gedämpften Fisolen servieren.", items: ["Parmesan", "Fisolen"] }]
    },
    {
      slug: "creamy-lemon-chicken-pasta", name: "Zitronen-Rahm-Pasta mit Hendl", origin: "Australien", time: 20,
      kid: "Hendl in Streifen schneiden. Zitrone für die Kleinen sparsam.", tags: ["huhn", "pasta", "rahm"],
      ingredients: [["Spaghetti", 300, "g", "dry"], ["Hendlbrust", 400, "g", "meat"], ["Knoblauch", 2, "Zehe", "veg"], ["Schlagobers", 300, "ml", "fresh"],
        ["Zitrone", 1, "Stk", "veg"], ["Parmesan", 60, "g", "fresh"], ["Petersilie", 1, "Bund", "veg"], ["Hühnersuppe (salzarm)", 200, "ml", "pantry"],
        ["Mehl", 1, "EL", "pantry"], ["Butter", 30, "g", "pantry"], ["Italienische Kräuter", 1, "TL", "pantry"]],
      steps: [
        { icon: "boil", text: "Nudeln 1 bis 2 Minuten kürzer kochen als angegeben.", timer: 540, items: ["Spaghetti"] },
        { icon: "pan", text: "Hendl mit Kräutern würzen und zugedeckt je Seite 2 bis 3 Minuten braten. Herausnehmen.", timer: 300, items: ["Hendl"] },
        { icon: "pan", text: "Butter und Knoblauch in die Pfanne, Mehl einrühren, mit Suppe und Obers aufgießen. 3 Minuten köcheln.", timer: 180, items: ["Butter", "Obers"] },
        { icon: "mix", text: "Herd aus. Zitronensaft und Parmesan einrühren, Nudeln untermischen.", items: ["Zitrone", "Parmesan"] },
        { icon: "serve", text: "Hendl in Streifen schneiden und mit Petersilie drauf servieren.", items: ["Petersilie"] }]
    },
    {
      slug: "creamy-mustard-chicken", name: "Senf-Rahm-Hendl mit Erdäpfelpüree", origin: "Australien", time: 30,
      kid: "Dijonsenf ist mild, aber fürs Kind lieber weniger körnigen Senf.", tags: ["huhn", "pfanne", "rahm"],
      ingredients: [["Hendlbrust", 500, "g", "meat"], ["Knoblauch", 2, "Zehe", "veg"], ["Schlagobers", 250, "ml", "fresh"], ["Parmesan", 40, "g", "fresh"],
        ["Erdäpfel mehlig", 700, "g", "veg"], ["Milch", 150, "ml", "fresh"], ["Fisolen", 300, "g", "veg"], ["Dijonsenf", 1, "EL", "pantry"],
        ["Körniger Senf", 1, "TL", "pantry"], ["Honig", 1, "TL", "pantry"], ["Hühnersuppe (salzarm)", 125, "ml", "pantry"], ["Mehl", 3, "EL", "pantry"], ["Butter", 40, "g", "pantry"]],
      steps: [
        { icon: "boil", text: "Erdäpfel würfeln und 15 Minuten kochen, mit Milch und Butter stampfen.", timer: 900, items: ["Erdäpfel", "Milch"] },
        { icon: "pan", text: "Hendl flach klopfen, mit Mehl bestäuben und je Seite 3 bis 4 Minuten goldbraun braten. Warm stellen.", timer: 420, items: ["Hendl", "Mehl"] },
        { icon: "boil", text: "Suppe in die Pfanne, Bratrückstände lösen, um die Hälfte einkochen. Butter und Knoblauch dazu.", items: ["Suppe", "Knoblauch"] },
        { icon: "mix", text: "Obers, beide Senfsorten und Honig einrühren, 3 Minuten sanft köcheln. Parmesan einrühren.", timer: 180, items: ["Obers", "Senf", "Parmesan"] },
        { icon: "serve", text: "Hendl in der Sauce 2 Minuten erwärmen. Mit Püree und Fisolen servieren.", items: ["Fisolen"] }]
    },
    {
      slug: "crispy-chicken-schnitzel-alfredo", name: "Hendlschnitzel auf Alfredo-Bandnudeln", origin: "Australien", time: 25,
      kid: "Schnitzel in schmale Streifen schneiden.", tags: ["huhn", "pasta", "rahm", "österreichisch"],
      ingredients: [["Bandnudeln", 350, "g", "dry"], ["Hendlbrust", 400, "g", "meat"], ["Eier", 1, "Stk", "fresh"], ["Semmelbrösel", 80, "g", "pantry"],
        ["Schlagobers", 300, "ml", "fresh"], ["Parmesan", 80, "g", "fresh"], ["Knoblauch", 1, "Zehe", "veg"], ["Mehl", 3, "EL", "pantry"],
        ["Butter", 30, "g", "pantry"], ["Öl", 5, "EL", "pantry"]],
      steps: [
        { icon: "chop", text: "Hendl dünn klopfen, in Mehl, Ei und Bröseln wenden.", items: ["Hendl", "Eier", "Brösel"] },
        { icon: "pan", text: "In Öl je Seite 3 Minuten goldbraun backen.", timer: 360, items: ["Öl"] },
        { icon: "boil", text: "Parallel Bandnudeln kochen, eine Tasse Nudelwasser aufheben.", timer: 540, items: ["Bandnudeln"] },
        { icon: "pan", text: "Butter und Knoblauch erhitzen, Obers dazu, Parmesan einrühren und 2 bis 3 Minuten köcheln.", timer: 180, items: ["Obers", "Parmesan"] },
        { icon: "serve", text: "Nudeln in der Sauce schwenken, Schnitzelstreifen drauf.", items: [] }]
    },
    {
      slug: "marry-me-chicken-risoni-orzo", name: "One-Pot-Rahm-Orzo mit Hendl und Spinat", origin: "Italien", time: 30,
      kid: "Getrocknete Tomaten klein hacken. Hendl in kleinen Stücken.", tags: ["huhn", "onepot", "pasta", "rahm", "mediterran"],
      ingredients: [["Hendlkeulen ohne Knochen", 500, "g", "meat"], ["Orzo (Kritharaki)", 200, "g", "dry"], ["Getrocknete Tomaten in Öl", 60, "g", "dry"],
        ["Knoblauch", 2, "Zehe", "veg"], ["Schlagobers", 200, "ml", "fresh"], ["Babyspinat", 80, "g", "veg"], ["Parmesan", 50, "g", "fresh"],
        ["Hühnersuppe (salzarm)", 500, "ml", "pantry"], ["Dijonsenf", 1, "TL", "pantry"], ["Oregano", 1, "TL", "pantry"], ["Olivenöl", 2, "EL", "pantry"]],
      steps: [
        { icon: "chop", text: "Hendl in mundgerechte Stücke, getrocknete Tomaten hacken.", items: ["Hendl", "Tomaten"] },
        { icon: "pan", text: "Hendl in Öl 3 bis 4 Minuten anbraten. Knoblauch, Tomaten und Oregano kurz mitrösten.", timer: 240, items: ["Knoblauch", "Oregano"] },
        { icon: "boil", text: "Orzo, Suppe, Senf und Obers dazu. Zugedeckt 12 bis 15 Minuten köcheln, oft umrühren.", timer: 840, items: ["Orzo", "Suppe", "Obers"] },
        { icon: "serve", text: "Vom Herd nehmen, Spinat und Parmesan einrühren.", items: ["Spinat", "Parmesan"] }]
    },
    {
      slug: "minced-ground-beef-stroganoff", name: "Faschiertes-Stroganoff mit Nudeln", origin: "Russland", time: 30,
      kid: "Champignons klein schneiden. Sauerrahm macht es mild.", tags: ["faschiert", "pfanne", "pasta", "rahm"],
      ingredients: [["Orecchiette oder kurze Nudeln", 350, "g", "dry"], ["Rinderfaschiertes", 450, "g", "meat"], ["Champignons", 200, "g", "veg"],
        ["Zwiebel", 1, "Stk", "veg"], ["Knoblauch", 2, "Zehe", "veg"], ["Sauerrahm", 100, "g", "fresh"], ["Gurke", 1, "Stk", "veg"], ["Dill", 1, "Bund", "veg"],
        ["Tomatenmark", 2, "EL", "dry"], ["Rindsuppe (salzarm)", 500, "ml", "pantry"], ["Paprikapulver edelsüß", 1, "EL", "pantry"], ["Mehl", 2, "EL", "pantry"]],
      steps: [
        { icon: "boil", text: "Nudeln nach Packung kochen.", timer: 600, items: ["Nudeln"] },
        { icon: "pan", text: "Zwiebel 3 Minuten anschwitzen, Knoblauch und Faschiertes dazu, krümelig braten.", timer: 360, items: ["Zwiebel", "Faschiertes"] },
        { icon: "pan", text: "Champignons 4 Minuten mitbraten. Mehl, Tomatenmark und Paprikapulver einrühren.", timer: 240, items: ["Champignons", "Tomatenmark"] },
        { icon: "boil", text: "Mit Suppe aufgießen und 5 bis 7 Minuten sämig köcheln. Herd aus, Sauerrahm einrühren.", timer: 360, items: ["Suppe", "Sauerrahm"] },
        { icon: "serve", text: "Über die Nudeln geben. Gurken-Dill-Salat dazu.", items: ["Gurke", "Dill"] }]
    },
    {
      slug: "one-pot-creamy-bolognese", name: "Cremige One-Pot-Bolognese", origin: "Italien", time: 15, wait: 25,
      kid: "Ein Topf, weiche Rigatoni, wenig Parmesan fürs Kind.", tags: ["faschiert", "onepot", "pasta", "mediterran"],
      ingredients: [["Rinderfaschiertes", 450, "g", "meat"], ["Rigatoni", 350, "g", "dry"], ["Passierte Tomaten", 700, "g", "dry"], ["Zwiebel", 1, "Stk", "veg"],
        ["Karotten", 2, "Stk", "veg"], ["Stangensellerie", 1, "Stk", "veg"], ["Knoblauch", 2, "Zehe", "veg"], ["Schlagobers", 80, "ml", "fresh"],
        ["Parmesan", 40, "g", "fresh"], ["Basilikum", 1, "Topf", "veg"], ["Tomatenmark", 2, "EL", "dry"], ["Rindsuppe (salzarm)", 500, "ml", "pantry"], ["Lorbeerblätter", 2, "Stk", "pantry"]],
      steps: [
        { icon: "chop", text: "Zwiebel, Karotten und Sellerie fein hacken, in Öl 5 Minuten weich dünsten.", timer: 300, items: ["Zwiebel", "Karotten", "Sellerie"] },
        { icon: "pan", text: "Knoblauch und Faschiertes dazu, 5 Minuten braten. Tomatenmark 1 Minute mitrösten.", timer: 360, items: ["Faschiertes", "Tomatenmark"] },
        { icon: "boil", text: "Passata, Suppe, 250 ml Wasser und Lorbeer dazu, aufkochen. Rigatoni einrühren.", items: ["Passata", "Suppe", "Rigatoni"] },
        { icon: "boil", text: "Offen 18 bis 20 Minuten köcheln, regelmäßig umrühren.", timer: 1200, items: [] },
        { icon: "serve", text: "Lorbeer raus, Obers und Parmesan einrühren. Mit Basilikum servieren.", items: ["Obers", "Parmesan", "Basilikum"] }]
    },
    {
      slug: "hidden-veggie-bolognese", name: "Bolognese mit verstecktem Gemüse", origin: "Italien", time: 15, wait: 25,
      kid: "Das Gemüse ist fein gerieben und fällt nicht auf.", tags: ["faschiert", "topf", "pasta", "mediterran"],
      ingredients: [["Rinderfaschiertes", 450, "g", "meat"], ["Bandnudeln", 350, "g", "dry"], ["Passierte Tomaten", 700, "g", "dry"], ["Zwiebel", 1, "Stk", "veg"],
        ["Karotten", 2, "Stk", "veg"], ["Zucchini", 1, "Stk", "veg"], ["Champignons", 200, "g", "veg"], ["Stangensellerie", 1, "Stk", "veg"], ["Knoblauch", 1, "Zehe", "veg"],
        ["Parmesan", 40, "g", "fresh"], ["Tomatenmark", 2, "EL", "dry"], ["Rindsuppe (salzarm)", 500, "ml", "pantry"], ["Lorbeerblätter", 2, "Stk", "pantry"]],
      steps: [
        { icon: "chop", text: "Zwiebel und Sellerie fein würfeln, Karotten und Zucchini reiben, Champignons fein hacken.", items: ["Karotten", "Zucchini", "Champignons"] },
        { icon: "pan", text: "Gemüse in Öl 6 bis 8 Minuten weich dünsten.", timer: 420, items: [] },
        { icon: "pan", text: "Knoblauch und Faschiertes dazu, 3 Minuten braten. Tomatenmark einrühren.", timer: 180, items: ["Faschiertes", "Tomatenmark"] },
        { icon: "boil", text: "Passata, Suppe und Lorbeer dazu. Halb zugedeckt 25 Minuten köcheln. Parallel Nudeln kochen.", timer: 1500, items: ["Passata", "Bandnudeln"] },
        { icon: "serve", text: "Lorbeer raus, Nudeln untermischen, Parmesan drüber.", items: ["Parmesan"] }]
    },
    {
      slug: "quick-coconut-chicken-curry", name: "Schnelles Kokos-Hendl-Curry", origin: "Indien", time: 30,
      kid: "Mildes Currypulver verwenden. Joghurt macht es noch milder.", tags: ["huhn", "pfanne", "reis", "indisch"],
      ingredients: [["Hendlkeulen ohne Knochen", 500, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"], ["Knoblauch", 2, "Zehe", "veg"], ["Ingwer", 1, "Stk", "veg"],
        ["Kokosmilch", 400, "ml", "dry"], ["Tomatenmark", 2, "EL", "dry"], ["Basmatireis", 250, "g", "dry"], ["Naturjoghurt", 150, "g", "fresh"],
        ["Currypulver mild", 2, "EL", "pantry"], ["Kurkuma", 1, "TL", "pantry"], ["Hühnersuppe (salzarm)", 250, "ml", "pantry"]],
      steps: [
        { icon: "rice", text: "Reis aufsetzen, 15 Minuten.", timer: 900, items: ["Reis"] },
        { icon: "pan", text: "Zwiebel, Knoblauch und Ingwer 2 bis 3 Minuten anschwitzen. Hendlstücke 4 Minuten anbraten.", timer: 240, items: ["Zwiebel", "Ingwer", "Hendl"] },
        { icon: "pan", text: "Curry und Kurkuma 30 Sekunden mitrösten, Tomatenmark einrühren.", items: ["Curry", "Tomatenmark"] },
        { icon: "boil", text: "Suppe und Kokosmilch dazu. Offen 10 bis 12 Minuten köcheln.", timer: 660, items: ["Kokosmilch", "Suppe"] },
        { icon: "serve", text: "Mit Reis und einem Klecks Joghurt servieren.", items: ["Joghurt"] }]
    },
    {
      slug: "speedy-satay-chicken", name: "Blitz-Satay-Hendl mit Reis", origin: "Indonesien", time: 15,
      kid: "Enthält Erdnüsse: nur ohne Allergie. Gehackte Erdnüsse fürs Kind weglassen.", tags: ["huhn", "faschiert", "pfanne", "reis", "asiatisch"],
      ingredients: [["Hendlfaschiertes", 500, "g", "meat"], ["Kokosmilch", 400, "ml", "dry"], ["Erdnussmus", 90, "g", "dry"], ["Zwiebel", 1, "Stk", "veg"],
        ["Knoblauch", 2, "Zehe", "veg"], ["Jasminreis", 250, "g", "dry"], ["Gurke", 1, "Stk", "veg"], ["Limette", 1, "Stk", "veg"],
        ["Sojasauce (salzreduziert)", 1, "EL", "pantry"], ["Currypulver mild", 1, "EL", "pantry"], ["Hühnersuppe (salzarm)", 125, "ml", "pantry"]],
      steps: [
        { icon: "rice", text: "Reis aufsetzen, 15 Minuten.", timer: 900, items: ["Reis"] },
        { icon: "mix", text: "Kokosmilch, Suppe, Erdnussmus und Soja zu einer glatten Sauce verrühren.", items: ["Kokosmilch", "Erdnussmus", "Sojasauce"] },
        { icon: "pan", text: "Zwiebel und Knoblauch kurz anbraten, Faschiertes dazu und krümelig braten. Curry einrühren.", timer: 360, items: ["Faschiertes", "Curry"] },
        { icon: "boil", text: "Sauce dazu und 3 bis 4 Minuten cremig köcheln.", timer: 240, items: [] },
        { icon: "serve", text: "Über Reis geben, mit Gurke und Limette servieren.", items: ["Gurke", "Limette"] }]
    },
    {
      slug: "sticky-hoisin-beef", name: "Klebriges Hoisin-Faschiertes mit Reisnudeln", origin: "China", time: 20,
      kid: "Nudeln kurz schneiden, Erdnüsse fürs Kind weglassen.", tags: ["faschiert", "pfanne", "asiatisch"],
      ingredients: [["Rinderfaschiertes", 450, "g", "meat"], ["Breite Reisnudeln", 200, "g", "dry"], ["Chinakohl", 0.5, "Stk", "veg"], ["Karotten", 1, "Stk", "veg"],
        ["Frühlingszwiebeln", 2, "Stk", "veg"], ["Knoblauch", 2, "Zehe", "veg"], ["Hoisinsauce", 60, "ml", "dry"], ["Limette", 1, "Stk", "veg"],
        ["Sojasauce (salzreduziert)", 1, "EL", "pantry"], ["Reisessig", 1, "EL", "pantry"], ["Sesamöl", 2, "TL", "pantry"]],
      steps: [
        { icon: "boil", text: "Reisnudeln nach Packung garen, abspülen und mit etwas Sesamöl mischen.", items: ["Reisnudeln", "Sesamöl"] },
        { icon: "pan", text: "Knoblauch und das Weiße der Frühlingszwiebel 30 Sekunden anbraten, Faschiertes dazu und braun braten.", timer: 300, items: ["Faschiertes", "Knoblauch"] },
        { icon: "pan", text: "Karottenstifte und fein geschnittenen Chinakohl 2 bis 3 Minuten mitbraten.", timer: 180, items: ["Karotten", "Chinakohl"] },
        { icon: "mix", text: "Hoisin, Soja und Reisessig dazu, 2 bis 3 Minuten klebrig einkochen.", timer: 180, items: ["Hoisinsauce", "Sojasauce"] },
        { icon: "serve", text: "Auf den Nudeln anrichten, Frühlingszwiebel und Limette dazu.", items: ["Limette"] }]
    },
    {
      slug: "korean-beef-rice-bowls", name: "Koreanische Faschiertes-Reisbowl", origin: "Korea", time: 20,
      kid: "Gochujang ist scharf: Kinderportion vorher abnehmen und nur mit Soja würzen. Kimchi nur für die Großen.", tags: ["faschiert", "reis", "asiatisch", "bowl"],
      ingredients: [["Rinderfaschiertes", 450, "g", "meat"], ["Jasminreis", 250, "g", "dry"], ["Karotten", 1, "Stk", "veg"], ["Gurke", 1, "Stk", "veg"],
        ["Frühlingszwiebeln", 2, "Stk", "veg"], ["Knoblauch", 1, "Zehe", "veg"], ["Ingwer", 1, "Stk", "veg"], ["Kimchi (nur Erwachsene)", 1, "Glas", "fresh"],
        ["Mayonnaise", 3, "EL", "pantry"], ["Gochujang", 1, "EL", "pantry"], ["Sojasauce (salzreduziert)", 3, "EL", "pantry"], ["Sesam", 1, "EL", "pantry"]],
      steps: [
        { icon: "rice", text: "Reis aufsetzen, 15 Minuten.", timer: 900, items: ["Reis"] },
        { icon: "mix", text: "Knoblauch, Ingwer, Soja, etwas Zucker und Sesam verrühren.", items: ["Sojasauce", "Ingwer", "Sesam"] },
        { icon: "pan", text: "Faschiertes krümelig braun braten, Sauce dazu und 2 bis 3 Minuten einkochen. Kinderportion abnehmen.", timer: 180, items: ["Faschiertes"] },
        { icon: "mix", text: "Für die Großen etwas Gochujang einrühren und Mayo mit Gochujang verrühren.", items: ["Gochujang", "Mayonnaise"] },
        { icon: "serve", text: "Reis in Schalen, Faschiertes, Karotten- und Gurkenstreifen drauf.", items: ["Karotten", "Gurke"] }]
    },
    {
      slug: "homemade-beef-burger", name: "Hausgemachte Burger", origin: "USA", time: 25,
      kid: "Kinderburger klein formen und durchbraten. Zum Selberbauen.", tags: ["faschiert", "pfanne", "fingerfood"],
      ingredients: [["Rinderfaschiertes", 500, "g", "meat"], ["Panko-Brösel", 30, "g", "dry"], ["Eier", 1, "Stk", "fresh"], ["Burger-Brioche-Weckerl", 4, "Stk", "bread"],
        ["Gouda in Scheiben", 4, "Stk", "fresh"], ["Paradeiser", 2, "Stk", "veg"], ["Kopfsalat", 1, "Stk", "veg"], ["Essiggurkerl", 1, "Glas", "dry"],
        ["Ketchup", 2, "EL", "pantry"], ["Worcestersauce", 1, "EL", "pantry"], ["Mayonnaise", 2, "EL", "pantry"]],
      steps: [
        { icon: "mix", text: "Faschiertes mit Bröseln, Ei, Worcestersauce und 1 EL Ketchup verkneten. 4 Laibchen und ein kleines Kinder-Laibchen formen, jeweils mit einer Mulde in der Mitte.", items: ["Faschiertes", "Ei"] },
        { icon: "pan", text: "In Öl 10 bis 12 Minuten braten, einmal wenden. Am Ende Käse drauflegen und mit Deckel schmelzen.", timer: 660, items: ["Gouda"] },
        { icon: "chop", text: "Paradeiser, Salat und Gurkerl schneiden, Weckerl toasten.", items: ["Paradeiser", "Salat", "Weckerl"] },
        { icon: "serve", text: "Alles auf den Tisch, jeder baut seinen Burger.", items: ["Ketchup", "Mayonnaise"] }]
    },
    {
      slug: "one-pan-korean-style-beef-noodles", name: "One-Pan-Kokos-Nudeln mit Faschiertem", origin: "Korea", time: 25,
      kid: "Gochujang weglassen oder Kinderportion vorher abnehmen. Nudeln kurz schneiden.", tags: ["faschiert", "onepot", "pasta", "asiatisch"],
      ingredients: [["Rinderfaschiertes", 450, "g", "meat"], ["Ramen-Nudeln", 3, "Pck", "dry"], ["Kokosmilch", 250, "ml", "dry"], ["Knoblauch", 1, "Zehe", "veg"],
        ["Ingwer", 1, "Stk", "veg"], ["Frühlingszwiebeln", 2, "Stk", "veg"], ["Gurke", 1, "Stk", "veg"], ["Tomatenmark", 1, "EL", "dry"],
        ["Sojasauce (salzreduziert)", 3, "EL", "pantry"], ["Honig", 2, "EL", "pantry"], ["Reisessig", 2, "EL", "pantry"], ["Gochujang (nur Erwachsene)", 1, "EL", "pantry"]],
      steps: [
        { icon: "mix", text: "Soja, Honig, Reisessig und etwas Sesamöl verrühren.", items: ["Sojasauce", "Honig"] },
        { icon: "pan", text: "Faschiertes 4 bis 5 Minuten anbraten, bis es knusprig wird. Knoblauch und Ingwer 1 Minute mitrösten.", timer: 360, items: ["Faschiertes", "Knoblauch", "Ingwer"] },
        { icon: "pan", text: "Tomatenmark und Sauce einrühren, 1 Minute köcheln.", items: ["Tomatenmark"] },
        { icon: "boil", text: "Kokosmilch, Nudeln und 375 ml Wasser dazu. Zugedeckt 2 Minuten, Nudeln wenden, noch 1 Minute.", timer: 180, items: ["Kokosmilch", "Ramen-Nudeln"] },
        { icon: "serve", text: "Durchmischen, mit Frühlingszwiebel und Gurke servieren.", items: ["Gurke"] }]
    },
    {
      slug: "street-style-soy-noodles", name: "Soja-Eiernudeln mit Hendl wie vom Straßenstand", origin: "China", time: 15,
      kid: "Mild und salzig: fürs Kind mit etwas Wasser verdünnen. Nudeln kurz schneiden.", tags: ["huhn", "pfanne", "pasta", "asiatisch"],
      ingredients: [["Hendlbrust", 500, "g", "meat"], ["Frische Eiernudeln", 400, "g", "fresh"], ["Chinakohl", 0.5, "Stk", "veg"], ["Karotten", 1, "Stk", "veg"],
        ["Frühlingszwiebeln", 2, "Stk", "veg"], ["Knoblauch", 2, "Zehe", "veg"], ["Austernsauce", 2, "EL", "dry"], ["Sojasauce (salzreduziert)", 2, "EL", "pantry"],
        ["Sesamöl", 1, "EL", "pantry"], ["Sesam", 1, "EL", "pantry"]],
      steps: [
        { icon: "mix", text: "Austernsauce, Soja, Sesamöl und etwas Zucker verrühren. Hendl in dünne Streifen schneiden, mit 1 EL Sauce mischen.", items: ["Hendl", "Austernsauce", "Sojasauce"] },
        { icon: "pan", text: "Hendl bei großer Hitze 1 bis 2 Minuten braten. Knoblauch und Frühlingszwiebel 30 Sekunden mitbraten.", timer: 120, items: ["Knoblauch"] },
        { icon: "pan", text: "Chinakohl und Karottenstifte 2 bis 3 Minuten mitbraten.", timer: 180, items: ["Chinakohl", "Karotten"] },
        { icon: "pan", text: "Nudeln und restliche Sauce dazu, 1 bis 2 Minuten durchschwenken.", timer: 120, items: ["Eiernudeln"] },
        { icon: "serve", text: "Mit Sesam bestreut servieren.", items: ["Sesam"] }]
    },
    {
      slug: "italian-style-meatballs", name: "Italienische Fleischbällchen mit Mozzarella-Kern", origin: "Italien", time: 20, wait: 25,
      kid: "Bällchen halbieren, innen ist geschmolzener Käse heiß.", tags: ["faschiert", "topf", "mediterran"],
      ingredients: [["Faschiertes gemischt", 500, "g", "meat"], ["Zwiebel", 1, "Stk", "veg"], ["Knoblauch", 2, "Zehe", "veg"], ["Panko-Brösel", 60, "g", "dry"],
        ["Eier", 1, "Stk", "fresh"], ["Milch", 2, "EL", "fresh"], ["Parmesan", 50, "g", "fresh"], ["Geriebener Mozzarella", 75, "g", "fresh"],
        ["Ganze Tomaten", 2, "Dose", "dry"], ["Basilikum", 1, "Topf", "veg"], ["Baguette", 1, "Stk", "bread"], ["Petersilie", 1, "Bund", "veg"], ["Butter", 20, "g", "pantry"]],
      steps: [
        { icon: "pan", text: "Zwiebel 4 bis 5 Minuten weich dünsten, Knoblauch kurz mitrösten, in eine Schüssel geben.", timer: 300, items: ["Zwiebel", "Knoblauch"] },
        { icon: "boil", text: "In derselben Pfanne Butter und Knoblauch, dann Tomaten und 125 ml Wasser. Leise köcheln lassen.", items: ["Tomaten", "Butter"] },
        { icon: "mix", text: "Faschiertes mit Zwiebel, Bröseln, Milch, Ei, Petersilie, Parmesan und Mozzarella mischen. 16 Bällchen formen.", items: ["Faschiertes", "Mozzarella", "Parmesan"] },
        { icon: "boil", text: "Bällchen in die Sauce legen, 12 bis 15 Minuten garen, wenden, noch 8 bis 10 Minuten.", timer: 1380, items: [] },
        { icon: "serve", text: "Mit Parmesan und Basilikum, Baguette dazu.", items: ["Basilikum", "Baguette"] }]
    },
    {
      slug: "one-pan-chicken-and-broccoli-lasagne", name: "One-Pan-Hendl-Brokkoli-Lasagne", origin: "Italien", time: 25, wait: 15,
      kid: "5 Minuten rasten lassen, innen sehr heiß. In kleine Stücke schneiden.", tags: ["huhn", "onepot", "pasta", "rahm", "auflauf"],
      ingredients: [["Hendlbrust", 300, "g", "meat"], ["Frische Lasagneblätter", 250, "g", "fresh"], ["Brokkoli", 1, "Stk", "veg"], ["Lauch", 1, "Stk", "veg"],
        ["Zwiebel", 1, "Stk", "veg"], ["Knoblauch", 2, "Zehe", "veg"], ["Schlagobers", 375, "ml", "fresh"], ["Parmesan", 50, "g", "fresh"],
        ["Geriebener Mozzarella", 150, "g", "fresh"], ["Hühnersuppe (salzarm)", 600, "ml", "pantry"], ["Mehl", 30, "g", "pantry"], ["Butter", 30, "g", "pantry"], ["Italienische Kräuter", 1, "EL", "pantry"]],
      steps: [
        { icon: "pan", text: "Ofengrill vorheizen. Hendl je Seite 3 Minuten braten, herausnehmen und klein schneiden.", timer: 360, items: ["Hendl"] },
        { icon: "pan", text: "Butter, Zwiebel, Knoblauch und Lauch 4 Minuten dünsten. Mehl einrühren.", timer: 240, items: ["Lauch", "Zwiebel", "Mehl"] },
        { icon: "boil", text: "Suppe, Obers, Kräuter und klein geschnittenen Brokkoli dazu, aufkochen.", items: ["Suppe", "Obers", "Brokkoli"] },
        { icon: "boil", text: "Lasagneblätter in Quadraten untertauchen. Zugedeckt 6 Minuten, offen 5 Minuten köcheln, oft umrühren.", timer: 660, items: ["Lasagneblätter"] },
        { icon: "oven", text: "Hendl und Parmesan unterheben, Mozzarella drüber, 3 bis 5 Minuten unter dem Grill goldbraun.", timer: 300, items: ["Mozzarella", "Parmesan"] }]
    }
  ].forEach(add);
})();
