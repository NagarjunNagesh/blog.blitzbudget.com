"use strict";
(function scopeWrapper($) {
    // On click a tag then
    $(".landing-page").on("click", "a", function () {
        let anchorHref = this.href;
        if (anchorHref.indexOf("http://" + window.constants.applicationSite) == 0 ||
            anchorHref.indexOf("https://" + window.constants.applicationSite) == 0 ||
            anchorHref.indexOf("http://" + window.constants.homeSite) == 0 ||
            anchorHref.indexOf("https://" + window.constants.homeSite) == 0 ||
            anchorHref.indexOf("http://" + window.constants.homeSiteWithoutPrefix) == 0 ||
            anchorHref.indexOf("https://" + window.constants.homeSiteWithoutPrefix) == 0) {
            return true;
        }

        // Remove other active classes
        $('.category-item .active').removeClass(window.constants.classLists.active);
        // Add classlist as active for category item
        let parentElement = this.parentNode;
        if (isNotEmpty(parentElement) &&
            isNotEmpty(parentElement.classList) &&
            parentElement.classList.contains('category-item')) {
            // Add active class
            this.classList = window.constants.classLists.active;
        }

        window.retrievePage.retrieveAppropriateInformation(anchorHref);

        return false;
    });

    // Load the appropriate page after uer hits the URL
    window.retrievePage.retrieveAppropriateInformation(window.location.href);

}(jQuery));