"use strict";
(function scopeWrapper($) {
    const reForwardSlash = /\//g;

    // Retrieve Appropriate Information
    window.retrievePage = {
        retrieveAppropriateInformation: (anchorHref) => {
            // Add trailing slash at the end if not present
            if (anchorHref.charAt(anchorHref.length - 1) !== "/") {
                anchorHref = anchorHref + '/';
            }

            // If home page is selected then change classList
            if (((anchorHref || '').match(reForwardSlash) || []).length == 3) {
                // Detect if pushState is available
                if (window.history.pushState) {
                    window.history.pushState("", window.constants.titleName, anchorHref);
                }
                // Document Title for browser
                document.title = isNotEmpty(window.translationData) ? window.translationData.dynamic.title : window.constants.titleName;
                loadHomePage();

                return false;
            }

            // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded.Cross-browser supported.
            window.scrollTo(0, 0);
            // Switch to category nav
            document.getElementsByClassName('Hero')[0].classList.add('d-none');
            document.getElementsByClassName('HelpResult')[0].classList.add('d-none');
            document.getElementsByClassName('CategoryResult')[0].classList.remove('d-none');
            let articleTitle = document.getElementById('article-title');
            while (articleTitle.firstChild) {
                articleTitle.removeChild(articleTitle.firstChild);
            }
            let articleDescription = document.getElementById('article-description');
            while (articleDescription.firstChild) {
                articleDescription.removeChild(articleDescription.firstChild);
            }
            let articleBody = document.getElementById('article-body');
            while (articleBody.firstChild) {
                articleBody.removeChild(articleBody.firstChild);
            }
            articleBody.appendChild(window.retrievePage.buildMaterialSpinner());

            // Retrieve categories / articles
            jQuery.ajax({
                url: anchorHref + 'info.json',
                type: 'GET',
                success: function (result) {
                    // Detect if pushState is available
                    if (window.history.pushState) {
                        window.history.pushState(result, result.title, result.url);
                    }
                    // Document Title for browser
                    document.title = result.title;
                    window.loadPage(result);
                    return false;
                },
                error: function (result) {
                    Toast.fire({
                        icon: 'error',
                        title: isNotEmpty(window.translationData) ? window.translationData.dynamic.fetchurlerror : "Unable to fetch the requested url"
                    });
                    window.loadPage(result.responseJSON);
                }
            });
        },
        // Build Material Spinner
        buildMaterialSpinner: () => {
            let divContainer = document.createElement('div');
            divContainer.classList = 'm-auto h-eighteen-rem position-relative';

            // Add Material Spinner
            let divMaterialSpinner = document.createElement('div');
            divMaterialSpinner.classList = 'material-spinner m-auto position-absolute position-absolute-center';
            divContainer.appendChild(divMaterialSpinner);
            return divContainer;
        }
    }
}(jQuery));