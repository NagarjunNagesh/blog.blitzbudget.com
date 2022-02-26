(function scopeWrapper($) {
    // Load the page
    window.loadPage = (result) => {
        // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded.Cross-browser supported.
        window.scrollTo(0, 0);
        // Switch to category nav
        document.getElementsByClassName('Hero')[0].classList.add('d-none');
        document.getElementsByClassName('HelpResult')[0].classList.add('d-none');
        document.getElementsByClassName('CategoryResult')[0].classList.remove('d-none');

        // Check if subcategory
        if (result.subcategoryPresent) {
            // Populate article information
            populateSubCategoryInfo(result);
            // Make subcategory active
            makeSubCategoryActive(result.url);
        } else {
            // Populate article information
            populateArticleInfo(result);
            // Make subcategory active
            if (isNotEmpty(result.breadcrumb[1])) makeSubCategoryActive(result.breadcrumb[1].crumbUrl);
        }

    }

    // Make Subcategory Active
    function makeSubCategoryActive(urlToMatch) {
        let categoryItems = document.getElementsByClassName('category-item');
        for (let i = 0, len = categoryItems.length; i < len; i++) {
            let categoryItem = categoryItems[i];
            let anchorItem = categoryItem.lastElementChild;
            if (includesStr(anchorItem.href, urlToMatch)) {
                anchorItem.classList = 'active';
            }
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
        let subCategoryDiv = document.createDocumentFragment();
        let subCategoryNav = category.subCategory;

        if (isEmpty(subCategoryNav)) {
            return subCategoryDiv;
        }

        let ul = document.createElement('ul');
        ul.classList.add('sub-category-list');

        for (let i = 0, len = subCategoryNav.length; i < len; i++) {
            let subCategoryNavItem = subCategoryNav[i];
            let li = document.createElement('li');
            li.classList.add('sub-category-li');

            let articleIcon = document.createElement('i');
            articleIcon.classList = 'material-icons align-middle';
            articleIcon.innerText = 'assignment';
            li.appendChild(articleIcon);

            let anchorArticle = document.createElement('a');
            anchorArticle.classList.add('sub-category-link');
            // If the category url contains the below url then
            // Add the url directly without adding the language
            anchorHref = subCategoryNavItem.url;
            if (anchorHref.indexOf("http://" + window.constants.applicationSite) == 0 ||
                anchorHref.indexOf("https://" + window.constants.applicationSite) == 0 ||
                anchorHref.indexOf("http://" + window.constants.homeSite) == 0 ||
                anchorHref.indexOf("https://" + window.constants.homeSite) == 0 ||
                anchorHref.indexOf("http://" + window.constants.homeSiteWithoutPrefix) == 0 ||
                anchorHref.indexOf("https://" + window.constants.homeSiteWithoutPrefix) == 0) {
                anchorArticle.href = anchorHref;
                // Open in a new tab
                anchorArticle.target = "_blank";
            } else {
                anchorArticle.href = '/' + window.currentLanguage + category.dataUrl + anchorHref.slice(1);
            }
            anchorArticle.innerText = subCategoryNavItem.title;
            li.appendChild(anchorArticle);
            ul.appendChild(li);
        }

        subCategoryDiv.appendChild(ul);
        return subCategoryDiv;
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