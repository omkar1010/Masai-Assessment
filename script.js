// API URL
const API_URL = "https://restcountries.com/v3.1/region/europe";

// DOM Elements
const countryListEl = document.getElementById("country-list");
const summaryEl = document.getElementById("summary");
const searchInput = document.getElementById("search");
const sortSelect = document.getElementById("sort");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageInfo = document.getElementById("page-info");

// Data + Pagination
let countries = [];
let filteredCountries = [];
let currentPage = 1;
const itemsPerPage = 10;

/* =====================
    Fetch Data
===================== */
async function fetchCountries() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    // Normalize Data
    countries = data.map(c => ({
      name: c.name.common,
      population: c.population,
      capital: c.capital ? c.capital[0] : "N/A",
      flag: c.flags.png,
    }));

    filteredCountries = [...countries];
    render();
  } catch (error) {
    console.error("Error fetching countries:", error);
    summaryEl.textContent = "Failed to load country data.";
  }
}

/* =====================
    Render UI
===================== */
function render() {
  // Pagination calculation
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginated = filteredCountries.slice(start, end);

  // Render countries
  countryListEl.innerHTML = paginated
    .map(
      c => `
        <div class="card">
          <img src="${c.flag}" alt="Flag of ${c.name}">
          <h3>${c.name}</h3>
          <p><strong>Capital:</strong> ${c.capital}</p>
          <p><strong>Population:</strong> ${c.population.toLocaleString()}</p>
        </div>
      `
    )
    .join("");

  // Summary
  const totalCountries = filteredCountries.length;
  const totalPopulation = filteredCountries.reduce(
    (sum, c) => sum + c.population,
    0
  );

  summaryEl.textContent = `Showing ${totalCountries} countries | Total Population: ${totalPopulation.toLocaleString()}`;

  // Pagination info
  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage);
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

/* =====================
    Search Functionality
===================== */
searchInput.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(term)
  );
  currentPage = 1;
  applySorting();
  render();
});

/* =====================
    Sorting Functionality
===================== */
sortSelect.addEventListener("change", () => {
  applySorting();
  render();
});

function applySorting() {
  const sortValue = sortSelect.value;

  switch (sortValue) {
    case "name-asc":
      filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "name-desc":
      filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "pop-asc":
      filteredCountries.sort((a, b) => a.population - b.population);
      break;
    case "pop-desc":
      filteredCountries.sort((a, b) => b.population - a.population);
      break;
  }
}

/* =====================
    Pagination Buttons
===================== */
prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage * itemsPerPage < filteredCountries.length) {
    currentPage++;
    render();
  }
});

/* =====================
    Initialize
===================== */
fetchCountries();
