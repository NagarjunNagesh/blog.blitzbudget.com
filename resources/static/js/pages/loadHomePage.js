// Load Home page
function loadHomePage() {
    let searchArticleDD = document.getElementById('searchArticleDD');

    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded.Cross-browser supported.
    window.scrollTo(0, 0);
    document.getElementsByClassName('blogSpace')[0].classList.remove('d-none');
    document.getElementsByClassName('Hero')[0].classList.remove('d-none');
    document.getElementsByClassName('CategoryResult')[0].classList.add('d-none');

    // FAQ populate the questions for search
    let faq = [];
    let categoryInformation = window.categoryInfo[window.currentLanguage];
    for (let i = 0, len = categoryInformation.length; i < len; i++) {
        let categoryInfoItem = categoryInformation[i];
        let subCategoryArr = categoryInfoItem.subCategory;

        // Is subcategory information is empty then continue
        if (isEmpty(subCategoryArr)) {
            continue;
        }

        for (let j = 0, length = subCategoryArr.length; j < length; j++) {
            // FAQ
            let subCategoryItem = subCategoryArr[j];
            let faqItem = {
                "title": subCategoryItem.title,
                "url": '/' + window.currentLanguage + categoryInfoItem.dataUrl.slice(0, -1) + subCategoryItem.url
            }
            faq.push(faqItem);
        }
    }

    /*initiate the autocomplete function on the "searchArticle" element, and pass along the countries array as possible autocomplete values:*/
    window.ac.autocomplete(document.getElementById("searchArticle"), faq, "searchArticleDD");

    // Search clear button
    document.getElementById('search-clear').addEventListener("click", function (e) {
        // Search article clear
        document.getElementById('searchArticle').value = '';
    });

    // Search Article focus in
    document.getElementById('searchArticle').addEventListener('focusin', () => {
        searchArticleDD.classList.add('fadeInDown');
        searchArticleDD.classList.remove('fadeOut');
    });

    // Search Article focus out
    document.getElementById('searchArticle').addEventListener('focusout', () => {
        searchArticleDD.classList.add('fadeOut');
        searchArticleDD.classList.remove('fadeInDown');
    });

    // Dispatch click event
    let event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });

    document.getElementById("searchArticle").dispatchEvent(event);

    let categoryInfo = window.categoryInfo[window.currentLanguage];
    let blogFragment = populateAllBlogs(categoryInfo);
    document.getElementById('blog-space').appendChild(blogFragment);
}