/* =========================================================
   JALGAON ZONE - CATEGORY ARTICLE LOADER
   Automatic category filtering + latest-first sorting
   ========================================================= */

(function () {
    "use strict";

    const CATEGORY_CONFIG = {
        news: {
            categories: [
                "jalgaon news",
                "jalgaon city",
                "weather"
            ]
        },

        agriculture: {
            categories: [
                "agriculture"
            ]
        },

        "education-jobs": {
            categories: [
                "education & jobs",
                "education",
                "jobs"
            ]
        },

        "government-schemes": {
            categories: [
                "government schemes"
            ]
        },

        history: {
            categories: [
                "history",
                "history & tourism"
            ]
        },

        places: {
            categories: [
                "history & tourism",
                "tourism",
                "places"
            ]
        },

        "jalgaon-information": {
            categories: [
                "jalgaon",
                "jalgaon information"
            ]
        },

        blogs: {
            categories: [
                "blog",
                "blogs"
            ]
        }
    };

    /* ---------------------------------------------------------
       Detect current page
       --------------------------------------------------------- */

    function getPageKey() {

        const file =
            (window.location.pathname.split("/").pop() ||
                "index.html").toLowerCase();

        if (file === "news.html")
            return "news";

        if (file === "agriculture.html")
            return "agriculture";

        if (
            file === "education.html" ||
            file === "education-jobs.html"
        )
            return "education-jobs";

        if (file === "government-schemes.html")
            return "government-schemes";

        if (file === "history.html")
            return "history";

        if (file === "places.html")
            return "places";

        if (file === "jalgaon-information.html")
            return "jalgaon-information";

        if (file === "blogs.html")
            return "blogs";

        return "all";
    }

    /* ---------------------------------------------------------
       Date parser
       --------------------------------------------------------- */

    function parseDate(value) {

        if (!value)
            return 0;

        const timestamp = Date.parse(value);

        return Number.isNaN(timestamp)
            ? 0
            : timestamp;
    }

    /* ---------------------------------------------------------
       Category matching
       --------------------------------------------------------- */

    function matchesCategory(article, pageKey) {

        if (pageKey === "all")
            return true;

        const config = CATEGORY_CONFIG[pageKey];

        if (!config)
            return false;

        const category =
            String(article.category || "")
                .trim()
                .toLowerCase();

        return config.categories.includes(category);
    }

    /* ---------------------------------------------------------
       Find correct grid
       --------------------------------------------------------- */

    function getTargetGrid(pageKey) {

        const grids = {

            news:
                "newsGrid",

            agriculture:
                "agricultureGrid",

            "education-jobs":
                "educationJobsGrid",

            "government-schemes":
                "governmentSchemesGrid",

            history:
                "historyGrid",

            places:
                "placesGrid",

            "jalgaon-information":
                "jalgaonInformationGrid",

            blogs:
                "blogsGrid"
        };

        if (grids[pageKey]) {

            const element =
                document.getElementById(grids[pageKey]);

            if (element)
                return element;
        }

        return document.querySelector(".news-grid");
    }

    /* ---------------------------------------------------------
       Escape HTML
       --------------------------------------------------------- */

    function escapeHTML(value) {

        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    /* ---------------------------------------------------------
       Category icons
       --------------------------------------------------------- */

    function getCategoryIcon(category) {

        const value =
            String(category || "").toLowerCase();

        if (value.includes("agriculture"))
            return "🌱";

        if (
            value.includes("education") ||
            value.includes("job")
        )
            return "🎓";

        if (value.includes("government"))
            return "🏛️";

        if (value.includes("history"))
            return "🏛️";

        if (
            value.includes("tourism") ||
            value.includes("place")
        )
            return "📍";

        if (value.includes("blog"))
            return "✍️";

        if (value.includes("weather"))
            return "🌦️";

        return "📰";
    }

    /* ---------------------------------------------------------
       Render article card
       --------------------------------------------------------- */

    function renderArticle(article) {

        const image =
            escapeHTML(
                article.image || "jalgaon.jpg"
            );

        const title =
            escapeHTML(
                article.title || "Jalgaon Article"
            );

        const description =
            escapeHTML(
                article.description || ""
            );

        const category =
            escapeHTML(
                article.category || "Jalgaon"
            );

        const link =
            escapeHTML(
                article.link || "#"
            );

        return `
            <article class="news-card news-item">

                <img
                    src="${image}"
                    class="news-image"
                    alt="${title}"
                    loading="lazy"
                    onerror="this.style.display='none'"
                >

                <div class="news-content">

                    <span class="news-category">
                        ${getCategoryIcon(category)}
                        ${category}
                    </span>

                    <h3>${title}</h3>

                    <p>${description}</p>

                    <a
                        href="${link}"
                        class="read-more"
                    >
                        Read More →
                    </a>

                </div>

            </article>
        `;
    }

    /* ---------------------------------------------------------
       Load category articles
       --------------------------------------------------------- */

    function loadCategoryArticles() {

        const pageKey =
            getPageKey();

        const grid =
            getTargetGrid(pageKey);

        if (!grid)
            return;

        if (
            !Array.isArray(window.articles)
        ) {

            grid.innerHTML = `
                <div
                    style="
                        grid-column:1/-1;
                        text-align:center;
                        padding:40px;
                    "
                >
                    Articles unavailable.
                </div>
            `;

            return;
        }

        const filteredArticles =
            window.articles

                .filter(function (article) {

                    return (
                        article &&
                        matchesCategory(
                            article,
                            pageKey
                        )
                    );

                })

                .sort(function (a, b) {

                    return (
                        parseDate(b.date) -
                        parseDate(a.date)
                    );

                });

        /* -----------------------------------------------------
           No articles
           ----------------------------------------------------- */

        if (!filteredArticles.length) {

            grid.innerHTML = `
                <div
                    class="empty-message"
                    style="
                        grid-column:1/-1;
                        text-align:center;
                        padding:40px;
                    "
                >

                    <h3>
                        सध्या कोणतेही लेख उपलब्ध नाहीत.
                    </h3>

                    <p>
                        या विभागात नवीन माहिती
                        लवकरच प्रकाशित केली जाईल.
                    </p>

                </div>
            `;

            return;
        }

        /* -----------------------------------------------------
           Render
           ----------------------------------------------------- */

        grid.innerHTML =
            filteredArticles
                .map(renderArticle)
                .join("");
    }

    /* ---------------------------------------------------------
       Global functions
       --------------------------------------------------------- */

    window.loadCategoryArticles =
        loadCategoryArticles;

    window.getCategoryIcon =
        getCategoryIcon;

    /* ---------------------------------------------------------
       Start
       --------------------------------------------------------- */

    document.addEventListener(
        "DOMContentLoaded",
        loadCategoryArticles
    );

})();
