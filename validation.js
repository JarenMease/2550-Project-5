let phoneRegex = /^\d{10}$/;
let emailRegex = /[\w]*@[\w]*.{1}(com|gov|edu|io|net){1}/;
let zipCodeRegex = /(?<zip1>\d{5})([-]?(?<zip2>\d{4}))?(?<ERROR>.+)?/

const stateAbbreviations = [
  'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA',
  'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA',
  'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND',
  'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'
];


function initValidation(myform, successId) {

  let form = document.getElementById(myform);
  let successMsg = document.getElementById(successId);

  let inputs = form.querySelectorAll("input");
  inputs.forEach(input => {
      input.addEventListener("change", inputChanged);
  });

  form.addEventListener("submit", submitForm);
}

function inputChanged(ev) {
  let el = ev.currentTarget;
  validateForm();
  // Add 'was-validated' class to the current input element
  el.classList.add('was-validated');
  }
  

function submitForm(ev) {
  ev.preventDefault(); // Prevent the default form submission behavior
  ev.stopPropagation();

  validateForm();

  let form = ev.currentTarget;
  let inputs = form.querySelectorAll("input");
  inputs.forEach(input => {
      input.classList.add('was-validated');
  });

  if (!form.checkValidity()) {
      // Form is invalid
      return;
  }

  // Form is valid, hide form and show success message
  form.style.display = "none";
  let successMsg = document.getElementById('successMessage');
  successMsg.classList.add('successMsg') // Assuming successMsg is a global variable referencing the success message element
}

  

function validateForm() {

  checkRequired("first-name", "First Name is Required");
  checkRequired("last-name", "Last Name is Required");
  checkRequired("address", "Address is Required");
  checkRequired("city", "City is Required");
  
  if(checkRequired("state", "State is Required")){
    validateState("state", "Not a valid State, enter two digit code e.g., UT");
  }
 
  if (checkRequired("email", "Email Address is required")) {
    checkFormat("email", "email format is bad", emailRegex)
  }
  if (checkRequired("zip", "Zip Code is Required")) {
    checkFormat("zip", `malformed zip-code, please use either "#####", or "#####-#### format.`, zipCodeRegex)
  }
  if (checkRequired("phone", "Phone is required")) {
    checkFormat("phone", "phone format is bad", phoneRegex)
  }
  checkRequired("newspaper", "you must select at least one!");

}

function validateState(id, msg) {
    let el = document.getElementById(id);
    let value = el.value.toUpperCase(); // Convert value to uppercase
    let valid = stateAbbreviations.includes(value); // Check if value exists in stateAbbreviations array
    setElementValidity(id, valid, msg);
  }
  

function checkFormat(id, msg, regex) {
    let el = document.getElementById(id);
    let value = el.value;
    let valid = regex.test(value); // Test the element value against the regex
  
    setElementValidity(id, valid, msg); // Set the validity of the element
    return valid; // Return the validity status
  }
  

function checkRequired(id, message) {
    console.log(`Checking required for id: ${id}`); // Log the id being checked
    let el = document.getElementById(id);
    let valid = false;
    let type = el.type;
    console.log(`Element type: ${type}`); // Log the type of the element

    switch (type) {
        case 'text':
        case 'password':
            // Check if input has a value
            valid = el.value.trim() !== ''; // Non-empty value is considered valid
            console.log(`Text/password validity: ${valid}`); // Log the validity for text/password inputs
            break;

        case 'checkbox':
        case 'radio':
            // Check if checkbox or radio input is checked
            valid = el.checked;
            console.log(`Checkbox/radio validity: ${valid}`); // Log the validity for checkbox/radio inputs
            break;

        default:
            // Unsupported input type
            valid = false;
            console.log('Unsupported input type'); // Log when an unsupported input type is encountered
            break;
    }

    setElementValidity(id, valid, message); // Set the validity of the element
    console.log(`Final validity for id ${id}: ${valid}`); // Log the final validity status
    return valid; // Return the validity status
}
  

function setElementValidity(id, valid, message) {
    let el = document.getElementById(id);
  
    if (valid) {
      // Field is valid, remove any custom error message
      el.setCustomValidity('');
      
      // Remove error message from error div, if exists
      let errorDiv = document.getElementById(`${id}-error`);
      if (errorDiv) {
        errorDiv.textContent = ''; // Clear error message
      }
    } else {
      // Field is invalid, set custom error message
      el.setCustomValidity(message);
      
      // Insert error message in error div, if exists
      let errorDiv = document.getElementById(`${id}-error`);
      if (errorDiv) {
        errorDiv.textContent = message; // Display error message
      }
    }
  }

