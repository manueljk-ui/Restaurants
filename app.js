// ═══════════════════════════════════════════════════
//  DONNÉES PAR DÉFAUT
// ═══════════════════════════════════════════════════

const SAMPLE = [
  { id: 1, name: "Bistrot Paul Bert",   cuisine: "🇫🇷 Français",    price: "€€€",  location: "Paris 11e",       note: "Blanquette de veau incroyable",     status: "tested",  rating: 5 },
  { id: 2, name: "Nodaiwa",             cuisine: "🇯🇵 Japonais",    price: "€€€",  location: "Paris 1er",       note: "Spécialité anguille, réserver",     status: "tested",  rating: 4 },
  { id: 3, name: "Al Taglio",           cuisine: "🍕 Pizza",         price: "€",    location: "Paris 3e",        note: "Pizza romaine à la coupe",          status: "tested",  rating: 4 },
  { id: 4, name: "Le Baratin",          cuisine: "🇫🇷 Français",    price: "€€",   location: "Paris 20e",       note: "Cuisine bistronomique, carte courte",status: "pending", rating: 0 },
  { id: 5, name: "Septime",             cuisine: "🇫🇷 Français",    price: "€€€€", location: "Paris 11e",       note: "Étoilé, réserver 2 mois à l'avance",status: "pending", rating: 0 },
  { id: 6, name: "Sushi Yoshinori",     cuisine: "🇯🇵 Japonais",    price: "€€€€", location: "Paris 6e",        note: "Omakase, chef japonais",            status: "pending", rating: 0 },
  { id: 7, name: "Trattoria Popolare",  cuisine: "🇮🇹 Italien",     price: "€€",   location: "Paris 9e",        note: "Carbonara authentique",             status: "tested",  rating: 5 },
  { id: 8, name: "Tavline",             cuisine: "🇱🇧 Libanais",    price: "€€",   location: "Paris 4e",        note: "Mezze et falafel maison",           status: "pending", rating: 0 },
];

// ═══════════════════════════════════════════════════
//  PERSISTANCE
// ═══════════════════════════════════════════════════

function load() {
  try {
    const d = localStorage.getItem("restos");
    return d ? JSON.parse(d) : SAMPLE;
  } catch { return SAMPLE; }
}

function persist() {
  localStorage.setItem("restos", JSON.stringify(restos));
}

// ═══════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════

let restos        = load();
let editId        = null;
let selectedPrice = "";
let selectedRating = 0;
let selectedStatus = "pending";

let filters = {
  search:  "",
  cuisine: "Tous",
  status:  "Tous",
  price:   "Tous",
};

// ═══════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════

function uid() { return Date.now() + Math.random(); }

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  setTimeout(() => el.classList.remove("show"), 2200);
}

function starsHTML(rating, interactive = false) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<span class="star${i <= rating ? " active" : ""}${interactive ? "" : ""}"
      ${interactive ? `data-v="${i}"` : ""}>${i <= rating ? "★" : "☆"}</span>`;
  }
  return html;
}

// ═══════════════════════════════════════════════════
//  STATS & PROGRESS
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

  const offset = circ - (pct / 100) * circ;
  document.getElementById("progressCircle").style.strokeDashoffset = offset;
}

// ═══════════════════════════════════════════════════
//  FILTERS — render pills
// ═══════════════════════════════════════════════════

function getCuisines() {
  return ["Tous", ...new Set(restos.map(r => r.cuisine))];
}

function renderFilters() {
  // Cuisine
  const cc = document.getElementById("filtersCuisine");
  cc.innerHTML = "";
  getCuisines().forEach(c => {
    const b = document.createElement("button");
    b.className = "pill" + (filters.cuisine === c ? " active" : "");
    b.textContent = c;
    b.onclick = () => { filters.cuisine = c; renderFilters(); renderList(); };
    cc.appendChild(b);
  });

  // Status
  const sc = document.getElementById("filtersStatus");
  sc.innerHTML = "";
  ["Tous", "✅ Testés", "⏳ À tester"].forEach(s => {
    const key = s === "✅ Testés" ? "tested" : s === "⏳ À tester" ? "pending" : "Tous";
    const b = document.createElement("button");
    b.className = "pill" + (filters.status === key ? " active" : "");
    b.textContent = s;
    b.onclick = () => { filters.status = key; renderFilters(); renderList(); };
    sc.appendChild(b);
  });

  // Price
  const pc = document.getElementById("filtersPrice");
  pc.innerHTML = "";
  ["Tous", "€", "€€", "€€€", "€€€€"].forEach(p => {
    const b = document.createElement("button");
    b.className = "pill" + (filters.price === p ? " active" : "");
    b.textContent = p;
    b.onclick = () => { filters.price = p; renderFilters(); renderList(); };
    pc.appendChild(b);
  });
}

// ═══════════════════════════════════════════════════
//  LIST — render cards
// ═══════════════════════════════════════════════════

function getFiltered() {
  const q = filters.search.toLowerCase();
  return restos.filter(r => {
    const matchSearch  = !q || r.name.toLowerCase().includes(q) || r.location.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q);
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

  if (filtered.length === 0) {
    emptyEl.style.display = "block";
    return;
  }

  emptyEl.style.display = "none";

  // Group by cuisine if no cuisine filter
  const grouped = {};
  filtered.forEach(r => {
    if (!grouped[r.cuisine]) grouped[r.cuisine] = [];
    grouped[r.cuisine].push(r);
  });

  let delay = 0;
  Object.entries(grouped).forEach(([cuisine, items]) => {
    // Section header (only if showing all cuisines)
    if (filters.cuisine === "Tous" && Object.keys(grouped).length > 1) {
      const hdr = document.createElement("div");
      hdr.className = "section-header";
      hdr.textContent = cuisine;
      container.appendChild(hdr);
    }

    items.forEach(r => {
      const card = document.createElement("div");
      card.className = `resto-card ${r.status}`;
      card.style.animationDelay = delay * 0.05 + "s";
      delay++;

      const tested = r.status === "tested";

      card.innerHTML = `
        <div class="card-top">
          <div class="card-name">${r.name}</div>
          <div class="card-status ${r.status}">${tested ? "✅ Testé" : "⏳ À tester"}</div>
        </div>

        <div class="card-meta">
          <span class="card-cuisine">${r.cuisine}</span>
          <span class="card-price">${r.price}</span>
          <span class="card-location">📍 ${r.location}</span>
          ${tested && r.rating ? `<span class="card-stars">${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}</span>` : ""}
        </div>

        ${r.note ? `<div class="card-note">"${r.note}"</div>` : ""}

        <div class="card-actions">
          ${tested
            ? `<button class="card-btn card-btn--untest" data-id="${r.id}">↩ Marquer non testé</button>`
            : `<button class="card-btn card-btn--test"   data-id="${r.id}">✅ Marquer comme testé</button>`
          }
          <button class="card-btn" data-edit="${r.id}">✏️ Modifier</button>
          <button class="card-btn card-btn--delete" data-del="${r.id}">🗑</button>
        </div>
      `;

      container.appendChild(card);
    });
  });

  // Listeners
  container.querySelectorAll("[data-id]").forEach(btn => {
    btn.addEventListener("click", () => toggleStatus(parseFloat(btn.dataset.id)));
  });
  container.querySelectorAll("[data-edit]").forEach(btn => {
    btn.addEventListener("click", () => openEdit(parseFloat(btn.dataset.edit)));
  });
  container.querySelectorAll("[data-del]").forEach(btn => {
    btn.addEventListener("click", () => deleteResto(parseFloat(btn.dataset.del)));
  });
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
  toast("🗑 Restaurant supprimé");
  renderStats();
  renderFilters();
  renderList();
}

// ═══════════════════════════════════════════════════
//  MODAL
// ═══════════════════════════════════════════════════

function openAdd() {
  editId = null;
  selectedPrice  = "";
  selectedRating = 0;
  selectedStatus = "pending";

  document.getElementById("modalTitle").textContent = "Nouveau restaurant";
  document.getElementById("fName").value     = "";
  document.getElementById("fCuisine").value  = "";
  document.getElementById("fLocation").value = "";
  document.getElementById("fNote").value     = "";

  // Reset price buttons
  document.querySelectorAll(".price-btn").forEach(b => b.classList.remove("active"));
  // Reset status toggle
  document.querySelectorAll(".status-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(".status-btn--pending").classList.add("active");
  // Reset stars
  document.getElementById("ratingGroup").style.display = "none";
  refreshStars(0);

  document.getElementById("overlay").classList.add("open");
  document.getElementById("fName").focus();
}

function openEdit(id) {
  const r = restos.find(r => r.id === id);
  if (!r) return;
  editId = id;
  selectedPrice  = r.price;
  selectedRating = r.rating || 0;
  selectedStatus = r.status;

  document.getElementById("modalTitle").textContent = "Modifier le restaurant";
  document.getElementById("fName").value     = r.name;
  document.getElementById("fCuisine").value  = r.cuisine;
  document.getElementById("fLocation").value = r.location;
  document.getElementById("fNote").value     = r.note || "";

  // Price buttons
  document.querySelectorAll(".price-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.price === r.price);
  });

  // Status
  document.querySelectorAll(".status-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(`.status-btn--${r.status}`).classList.add("active");

  // Rating
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

  // Validation
  let err = false;
  if (!name)     { document.getElementById("fName").style.borderColor = "var(--red)"; err = true; }
  else             document.getElementById("fName").style.borderColor = "";
  if (!cuisine)  { document.getElementById("fCuisine").style.borderColor = "var(--red)"; err = true; }
  else             document.getElementById("fCuisine").style.borderColor = "";
  if (!location) { document.getElementById("fLocation").style.borderColor = "var(--red)"; err = true; }
  else             document.getElementById("fLocation").style.borderColor = "";
  if (!selectedPrice) { document.querySelector(".price-selector").style.outline = "2px solid var(--red)"; err = true; }
  else                  document.querySelector(".price-selector").style.outline = "";
  if (err) return;

  const data = { name, cuisine, price: selectedPrice, location, note, status: selectedStatus, rating: selectedStatus === "tested" ? selectedRating : 0 };

  if (editId !== null) {
    restos = restos.map(r => r.id === editId ? { ...r, ...data } : r);
    toast("✏️ Restaurant modifié !");
  } else {
    restos.push({ id: uid(), ...data });
    toast("🎉 Restaurant ajouté !");
  }

  persist();
  closeModal();
  renderStats();
  renderFilters();
  renderList();
}

// ─── Stars ───
function refreshStars(val) {
  document.querySelectorAll("#starsInput .star").forEach(s => {
    s.classList.toggle("active", parseInt(s.dataset.v) <= val);
    s.textContent = parseInt(s.dataset.v) <= val ? "★" : "☆";
  });
}

// ═══════════════════════════════════════════════════
//  EVENT LISTENERS
// ═══════════════════════════════════════════════════

document.getElementById("btnAdd").addEventListener("click", openAdd);
document.getElementById("btnModalCancel").addEventListener("click", closeModal);
document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("btnModalSave").addEventListener("click", saveModal);

// Close on overlay click
document.getElementById("overlay").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

// ESC key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
  if (e.key === "Enter" && document.getElementById("overlay").classList.contains("open")) {
    saveModal();
  }
});

// Search
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

// Price buttons
document.querySelectorAll(".price-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedPrice = btn.dataset.price;
    document.querySelectorAll(".price-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Status toggle
document.querySelectorAll(".status-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    selectedStatus = btn.dataset.status;
    document.querySelectorAll(".status-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("ratingGroup").style.display = selectedStatus === "tested" ? "block" : "none";
  });
});

// Stars
document.querySelectorAll("#starsInput .star").forEach(star => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.dataset.v);
    refreshStars(selectedRating);
  });
  star.addEventListener("mouseover", () => {
    refreshStars(parseInt(star.dataset.v));
  });
  star.addEventListener("mouseout", () => {
    refreshStars(selectedRating);
  });
});

// ═══════════════════════════════════════════════════
//  SERVICE WORKER (PWA)
// ═══════════════════════════════════════════════════

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

// ═══════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════

renderStats();
renderFilters();
renderList();
