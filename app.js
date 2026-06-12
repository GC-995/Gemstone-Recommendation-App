const gems = [
  {
    id: "amethyst",
    name: "Amethyst",
    family: "Quartz",
    goals: ["calm", "focus"],
    months: [2],
    budgets: ["student", "mid"],
    styles: ["minimal", "traditional"],
    price: 1,
    care: 5,
    wear: "Pendant or study-desk stone",
    metal: "Silver, thread, or stainless steel",
    tones: ["cool", "soft"],
    contexts: ["campus", "active"],
    formats: ["pendant", "bracelet"],
    authenticity: ["either", "natural"],
    palette: ["#734c9c", "#d8c7f0"],
    tags: ["Student friendly", "Low maintenance", "Calming"],
    detail: "A practical pick when the profile values emotional balance, low cost, and daily use.",
  },
  {
    id: "citrine",
    name: "Citrine",
    family: "Quartz",
    goals: ["confidence", "creativity"],
    months: [11],
    budgets: ["student", "mid"],
    styles: ["minimal", "statement"],
    price: 1,
    care: 5,
    wear: "Ring or bracelet",
    metal: "Gold tone, brass, or hypoallergenic steel",
    tones: ["warm", "bold"],
    contexts: ["interview", "events", "campus"],
    formats: ["ring", "bracelet"],
    authenticity: ["either", "natural"],
    palette: ["#d99a2b", "#ffe2a3"],
    tags: ["Interview energy", "Warm color", "Durable"],
    detail: "Useful for a bright, confident look without moving into premium gemstone pricing.",
  },
  {
    id: "garnet",
    name: "Garnet",
    family: "Silicate",
    goals: ["confidence", "protection"],
    months: [1],
    budgets: ["student", "mid", "premium"],
    styles: ["traditional", "statement"],
    price: 2,
    care: 4,
    wear: "Ring or pendant",
    metal: "Silver, gold, or platinum",
    tones: ["bold", "warm"],
    contexts: ["interview", "events"],
    formats: ["ring", "pendant"],
    authenticity: ["either", "natural", "certified"],
    palette: ["#8f183d", "#f0a1a8"],
    tags: ["Grounding", "Formal wear", "Strong color"],
    detail: "A strong recommendation when the user wants presence, grounding, and a traditional option.",
  },
  {
    id: "moonstone",
    name: "Moonstone",
    family: "Feldspar",
    goals: ["calm", "creativity"],
    months: [6],
    budgets: ["student", "mid"],
    styles: ["minimal", "traditional"],
    price: 2,
    care: 3,
    wear: "Pendant or earrings",
    metal: "Silver or thread setting",
    tones: ["cool", "soft"],
    contexts: ["campus", "events"],
    formats: ["pendant"],
    authenticity: ["either", "natural"],
    palette: ["#dfe8ed", "#8fa9bb"],
    tags: ["Soft look", "Reflective", "Gentle care"],
    detail: "Best for users who prefer a subtle gemstone and do not need a high-impact statement piece.",
  },
  {
    id: "peridot",
    name: "Peridot",
    family: "Olivine",
    goals: ["focus", "protection"],
    months: [8],
    budgets: ["mid", "premium"],
    styles: ["minimal", "statement"],
    price: 3,
    care: 3,
    wear: "Pendant or protected ring",
    metal: "Gold or silver",
    tones: ["warm", "bold"],
    contexts: ["events", "interview"],
    formats: ["pendant", "ring"],
    authenticity: ["either", "certified"],
    palette: ["#74a73d", "#ddf39a"],
    tags: ["Fresh color", "Distinctive", "Moderate care"],
    detail: "A distinctive green option when the profile allows a slightly higher budget and protected wear.",
  },
  {
    id: "sapphire",
    name: "Blue Sapphire",
    family: "Corundum",
    goals: ["focus", "confidence"],
    months: [9],
    budgets: ["premium"],
    styles: ["traditional", "statement"],
    price: 5,
    care: 5,
    wear: "Ring with certification",
    metal: "Gold or platinum",
    tones: ["cool", "bold"],
    contexts: ["interview", "events"],
    formats: ["ring"],
    authenticity: ["certified", "natural"],
    palette: ["#1f4c96", "#a7c5ee"],
    tags: ["Premium", "Highly durable", "Certified buy"],
    detail: "Recommended only when premium budget and high spiritual openness make the trade-off reasonable.",
  },
  {
    id: "emerald",
    name: "Emerald",
    family: "Beryl",
    goals: ["creativity", "calm"],
    months: [5],
    budgets: ["premium"],
    styles: ["traditional", "statement"],
    price: 5,
    care: 2,
    wear: "Occasional ring or pendant",
    metal: "Gold with protective setting",
    tones: ["cool", "bold"],
    contexts: ["events", "interview"],
    formats: ["ring", "pendant"],
    authenticity: ["certified", "natural"],
    palette: ["#13714f", "#91d1aa"],
    tags: ["Premium", "Classic", "Needs care"],
    detail: "A classic but fragile choice; it scores best for traditional styling and premium budgets.",
  },
  {
    id: "turquoise",
    name: "Turquoise",
    family: "Phosphate",
    goals: ["protection", "creativity"],
    months: [12],
    budgets: ["student", "mid"],
    styles: ["statement", "traditional"],
    price: 2,
    care: 2,
    wear: "Pendant, bracelet, or bead",
    metal: "Silver, thread, or leather cord",
    tones: ["cool", "bold"],
    contexts: ["events", "campus"],
    formats: ["pendant", "bracelet"],
    authenticity: ["either", "natural"],
    palette: ["#20a7a8", "#bdece4"],
    tags: ["Protective theme", "Bohemian", "Porous"],
    detail: "Works well for expressive style, but the app flags its care needs for daily wear.",
  },
  {
    id: "rose-quartz",
    name: "Rose Quartz",
    family: "Quartz",
    goals: ["calm", "creativity"],
    months: [10],
    budgets: ["student", "mid"],
    styles: ["minimal"],
    price: 1,
    care: 5,
    wear: "Bracelet or pendant",
    metal: "Silver, thread, or stainless steel",
    tones: ["soft", "warm"],
    contexts: ["campus", "active"],
    formats: ["bracelet", "pendant"],
    authenticity: ["either", "natural"],
    palette: ["#d88aa2", "#ffe0e9"],
    tags: ["Affordable", "Soft color", "Daily wear"],
    detail: "A gentle everyday recommendation for low budget, low friction, and minimal style.",
  },
  {
    id: "diamond",
    name: "Diamond",
    family: "Carbon",
    goals: ["confidence", "focus"],
    months: [4],
    budgets: ["premium"],
    styles: ["minimal", "statement"],
    price: 5,
    care: 5,
    wear: "Ring or pendant",
    metal: "Platinum, gold, or white gold",
    tones: ["cool", "soft"],
    contexts: ["interview", "events"],
    formats: ["ring", "pendant"],
    authenticity: ["certified", "natural"],
    palette: ["#e8eef1", "#ffffff"],
    tags: ["Premium", "Durable", "Formal"],
    detail: "Scores well for durability and formal confidence, but only fits premium budgets.",
  },
];

const form = document.querySelector("#recommendationForm");
const resultsGrid = document.querySelector("#resultsGrid");
const summaryStrip = document.querySelector("#summaryStrip");
const template = document.querySelector("#gemCardTemplate");
const openness = document.querySelector("#openness");
const opennessOutput = document.querySelector("#opennessOutput");
const durabilityOutput = document.querySelector("#durabilityOutput");
const sortMode = document.querySelector("#sortMode");
const profileStatus = document.querySelector("#profileStatus");
const shortlistItems = document.querySelector("#shortlistItems");
const compareBox = document.querySelector("#compareBox");
const clearShortlist = document.querySelector("#clearShortlist");
const resetButton = document.querySelector("#resetButton");
const printButton = document.querySelector("#printButton");

let shortlist = JSON.parse(localStorage.getItem("gemShortlist") || "[]");

function getProfile() {
  const data = new FormData(form);
  return {
    goal: data.get("goal"),
    month: Number(data.get("birthMonth")),
    lifestyle: data.get("lifestyle"),
    colorTone: data.get("colorTone"),
    budget: data.get("budget"),
    style: data.get("style"),
    wearFormat: data.get("wearFormat"),
    authenticity: data.get("authenticity"),
    durability: Number(data.get("durability")),
    openness: Number(data.get("openness")),
    sensitiveSkin: data.get("sensitiveSkin") === "on",
    dailyWear: data.get("dailyWear") === "on",
  };
}

function budgetRank(value) {
  return { student: 1, mid: 3, premium: 5 }[value];
}

function scoreGem(gem, profile) {
  let score = 38;
  const reasons = [];

  if (gem.goals.includes(profile.goal)) {
    score += 24;
    reasons.push("matches your main intention");
  }

  if (gem.months.includes(profile.month)) {
    score += 14;
    reasons.push("aligns with your birth month");
  }

  if (gem.budgets.includes(profile.budget)) {
    score += 16;
    reasons.push("fits your budget");
  } else if (gem.price <= budgetRank(profile.budget)) {
    score += 8;
    reasons.push("stays within a practical cost range");
  } else {
    score -= 16;
  }

  if (gem.styles.includes(profile.style)) {
    score += 10;
    reasons.push("suits your preferred style");
  }

  if (gem.contexts.includes(profile.lifestyle)) {
    score += 10;
    reasons.push("fits your day-to-day context");
  }

  if (gem.tones.includes(profile.colorTone)) {
    score += 8;
    reasons.push("matches your color mood");
  }

  if (gem.formats.includes(profile.wearFormat)) {
    score += 8;
    reasons.push(`works as a ${profile.wearFormat}`);
  }

  if (profile.authenticity !== "either" && gem.authenticity.includes(profile.authenticity)) {
    score += 7;
    reasons.push(`supports your ${profile.authenticity} preference`);
  }

  if (profile.sensitiveSkin && /steel|thread|silver/i.test(gem.metal)) {
    score += 6;
    reasons.push("has lower-irritation wear options");
  }

  if (profile.dailyWear && gem.care >= 4) {
    score += 8;
    reasons.push("is practical for daily wear");
  }

  if (profile.dailyWear && gem.care <= 2) {
    score -= 8;
  }

  if (profile.durability >= 7 && gem.care >= 4) {
    score += 7;
  }

  if (profile.durability >= 7 && gem.care <= 2) {
    score -= 10;
  }

  if (profile.openness >= 8 && gem.months.includes(profile.month)) {
    score += 5;
  }

  if (profile.openness <= 3 && gem.price >= 5) {
    score -= 8;
  }

  if (gem.care >= 4) {
    score += 4;
  }

  return {
    ...gem,
    score: Math.max(0, Math.min(99, score)),
    reasons: reasons.length ? reasons : ["offers a balanced match across your profile"],
  };
}

function renderSummary(profile, topGem) {
  const goalLabels = {
    focus: "Focus",
    confidence: "Confidence",
    calm: "Calm",
    creativity: "Creativity",
    protection: "Protection",
  };
  const chips = [
    `Goal: ${goalLabels[profile.goal]}`,
    `Budget: ${profile.budget}`,
    `Context: ${profile.lifestyle}`,
    `Tone: ${profile.colorTone}`,
    `Style: ${profile.style}`,
    `Top match: ${topGem.name}`,
  ];

  summaryStrip.innerHTML = chips.map((chip) => `<span class="summary-chip">${chip}</span>`).join("");
  profileStatus.textContent = `${topGem.score}% match`;
}

function renderFacts(gem) {
  return `
    <div><dt>Wear</dt><dd>${gem.wear}</dd></div>
    <div><dt>Care</dt><dd>${gem.care}/5</dd></div>
    <div><dt>Budget</dt><dd>${"$".repeat(gem.price)}</dd></div>
    <div><dt>Metal</dt><dd>${gem.metal}</dd></div>
  `;
}

function renderResults() {
  const profile = getProfile();
  opennessOutput.textContent = profile.openness;
  durabilityOutput.textContent = profile.durability;

  let recommendations = gems.map((gem) => scoreGem(gem, profile));
  const mode = sortMode.value;

  recommendations.sort((a, b) => {
    if (mode === "price") return a.price - b.price || b.score - a.score;
    if (mode === "care") return b.care - a.care || b.score - a.score;
    return b.score - a.score;
  });

  renderSummary(profile, recommendations[0]);
  resultsGrid.innerHTML = "";

  recommendations.slice(0, 6).forEach((gem) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.style.setProperty("--gem-bg", `linear-gradient(160deg, ${gem.palette[0]}, ${gem.palette[1]})`);
    card.style.setProperty("--gem-core", gem.palette[0]);
    card.querySelector("h3").textContent = gem.name;
    card.querySelector(".subtitle").textContent = gem.family;
    card.querySelector(".score").textContent = `${gem.score}%`;
    card.querySelector(".why").textContent = `Best because it ${gem.reasons.join(", ")}.`;
    card.querySelector(".facts").innerHTML = renderFacts(gem);
    card.querySelector(".tags").innerHTML = gem.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
    card.querySelector(".details").textContent = gem.detail;

    const shortlistButton = card.querySelector(".shortlist-toggle");
    shortlistButton.textContent = shortlist.includes(gem.id) ? "Saved" : "Shortlist";
    shortlistButton.addEventListener("click", () => toggleShortlist(gem.id));

    const detailsButton = card.querySelector(".details-toggle");
    const details = card.querySelector(".details");
    detailsButton.addEventListener("click", () => {
      details.hidden = !details.hidden;
      detailsButton.querySelector("span").textContent = details.hidden ? "v" : "^";
    });

    resultsGrid.append(card);
  });

  renderShortlist(recommendations);
}

function toggleShortlist(id) {
  shortlist = shortlist.includes(id) ? shortlist.filter((item) => item !== id) : [...shortlist, id];
  localStorage.setItem("gemShortlist", JSON.stringify(shortlist));
  renderResults();
}

function renderShortlist(currentRecommendations = gems.map((gem) => scoreGem(gem, getProfile()))) {
  const selected = shortlist
    .map((id) => currentRecommendations.find((gem) => gem.id === id) || gems.find((gem) => gem.id === id))
    .filter(Boolean);

  if (!selected.length) {
    shortlistItems.innerHTML = `<div class="empty">Save gemstones to compare your final options.</div>`;
    compareBox.textContent = "Comparison appears after at least two stones are shortlisted.";
    return;
  }

  shortlistItems.innerHTML = selected
    .map(
      (gem) => `
        <div class="shortlist-row">
          <div><strong>${gem.name}</strong><span>${gem.family} - ${gem.score || "--"}% match</span></div>
          <button class="icon-button remove-shortlist" data-id="${gem.id}" type="button" title="Remove ${gem.name}" aria-label="Remove ${gem.name}">x</button>
        </div>
      `,
    )
    .join("");

  shortlistItems.querySelectorAll(".remove-shortlist").forEach((button) => {
    button.addEventListener("click", () => toggleShortlist(button.dataset.id));
  });

  const easiest = [...selected].sort((a, b) => b.care - a.care)[0];
  const cheapest = [...selected].sort((a, b) => a.price - b.price)[0];
  compareBox.innerHTML =
    selected.length >= 2
      ? `<strong>Quick comparison:</strong> ${cheapest.name} is the lowest cost option. ${easiest.name} is easiest to maintain.`
      : `${selected[0].name} is saved. Add one more gemstone for comparison.`;
}

form.addEventListener("input", renderResults);
sortMode.addEventListener("change", renderResults);
clearShortlist.addEventListener("click", () => {
  shortlist = [];
  localStorage.removeItem("gemShortlist");
  renderResults();
});
resetButton.addEventListener("click", () => {
  form.reset();
  sortMode.value = "score";
  renderResults();
});
printButton.addEventListener("click", () => window.print());

renderResults();
