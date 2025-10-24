/*    Project 1

      Order Form Code
      Author: Dinesh Kumar Gummadavelli
      Date:   10/24/2025

      Filename: project1.js
 */


document.addEventListener("DOMContentLoaded", function () {
  var computeForm = document.getElementById("compute");
  var createForm = document.getElementById("create-account");

  if (computeForm) {
    computeForm.addEventListener("submit", function (evt) {
      var n1El = document.getElementById("num1");
      var n2El = document.getElementById("num2");


      n1El.setCustomValidity("");
      n2El.setCustomValidity("");

      var v1 = n1El.value;
      var v2 = n2El.value;

      var hasError = false;

      if (v1 === "") {
        n1El.setCustomValidity("Please enter Number1.");
        hasError = true;
      } else if (isNaN(parseFloat(v1))) {
        n1El.setCustomValidity("Number1 must be a number.");
        hasError = true;
      }

      if (v2 === "") {
        n2El.setCustomValidity("Please enter Number2.");
        hasError = true;
      } else if (isNaN(parseFloat(v2))) {
        n2El.setCustomValidity("Number2 must be a number.");
        hasError = true;
      }

      if (hasError) {
        evt.preventDefault();
        if (!n1El.checkValidity()) {
          n1El.reportValidity();
          n1El.focus();
        } else if (!n2El.checkValidity()) {
          n2El.reportValidity();
          n2El.focus();
        }
      }
    });
  }

  if (createForm) {
    createForm.setAttribute('novalidate', true);

    var emailEl = createForm.elements["email"];
    var passEl = createForm.elements["password"];
    var addrEl = createForm.elements["address"];
    var cityEl = createForm.elements["city"];
    var stateEl = createForm.elements["state"];
    var zipEl = createForm.elements["zip"];
    var agreeEl = createForm.elements["agree"];
    var memberBasic = document.getElementById("m-basic");
    var memberPremium = document.getElementById("m-premium");
    var memberVIP = document.getElementById("m-vip");


    emailEl.addEventListener("input", function() {
      emailEl.setCustomValidity("");
    });
    passEl.addEventListener("input", function() {
      passEl.setCustomValidity("");
    });
    addrEl.addEventListener("input", function() {
      addrEl.setCustomValidity("");
    });
    cityEl.addEventListener("input", function() {
      cityEl.setCustomValidity("");
    });
    stateEl.addEventListener("change", function() {
      stateEl.setCustomValidity("");
    });
    zipEl.addEventListener("input", function() {
      zipEl.setCustomValidity("");
    });
    agreeEl.addEventListener("change", function() {
      agreeEl.setCustomValidity("");
    });
    if (memberBasic) memberBasic.addEventListener("change", function() {
      memberBasic.setCustomValidity("");
    });
    if (memberPremium) memberPremium.addEventListener("change", function() {
      memberPremium.setCustomValidity("");
    });
    if (memberVIP) memberVIP.addEventListener("change", function() {
      memberVIP.setCustomValidity("");
    });

    createForm.addEventListener("submit", function (evt) {


      emailEl.setCustomValidity("");
      passEl.setCustomValidity("");
      addrEl.setCustomValidity("");
      cityEl.setCustomValidity("");
      stateEl.setCustomValidity("");
      zipEl.setCustomValidity("");
      agreeEl.setCustomValidity("");
      if (memberBasic) memberBasic.setCustomValidity("");
      if (memberPremium) memberPremium.setCustomValidity("");
      if (memberVIP) memberVIP.setCustomValidity("");

      var hasError = false;


      var emailVal = String(emailEl.value || "").trim();
      if (emailVal === "") {
        emailEl.setCustomValidity("Enter an email.");
        hasError = true;
      } else if (emailVal.indexOf("@") === -1) {
        emailEl.setCustomValidity("Please include an @ in the email address. '" + emailVal + "'is missing an '@'.");
        hasError = true;
      }


      var passVal = String(passEl.value || "");
      if (passVal.length < 4) {
        passEl.setCustomValidity("Password must be at least 4 characters.");
        hasError = true;
      }


      if (String(addrEl.value || "").trim() === "") {
        addrEl.setCustomValidity("Address is required.");
        hasError = true;
      }
      if (String(cityEl.value || "").trim() === "") {
        cityEl.setCustomValidity("City is required.");
        hasError = true;
      }


      if (!stateEl || stateEl.selectedIndex === 0) {
        stateEl.setCustomValidity("Please choose a state.");
        hasError = true;
      }


      var zipVal = String(zipEl.value || "").trim();
      if (zipVal.length !== 5 || isNaN(parseInt(zipVal, 10))) {
        zipEl.setCustomValidity("Zip must be 5 digits.");
        hasError = true;
      }


      if (!agreeEl.checked) {
        agreeEl.setCustomValidity("You must agree to the terms.");
        hasError = true;
      }

      var membershipChecked =
        (memberBasic && memberBasic.checked) ||
        (memberPremium && memberPremium.checked) ||
        (memberVIP && memberVIP.checked);
      if (!membershipChecked) {

        if (memberBasic) memberBasic.setCustomValidity("Select a membership.");
        if (memberPremium) memberPremium.setCustomValidity("Select a membership.");
        if (memberVIP) memberVIP.setCustomValidity("Select a membership.");
        hasError = true;
      }

      if (hasError) {
        evt.preventDefault();

        var controls = [
          emailEl,
          passEl,
          addrEl,
          cityEl,
          stateEl,
          zipEl,
          agreeEl,
          memberBasic,
          memberPremium,
          memberVIP,
        ];
        for (var i = 0; i < controls.length; i++) {
          var el = controls[i];
          if (el && el.willValidate && !el.checkValidity()) {
            el.reportValidity();
            if (typeof el.focus === "function") el.focus();
            break;
          }
        }
      }
    });
  }
});