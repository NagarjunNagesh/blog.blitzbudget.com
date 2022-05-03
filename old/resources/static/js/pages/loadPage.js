(function scopeWrapper($) {
    // Load the page
    window.loadPage = (result) => {
        // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded.Cross-browser supported.
        window.scrollTo(0, 0);
        // Switch to category nav
        document.getElementsByClassName('Hero')[0].classList.add('d-none');
        document.getElementsByClassName('blogSpace')[0].classList.add('d-none');
        document.getElementsByClassName('CategoryResult')[0].classList.remove('d-none');

        // Check if subcategory
        if (result.subcategoryPresent) {
            // Populate article information
            populateSubCategoryInfo(result);
        } else {
            // Populate article information
            populateArticleInfo(result);
            // Make subcategory active
            if (isNotEmpty(result.breadcrumb[1])) makeSubCategoryActive(result.breadcrumb[1].crumbUrl);
        }

    }

    // Populate Sub Category Info
    function populateSubCategoryInfo(result) {
        let title = result.title;
        let categoryInfo = window.categoryInfo[window.currentLanguage];

        // Category Information iteration
        for (let i = 0, len = categoryInfo.length; i < len; i++) {
            let category = categoryInfo[i];
            if (isEqual(category.categoryName, title)) {
                // Update body
                document.getElementById('article-title').innerText = category.categoryName;
                document.getElementById('article-description').innerText = category.description;
                let bcEl = document.getElementById('breadcrumb');
                while (bcEl.firstChild) {
                    bcEl.removeChild(bcEl.firstChild);
                }
                bcEl.appendChild(populateBreadcrumb(result));
                // Remove article body
                let articleBody = document.getElementById('article-body');
                while (articleBody.firstChild) {
                    articleBody.removeChild(articleBody.firstChild);
                }

                articleBody.appendChild(populateSubCategory(category));
                return;
            }
        }
    }

    // Populate sub category information
    function populateSubCategory(category) {
        let categoryInfo = [category];
        let row = document.createElement('div');
        row.classList = 'row';
        let blogFragment = populateAllBlogs(categoryInfo);
        row.appendChild(blogFragment);
        return row;
    }

    // Populate the breadcrumb
    function populateBreadcrumb(result) {
        let breadcrumbDiv = document.createDocumentFragment();
        let breadcrumbSC = result.breadcrumb;

        if (isEmpty(breadcrumbSC)) {
            return breadcrumbDiv;
        }

        // Bread crumb 0
        let breadcrumbAnchor = breadcrumbSC[0];
        let anchorZero = document.createElement('a');
        anchorZero.href = breadcrumbAnchor.crumbUrl;
        anchorZero.classList.add('crumbAnchor');
        anchorZero.innerText = breadcrumbAnchor.crumbTitle;
        breadcrumbDiv.appendChild(anchorZero);

        for (let i = 1, len = breadcrumbSC.length; i < len; i++) {
            let span = document.createElement('span');
            span.classList.add('nextCrumb');
            span.innerText = '>';
            breadcrumbDiv.appendChild(span);

            let breadcrumbAnchor = breadcrumbSC[i];
            let anchorOther = document.createElement('a');
            anchorOther.classList.add('crumbAnchor');
            anchorOther.href = '/' + window.currentLanguage + breadcrumbAnchor.crumbUrl;
            anchorOther.innerText = breadcrumbAnchor.crumbTitle;
            breadcrumbDiv.appendChild(anchorOther);
        }

        // Upload the category
        let span = document.createElement('span');
        span.classList.add('nextCrumb');
        span.innerText = '>';
        breadcrumbDiv.appendChild(span);

        // Bread crumb last
        let anchorLast = document.createElement('a');
        anchorLast.href = '/' + window.currentLanguage + result.url;
        anchorLast.classList.add('crumbAnchor');
        anchorLast.innerText = result.title;
        breadcrumbDiv.appendChild(anchorLast);

        return breadcrumbDiv;
    }

    // Populate Article Information
    function populateArticleInfo(result) {
        // Update body
        document.getElementById('article-title').innerText = result.title;
        document.getElementById('article-description').innerText = '';
        let bcEl = document.getElementById('breadcrumb');
        while (bcEl.firstChild) {
            bcEl.removeChild(bcEl.firstChild);
        }
        bcEl.appendChild(populateBreadcrumb(result));
        // Remove article body
        let articleBody = document.getElementById('article-body');
        while (articleBody.firstChild) {
            articleBody.removeChild(articleBody.firstChild);
        }

        articleBody.appendChild(populateArticle(result.content));
    }

    // Populate Article
    function populateArticle(content) {
        let articleDiv = document.createDocumentFragment();

        if (isEmpty(content)) {
            return articleDiv;
        }

        for (let i = 0, len = content.length; i < len; i++) {
            let contentItem = content[i];
            let tag = document.createElement(contentItem.tag);

            // Populate innerHTML
            if (isNotEmpty(contentItem.html)) {
                tag.innerHTML = contentItem.html;
            }

            // Add class list
            if (isNotEmpty(contentItem.classInfo)) {
                tag.classList = contentItem.classInfo;
            }

            // Add src
            if (isNotEmpty(contentItem.srcUrl)) {
                tag.src = contentItem.srcUrl;
            }

            articleDiv.appendChild(tag);
        }
        return articleDiv;
    }
}(jQuery));