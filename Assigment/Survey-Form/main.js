const form = document.getElementById('surveyForm');
const submitButton = document.getElementById('submitButton');
const resetButton = document.getElementById('resetButton');
const popup = document.getElementById('popup');
const summaryContent = document.getElementById('summaryContent');
const closePopup = document.getElementById('closePopup');

submitButton.addEventListener('click', validateAndSubmit);
resetButton.addEventListener('click', resetForm);
closePopup.addEventListener('click', resetForm);

function validateAndSubmit() {
  // Validate first name
  const firstName = document.getElementById('firstName');
  if (firstName.value.trim() === '') {
    alert('Please enter your first name.');
    firstName.focus();
    return;
  }

  // Validate last name
  const lastName = document.getElementById('lastName');
  if (lastName.value.trim() === '') {
    alert('Please enter your last name.');
    lastName.focus();
    return;
  }

  // Validate date of birth
  const dateOfBirth = document.getElementById('dateOfBirth');
  if (!dateOfBirth.value) {
    alert('Please select your date of birth.');
    dateOfBirth.focus();
    return;
  }

  // Validate country selection
  const country = document.getElementById('country');
  if (country.value === '') {
    alert('Please select your country.');
    country.focus();
    return;
  }

  // Validate gender selection
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    alert('Please select your gender.');
    return;
  }

  // Validate profession
  const profession = document.getElementById('profession');
  if (profession.value.trim() === '') {
    alert('Please enter your profession.');
    profession.focus();
    return;
  }

  
const email = document.getElementById('email');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (!emailRegex.test(email.value)) {
  alert('Please enter a valid email address.');
  email.focus();
  return;
}


  
  const mobileNumber = document.getElementById('mobileNumber');
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobileNumber.value)) {
    alert('Please enter a valid 10-digit mobile number.');
    mobileNumber.focus();
    return;
  }

  
  submitForm();
}

function submitForm() {
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const dateOfBirth = document.getElementById('dateOfBirth').value;
  const country = document.getElementById('country').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const profession = document.getElementById('profession').value;
  const email = document.getElementById('email').value;
  const mobileNumber = document.getElementById('mobileNumber').value;
}
