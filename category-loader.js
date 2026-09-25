/* =========================================
   JALGAON ZONE - CATEGORY ARTICLE LOADER
========================================= */

function getPageCategory() {

    const page = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    if (page === "news.html") {
        return "news";
    }

    if (page === "agriculture.html") {
        return "agriculture";
    }

    if (page === "history.html") {
        return "history";
    }

    if (page === "places.html") {
        return "places";
    }

    if (page === "blogs.html") {
        return "blogs";
    }

    return "all";
}


/* =========================================
   CATEGORY MAPPING
========================================= */

function matchesCategory(article, pageCategory) {

    const category =
        (article.category || "").toLowerCase().trim();


    if (pageCategory === "all") {
        return true;
    }


    /* NEWS */

    if (pageCategory === "news") {

        return (
            category === "jalgaon news" ||
            category === "jalgaon city" ||
            category === "weather" ||
            category === "government schemes" ||
            category === "education & jobs"
        );

    }


    /* AGRICULTURE */

    if (pageCategory === "agriculture") {

        return category === "agriculture";

    }


    /* HISTORY */

    if (pageCategory === "history") {

        return (
            category === "history" ||
            category === "history & tourism"
        );

    }


    /* PLACES */

    if (pageCategory === "places") {

        return (
            category === "places" ||
            category === "tourism"
        );

    }


    /* BLOGS */

    if (pageCategory === "blogs") {

        return (
            category === "blog" ||
            category === "blogs"
        );

    }


    return false;
}


/* =========================================
   LOAD ARTICLES
========================================= */

function loadCategoryArticles() {

    const grid =
        document.querySelector(".news-grid");


    if (!grid) {
        return;
    }


    grid.innerHTML = "";


    if (
        typeof articles === "undefined" ||
        !Array.isArray(articles)
    ) {

        console.error(
            "articles-data.js not loaded"
        );

        return;

    }


    const pageCategory =
        getPageCategory();


    const filteredArticles =
        articles.filter(function(article) {

            return matchesCategory(
                article,
                pageCategory
            );

        });


    /* =====================================
       NO ARTICLES
    ===================================== */

    if (filteredArticles.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:50px 20px;
                background:white;
                border-radius:20px;
            ">
                <h3>सध्या कोणतेही लेख उपलब्ध नाहीत.</h3>
                <p style="color:#777;margin-top:8px;">
                    या विभागात नवीन माहिती लवकरच प्रकाशित केली जाईल.
                </p>
            </div>
        `;

        return;

    }


    /* =====================================
       CREATE CARDS
    ===================================== */

    filteredArticles.forEach(function(article) {

        const card =
            document.createElement("article");


        card.className =
            "news-card news-item";


        card.dataset.search = (

            (article.title || "") +
            " " +
            (article.category || "") +
            " " +
            (article.description || "")

        ).toLowerCase();


        card.innerHTML = `

            <img
                src="${article.image || "jalgaon.jpg"}"
                class="news-image"
                alt="${article.title || ""}"
                onerror="this.src='jalgaon.jpg'"
            >

            <div class="news-content">

                <span class="news-category">

                    ${getCategoryIcon(article.category)}

                    ${article.category || "Jalgaon"}

                </span>


                <h3>
                    ${article.title || ""}
                </h3>


                <p>
                    ${article.description || ""}
                </p>


                <a
                    href="${article.link}"
                    class="read-more"
                >
                    Read More →
                </a>

            </div>

        `;


        grid.appendChild(card);

    });

}


/* =========================================
   CATEGORY ICON
========================================= */

function getCategoryIcon(category) {

    const value =
        (category || "").toLowerCase();


    if (
        value.includes("agriculture")
    ) {
        return "🌱";
    }


    if (
        value.includes("history")
    ) {
        return "🏛️";
    }


    if (
        value.includes("tourism") ||
        value.includes("place")
    ) {
        return "📍";
    }


    if (
        value.includes("education") ||
        value.includes("job")
    ) {
        return "🎓";
    }


    if (
        value.includes("government")
    ) {
        return "🏛️";
    }


    if (
        value.includes("blog")
    ) {
        return "✍️";
    }


    if (
        value.includes("weather")
    ) {
        return "🌦️";
    }


    return "📰";
}


/* =========================================
   START
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadCategoryArticles();

    }
);
