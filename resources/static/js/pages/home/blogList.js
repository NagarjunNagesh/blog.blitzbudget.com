function populateAllBlogs(categoryInfo) {
    let documentFragment = document.createDocumentFragment();

    for (let i = 0, len = categoryInfo.length; i < len; i++) {
        let category = categoryInfo[i];
        let categoryrUrl = category.dataUrl;
        let subCategoryNav = category.subCategory;

        if (isEmpty(subCategoryNav)) {
            return subCategoryDiv;
        }

        for (let j = 0, length = subCategoryNav.length; j < length; j++) {
            let subCategoryNavItem = subCategoryNav[j];
            let column = document.createElement('div');
            column.classList = 'col-12 col-md-6 col-lg-6 text-animation fadeInUp';

            let anchor = document.createElement('a');
            anchor.href = '/' + window.currentLanguage + categoryrUrl.slice(0, -1) + subCategoryNavItem.url;
            anchor.classList = 'category mb-5';

            let image = document.createElement('img');
            image.src = subCategoryNavItem.imageUrl;
            image.classList = 'w-100';
            anchor.appendChild(image);

            let heading = document.createElement('h4');
            heading.classList = 'headerResult';
            heading.textContent = subCategoryNavItem.title;
            anchor.appendChild(heading);

            column.appendChild(anchor);
            documentFragment.appendChild(column);
        }
    }

    return documentFragment;
}