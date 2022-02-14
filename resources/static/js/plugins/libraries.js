let locale = "en-US";
// Toast for mixin (Notification)
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

function splitElement(str, splitString) {
    if (includesStr(str, splitString)) {
        return isEmpty(str) ? str : str.split(splitString);
    }

    return str;
}


function lastElement(arr) {
    if (Array.isArray(arr)) {
        return isEmpty(arr) ? arr : arr[arr.length - 1];
    }
    return arr;
}

function includesStr(arr, val) {
    return isEmpty(arr) ? null : arr.includes(val);
}

function notIncludesStr(arr, val) {
    return !includesStr(arr, val);
}

function isEmpty(obj) {
    // Check if objext is a number or a boolean
    if (typeof (obj) == 'number' || typeof (obj) == 'boolean') return false;

    // Check if obj is null or undefined
    if (obj == null || obj === undefined) return true;

    // Check if the length of the obj is defined
    if (typeof (obj.length) != 'undefined') return obj.length == 0;

    // check if obj is a custom obj
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) return false;
    }

    // Check if obj is an element
    if (obj instanceof Element) return false;

    return true;
}

function isNotEmpty(obj) {
    return !isEmpty(obj);
}

//Format numbers in Indian Currency
function formatNumber(num, locale) {
    if (isEmpty(locale)) {
        locale = "en-US";
    }

    return num.toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function animateValue(element, start, end, prefix, duration) {
    // If start == end then return
    if (start == end) {
        // Set as text content
        if (isNotEmpty(prefix)) {
            element.textContent = prefix + formatNumber(end, locale);
        } else {
            element.textContent = end;
        }
        return;
    }

    // If different 
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));

    let timer = setInterval(function () {
        // If start == end then return
        if (current >= end) {
            clearInterval(timer);
        } else {
            // Incremenet current (append prefix)
            current += increment;
            // Set as text content
            if (isNotEmpty(prefix)) {
                element.textContent = prefix + formatNumber(current, locale);
            } else {
                element.textContent = current;
            }
        }
    }, stepTime);
}

// Replace HTML
function replaceHTML(el, html) {
    var oldEl = typeof el === "string" ? document.getElementById(el) : el;
    /*@cc_on // Pure innerHTML is slightly faster in IE
        oldEl.innerHTML = html;
        return oldEl;
    @*/
    var newEl = oldEl.cloneNode(false);
    newEl.innerHTML = html;
    oldEl.parentNode.replaceChild(newEl, oldEl);
    /* Since we just removed the old element from the DOM, return a reference
    to the new element, which can be used to restore variable references. */
    return newEl;
}

// Minimize the decimals to a set variable
function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

function formatLargeCurrencies(value) {

    if (value >= 1000000000) {
        value = (value / 1000000000) + 'B';
        return value;
    }

    if (value >= 1000000) {
        value = (value / 1000000) + 'M';
        return value;
    }

    if (value >= 1000) {
        value = (value / 1000) + 'k';
        return value;
    }

    return value;
}

function isEqual(obj1, obj2) {
    if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
        return true;
    }
    return false;
}

function groupByKey(xs, key) {
    return xs.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

function isNotEqual(obj1, obj2) {
    return !isEqual(obj1, obj2);
}

// Update the footer year
(function scopeWrapper($) {
    // Current Year
    document.getElementById('currentYear').innerText = new Date().getFullYear();
    // Mobile Menu Button
    document.getElementById('mobileMenuButton').addEventListener("click", function () {
        this.parentNode.classList.toggle('is-open');
    });
}(jQuery));
