"use strict";

const isDate = (date, datePattern) => {
  if (!datePattern.test(date)) {
    return false;
  }

  const dateParts = date.split("/");
  const month = parseInt(dateParts[0]);
  const day = parseInt(dateParts[1]);

  if (month < 1 || month > 12) {
    return false;
  }
  if (day > 31) {
    return false;
  }
  return true;
};

$(document).ready(() => {
  $("#submit").click(() => {
    $("span").text(""); // clear any previous error messages

    // get values entered by user
    const name = $("#name").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const password_confirm = $("#password_confirm").val();
    const phone = $("#phone").val();
    const zip = $("#zip").val();
    const dob = $("#dob").val();
    const country = $("#country").val();
    // regular expressions for validity testing
    const namePattern = /[^0-9]/;
    const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    const passwordPattern =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const zipPattern = /^\d{5}(-\d{4})?$/;
    const datePattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;

    // check user entries for validity
    let isValid = true;
    if (name === "" || !namePattern.test(name)) {
      isValid = false;
      $("#name").next().text("Please enter a valid name.");
    }
    if (email === "" || !emailPattern.test(email)) {
      isValid = false;
      $("#email").next().text("Please enter a valid email.");
    }
    if (password === "" || !passwordPattern.test(password)) {
      isValid = false;
      $("#password")
        .next()
        .text("Please atleast one upper,lower,digit and special character.");
    }
    if (password !== password_confirm) {
      isValid = false;
      $("#password_confirm").next().text("Please password must match");
    }
    if (phone === "" || !phonePattern.test(phone)) {
      isValid = false;
      $("#phone")
        .next()
        .text("Please enter a phone number in NNN-NNN-NNNN format.");
    }
    if (zip === "" || !zipPattern.test(zip)) {
      isValid = false;
      $("#zip").next().text("Please enter a valid zip code.");
    }
    if (dob === "" || !isDate(dob, datePattern)) {
      isValid = false;
      $("#dob").next().text("Please enter a valid date in MM/DD/YYYY format.");
    }
    if (country === "") {
      $("#country").next().text("Please select a country");
    }
    if (!$("#terms").is(":checked")) {
      $("#terms").next().text("Please accept the terms");
    }
    if (isValid) {
      $(".hide").show();
    }

    $("#name").focus();
  });
  $("#reset").click(() => {
    $(":text").val("");
    $(":selected").val("");
    $(":checkbox").val("");
    $(":password").val("");
    $(":input").next().text("");
    $(".hide").hide();
  });
  // set focus on initial load
  $("#name").focus();
});
