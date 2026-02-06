/** @type {{ term: string, description: string, tags: string[] }[]} */
const glossaryEntries = [
  {
    term: "API",
    description:
      "Application Programming Interface — a set of rules that lets different software programs communicate with each other.",
    tags: ["web", "backend"],
  },
  {
    term: "REST",
    description:
      "Representational State Transfer — an architectural style for building networked applications using stateless HTTP requests.",
    tags: ["web", "architecture"],
  },
  {
    term: "CI/CD",
    description:
      "Continuous Integration / Continuous Delivery — practices that automate building, testing, and deploying code changes.",
    tags: ["devops", "automation"],
  },
  {
    term: "DNS",
    description:
      "Domain Name System — translates human-readable domain names into IP addresses so browsers can load web resources.",
    tags: ["networking", "web"],
  },
  {
    term: "OAuth",
    description:
      "An open standard for token-based authentication and authorization on the internet.",
    tags: ["security", "web"],
  },
  {
    term: "Docker",
    description:
      "A platform that packages applications into lightweight, portable containers for consistent deployment across environments.",
    tags: ["devops", "infrastructure"],
  },
  {
    term: "SQL",
    description:
      "Structured Query Language — a standard language for managing and querying relational databases.",
    tags: ["database", "backend"],
  },
];

const TAG_COLORS = {
  web: "bg-blue-100 text-blue-700",
  backend: "bg-green-100 text-green-700",
  architecture: "bg-purple-100 text-purple-700",
  devops: "bg-orange-100 text-orange-700",
  automation: "bg-yellow-100 text-yellow-700",
  networking: "bg-teal-100 text-teal-700",
  security: "bg-red-100 text-red-700",
  infrastructure: "bg-indigo-100 text-indigo-700",
  database: "bg-amber-100 text-amber-700",
};

/**
 * Filter entries whose term, description, or any tag
 * contains the query (case-insensitive).
 * Returns all entries when query is empty/blank.
 */
function filterEntries(entries, query) {
  const q = query.trim().toLowerCase();
  if (!q) return entries;
  return entries.filter(({ term, description, tags }) =>
    term.toLowerCase().includes(q) ||
    description.toLowerCase().includes(q) ||
    tags.some((tag) => tag.toLowerCase().includes(q))
  );
}

function renderGlossary(entries) {
  const list = document.getElementById("glossary-list");

  if (entries.length === 0) {
    list.innerHTML = `<p class="text-sm text-gray-500 text-center py-4">No matching entries found.</p>`;
    return;
  }

  const html = entries
    .map(
      ({ term, description, tags }) => `
    <div class="glossary-entry bg-white rounded-lg border border-gray-200 p-4" tabindex="0">
      <dt role="heading" aria-level="3" class="text-base font-semibold text-gray-900">${term}</dt>
      <dd class="mt-1 text-sm leading-relaxed text-gray-700">${description}</dd>
      <dd class="mt-2 flex flex-wrap gap-1.5" aria-label="Tags">
        ${tags
          .map(
            (tag) =>
              `<span class="tag inline-block text-[0.7rem] font-medium leading-snug px-2 py-px rounded-full ${TAG_COLORS[tag] || "bg-gray-100 text-gray-700"}">${tag}</span>`
          )
          .join("")}
      </dd>
    </div>`
    )
    .join("");

  list.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
  renderGlossary(glossaryEntries);

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", () => {
    const filtered = filterEntries(glossaryEntries, searchInput.value);
    renderGlossary(filtered);
  });
});
