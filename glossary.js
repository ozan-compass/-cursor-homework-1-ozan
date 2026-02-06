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

function renderGlossary() {
  const list = document.getElementById("glossary-list");

  const html = glossaryEntries
    .map(
      ({ term, description, tags }) => `
    <div class="glossary-entry bg-white rounded-lg border border-gray-200 p-5">
      <dt class="text-lg font-semibold text-gray-900">${term}</dt>
      <dd class="mt-1 text-gray-600">${description}</dd>
      <dd class="mt-3 flex flex-wrap gap-2" aria-label="Tags">
        ${tags
          .map(
            (tag) =>
              `<span class="tag inline-block text-xs font-medium px-2.5 py-0.5 rounded-full ${TAG_COLORS[tag] || "bg-gray-100 text-gray-600"}">${tag}</span>`
          )
          .join("")}
      </dd>
    </div>`
    )
    .join("");

  list.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderGlossary);
