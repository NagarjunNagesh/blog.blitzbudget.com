"use strict";
(function scopeWrapper($) {
    // Ask Us Directly
    document.getElementById("askUsDirectly").addEventListener("click", function (e) {
        // Show Sweet Alert
        Swal.fire({
            position: 'bottom-right',
            title: isNotEmpty(window.translationData) ? window.translationData.dynamic.askusdirectly : 'Ask Us Directly',
            html: askUsDirectly(),
            inputAttributes: {
                autocapitalize: 'on'
            },
            confirmButtonClass: 'btn btn-info btn-lg',
            confirmButtonText: isNotEmpty(window.translationData) ? window.translationData.dynamic.send : 'Send',
            showCloseButton: true,
            buttonsStyling: false
        }).then(function (result) {
            // If confirm button is clicked
            if (result.value) {
                // send Email
                let email = document.getElementById('emailIdAUD').value;
                let message = document.getElementById('askUsDirectlyText').value;
                let subject = isNotEmpty(window.translationData) ? window.translationData.dynamic.customersupport : "Customer Support: Requesting More Information 72 hours";
                sendEmailToSupport(email, message, subject);
            }

        });

        // Disable Confirm Password button 
        let confBBBtn = document.getElementsByClassName('swal2-confirm')[0];
        if (!confBBBtn.disabled) {
            confBBBtn.setAttribute('disabled', 'disabled');
        }

        // CHange Focus to Confirm Password
        document.getElementById('emailIdAUD').focus();
    });

    // HTML for ask us directly
    function askUsDirectly() {
        let askUsDirectlyDiv = document.createElement('div');
        askUsDirectlyDiv.classList = 'text-center';

        let labelEmail = document.createElement('label');
        labelEmail.classList = 'labelEmail text-left ml-5';
        labelEmail.innerText = 'Email';
        askUsDirectlyDiv.appendChild(labelEmail);

        let emailinput = document.createElement('input');
        emailinput.id = 'emailIdAUD';
        emailinput.setAttribute('type', 'email');
        emailinput.setAttribute('autocapitalize', 'off');
        emailinput.setAttribute('spellcheck', 'false');
        emailinput.setAttribute('autocorrect', 'off');
        emailinput.setAttribute('autocomplete', 'off');
        askUsDirectlyDiv.appendChild(emailinput);

        // Error Text
        let errorCPOld = document.createElement('div');
        errorCPOld.id = 'cpErrorDispUA';
        errorCPOld.classList = 'text-danger text-left small mb-2 noselect ml-5';
        askUsDirectlyDiv.appendChild(errorCPOld);

        let messageLabel = document.createElement('label');
        messageLabel.classList = 'labelEmail text-left ml-5';
        messageLabel.innerText = isNotEmpty(window.translationData) ? window.translationData.dynamic.message : 'Message';
        askUsDirectlyDiv.appendChild(messageLabel);

        let textArea = document.createElement('textarea');
        textArea.id = "askUsDirectlyText";
        textArea.classList = 'askUsDirectlyText';
        askUsDirectlyDiv.appendChild(textArea);

        // Error Text
        let errorTextArea = document.createElement('div');
        errorTextArea.id = 'textErrorDispUA';
        errorTextArea.classList = 'text-danger text-left small mb-2 noselect ml-5';
        askUsDirectlyDiv.appendChild(errorTextArea);

        return askUsDirectlyDiv;
    }

    // Email Id Key Up
    $(document).on('keyup', "#emailIdAUD", function (e) {

        let sendEmailBtn = document.getElementsByClassName('swal2-confirm')[0];
        let cpErrorDispUA = document.getElementById('cpErrorDispUA');
        let askUsDirectlyText = document.getElementById('askUsDirectlyText');
        let emailEnt = this.value;

        let keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            document.activeElement.blur();
            e.preventDefault();
            e.stopPropagation();
            // Focus the message Text Area
            askUsDirectlyText.focus();
            return false;
        }

        if (isEmpty(emailEnt) || !emailValidation.test(emailEnt)) {
            sendEmailBtn.setAttribute('disabled', 'disabled');
            return;
        }

        cpErrorDispUA.innerText = '';
        // Only after text area minimum validation is passed remove disbaled for button
        if (isNotEmpty(askUsDirectlyText.value) && askUsDirectlyText.value.length > 40) {
            sendEmailBtn.removeAttribute('disabled');
        }
    });

    // Email Id Focus Out
    $(document).on('focusout', "#emailIdAUD", function () {

        let sendEmailBtn = document.getElementsByClassName('swal2-confirm')[0];
        let cpErrorDispUA = document.getElementById('cpErrorDispUA');
        let emailEnt = this.value;

        if (isEmpty(emailEnt) || !emailValidation.test(emailEnt)) {
            cpErrorDispUA.innerText = isNotEmpty(window.translationData) ? window.translationData.dynamic.validemail : 'Please enter a valid email address.';
            sendEmailBtn.setAttribute('disabled', 'disabled');
            return;
        }

        cpErrorDispUA.innerText = '';

    });

    // ASk Us Directly test Key Up Listener
    $(document).on('keyup', "#askUsDirectlyText", function (e) {

        let sendEmailBtn = document.getElementsByClassName('swal2-confirm')[0];
        let textErrorDispUA = document.getElementById('textErrorDispUA');
        let emailEnt = document.getElementById('emailIdAUD').value;
        let textAreaEnt = this.value;

        if (isEmpty(textAreaEnt) || textAreaEnt.length < 40) {
            sendEmailBtn.setAttribute('disabled', 'disabled');
            return;
        }

        textErrorDispUA.innerText = '';
        // Only after email is vaidated remove disabled
        if (emailValidation.test(emailEnt)) {
            sendEmailBtn.removeAttribute('disabled');
        }
    });

    // Ask Us Directly test Focus Out Listener
    $(document).on('focusout', "#askUsDirectlyText", function () {

        let sendEmailBtn = document.getElementsByClassName('swal2-confirm')[0];
        let textErrorDispUA = document.getElementById('textErrorDispUA');
        let textAreaEnt = this.value;

        if (isEmpty(textAreaEnt) || textAreaEnt.length < 40) {
            textErrorDispUA.innerText = isNotEmpty(window.translationData) ? window.translationData.dynamic.validpassword : 'Please enter a minimum of 40 characters.';
            sendEmailBtn.setAttribute('disabled', 'disabled');
            return;
        }

        textErrorDispUA.innerText = '';

    });

    // Send Email to BlitzBudget Support
    function sendEmailToSupport(email, message, subject) {

        let values = JSON.stringify({
            "email": email,
            "message": message,
            "subject": subject
        });

        jQuery.ajax({
            url: api.invokeUrl + api.sendEmailUrl,
            type: 'POST',
            contentType: "application/json;charset=UTF-8",
            data: values,
            success: function (result) {
                Toast.fire({
                    icon: 'success',
                    title: isNotEmpty(window.translationData) ? window.translationData.dynamic.successemail : "Thanks for the email. We'll respond with in the next 72 hours!"
                });
            },
            error: function (thrownError) {
                Toast.fire({
                    icon: 'error',
                    title: isNotEmpty(window.translationData) ? window.translationData.dynamic.errorsendingemail : "Unable to send the email at the moment. Please try again!"
                });
            }
        });

    }
}(jQuery));
