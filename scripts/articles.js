document.addEventListener("DOMContentLoaded", () => {
    loadArticles();  // Load all articles initially
    setupSearch();   // Set up search functionality
});

// Load and display all articles (filtered or not)
function loadArticles(filter = "") {
    fetch("data/articles.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch articles data.");
            }
            return response.json();
        })
        .then((articles) => {
            const container = document.querySelector(".articles-container");
            container.innerHTML = ""; // Clear previous articles

            const filteredArticles = articles.filter((article) =>
                article.title.toLowerCase().includes(filter) ||
                article.author.toLowerCase().includes(filter)
            );

            if (filteredArticles.length === 0) {
                container.innerHTML = "<p>No articles found.</p>";
                return;
            }

            filteredArticles.forEach((article) => {
                const articleCard = document.createElement("div");
                articleCard.className = "article-card";

                articleCard.innerHTML = `
                    <img src="${article.image}" alt="${article.title}">
                    <div class="article-content">
                        <h3 class="article-title">${article.title}</h3>
                        <p class="article-author">By ${article.author}</p>
                        <p class="article-description">${article.description}</p>
                        <a href="${article.link}" target="_blank">Read More</a>
                    </div>
                `;
                container.appendChild(articleCard);
            });
        })
        .catch((error) => {
            console.error("Error loading articles:", error);
            document.querySelector(".articles-container").innerHTML =
                "<p>Failed to load articles. Please try again later.</p>";
        });
}

// Set up the search functionality
function setupSearch() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const suggestionsContainer = document.createElement("div");
    suggestionsContainer.className = "search-suggestions";
    document.querySelector(".search-container").appendChild(suggestionsContainer);

    // Perform search when the button is clicked
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase().trim();
        loadArticles(query);
    });

    // Perform search on keyup event (while typing)
    searchInput.addEventListener("keyup", (event) => {
        const query = searchInput.value.toLowerCase().trim();
        loadArticles(query);  // Perform the search as the user types

        // Display suggestions below the search input
        if (query.length > 0) {
            displaySuggestions(query);
        } else {
            suggestionsContainer.innerHTML = "";
        }
    });
}

// Display suggestions as the user types
function displaySuggestions(query) {
    fetch("data/articles.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch articles data.");
            }
            return response.json();
        })
        .then((articles) => {
            const suggestionsContainer = document.querySelector(".search-suggestions");
            suggestionsContainer.innerHTML = ""; // Clear previous suggestions

            const matchingArticles = articles.filter((article) =>
                article.title.toLowerCase().includes(query) ||
                article.author.toLowerCase().includes(query)
            );

            matchingArticles.forEach((article) => {
                const suggestion = document.createElement("div");
                suggestion.className = "suggestion-item";
                suggestion.textContent = article.title;
                suggestion.addEventListener("click", () => {
                    document.getElementById("search-input").value = article.title;
                    loadArticles(article.title.toLowerCase());
                    suggestionsContainer.innerHTML = "";  // Clear suggestions on selection
                });
                suggestionsContainer.appendChild(suggestion);
            });
        })
        .catch((error) => {
            console.error("Error displaying search suggestions:", error);
        });
}
