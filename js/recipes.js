/*
 * The cookbook. One entry per dish or technique.
 *
 *   principle:   one or two plain sentences on why the dish works
 *   kind:        "foundation" — a base method with many dialects
 *                "dish"       — a specific thing I make
 *   tags:        free-form, but put each tag in TAG_GROUPS below so it shows
 *                up in the right filter group
 *   ingredients: [{ group, items: [...] }] — loose, no quantities; I cook to taste
 *   method:      ordered steps
 *   variations:  [{ name, note }]
 *   serve:       what goes alongside
 *   related:     slugs of other entries
 */

window.TAG_GROUPS = [
  { name: "Cuisine", tags: ["thai", "vietnamese", "korean", "italian", "chinese-spiced"] },
  { name: "Form", tags: ["stew", "soup", "salad", "stir-fry", "noodles", "pasta", "sandwich", "eggs", "side", "pickle", "sausage", "sauce"] },
  { name: "Goal", tags: ["cutting meal", "high-protein", "meal prep", "vegetarian", "date night"] },
  { name: "Effort", tags: ["quick", "weeknight", "weekend project", "foundation"] },
];

window.RECIPES = [
  {
    slug: "seared-meat-stew",
    name: "The Stew",
    aka: "seared meat, onions, garlic, bone broth",
    kind: "foundation",
    principle: "Onions release fond from browned meat. The broth carries this flavor into the end-product.",
    tags: ["stew", "foundation", "high-protein", "meal prep", "chinese-spiced", "weekend project"],
    ingredients: [
      { group: "Any meat", items: ["chicken", "ground beef", "cubed stew-cut steak", "steak round", "pork shoulder", "pork loin", "pork heart"] },
      { group: "Always", items: ["onion", "garlic", "beef bone broth"] },
      { group: "Western dialect", items: ["celery", "beef bouillon"] },
      { group: "Eastern dialect", items: ["ginger", "Sichuan peppercorn", "cinnamon", "star anise", "bok choy", "spring onion"] },
    ],
    method: [
      "Pat the meat dry. Sear in batches over high heat until deeply browned; don't crowd the pot. Set aside.",
      "Drop the heat. Add onion and garlic and scrape up the brown bits as the onion softens.",
      "Return the meat, cover with beef bone broth, and add the dialect (below).",
      "Simmer low until tender: long for shoulder, stew cuts and heart, short for loin and chicken.",
      "Salt at the end, after the broth has reduced.",
    ],
    variations: [
      { name: "Western", note: "Celery goes in with the onions; beef bouillon deepens the broth." },
      { name: "Eastern", note: "Sear ginger, Sichuan pepper, cinnamon and star anise in the oil before the meat goes in. Bok choy and spring onion in the last few minutes." },
    ],
    related: ["beef-pork-heart-stew"],
  },
  {
    slug: "beef-pork-heart-stew",
    name: "Beef & Pork Heart Stew",
    aka: "the eastern stew",
    kind: "dish",
    principle: "Whole spices bloomed in oil flavor the fat before the meat goes in. Bok choy is added last so it stays crisp.",
    tags: ["stew", "chinese-spiced", "high-protein", "meal prep", "weekend project"],
    ingredients: [
      { group: "Aromatics, first", items: ["ginger", "Sichuan peppercorn", "cinnamon", "star anise"] },
      { group: "Meat", items: ["beef (stew cut)", "pork heart"] },
      { group: "Base", items: ["onion", "garlic", "beef bone broth"] },
      { group: "To finish", items: ["bok choy", "spring onion"] },
    ],
    method: [
      "Sear ginger, Sichuan pepper, cinnamon and star anise in oil until fragrant.",
      "Sear the beef and pork heart in batches on top of the spices.",
      "Deglaze with onion and garlic.",
      "Cover with beef bone broth and simmer low until the heart and beef are tender.",
      "Add bok choy and spring onion near the end; cook just until wilted.",
    ],
    related: ["seared-meat-stew"],
  },
  {
    slug: "fermented-pork-sausage",
    name: "Fermented Pork Sausage",
    aka: "Thai sour pork & rice sausage",
    kind: "dish",
    principle: "Cooked rice feeds fermentation, turning the pork sour after 2-4 days in dry air. The rice paper provides a crunchy exterior.",
    tags: ["thai", "sausage", "weekend project"],
    ingredients: [
      { group: "Filling", items: ["ground pork", "cooked rice", "lots of garlic", "salt", "thread (glass) noodles, optional"] },
      { group: "Wrap", items: ["rice paper"] },
      { group: "To serve", items: ["raw ginger", "raw onion", "lettuce"] },
    ],
    method: [
      "Mix the pork, rice, garlic and salt (and noodles, if using) well.",
      "Wrap portions tightly in rice paper.",
      "Ferment 3–4 days in summer heat on a covered drying rack.",
      "Air-fry until browned and crisp.",
    ],
    serve: "With raw ginger, raw onion and lettuce to wrap.",
  },
  {
    slug: "tom-yum",
    name: "Tom Yum",
    aka: "hot and sour soup",
    kind: "dish",
    principle: "Bruised lemongrass, galangal and lime leaves release their oils into the stock. Lime juice goes in off the heat, since boiling dulls its acidity.",
    tags: ["thai", "soup", "noodles", "weeknight", "cutting meal"],
    ingredients: [
      { group: "Broth", items: ["stock", "lemongrass", "galangal", "makrut lime leaves", "Thai chilies"] },
      { group: "In the bowl", items: ["protein of choice", "mushrooms"] },
      { group: "To season", items: ["fish sauce", "lime juice"] },
    ],
    method: [
      "Bruise the lemongrass, galangal, lime leaves and chilies and simmer them in the stock.",
      "Add the protein and mushrooms and cook through.",
      "Off the heat, season with fish sauce and lime until it's equally sour and salty.",
    ],
    variations: [
      { name: "Noodle", note: "Ladle over cooked noodles for a full meal." },
      { name: "No noodle", note: "Just the soup, as a lighter bowl or with rice." },
    ],
  },
  {
    slug: "thai-salad",
    name: "Thai Salad",
    aka: "crispy chicken or steak",
    kind: "dish",
    principle: "The dressing balances sour, salty, sweet and hot against warm protein. Dressing just before serving keeps fried chicken crisp.",
    tags: ["thai", "salad", "cutting meal", "high-protein", "date night"],
    ingredients: [
      { group: "Protein, one of", items: ["crispy chicken", "seared beef or steak, sliced"] },
      { group: "Dressing", items: ["lime juice", "fish sauce", "sugar", "Thai chili", "garlic"] },
      { group: "Fresh", items: ["onion or shallot", "herbs", "tomato", "cucumber"] },
    ],
    method: [
      "Mix the dressing and taste it: sour, salty, a little sweet, hot.",
      "Crisp the chicken or sear the steak and slice it.",
      "Toss with the vegetables, herbs and dressing right before serving.",
    ],
  },
  {
    slug: "thai-omelette",
    name: "Thai Omelette",
    aka: "kai jeow",
    kind: "dish",
    principle: "Very hot oil sets the egg's surface instantly, trapping steam that puffs it up. The thin edges fry into a crisp lace.",
    tags: ["thai", "eggs", "quick", "weeknight"],
    ingredients: [
      { group: "Eggs", items: ["eggs", "fish sauce"] },
      { group: "Pan", items: ["neutral oil, generously"] },
      { group: "To serve", items: ["jasmine rice", "chili sauce"] },
    ],
    method: [
      "Beat the eggs hard with a splash of fish sauce.",
      "Heat a good layer of oil until shimmering.",
      "Pour the eggs in from a little height; let them puff and brown.",
      "Flip once, drain, and slide onto rice.",
    ],
  },
  {
    slug: "pad-kra-pao",
    name: "Pad Kra Pao",
    aka: "holy basil stir-fry",
    kind: "dish",
    principle: "Pounding garlic and chili releases more of their oils than chopping. Holy basil goes in off the heat, since prolonged cooking dulls its aroma.",
    tags: ["thai", "stir-fry", "quick", "high-protein", "weeknight"],
    ingredients: [
      { group: "Base", items: ["minced pork or chicken", "garlic", "Thai chilies"] },
      { group: "Sauce", items: ["oyster sauce", "soy sauce", "fish sauce", "sugar"] },
      { group: "Finish", items: ["holy basil", "fried egg", "rice"] },
    ],
    method: [
      "Pound the garlic and chilies together.",
      "Fry them in hot oil for a few seconds, then add the meat and break it up.",
      "Season with the sauces and a pinch of sugar; cook until the edges catch.",
      "Off the heat, fold in the basil. Serve over rice with a fried egg.",
    ],
  },
  {
    slug: "cabbage-cauliflower-stir-fry",
    name: "Cabbage & Cauliflower Stir-Fry",
    aka: "the side dish",
    kind: "dish",
    principle: "High heat chars the cut surfaces before the vegetables release their water. Small pieces or a crowded pan steam instead of char.",
    tags: ["thai", "side", "stir-fry", "quick", "cutting meal"],
    ingredients: [
      { group: "Vegetables", items: ["cabbage, roughly cut", "cauliflower, roughly cut"] },
      { group: "Seasoning", items: ["garlic", "fish sauce"] },
    ],
    method: [
      "Get the wok or pan very hot. Fry the garlic briefly.",
      "Add the cauliflower first, then the cabbage; toss until charred in spots and just tender.",
      "Season with fish sauce and serve.",
    ],
  },
  {
    slug: "quick-pickles",
    name: "Quick Pickles",
    aka: "cucumber, jalapeño, carrot & daikon, onion, spring onion",
    kind: "foundation",
    principle: "Vinegar, sugar and salt draw water out of raw vegetables and replace it with brine. Thin cuts pickle in hours; thick cuts take a day.",
    tags: ["pickle", "foundation", "vegetarian", "meal prep", "vietnamese"],
    ingredients: [
      { group: "Brine", items: ["vinegar", "water", "sugar", "salt"] },
      { group: "Vegetables", items: ["cucumbers", "jalapeños", "carrot & daikon", "onions", "spring onions"] },
    ],
    method: [
      "Cut the vegetables and pack them into a clean jar.",
      "Warm the brine just enough to dissolve the sugar and salt. Equal parts vinegar and water is a good place to start; adjust the sugar to taste.",
      "Pour over the vegetables, cool, and refrigerate. Most are good by the next day.",
    ],
    variations: [
      { name: "Đồ chua (carrot & daikon)", note: "Matchsticks and a sweeter brine. Goes in the Vietnamese noodle salad." },
      { name: "Jalapeños", note: "Rings; brine straight and hot." },
      { name: "Onions & spring onions", note: "Sliced thin; ready in hours." },
      { name: "Cucumbers", note: "Spears or coins." },
    ],
    related: ["vietnamese-noodle-salad"],
  },
  {
    slug: "vietnamese-noodle-salad",
    name: "Vietnamese Noodle Salad",
    aka: "lemongrass chicken over rice vermicelli",
    kind: "dish",
    principle: "Lemongrass and fish sauce season the chicken, and high heat chars its edges. Cold noodles, đồ chua and the honey-lime sauce add contrast in temperature and acidity.",
    tags: ["vietnamese", "salad", "noodles", "cutting meal", "high-protein", "meal prep", "date night"],
    ingredients: [
      { group: "Chicken", items: ["chicken thigh", "lemongrass, finely diced", "fish sauce"] },
      { group: "Bowl", items: ["rice vermicelli", "spring onion", "cilantro", "đồ chua (pickled carrot & daikon)"] },
      { group: "Sauce", items: ["honey", "lime", "fish sauce", "Thai chili", "water"] },
    ],
    method: [
      "Marinate the chicken thigh in the diced lemongrass and fish sauce.",
      "Cook it hot until charred at the edges; rest and slice.",
      "Cook the vermicelli and rinse it cold.",
      "Stir the sauce together: honey, lime, fish sauce, Thai chili, water.",
      "Build the bowl: noodles, chicken, spring onion, cilantro, đồ chua. Sauce over the top.",
    ],
    related: ["quick-pickles"],
  },
  {
    slug: "steak-sandwich",
    name: "Steak Sandwich",
    aka: "with an arugula, pine nut & parmesan salad",
    kind: "dish",
    principle: "The steak and tomato carry most of the flavor, so their quality sets the result. Arugula adds bitterness and the lemon dressing adds acid against the beef fat.",
    tags: ["sandwich", "high-protein", "weekend project", "date night"],
    ingredients: [
      { group: "Sandwich", items: ["quality steak (cut varies)", "heirloom tomato", "arugula", "sourdough"] },
      { group: "Side salad", items: ["arugula", "pine nuts", "parmesan", "lemon & herb dressing"] },
    ],
    method: [
      "Salt the steak ahead of time. Sear it hard to your doneness, then let it rest.",
      "Toast the sourdough. Slice the tomato thick and salt it.",
      "Slice the steak against the grain; layer it with tomato and arugula.",
      "Toss arugula, toasted pine nuts and shaved parmesan with the lemon-herb dressing.",
    ],
  },
  {
    slug: "vodka-pasta",
    name: "Vodka Pasta",
    aka: "the classic favorite",
    kind: "dish",
    principle: "Frying tomato paste caramelizes its sugars and deepens its flavor. Starch in the pasta water binds the cream and parmesan into a smooth sauce.",
    tags: ["italian", "pasta", "vegetarian", "weeknight", "date night"],
    ingredients: [
      { group: "Sauce", items: ["butter or olive oil", "onion or shallot", "garlic", "tomato paste", "vodka", "heavy cream", "parmesan", "chili flakes"] },
      { group: "Pasta", items: ["rigatoni or penne", "pasta water"] },
    ],
    method: [
      "Soften the onion and garlic in butter or oil.",
      "Add the tomato paste and fry it until it darkens to brick-red.",
      "Deglaze with vodka and let it cook down.",
      "Stir in the cream, then the cooked pasta, parmesan, and enough pasta water for a glossy sauce.",
    ],
  },
  {
    slug: "red-wine-meatball-sauce",
    name: "Red Wine Meatball Sauce",
    aka: "beef, pork or lamb meatballs",
    kind: "dish",
    principle: "Onion and garlic lift the fond left by the seared meatballs, and red wine adds acidity. Cream and butter round out the wine's tannins.",
    tags: ["sauce", "high-protein", "weeknight", "date night"],
    ingredients: [
      { group: "Meatballs, any of", items: ["beef", "pork", "lamb"] },
      { group: "Sauce", items: ["onion", "garlic", "red wine, not too much", "heavy cream", "butter"] },
      { group: "To finish", items: ["parsley or chives"] },
    ],
    method: [
      "Sear the meatballs until browned all over. Set aside.",
      "Add onion and garlic to the pan and use them to lift the fond.",
      "Deglaze with a modest splash of red wine and let it cook down.",
      "Return the meatballs. Balance the sauce with heavy cream and butter.",
      "Finish with parsley or chives.",
    ],
    serve: "Best with mashed potatoes.",
    related: ["seared-meat-stew"],
  },
  {
    slug: "korean-spinach-banchan",
    name: "Korean Spinach Banchan",
    aka: "sigeumchi namul",
    kind: "dish",
    principle: "Blanching just past a minute wilts the spinach without breaking it down. Squeezing out the water lets the oil-based dressing cling to the leaves.",
    tags: ["korean", "side", "vegetarian", "quick"],
    ingredients: [
      { group: "Greens", items: ["whole spinach leaves"] },
      { group: "Dressing", items: ["sesame oil, a light amount", "sesame seeds", "soy sauce or fish sauce, to taste"] },
      { group: "Optional", items: ["gochugaru flakes"] },
    ],
    method: [
      "Blanch the spinach for hardly over 1 minute, until wilted and cooked but not overdone.",
      "Squeeze out all the excess water with your hands.",
      "In a mixing bowl, toss with a light amount of sesame oil, sesame seeds, and soy sauce or fish sauce to taste.",
      "Add gochugaru if you want some heat.",
    ],
    variations: [
      { name: "Vegetarian", note: "Season with soy sauce instead of fish sauce." },
    ],
  },
];
