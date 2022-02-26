"use strict";
(function scopeWrapper($) {
    // Category Navigations
    populateCategoryNav();

    // Populate Category Navigation
    function populateCategoryNav() {
        let categoryInfo = window.categoryInfo[window.currentLanguage];
        let categoryFragment = document.createDocumentFragment();

        // Category Information iteration
        for (let i = 0, len = categoryInfo.length; i < len; i++) {
            let category = categoryInfo[i];
            // Category
            categoryFragment.appendChild(uploadCategoryNav(category));
        }

        document.getElementById('category-nav').appendChild(categoryFragment);
    }

    // Category Navigation
    function uploadCategoryNav(category) {
        let categoryDiv = document.createElement('div');
        categoryDiv.classList.add('category-item');

        let anchor = document.createElement('a');
        anchor.href = '/' + window.currentLanguage + category.dataUrl;
        anchor.innerText = category.categoryName;
        categoryDiv.appendChild(anchor);

        return categoryDiv;
    }
}(jQuery));