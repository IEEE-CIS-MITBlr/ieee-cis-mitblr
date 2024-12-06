document.addEventListener("DOMContentLoaded", () => {
    loadEvents();
    loadArticles();
    loadMembers();
    loadAboutSection();
});

function loadEvents() {
    fetch("data/events.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch events data.");
            }
            return response.json();
        })
        .then((events) => {
            const eventsContainer = document.querySelector(".events-container");
            events.forEach((event) => {
                const eventCard = document.createElement("div");
                eventCard.className = "event-card";

                eventCard.innerHTML = `
                    <img src="${event.image}" alt="${event.title}">
                    <div class="event-content">
                        <h3 class="event-title">${event.title}</h3>
                        <p class="event-description">${event.description}</p>
                        <a href="${event.link}" target="_blank">Read More</a>
                    </div>
                `;

                eventsContainer.appendChild(eventCard);
            });
        })
        .catch((error) => {
            console.error("Error loading events:", error);
            document.querySelector(".events-container").innerHTML = 
                "<p>Failed to load events. Please try again later.</p>";
        });
}

// Load more functionality for articles
let articlesDisplayed = 4; // Number of articles to display initially
let articlesData = []; // Store fetched articles here

function loadArticles() {
    fetch("data/articles.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch articles data.");
            }
            return response.json();
        })
        .then((articles) => {
            articlesData = articles; // Store all articles
            displayArticles(); // Display initial articles
        })
        .catch((error) => {
            console.error("Error loading articles:", error);
            document.querySelector(".articles-container").innerHTML =
                "<p>Failed to load articles. Please try again later.</p>";
        });
}

function displayArticles() {
    const articlesContainer = document.querySelector(".articles-container");
    articlesContainer.innerHTML = ""; // Clear previous content

    const articlesToShow = articlesData.slice(0, articlesDisplayed);

    articlesToShow.forEach((article) => {
        const articleCard = document.createElement("div");
        articleCard.className = "article-card";

        articleCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <h3 class="article-title">${article.title}</h3>
                <p class="article-description">${article.description}</p>
                <a href="${article.link}" target="_blank" class="article-read-more">Read More</a>
            </div>
        `;

        articlesContainer.appendChild(articleCard);
    });

    // Hide "Load More" button if all articles are displayed
    if (articlesDisplayed >= articlesData.length) {
        document.getElementById("load-more").style.display = "none";
    }
}

// Event listener for "Load More" button
document.getElementById("load-more").addEventListener("click", () => {
    articlesDisplayed += 4; // Load 4 more articles
    displayArticles(); // Re-render the articles
});

function loadMembers() {
    fetch("data/members.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch members data.");
            }
            return response.json();
        })
        .then((members) => {
            const membersContainer = document.querySelector(".members-container");
            members.forEach((member) => {
                const memberCard = document.createElement("div");
                memberCard.className = "member-card";

                memberCard.innerHTML = `
                    <img src="${member.image}" alt="${member.name}" class="member-photo">
                    <div class="member-info">
                        <h3 class="member-name">${member.name}</h3>
                        <a href="mailto:${member.email}" class="member-email">${member.email}</a>
                    </div>
                `;

                membersContainer.appendChild(memberCard);
            });
        })
        .catch((error) => {
            console.error("Error loading members:", error);
            document.querySelector(".members-container").innerHTML = 
                "<p>Failed to load members. Please try again later.</p>";
        });
}

// Load about section data (if needed)
function loadAboutSection() {
    // Add functionality here if required to load dynamic content in the about section.
}