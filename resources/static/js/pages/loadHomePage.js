// Load Home page
function loadHomePage() {
    let searchArticleDD = document.getElementById('searchArticleDD');

    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded.Cross-browser supported.
    window.scrollTo(0, 0);
    document.getElementsByClassName('HelpResult')[0].classList.remove('d-none');
    document.getElementsByClassName('Hero')[0].classList.remove('d-none');
    document.getElementsByClassName('CategoryResult')[0].classList.add('d-none');

    // FAQ populate the questions for search
    let faq = [];
    let categoryInformation = window.categoryInfo[window.currentLanguage];
    let gettingstartedtitle = isNotEmpty(window.translationData) ? window.translationData.dynamic.gettingstarted : 'Getting Started';
    let budgettitle = isNotEmpty(window.translationData) ? window.translationData.dynamic.budget : 'Budget';
    let transactionstitle = isNotEmpty(window.translationData) ? window.translationData.dynamic.transactions : 'Transactions';
    let goalstitle = isNotEmpty(window.translationData) ? window.translationData.dynamic.goals : 'Goals';
    let financialaccountstitle = isNotEmpty(window.translationData) ? window.translationData.dynamic.financialaccounts : 'Financial Accounts';
    let miscellaneoustitle = isNotEmpty(window.translationData) ? window.translationData.dynamic.miscellaneous : 'Miscellaneous';
    let articlesdescription = isNotEmpty(window.translationData) ? window.translationData.dynamic.articles : ' articles';
    for (let i = 0, len = categoryInformation.length; i < len; i++) {
        let categoryInfoItem = categoryInformation[i];
        let subCategoryArr = categoryInfoItem.subCategory;

        switch (categoryInfoItem.categoryName) {

            case gettingstartedtitle:
                document.getElementById('gettingStartedCount').innerText = subCategoryArr.length + articlesdescription;
                break;
            case budgettitle:
                document.getElementById('budgetCount').innerText = subCategoryArr.length + articlesdescription;
                break;
            case transactionstitle:
                document.getElementById('transactionsCount').innerText = subCategoryArr.length + articlesdescription;
                break;
            case goalstitle:
                document.getElementById('goalsCount').innerText = isEmpty(subCategoryArr) ? 0 + articlesdescription :
                    subCategoryArr.length + articlesdescription;
                break;
            case financialaccountstitle:
                document.getElementById('financialAccountsCount').innerText = subCategoryArr.length + articlesdescription;
                break;
            case miscellaneoustitle:
                document.getElementById('miscellaneousCount').innerText = subCategoryArr.length + articlesdescription;
                break;
            default:
                break;

        }

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
    document.getElementById('searchArticle').addEventListener('focusin', (event) => {
        searchArticleDD.classList.add('fadeInDown');
        searchArticleDD.classList.remove('fadeOut');
    });

    // Search Article focus out
    document.getElementById('searchArticle').addEventListener('focusout', (event) => {
        searchArticleDD.classList.add('fadeOut');
        searchArticleDD.classList.remove('fadeInDown');
    });

    // Dispatch click event
    let event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });

    document.getElementById("searchArticle").dispatchEvent(event);

}