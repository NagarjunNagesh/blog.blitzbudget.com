"use strict";
(function scopeWrapper($) {

    // On click Back / forward button move pages
    window.onpopstate = function (event) {
        let state = '';
        // this contains the state data from `pustState`. Use it to decide what to change the page back to.
        if (event.state) {
            state = event.state;
        }

        if (isEmpty(state)) {
            loadHomePage();
            return;
        }

        // Load the page if state is not empty
        window.loadPage(state);
    }
}(jQuery));