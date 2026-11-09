(() => {
  "use strict";

  const catalogs = {
    shotguns: [
      { name: "Browning Auto-5", maker: "Browning", origin: "Belgium", year: 1902, gauges: ["12 gauge", "16 gauge", "20 gauge"] },
      { name: "Winchester Model 12", maker: "Winchester", year: 1912, gauges: ["12 gauge", "16 gauge", "20 gauge", "28 gauge"] },
      { name: "Ithaca Model 37", maker: "Ithaca Gun Company", year: 1937, gauges: ["12 gauge", "16 gauge", "20 gauge", "28 gauge"] },
      { name: "Remington Model 870", maker: "Remington", year: 1950, gauges: ["12 gauge", "16 gauge", "20 gauge", "28 gauge", ".410 bore"] },
      { name: "Mossberg 500", maker: "O.F. Mossberg & Sons", year: 1961, gauges: ["12 gauge", "20 gauge", ".410 bore"] },
      { name: "Beretta 686 Silver Pigeon", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy", year: 1986, gauges: ["12 gauge", "20 gauge", "28 gauge", ".410 bore"] },
      { name: "Benelli Super Black Eagle", maker: "Benelli", year: 1987, gauges: ["12 gauge"] },
      { name: "Franchi Affinity", maker: "Franchi", year: 2012, gauges: ["12 gauge", "20 gauge"] },
      { name: "Beretta 687 Silver Pigeon", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 692", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 694", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta DT11", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 688 Performance", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Browning B525", maker: "Browning", origin: "Belgium" },
      { name: "Browning B725", maker: "Browning", origin: "Belgium" },
      { name: "Browning B15", maker: "Browning", origin: "Belgium" },
      { name: "Browning Citori", maker: "Browning", origin: "United States / Japan" },
      { name: "Browning Cynergy", maker: "Browning", origin: "United States / Japan" },
      { name: "Browning 825", maker: "Browning", origin: "Belgium" },
      { name: "Benelli 828U", maker: "Benelli", origin: "Italy" },
      { name: "Benelli 828U Sport", maker: "Benelli", origin: "Italy" },
      { name: "Caesar Guerini Summit", maker: "Caesar Guerini", origin: "Italy" },
      { name: "Caesar Guerini Magnus", maker: "Caesar Guerini", origin: "Italy" },
      { name: "Caesar Guerini Invictus", maker: "Caesar Guerini", origin: "Italy" },
      { name: "Caesar Guerini Apex", maker: "Caesar Guerini", origin: "Italy" },
      { name: "Perazzi MX8", maker: "Perazzi", origin: "Italy" },
      { name: "Perazzi High Tech", maker: "Perazzi", origin: "Italy" },
      { name: "Perazzi SCO", maker: "Perazzi", origin: "Italy" },
      { name: "Krieghoff K-80", maker: "Krieghoff", origin: "Germany" },
      { name: "Krieghoff K-20", maker: "Krieghoff", origin: "Germany" },
      { name: "Blaser F3", maker: "Blaser", origin: "Germany" },
      { name: "Blaser F16", maker: "Blaser", origin: "Germany" },
      { name: "Rizzini BR110", maker: "Rizzini", origin: "Italy" },
      { name: "Rizzini BR320", maker: "Rizzini", origin: "Italy" },
      { name: "Rizzini Vertex", maker: "Rizzini", origin: "Italy" },
      { name: "Fausti Class", maker: "Fausti", origin: "Italy" },
      { name: "Fausti Dea", maker: "Fausti", origin: "Italy" },
      { name: "Fausti XF4", maker: "Fausti", origin: "Italy" },
      { name: "Fabarm Elos", maker: "Fabarm", origin: "Italy" },
      { name: "Fabarm Asper", maker: "Fabarm", origin: "Italy" },
      { name: "Fabarm Axis", maker: "Fabarm", origin: "Italy" },
      { name: "Franchi Instinct", maker: "Franchi", origin: "Italy" },
      { name: "Franchi Feeling", maker: "Franchi", origin: "Italy" },
      { name: "Sabatti Saphire", maker: "Sabatti", origin: "Italy" },
      { name: "Sabatti Classic", maker: "Sabatti", origin: "Italy" },
      { name: "Antonio Zoli Z-Sport", maker: "Antonio Zoli", origin: "Italy" },
      { name: "Antonio Zoli Kronos", maker: "Antonio Zoli", origin: "Italy" },
      { name: "F.A.I.R. Carrera", maker: "F.A.I.R.", origin: "Italy" },
      { name: "F.A.I.R. Iside", maker: "F.A.I.R.", origin: "Italy" },
      { name: "F.A.I.R. Xlight", maker: "F.A.I.R.", origin: "Italy" },
      { name: "Miroku MK38", maker: "Miroku", origin: "Japan" },
      { name: "Miroku MK70", maker: "Miroku", origin: "Japan" },
      { name: "SKB 585", maker: "SKB", origin: "Japan" },
      { name: "Winchester 101", maker: "Winchester", origin: "United States / Japan" },
      { name: "Winchester 23", maker: "Winchester", origin: "United States" },
      { name: "Merkel 2000C", maker: "Merkel", origin: "Germany" },
      { name: "Merkel 303", maker: "Merkel", origin: "Germany" }
    ],
    carbines: [
      { name: "Winchester Model 1894 Carbine", maker: "Winchester", year: 1894, gauges: [".30-30 Winchester", ".32 Winchester Special"] },
      { name: "Marlin Model 336", maker: "Marlin", year: 1948, gauges: [".30-30 Winchester", ".35 Remington"], image: "../photos/hunting/marlin-model-336.png" },
      { name: "Ruger 10/22 Carbine", maker: "Sturm, Ruger & Co.", year: 1964, gauges: [".22 LR"] },
      { name: "Browning BLR", maker: "Browning", origin: "Belgium", year: 1969, gauges: [".243 Winchester", ".308 Winchester", ".30-06 Springfield"], image: "../photos/hunting/browning-blr.png" },
      { name: "Ruger 77/44", maker: "Sturm, Ruger & Co.", year: 1997, gauges: [".44 Remington Magnum"] },
      { name: "Henry Big Boy Carbine", maker: "Henry Repeating Arms", year: 2003, gauges: [".357 Magnum", ".44 Magnum", ".45 Colt"], image: "../photos/hunting/henry-big-boy.webp" },
      { name: "CZ 527 Carbine", maker: "Česká zbrojovka", year: 1990, yearLabel: "1990s", gauges: [".223 Remington", "7.62×39mm"], image: "../photos/hunting/cz-527-carabine.png" },
      { name: "Zastava M70", maker: "Zastava Arms", origin: "Serbia" },
      { name: "Zastava M85", maker: "Zastava Arms", origin: "Serbia" },
      { name: "Mauser 98", maker: "Mauser", origin: "Germany", image: "../photos/hunting/mauser98.png" },
      { name: "Mauser M12", maker: "Mauser", origin: "Germany", image: "../photos/hunting/mauser-m12.png" },
      { name: "Sako 85", maker: "Sako", origin: "Finland" },
      { name: "Tikka T3x", maker: "Tikka", origin: "Finland" },
      { name: "CZ 557", maker: "Česká zbrojovka", origin: "Czech Republic", image: "../photos/hunting/cz-557.webp" },
      { name: "CZ 600", maker: "Česká zbrojovka", origin: "Czech Republic", image: "../photos/hunting/cz600.png" },
      { name: "Browning X-Bolt", maker: "Browning", origin: "Belgium / United States", image: "../photos/hunting/browning-x-bolt.png" },
      { name: "Remington Model 700", maker: "Remington", origin: "United States" },
      { name: "Winchester Model 70", maker: "Winchester", origin: "United States" },
      { name: "Ruger American Rifle", maker: "Sturm, Ruger & Co.", origin: "United States" },
      { name: "Steyr Mannlicher Classic", maker: "Steyr Arms", origin: "Austria" },
      { name: "Blaser R8", maker: "Blaser", origin: "Germany", image: "../photos/hunting/blaser-r8.png" },
      { name: "Sauer 100", maker: "J. P. Sauer & Sohn", origin: "Germany" },
      { name: "Howa 1500", maker: "Howa", origin: "Japan", image: "../photos/hunting/howa1500.png" },
      { name: "Weatherby Vanguard", maker: "Weatherby", origin: "United States" },
      { name: "Savage 110", maker: "Savage Arms", origin: "United States" },
      { name: "Heym SR 21", maker: "Heym", origin: "Germany", image: "../photos/hunting/heym-sr-21.png" },
      { name: "Merkel RX Helix", maker: "Merkel", origin: "Germany", image: "../photos/hunting/merkel.png" },
      { name: "Antonio Zoli AZ 1900", maker: "Antonio Zoli", origin: "Italy" },
      { name: "Haenel Jaeger 10", maker: "C. G. Haenel", origin: "Germany", image: "../photos/hunting/haenel-jeager-10.png" },
      { name: "Mossberg Patriot", maker: "O.F. Mossberg & Sons", origin: "United States" },
      { name: "Beretta BRX1", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy", image: "../photos/hunting/beretta-brx1.png" },
      { name: "Steyr Monobloc", maker: "Steyr Arms", origin: "Austria" },
      { name: "Zastava M85 Mini Mauser", maker: "Zastava Arms", origin: "Serbia" },
      { name: "Zastava M808", maker: "Zastava Arms", origin: "Serbia" },
      { name: "Zastava LK M70", maker: "Zastava Arms", origin: "Serbia" },
      { name: "Zastava M2010", maker: "Zastava Arms", origin: "Serbia" },
      { name: "Zastava M07", maker: "Zastava Arms", origin: "Serbia" },
      { name: "Remington Model 783", maker: "Remington", origin: "United States" },
      { name: "Remington Model 7600", maker: "Remington", origin: "United States" },
      { name: "Winchester XPR", maker: "Winchester", origin: "United States" },
      { name: "Winchester Model 88", maker: "Winchester", origin: "United States" },
      { name: "Browning BAR", maker: "Browning", origin: "Belgium", image: "../photos/hunting/browning-bar.png" },
      { name: "Browning A-Bolt", maker: "Browning", origin: "Belgium / United States", image: "../photos/hunting/browning-a-bolt.png" },
      { name: "Savage Axis", maker: "Savage Arms", origin: "United States" },
      { name: "Savage 116", maker: "Savage Arms", origin: "United States" },
      { name: "Ruger Hawkeye", maker: "Sturm, Ruger & Co.", origin: "United States" },
      { name: "Ruger No. 1", maker: "Sturm, Ruger & Co.", origin: "United States" },
      { name: "Ruger M77", maker: "Sturm, Ruger & Co.", origin: "United States" },
      { name: "CZ 527", maker: "Česká zbrojovka", origin: "Czech Republic", image: "../photos/hunting/cz-527.png" },
      { name: "CZ 550", maker: "Česká zbrojovka", origin: "Czech Republic", image: "../photos/hunting/cz-550.png" },
      { name: "CZ 557 Varmint", maker: "Česká zbrojovka", origin: "Czech Republic", image: "../photos/hunting/cz-557.webp" },
      { name: "Sako 75", maker: "Sako", origin: "Finland" },
      { name: "Sako S20", maker: "Sako", origin: "Finland" },
      { name: "Tikka T3", maker: "Tikka", origin: "Finland" },
      { name: "Tikka T1x", maker: "Tikka", origin: "Finland" },
      { name: "Weatherby Mark V", maker: "Weatherby", origin: "United States" },
      { name: "Weatherby 307", maker: "Weatherby", origin: "United States" },
      { name: "Sauer 202", maker: "J. P. Sauer & Sohn", origin: "Germany" },
      { name: "Sauer 404", maker: "J. P. Sauer & Sohn", origin: "Germany" },
      { name: "Blaser K95", maker: "Blaser", origin: "Germany", image: "../photos/hunting/blaserk95.png" }
    ],
    beretta: [
      { name: "Beretta 391 Urika", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy", year: 1999, gauges: ["12 gauge", "20 gauge"] },
      { name: "Beretta A400 Xplor Action", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy", year: 2010, gauges: ["12 gauge", "20 gauge"] },
      { name: "Beretta DT11", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy", year: 2011, gauges: ["12 gauge"] },
      { name: "Beretta 694", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy", year: 2019, gauges: ["12 gauge"] },
      { name: "Beretta A400 Xtreme Plus", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy", year: 2018, gauges: ["12 gauge"] },
      { name: "Beretta 686 Silver Pigeon", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy", year: 1986, gauges: ["12 gauge", "20 gauge", "28 gauge", ".410 bore"] },
      { name: "Beretta 687 Silver Pigeon", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 688 Performance", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 690 Field", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta DT10", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 680", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 682", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 687 EELL", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 687 EL Gold Pigeon", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 686 Onyx", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 686 White Onyx", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 686 Essential", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 686 Ultralight", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 687 EELL Classic", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 1301 Tactical", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta A400 Xplor", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta A400 Upland", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta A300 Ultima", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta A300 Outlander", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 390", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta AL391 Teknys", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 1201FP", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 303", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta 301", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" },
      { name: "Beretta BRX1", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy", image: "../photos/hunting/beretta-brx1.png" },
      { name: "Beretta S55", maker: "Fabbrica d'Armi Pietro Beretta", origin: "Italy" }
    ]
  };

  const catalogKey = document.body.dataset.firearmCatalog;
  const models = catalogs[catalogKey];
  const grid = document.getElementById("firearm-grid");
  const search = document.getElementById("firearm-search");
  const gaugeFilter = document.getElementById("gauge-filter");
  const sortBy = document.getElementById("sort-by");
  const status = document.getElementById("catalog-status");
  const ammunitionLabel = catalogKey === "carbines" ? "Caliber" : catalogKey === "shotguns" ? "Gauge" : "Caliber / Gauge";
  if (!models) throw new Error(`Unknown hunting firearm catalog "${catalogKey}".`);
  if (!grid || !search || !gaugeFilter || !sortBy || !status) {
    throw new Error("Hunting firearm catalog page is missing required controls.");
  }

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);

  [...new Set(models.flatMap((model) => model.gauges || []))].sort((a, b) => a.localeCompare(b)).forEach((gauge) => {
    const option = document.createElement("option");
    option.value = gauge;
    option.textContent = gauge;
    gaugeFilter.append(option);
  });

  function render() {
    const query = search.value.trim().toLocaleLowerCase();
    const gauge = gaugeFilter.value;
    const sort = sortBy.value;
    const visible = models.filter((model) => {
      const matchesQuery = `${model.name} ${model.maker} ${model.origin || ""}`.toLocaleLowerCase().includes(query);
      return matchesQuery && (!gauge || (model.gauges || []).includes(gauge));
    });

    visible.sort((a, b) => {
      if (sort === "name-desc") return b.name.localeCompare(a.name);
      if (sort === "year-asc") return (a.year || Number.MAX_SAFE_INTEGER) - (b.year || Number.MAX_SAFE_INTEGER) || a.name.localeCompare(b.name);
      if (sort === "year-desc") return (b.year || 0) - (a.year || 0) || a.name.localeCompare(b.name);
      if (sort === "caliber-asc") return (a.gauges || []).join(", ").localeCompare((b.gauges || []).join(", "));
      if (sort === "caliber-desc") return (b.gauges || []).join(", ").localeCompare((a.gauges || []).join(", "));
      return a.name.localeCompare(b.name);
    });

    grid.innerHTML = visible.map((model) => `
      <article class="hunting-firearm-card">
        <div class="hunting-firearm-image${model.image ? " has-image" : ""}" role="img" aria-label="${model.image ? escapeHtml(model.name) : "Photograph placeholder"}">
          ${model.image ? `<img src="${escapeHtml(model.image)}" alt="${escapeHtml(model.name)}">` : "<span>PHOTO PLACEHOLDER</span>"}
        </div>
        <div class="hunting-firearm-card-copy">
          <h3>${escapeHtml(model.name)}</h3>
          <p class="hunting-firearm-maker">${escapeHtml(model.maker)}</p>
          <dl class="hunting-firearm-specs">
            <div><dt>Manufacturer</dt><dd>${escapeHtml(model.maker)}</dd></div>
            ${model.origin ? `<div><dt>Country of origin</dt><dd>${escapeHtml(model.origin)}</dd></div>` : ""}
            <div><dt>Introduced</dt><dd>${escapeHtml(model.yearLabel || String(model.year || "Not specified"))}</dd></div>
            <div><dt>${ammunitionLabel}</dt><dd>${escapeHtml((model.gauges || []).join(", ") || "Not specified")}</dd></div>
          </dl>
        </div>
      </article>
    `).join("");
    const isSerbian = document.documentElement.lang === "sr";
    status.textContent = visible.length
      ? `${visible.length} ${isSerbian ? (visible.length === 1 ? "model" : "modela") : (visible.length === 1 ? "model" : "models")}`
      : isSerbian ? "Nijedan model ne odgovara izabranim filterima." : "No models match your filters.";
  }

  search.addEventListener("input", render);
  gaugeFilter.addEventListener("change", render);
  sortBy.addEventListener("change", render);
  new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  render();
})();
