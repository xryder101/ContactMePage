/*Document ready event */
$(function () {
    /*Selects form element and induces .submit method as the action to be induced when a form is submitted.*/
    $("form").submit(function () {
        /*Calls validateForm function*/
        validateForm();
        /*if loop that executes submission confirmation if validateForm function returns to be true after being called*/
        if (validateForm() == true) {
            /*Call numValidation function*/
            numValidation();
            /*call alphaValidation function*/
            alphaValidation();
            /*If numValidation is false and only numerical values are found in the phone input the code below will execute*/
            if (numValidation() == false && alphaValidation() == false) {
                /*When submit event is fired induce a confirmation message to validate if you want to submit the form.*/
                var validate = confirm("Are you sure you want to submit?");
                /*If you select okay to submit the form the if loop will return as true and convey an alert message that the form has been submitted.*/
                if (validate == true) {
                    alert("Form Submitted");
                } else {
                    /*If you select cancel to submit the form the if loop will return as false and not submit the form.*/
                    return false;
                }
            } else {
                /*Return false */
                return false;
            }
        } else {
            /*Return false*/
            return false;
        }
    });
    /*Input validation to check if any of the forms inputs are empty*/
    function validateForm() {
        /*Assigns the values of each input based on the name that links each individual set of inputs into variables*/
        var formValidation1 = document.forms["myForm2"]["Name"].value;
        var formValidation2 = document.forms["myForm2"]["Phone"].value;
        var formValidation3 = document.forms["myForm2"]["Email"].value;
        var formValidation4 = document.forms["myForm2"]["Message"].value;
        /*If loop checks to see if any of the inputs are empty when submit button is clicked*/
        if (formValidation1 == "" || formValidation2 == "" || formValidation3 == "" || formValidation4 == "") {
            /*Induce an alert message if one of the inputs are empty*/
            alert("All fields must be filled before submission");
            /*Return false*/
            return false;
        } else {
            /*Return true */
            return true;
        }
    }
    /*input validation for numerical values in the phone field*/
    function numValidation() {
        /*Assigns the values of each input based on the name that links each individual set of inputs into variables*/
        var formValidation2 = document.forms["myForm2"]["Phone"].value;
        /*if loop to do a global search for non-digit characters in phone input field*/
        if (/\D/.test(formValidation2)) {
            /*If non-digits are found induce an alert message*/
            alert("Please only enter numeric characters in the phone field (Allowed input:0-9)");
            /*return true*/
            return true;
        } else {
            /*return false*/
            return false;
        }
    }

    function alphaValidation() {
        /*Assigns the values of each input based on the name that links each individual set of inputs into variables*/
        var formValidation1 = document.forms["myForm2"]["Name"].value;
        /*if loop to do a global search for digit characters in phone input field*/
        if (!/[A-z]/.test(formValidation1)) {
            /*If digits are found induce an alert message*/
            alert("Please only enter alphabetical characters in the name field (Allowed input:A-z)");
            /*return true*/
            return true;
        } else {
            /*return false*/
            return false;
        }
    }
});

/*Javascript code minified/compressed to optimize webpage speed via reducing file size*/
/*$(function(){$("form").submit(function(){validateForm();if(validateForm()==true){numValidation();alphaValidation();if(numValidation()==false&&alphaValidation()==false){var validate=confirm("Are you sure you want to submit?");if(validate==true){alert("Form Submitted");}else{return false;}}else{return false;}}else{return false;}});function validateForm(){var formValidation1=document.forms["myForm2"]["Name"].value;var formValidation2=document.forms["myForm2"]["Phone"].value;var formValidation3=document.forms["myForm2"]["Email"].value;var formValidation4=document.forms["myForm2"]["Message"].value;if(formValidation1==""||formValidation2==""||formValidation3==""||formValidation4==""){alert("All fields must be filled before submission");return false;}else{return true;}} function numValidation(){var formValidation2=document.forms["myForm2"]["Phone"].value;if(/D/.test(formValidation2)){alert("Please only enter numeric characters in the phone field (Allowed input:0-9)");return true;}else{return false;}} function alphaValidation(){var formValidation1=document.forms["myForm2"]["Name"].value;if(!/[A-z]/.test(formValidation1)){alert("Please only enter alphabetical characters in the name field (Allowed input:A-z)");return true;}else{return false;}}});*/