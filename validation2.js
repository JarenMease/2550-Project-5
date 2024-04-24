// Validate form on submit
document.getElementById('myform').addEventListener('submit', function(event) {
    var form = event.target;
    var isValid = true;
    
    // Check first name
    var firstName = form.elements['first-name'];
    if (!firstName.checkValidity()) {
      isValid = false;
      firstName.parentNode.querySelector('.error-msg').innerHTML = firstName.validationMessage;
    } else {
      firstName.parentNode.querySelector('.error-msg').innerHTML = '';
    }
    
    // Check last name
    var lastName = form.elements['last-name'];
    if (!lastName.checkValidity()) {
      isValid = false;
      lastName.parentNode.querySelector('.error-msg').innerHTML = lastName.validationMessage;
    } else {
      lastName.parentNode.querySelector('.error-msg').innerHTML = '';
    }
    
    // Check address
    var address = form.elements['address'];
    if (!address.checkValidity()) {
      isValid = false;
      address.parentNode.querySelector('.error-msg').innerHTML = address.validationMessage;
    } else {
      address.parentNode.querySelector('.error-msg').innerHTML = '';
    }
    
    // Check city
    var city = form.elements['city'];
    if (!city.checkValidity()) {
      isValid = false;
      city.parentNode.querySelector('.error-msg').innerHTML = city.validationMessage;
    } else {
      city.parentNode.querySelector('.error-msg').innerHTML = '';
    }
    
    // Check state
    var state = form.elements['state'];
    if (!state.checkValidity()) {
      isValid = false;
      state.parentNode.querySelector('.error-msg').innerHTML = state.validationMessage;
    } else {
      state.parentNode.querySelector('.error-msg').innerHTML = '';
    }
    
    // Check zip
    var zip = form.elements['zip'];
    if (!zip.checkValidity()) {
      isValid = false;
      zip.parentNode.querySelector('.error-msg').innerHTML = zip.validationMessage;
    } else {
      zip.parentNode.querySelector('.error-msg').innerHTML = '';
    }
    
    // Check cell phone
    var cellPhone = form.elements['cell-phone'];
    if (!cellPhone.checkValidity()) {
      isValid = false;
      cellPhone.parentNode.querySelector('.error-msg').innerHTML = cellPhone.validationMessage;
    } else {
      cellPhone.parentNode.querySelector('.error-msg').innerHTML = '';
    }
    
    // Check email
    var email = form.elements['email'];
    if (!email.checkValidity()) {
      isValid = false;
      email.parentNode.querySelector('.error-msg').innerHTML = email.validationMessage;
    } else {
      email.parentNode.querySelector('.error-msg').innerHTML = '';
    }
    
    // Check how found
    var howFound = form.elements['how-found'];
    if (!howFound.checkValidity()) {
      isValid = false;
      howFound.parentNode.querySelector('.error-msg').innerHTML = howFound.validationMessage;
    } else {
      howFound.parentNode.querySelector('.error-msg').innerHTML = '';
    }
    
    if (!isValid) {
      event.preventDefault();
    }
  });