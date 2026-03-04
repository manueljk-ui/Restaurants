// ═══════════════════════════════════════════════════
//  DONNÉES — TA LISTE PERSONNELLE
// ═══════════════════════════════════════════════════

const SAMPLE = [

  // ─── TESTÉS ✅ ───────────────────────────────────

  { id: 1,  name: "Crispy Soul",               cuisine: "🍗 Soul Food / Américain",   price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 2,  name: "Baba Zulu",                 cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "Visité 3 fois 🔥",            status: "tested",  rating: 5 },
  { id: 3,  name: "Benedict",                  cuisine: "🥞 Brunch",                  price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 4,  name: "Menchiki Ramen",            cuisine: "🇯🇵 Japonais",               price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 5,  name: "Restau Coréen",             cuisine: "🇰🇷 Coréen",                 price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 6,  name: "Wings & Chill",             cuisine: "🍗 Soul Food / Américain",   price: "€",    location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 7,  name: "Tiger Milk",                cuisine: "🌶 Péruvien / Fusion",       price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 8,  name: "Auber Mama",                cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 9,  name: "Mama Primi",                cuisine: "🇮🇹 Italien",                price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 10, name: "Leon",                      cuisine: "🐟 Poissons / Fruits de mer",price: "€",    location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 11, name: "Cali Uptown",               cuisine: "🍔 Burger",                  price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 12, name: "Rodizio Brazil",            cuisine: "🇧🇷 Brésilien",              price: "€€€",  location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 13, name: "Gemini Family",             cuisine: "🍕 Pizza",                   price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 14, name: "Zicatela Rex",              cuisine: "🇲🇽 Mexicain",               price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 15, name: "Trantranzai",               cuisine: "🌏 Asiatique / Fusion",      price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 16, name: "Mama Shelter Défense",      cuisine: "🍔 Burger",                  price: "€€€",  location: "La Défense",           note: "",                            status: "tested",  rating: 0 },
  { id: 17, name: "Black N White Burger",      cuisine: "🍔 Burger",                  price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 18, name: "Food Court Paris 13",       cuisine: "🌏 Asiatique / Fusion",      price: "€",    location: "Paris 13e",            note: "",                            status: "tested",  rating: 0 },
  { id: 19, name: "Indiana Café",              cuisine: "🍔 Burger",                  price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 20, name: "Felicita",                  cuisine: "🇮🇹 Italien",                price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 21, name: "Discret Concept",           cuisine: "🍽 Gastronomique / Fusion",  price: "€€€",  location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 22, name: "On The Babe",               cuisine: "🥞 Brunch",                  price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 23, name: "Capri",                     cuisine: "🇮🇹 Italien",                price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 24, name: "Presto Fresco",             cuisine: "🇮🇹 Italien",                price: "€",    location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 25, name: "Shiso Burger",              cuisine: "🍔 Burger",                  price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 26, name: "Dalia",                     cuisine: "🇱🇧 Libanais / Moyen-Orient",price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 27, name: "Chester",                   cuisine: "🍔 Burger",                  price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 28, name: "Parenthèses",               cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 29, name: "Mian Fan",                  cuisine: "🇨🇳 Chinois",                price: "€",    location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 30, name: "Comme Gangnam",             cuisine: "🇰🇷 Coréen",                 price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 31, name: "Paradis du Fruit",          cuisine: "🥗 Végétarien / Healthy",    price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 32, name: "Bouillon Pigalle",          cuisine: "🇫🇷 Français",               price: "€",    location: "Paris 9e",             note: "",                            status: "tested",  rating: 0 },
  { id: 33, name: "Bouillon Chartier",         cuisine: "🇫🇷 Français",               price: "€",    location: "Paris 9e",             note: "",                            status: "tested",  rating: 0 },
  { id: 34, name: "Bouillon Montparnasse",     cuisine: "🇫🇷 Français",               price: "€",    location: "Paris 14e",            note: "",                            status: "tested",  rating: 0 },
  { id: 35, name: "Bar Bisou Paris 3",         cuisine: "🍸 Bar / Tapas",             price: "€€",   location: "Paris 3e",             note: "",                            status: "tested",  rating: 0 },
  { id: 36, name: "Bar Bisou République",      cuisine: "🍸 Bar / Tapas",             price: "€€",   location: "Paris 11e",            note: "",                            status: "tested",  rating: 0 },
  { id: 37, name: "Perchoir Ménilmontant",     cuisine: "🍸 Bar / Tapas",             price: "€€€",  location: "Paris 20e",            note: "",                            status: "tested",  rating: 0 },
  { id: 38, name: "Carnavana",                 cuisine: "🌶 Péruvien / Fusion",       price: "€€",   location: "Paris 11e",            note: "",                            status: "tested",  rating: 0 },
  { id: 39, name: "Ebis",                      cuisine: "🇯🇵 Japonais",               price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 40, name: "Maison Anamour",            cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 41, name: "A Fole",                    cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 42, name: "Under The Sea",             cuisine: "🐟 Poissons / Fruits de mer",price: "€€€",  location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 43, name: "Maria by Cesar",            cuisine: "🇲🇽 Mexicain",               price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 44, name: "Groupomimo",                cuisine: "🇯🇵 Japonais",               price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 45, name: "Le Melt",                   cuisine: "🍔 Burger",                  price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 46, name: "Les Bascules",              cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 47, name: "Chez Gladines",             cuisine: "🇫🇷 Français",               price: "€",    location: "Paris 13e",            note: "Cuisine basque",              status: "tested",  rating: 0 },
  { id: 48, name: "Cavale",                    cuisine: "🍽 Gastronomique / Fusion",  price: "€€€",  location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 49, name: "Shinko",                    cuisine: "🇯🇵 Japonais",               price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 50, name: "Brasserie Saint Honoré",    cuisine: "🇫🇷 Français",               price: "€€€",  location: "Paris 1er",            note: "",                            status: "tested",  rating: 0 },
  { id: 51, name: "East Mamma",                cuisine: "🇮🇹 Italien",                price: "€€",   location: "Paris 11e",            note: "",                            status: "tested",  rating: 0 },
  { id: 52, name: "Obrigado Rodizio",          cuisine: "🇧🇷 Brésilien",              price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 53, name: "Villa Yora",                cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 54, name: "Buttler",                   cuisine: "🍔 Burger",                  price: "€€",   location: "Gennevilliers",        note: "",                            status: "tested",  rating: 0 },
  { id: 55, name: "Joyo Opéra",                cuisine: "🇯🇵 Japonais",               price: "€€",   location: "Paris 9e",             note: "",                            status: "tested",  rating: 0 },
  { id: 56, name: "Île",                       cuisine: "🇫🇷 Français",               price: "€€€",  location: "Issy-les-Moulineaux",  note: "",                            status: "tested",  rating: 0 },
  { id: 57, name: "Café des Marronniers",      cuisine: "🇫🇷 Français",               price: "€€",   location: "Tuileries, Paris 1er", note: "",                            status: "tested",  rating: 0 },
  { id: 58, name: "Fujiyama",                  cuisine: "🇯🇵 Japonais",               price: "€€",   location: "Pierrelaye",           note: "",                            status: "tested",  rating: 0 },
  { id: 59, name: "Meida",                     cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 60, name: "Daroco",                    cuisine: "🇮🇹 Italien",                price: "€€€",  location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 61, name: "Chez Mariam",               cuisine: "🇱🇧 Libanais / Moyen-Orient",price: "€€",   location: "Paris 18e",            note: "",                            status: "tested",  rating: 0 },
  { id: 62, name: "Uma Nota",                  cuisine: "🇧🇷 Brésilien",              price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 63, name: "Cèpes et Figues",           cuisine: "🇫🇷 Français",               price: "€€€",  location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 64, name: "Le Palais Clichy",          cuisine: "🇫🇷 Français",               price: "€€",   location: "Clichy",               note: "",                            status: "tested",  rating: 0 },
  { id: 65, name: "Bahiana",                   cuisine: "🇧🇷 Brésilien",              price: "€€",   location: "Cergy",                note: "",                            status: "tested",  rating: 0 },
  { id: 66, name: "Adela",                     cuisine: "🌶 Péruvien / Fusion",       price: "€€",   location: "Paris",                note: "",                            status: "tested",  rating: 0 },
  { id: 67, name: "Poni",                      cuisine: "🍽 Gastronomique / Fusion",  price: "€€€",  location: "Paris",                note: "",                            status: "tested",  rating: 0 },

  // ─── À TESTER ⏳ ─────────────────────────────────

  { id: 101, name: "Mama Jackson",             cuisine: "🍗 Soul Food / Américain",   price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 102, name: "Alimento",                 cuisine: "🇮🇹 Italien",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 103, name: "Le Shack",                 cuisine: "🍔 Burger",                  price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 104, name: "Libertino",                cuisine: "🇮🇹 Italien",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 105, name: "Liberta",                  cuisine: "🇮🇹 Italien",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 106, name: "Kong",                     cuisine: "🍽 Gastronomique / Fusion",  price: "€€€€", location: "Paris 1er",            note: "Rooftop vue sur la Seine",    status: "pending", rating: 0 },
  { id: 107, name: "Musée d'Art Moderne",      cuisine: "🇫🇷 Français",               price: "€€€",  location: "Paris 16e",            note: "",                            status: "pending", rating: 0 },
  { id: 108, name: "Kokodak",                  cuisine: "🍗 Soul Food / Américain",   price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 109, name: "Navigli",                  cuisine: "🇮🇹 Italien",                price: "€€",   location: "Paris",                note: "Buffet italien à volonté",    status: "pending", rating: 0 },
  { id: 110, name: "Jacobine",                 cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris 6e",             note: "",                            status: "pending", rating: 0 },
  { id: 111, name: "Manfred",                  cuisine: "🥩 Viande / Grill",          price: "€€€",  location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 112, name: "Braun Notes Coffee",       cuisine: "☕ Café / Brunch",            price: "€",    location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 113, name: "Restau Paris Pontoise",    cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 114, name: "Quai Ouest",               cuisine: "🇫🇷 Français",               price: "€€€",  location: "Saint-Cloud",          note: "",                            status: "pending", rating: 0 },
  { id: 115, name: "Siena",                    cuisine: "🇮🇹 Italien",                price: "€€€",  location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 116, name: "Bamboche",                 cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 117, name: "Polpo",                    cuisine: "🇮🇹 Italien",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 118, name: "Nessia",                   cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 119, name: "Colère",                   cuisine: "🍽 Gastronomique / Fusion",  price: "€€€",  location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 120, name: "Fer à Cheval",             cuisine: "🇫🇷 Français",               price: "€€",   location: "Saint-Cloud",          note: "",                            status: "pending", rating: 0 },
  { id: 121, name: "Capriccio",                cuisine: "🇮🇹 Italien",                price: "€€",   location: "L'Isle-Adam",          note: "",                            status: "pending", rating: 0 },
  { id: 122, name: "Bouyon Paris",             cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 123, name: "Bonvivant",                cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 124, name: "Relais de l'Entrecôte",   cuisine: "🥩 Viande / Grill",          price: "€€€",  location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 125, name: "Adouna",                   cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 126, name: "African Lounge",           cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 127, name: "Cherry Paris",             cuisine: "🍸 Bar / Tapas",             price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 128, name: "Chimère",                  cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 129, name: "Misticia",                 cuisine: "🍽 Gastronomique / Fusion",  price: "€€€",  location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 130, name: "Le Beaucé",               cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 131, name: "Petit Nuage",              cuisine: "🥞 Brunch",                  price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 132, name: "Holly Belly",              cuisine: "🥞 Brunch",                  price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 133, name: "OBTB",                     cuisine: "🍔 Burger",                  price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 134, name: "3 Brasseurs",              cuisine: "🇫🇷 Français",               price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 135, name: "Bistrot Djougo",           cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
  { id: 136, name: "Zapi",                     cuisine: "🌍 Africain",                price: "€€",   location: "Paris",                note: "",                            status: "pending", rating: 0 },
];

// ═══════════════════════════════════════════════════
//  PERSISTANCE
// ═══════════════════════════════════════════════════

function load() {
  try {
    const d = localStorage.getItem("restos_v2");
    return d ? JSON.parse(d) : SAMPLE;
  } catch { return SAMPLE; }
}

function persist() {
  localStorage.setItem("restos_v2", JSON.stringify(restos));
}

// ═══════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════

let restos         = load();
let editId         = null;
let selectedPrice  = "";
let selectedRating = 0;
let selectedStatus = "pending";
let filters        = { search: "", cuisine: "Tous", status: "Tous", price: "Tous" };

// ═══════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════

function uid() { return Date.now() + Math.random(); }

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2400);
}

// ═══════════════════════════════════════════════════
//  STATS
// ═══════════════════════════════════════════════════

function renderStats() {
  const total   = restos.length;
  const tested  = restos.filter(r => r.status === "tested").length;
  const pending = total - tested;
  const pct     = total ? Math.round((tested / total) * 100) : 0;
  const circ    = 94.2;

  document.getElementById("statTotal").textContent   = total;
  document.getElementById("statTested").textContent  = tested;
  document.getElementById("statPending").textContent = pending;
  document.getElementById("progressPct").textContent = pct + "%";
  document.getElementById("progressCircle").style.strokeDashoffset = circ - (pct / 100) * circ;
}

// ═══════════════════════════════════════════════════
//  FILTERS
// ═══════════════════════════════════════════════════

function getCuisines() {
  return ["Tous", ...new Set(restos.map(r => r.cuisine).sort())];
}

function renderFilters() {
  const cc = document.getElementById("filtersCuisine");
  cc.innerHTML = "";
  getCuisines().forEach(c => {
    const b = document.createElement("button");
    b.className = "pill" + (filters.cuisine === c ? " active" : "");
    b.textContent = c;
    b.onclick = () => { filters.cuisine = c; renderFilters(); renderList(); };
    cc.appendChild(b);
  });

  const sc = document.getElementById("filtersStatus");
  sc.innerHTML = "";
  [["Tous","Tous"], ["✅ Testés","tested"], ["⏳ À tester","pending"]].forEach(([label, key]) => {
    const b = document.createElement("button");
    b.className = "pill" + (filters.status === key ? " active" : "");
    b.textContent = label;
    b.onclick = () => { filters.status = key; renderFilters(); renderList(); };
    sc.appendChild(b);
  });

  const pc = document.getElementById("filtersPrice");
  pc.innerHTML = "";
  ["Tous","€","€€","€€€","€€€€"].forEach(p => {
    const b = document.createElement("button");
    b.className = "pill" + (filters.price === p ? " active" : "");
    b.textContent = p;
    b.onclick = () => { filters.price = p; renderFilters(); renderList(); };
    pc.appendChild(b);
  });
}

// ═══════════════════════════════════════════════════
//  LIST
// ═══════════════════════════════════════════════════

function getFiltered() {
  const q = filters.search.toLowerCase();
  return restos.filter(r => {
    const matchSearch  = !q || r.name.toLowerCase().includes(q) || r.location.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q) || (r.note && r.note.toLowerCase().includes(q));
    const matchCuisine = filters.cuisine === "Tous" || r.cuisine === filters.cuisine;
    const matchStatus  = filters.status  === "Tous" || r.status  === filters.status;
    const matchPrice   = filters.price   === "Tous" || r.price   === filters.price;
    return matchSearch && matchCuisine && matchStatus && matchPrice;
  });
}

function renderList() {
  const container = document.getElementById("restoList");
  const emptyEl   = document.getElementById("emptyState");
  container.innerHTML = "";

  const filtered = getFiltered();
  if (filtered.length === 0) { emptyEl.style.display = "block"; return; }
  emptyEl.style.display = "none";

  // Group by cuisine
  const grouped = {};
  filtered.forEach(r => {
    if (!grouped[r.cuisine]) grouped[r.cuisine] = [];
    grouped[r.cuisine].push(r);
  });

  const showHeaders = filters.cuisine === "Tous" && Object.keys(grouped).length > 1;
  let delay = 0;

  Object.keys(grouped).sort().forEach(cuisine => {
    if (showHeaders) {
      const hdr = document.createElement("div");
      hdr.className = "section-header";
      hdr.textContent = cuisine + ` (${grouped[cuisine].length})`;
      container.appendChild(hdr);
    }

    grouped[cuisine].forEach(r => {
      const card = document.createElement("div");
      card.className = `resto-card ${r.status}`;
      card.style.animationDelay = Math.min(delay, 12) * 0.04 + "s";
      delay++;

      const tested = r.status === "tested";
      const stars  = r.rating ? "★".repeat(r.rating) + "☆".repeat(5 - r.rating) : "";

      card.innerHTML = `
        <div class="card-top">
          <div class="card-name">${r.name}</div>
          <div class="card-status ${r.status}">${tested ? "✅ Testé" : "⏳ À tester"}</div>
        </div>
        <div class="card-meta">
          <span class="card-cuisine">${r.cuisine}</span>
          <span class="card-price">${r.price}</span>
          <span class="card-location">📍 ${r.location}</span>
          ${tested && r.rating ? `<span class="card-stars">${stars}</span>` : ""}
        </div>
        ${r.note ? `<div class="card-note">"${r.note}"</div>` : ""}
        <div class="card-actions">
          ${tested
            ? `<button class="card-btn card-btn--untest" data-id="${r.id}">↩ Non testé</button>`
            : `<button class="card-btn card-btn--test"   data-id="${r.id}">✅ Testé !</button>`
          }
          <button class="card-btn" data-edit="${r.id}">✏️</button>
          <button class="card-btn card-btn--delete" data-del="${r.id}">🗑</button>
        </div>
      `;
      container.appendChild(card);
    });
  });

  container.querySelectorAll("[data-id]").forEach(btn =>
    btn.addEventListener("click", () => toggleStatus(parseFloat(btn.dataset.id))));
  container.querySelectorAll("[data-edit]").forEach(btn =>
    btn.addEventListener("click", () => openEdit(parseFloat(btn.dataset.edit))));
  container.querySelectorAll("[data-del]").forEach(btn =>
    btn.addEventListener("click", () => deleteResto(parseFloat(btn.dataset.del))));
}

// ═══════════════════════════════════════════════════
//  ACTIONS
// ═══════════════════════════════════════════════════

function toggleStatus(id) {
  const r = restos.find(r => r.id === id);
  if (!r) return;
  r.status = r.status === "tested" ? "pending" : "tested";
  if (r.status === "pending") r.rating = 0;
  persist();
  toast(r.status === "tested" ? "✅ Marqué comme testé !" : "↩ Remis en liste à tester");
  renderStats();
  renderList();
}

function deleteResto(id) {
  if (!confirm("Supprimer ce restaurant ?")) return;
  restos = restos.filter(r => r.id !== id);
  persist();
  toast("🗑 Supprimé");
  renderStats();
  renderFilters();
  renderList();
}

// ═══════════════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════════════

function resetModal() {
  document.getElementById("fName").value     = "";
  document.getElementById("fCuisine").value  = "";
  document.getElementById("fLocation").value = "";
  document.getElementById("fNote").value     = "";
  selectedPrice = ""; selectedRating = 0; selectedStatus = "pending";
  document.querySelectorAll(".price-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".status-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(".status-btn--pending").classList.add("active");
  document.getElementById("ratingGroup").style.display = "none";
  refreshStars(0);
  ["fName","fCuisine","fLocation"].forEach(id => document.getElementById(id).style.borderColor = "");
  document.querySelector(".price-selector").style.outline = "";
}

function openAdd() {
  editId = null;
  resetModal();
  document.getElementById("modalTitle").textContent = "Nouveau restaurant";
  document.getElementById("overlay").classList.add("open");
  setTimeout(() => document.getElementById("fName").focus(), 100);
}

function openEdit(id) {
  const r = restos.find(r => r.id === id);
  if (!r) return;
  editId = id;
  resetModal();
  selectedPrice = r.price; selectedRating = r.rating || 0; selectedStatus = r.status;
  document.getElementById("modalTitle").textContent = "Modifier";
  document.getElementById("fName").value     = r.name;
  document.getElementById("fCuisine").value  = r.cuisine;
  document.getElementById("fLocation").value = r.location;
  document.getElementById("fNote").value     = r.note || "";
  document.querySelectorAll(".price-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.price === r.price));
  document.querySelectorAll(".status-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(`.status-btn--${r.status}`).classList.add("active");
  document.getElementById("ratingGroup").style.display = r.status === "tested" ? "block" : "none";
  refreshStars(r.rating || 0);
  document.getElementById("overlay").classList.add("open");
}

function closeModal() {
  document.getElementById("overlay").classList.remove("open");
}

function saveModal() {
  const name     = document.getElementById("fName").value.trim();
  const cuisine  = document.getElementById("fCuisine").value;
  const location = document.getElementById("fLocation").value.trim();
  const note     = document.getElementById("fNote").value.trim();

  document.getElementById("fName").style.borderColor     = !name     ? "var(--red)" : "";
  document.getElementById("fCuisine").style.borderColor  = !cuisine  ? "var(--red)" : "";
  document.getElementById("fLocation").style.borderColor = !location ? "var(--red)" : "";
  document.querySelector(".price-selector").style.outline = !selectedPrice ? "2px solid var(--red)" : "";
  if (!name || !cuisine || !location || !selectedPrice) return;

  const data = { name, cuisine, price: selectedPrice, location, note,
    status: selectedStatus, rating: selectedStatus === "tested" ? selectedRating : 0 };

  if (editId !== null) {
    restos = restos.map(r => r.id === editId ? { ...r, ...data } : r);
    toast("✏️ Modifié !");
  } else {
    restos.push({ id: uid(), ...data });
    toast("🎉 Ajouté !");
  }

  persist(); closeModal(); renderStats(); renderFilters(); renderList();
}

function refreshStars(val) {
  document.querySelectorAll("#starsInput .star").forEach(s => {
    const v = parseInt(s.dataset.v);
    s.classList.toggle("active", v <= val);
    s.textContent = v <= val ? "★" : "☆";
  });
}

// ═══════════════════════════════════════════════════
//  EVENTS
// ═══════════════════════════════════════════════════

document.getElementById("btnAdd").addEventListener("click", openAdd);
document.getElementById("btnModalCancel").addEventListener("click", closeModal);
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("btnModalSave").addEventListener("click", saveModal);

document.getElementById("overlay").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

document.getElementById("searchInput").addEventListener("input", function() {
  filters.search = this.value;
  document.getElementById("searchClear").style.display = this.value ? "block" : "none";
  renderList();
});

document.getElementById("searchClear").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  filters.search = "";
  document.getElementById("searchClear").style.display = "none";
  renderList();
});

document.querySelectorAll(".price-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedPrice = btn.dataset.price;
    document.querySelectorAll(".price-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.querySelectorAll(".status-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedStatus = btn.dataset.status;
    document.querySelectorAll(".status-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("ratingGroup").style.display =
      selectedStatus === "tested" ? "block" : "none";
  });
});

document.querySelectorAll("#starsInput .star").forEach(star => {
  star.addEventListener("click",    () => { selectedRating = parseInt(star.dataset.v); refreshStars(selectedRating); });
  star.addEventListener("mouseover",() => refreshStars(parseInt(star.dataset.v)));
  star.addEventListener("mouseout", () => refreshStars(selectedRating));
});

// ═══════════════════════════════════════════════════
//  SERVICE WORKER (PWA)
// ═══════════════════════════════════════════════════

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

// ═══════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════

renderStats();
renderFilters();
renderList();
